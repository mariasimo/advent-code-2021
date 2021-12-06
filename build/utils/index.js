"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readInputAsArray = exports.readInput = void 0;
var fs_1 = require("fs");
var readInput = function (dayNumber) {
    var path = "./src/day".concat(dayNumber, "/input");
    var input = (0, fs_1.readFileSync)(path, "utf8");
    return input;
};
exports.readInput = readInput;
var readInputAsArray = function (dayNumber) {
    var input = (0, exports.readInput)(dayNumber);
    return input.split("\n");
};
exports.readInputAsArray = readInputAsArray;
