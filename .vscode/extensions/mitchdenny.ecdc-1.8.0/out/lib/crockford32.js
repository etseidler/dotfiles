"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enc = require('encode32');
class CrockfordBase32ToIntegerTransformer {
    get label() {
        return 'Crockford Base32 to Integer';
    }
    get description() {
        return this.label;
    }
    check(input) {
        return true;
    }
    transform(input) {
        let result = enc.decode32(input);
        return String(result);
    }
}
exports.CrockfordBase32ToIntegerTransformer = CrockfordBase32ToIntegerTransformer;
class IntegerToCrockfordBase32Transformer {
    get label() {
        return 'Integer to Crockford Base32';
    }
    get description() {
        return this.label;
    }
    check(input) {
        return true;
    }
    transform(input) {
        let inputAsInteger = Number.parseInt(input);
        return enc.encode32(inputAsInteger);
    }
}
exports.IntegerToCrockfordBase32Transformer = IntegerToCrockfordBase32Transformer;
//# sourceMappingURL=crockford32.js.map