"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JsonByteArrayToHexStringTransformer {
    get label() {
        return 'JSON Byte Array to Hex String';
    }
    get description() {
        return this.label;
    }
    check(input) {
        let parsedInput = JSON.parse(input);
        if (!Array.isArray(parsedInput))
            return false;
        for (let i = 0; i < parsedInput.length; i++) {
            let element = parsedInput[i];
            if (!Number.isInteger(element))
                return false;
            if (element < 0 || element > 255)
                return false;
        }
        return true;
    }
    transform(input) {
        let parsedInput = JSON.parse(input);
        let output = '';
        for (let i = 0; i < parsedInput.length; i++) {
            let element = parsedInput[i];
            let hexElement = element.toString(16).padStart(2, '0');
            output += hexElement;
        }
        return output;
    }
}
exports.JsonByteArrayToHexStringTransformer = JsonByteArrayToHexStringTransformer;
//# sourceMappingURL=hex.js.map