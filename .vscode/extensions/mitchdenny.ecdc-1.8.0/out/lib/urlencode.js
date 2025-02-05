"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StringToEncodedUrlTransformer {
    get label() {
        return 'String to Encoded Url';
    }
    get description() {
        return this.label;
    }
    check(input) {
        return true;
    }
    transform(input) {
        const output = encodeURIComponent(input);
        return output;
    }
}
exports.StringToEncodedUrlTransformer = StringToEncodedUrlTransformer;
class EncodedUrlToStringTransformer {
    get label() {
        return "Encoded Url to String";
    }
    get description() {
        return this.label;
    }
    check(input) {
        return true;
    }
    transform(input) {
        const output = decodeURIComponent(input);
        return output;
    }
}
exports.EncodedUrlToStringTransformer = EncodedUrlToStringTransformer;
//# sourceMappingURL=urlencode.js.map