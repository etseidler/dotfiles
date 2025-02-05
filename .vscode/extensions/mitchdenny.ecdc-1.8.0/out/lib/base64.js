"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StringToBase64Transformer {
    get label() {
        return 'String to Base64';
    }
    get description() {
        return this.label;
    }
    check(input) {
        return true;
    }
    transform(input) {
        var buffer = new Buffer(input);
        var output = buffer.toString('base64');
        return output;
    }
}
exports.StringToBase64Transformer = StringToBase64Transformer;
class Base64ToStringTransformer {
    get label() {
        return "Base64 to String";
    }
    get description() {
        return this.label;
    }
    check(input) {
        return true;
    }
    transform(input) {
        var buffer = new Buffer(input, 'base64');
        var output = buffer.toString('utf8');
        return output;
    }
}
exports.Base64ToStringTransformer = Base64ToStringTransformer;
//# sourceMappingURL=base64.js.map