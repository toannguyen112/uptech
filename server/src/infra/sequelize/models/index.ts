import * as fs from "fs";
import * as path from "path";
import * as Sequelize from "sequelize";

import config from "../config/config";
let inflection = require("inflection");

const sequelize = config.connection;

// turns base_user => BaseUser
function toCamelCase(str) {
    const _ = str.indexOf("_");
    if (~_) {
        return toCamelCase(
            str.substring(0, _) +
            str
                .substring(_ + 1)
                .substring(0, 1)
                .toUpperCase() +
            str.substring(_ + 2),
        );
    } else {
        return str.substring(0, 1).toUpperCase() + str.substring(1);
    }
}

let models: any = {};
let modelsLoaded = false;

const createModels = () => {
    if (modelsLoaded) return models;

    // Get all models
    const modelsList = fs
        .readdirSync(path.resolve(__dirname, "./"))
        .filter((t) => (~t.indexOf(".ts") || ~t.indexOf(".js")) && !~t.indexOf("index") && !~t.indexOf(".map"))
        .map((model) => {
            return require(path.join(__dirname + "/" + model))(sequelize, Sequelize.DataTypes);
        });

    // Camel case the models
    for (let i = 0; i < modelsList.length; i++) {
        let modelName = toCamelCase(modelsList[i].name);
        modelName = inflection.classify(modelsList[i].name);
        models[modelName] = modelsList[i];
    }

    // Create the relationships for the models;
    Object.keys(models).forEach((modelName) => {
        if (models[modelName].associate) {
            models[modelName].associate(models);
        }
    });

    models["sequelize"] = sequelize;
    models["Sequelize"] = Sequelize;

    modelsLoaded = true;

    return models;
};

export default createModels();

export { createModels };
