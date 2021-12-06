"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_js_1 = require("../utils/index.js");
var MeasurementResult;
(function (MeasurementResult) {
    MeasurementResult["increased"] = "increased";
    MeasurementResult["decreased"] = "decreased";
})(MeasurementResult || (MeasurementResult = {}));
var input = (0, index_js_1.readInputAsArray)(1);
var checkDepthChange = function (previousMeasure, newMesaure) {
    return newMesaure - previousMeasure > 0
        ? MeasurementResult.increased
        : MeasurementResult.decreased;
};
var countTimesDepthIncrease = function (measurementsInput) {
    return measurementsInput
        .map(function (m, index, arr) { return checkDepthChange(+m, +arr[index + 1]); })
        .filter(function (m) { return m === "increased"; }).length;
};
console.log(countTimesDepthIncrease(input));
// refactor
// tests
