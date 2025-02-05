"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var escape = require('unicode-escape');
class StringToUnicodeTransformer {
    get label() {
        return 'String to Unicode';
    }
    get description() {
        return this.label;
    }
    check(input) {
        return true;
    }
    transform(input) {
        return escape(input);
    }
}
exports.StringToUnicodeTransformer = StringToUnicodeTransformer;
class UnicodeToStringTransformer {
    get label() {
        return "Unicode to String";
    }
    get description() {
        return this.label;
    }
    check(input) {
        return true;
    }
    transform(input) {
        return eval('("' + input + '")');
    }
}
exports.UnicodeToStringTransformer = UnicodeToStringTransformer;
//# sourceMappingURL=unicode.js.map