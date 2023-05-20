import { NextFunction, Request, Response } from 'express';
import { BaseController } from "./base.controller";

export class AppController extends BaseController {

    public async index(req: Request, res: Response, next: NextFunction) {

        res.status(200).send({ message: "ok", data: "Uptech Api Toan nguyen" });
    }
}
