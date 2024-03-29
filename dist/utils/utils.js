"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodoschema = exports.createTodoSchema = exports.loginUserSchema = exports.options = exports.registerUserSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.registerUserSchema = joi_1.default.object().keys({
    email: joi_1.default.string().trim().lowercase().required(),
    firstName: joi_1.default.string().required(),
    phone: joi_1.default.string().required(),
    password: joi_1.default.string().min(3).regex(/^[a-zA-z0-9]{3,30}$/).required(),
    confirm_password: joi_1.default.any().equal(joi_1.default.ref('password')).required()
        .label('Confirm password').messages({ 'any.only': '{{#label}} does not match' })
});
exports.options = {
    abortEarly: false,
    errors: {
        wrap: {
            label: ''
        }
    }
};
exports.loginUserSchema = joi_1.default.object().keys({
    email: joi_1.default.string().trim().lowercase().required(),
    password: joi_1.default.string().min(3).regex(/^[a-zA-z0-9]{3,30}$/).required(),
});
exports.createTodoSchema = joi_1.default.object().keys({
    description: joi_1.default.string().required(),
    completed: joi_1.default.boolean().required(),
});
exports.updateTodoschema = joi_1.default.object().keys({
    completed: joi_1.default.boolean().required(),
});
