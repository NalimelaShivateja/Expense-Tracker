export enum RouteTypeEnum {
    GET = 1,
    PUT,
    POST,
    PATCH,
    DELETE
}

export const RouteTypeEnumDisplayNames: Record<RouteTypeEnum, string> = {
    [RouteTypeEnum.GET]: "get",
    [RouteTypeEnum.PUT]: "put",
    [RouteTypeEnum.POST]: "post",
    [RouteTypeEnum.PATCH]: "patch",
    [RouteTypeEnum.DELETE]: "delete"
};