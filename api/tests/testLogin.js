"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require("axios");
const API_URL = process.env.API_BASE_URL || "http://localhost:6900/api/v1";
const testLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { body, files, headers } = req;
    const requestURL = req.originalUrl.split("v1")[1];
    console.log(body);
    const newHeaders = {
        "Content-Type": headers["content-type"],
        authorization: headers === null || headers === void 0 ? void 0 : headers.authorization,
    };
    try {
        const responseFromApi = yield axios.post(API_URL + requestURL, body, {
            headers: newHeaders,
        });
        const dataFromApi = yield (responseFromApi === null || responseFromApi === void 0 ? void 0 : responseFromApi.data);
        console.log(dataFromApi);
        return res.status(200).json(dataFromApi);
    }
    catch (error) {
        console.log("error");
        next(error);
    }
});
module.exports = testLogin;
//# sourceMappingURL=testLogin.js.map