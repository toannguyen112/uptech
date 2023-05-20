
import { Router } from "express";
import { Routes } from "../interface/routes.interface";
import { AppController } from "../modules/controllers/app.controller";

export class AppRoute implements Routes {
    public path = '/';
    public router = Router();
    public app = new AppController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.app.index);
    }
}