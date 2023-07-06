import express, { Application } from "express";
import mongoose from "mongoose";
import compression from "compression";
import cors from "cors";
import morgan from "morgan";
import helmet from 'helmet';
import Controller from "@/utils/interfaces/controller.interfaces";
import ErrorMiddleware from "@/middleware/error.middleware";

class App {
  public express: Application;
  public port: number;

  constructor(controllers: Controller[], port: number) {
    this.express = express();
    this.port = port;

    this.initialiseDatabaseConnection();
    this.initialiseMiddleware();
    this.initialiseControllers(controllers);
    this.initialiseErrorHandlings();
  }

  private initialiseMiddleware(): void {
    this.express.use(helmet());
    this.express.use(cors());
    this.express.use(morgan('dev'));
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended : false }));
    this.express.use(compression())
  }

  private initialiseControllers(controllers : Controller[]) : void {
    controllers.forEach((controller : Controller) => {
        this.express.use('/api', controller.router)
    })
  }

  private initialiseErrorHandling() : void{
    this.express.use(ErrorMiddleware())
  }
}
