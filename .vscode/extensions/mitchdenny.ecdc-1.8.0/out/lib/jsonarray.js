"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StringToJsonArrayTransformer {
    get label() {
        return 'String as JSON Byte Array';
    }
    get description() {
        return this.label;
    }
    check(input) {
        return true;
    }
    transform(input) {
        let buffer = new Buffer(input, 'utf8');
        let data = buffer.toJSON().data;
        let output = JSON.stringify(data);
        return output;
    }
}
exports.StringToJsonArrayTransformer = StringToJsonArrayTransformer;
class StringToJsonStringTransformer {
    get label() {
        return 'String as JSON String';
    }
    get description() {
        return this.label;
    }
    check(input) {
        return true;
    }
    transform(input) {
        let output = JSON.stringify(input);
        return output;
    }
}
exports.StringToJsonStringTransformer = StringToJsonStringTransformer;
class JsonStringToStringTransformer {
    get label() {
        return 'JSON String as String';
    }
    get description() {
        return this.label;
    }
    check(input) {
        return true;
    }
    transform(input) {
        let output = JSON.parse(input);
        return output;
    }
}
exports.JsonStringToStringTransformer = JsonStringToStringTransformer;
class Base64ToJsonArrayTransformer {
    get label() {
        return 'Base64 to JSON Byte Array';
    }
    get description() {
        return this.label;
    }
    check(input) {
        return true;
    }
    transform(input) {
        let buffer = new Buffer(input, 'base64');
        let data = buffer.toJSON().data;
        let output = JSON.stringify(data);
        return output;
    }
}
exports.Base64ToJsonArrayTransformer = Base64ToJsonArrayTransformer;
//# sourceMappingURL=jsonarray.js.map