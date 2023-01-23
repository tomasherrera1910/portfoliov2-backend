"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectMap = void 0;
// this function is for delete fields with value '' because is not necessary edit them
function ObjectMap(object) {
    const newObject = {};
    for (const [key, value] of Object.entries(object)) {
        if (value !== '') {
            newObject[key] = value;
        }
    }
    return newObject;
}
exports.ObjectMap = ObjectMap;
