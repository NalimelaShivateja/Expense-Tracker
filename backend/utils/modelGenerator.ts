import { Schema, model, Document, SchemaOptions } from "mongoose";

const generateModel = <T extends Document>(modelName: string, schema: Record<string, any>, options: SchemaOptions = {}) => {
    const modelSchema = new Schema(schema, options)
    return model<T>(modelName, modelSchema)
}

export default generateModel;