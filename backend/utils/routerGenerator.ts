import express, { RequestHandler } from "express";
import { RouteTypeEnum, RouteTypeEnumDisplayNames } from "../enums/RouterType.enum";

const router = express.Router();

type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

const generateRoute = (routeType: RouteTypeEnum, path: string, ...handlers: RequestHandler[]) => {
    router[RouteTypeEnumDisplayNames[routeType] as HttpMethod](path, ...handlers)
}

export default generateRoute;