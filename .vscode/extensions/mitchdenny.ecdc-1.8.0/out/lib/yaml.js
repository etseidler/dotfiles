"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yaml = require('js-yaml');
class JsonToYamlTransformer {
    get label() {
        return 'JSON to YAML';
    }
    get description() {
        return this.label;
    }
    check(input) {
        return true;
    }
    transform(input) {
        let parsedInput = JSON.parse(input);
        let output = yaml.dump(parsedInput);
        return output;
    }
}
exports.JsonToYamlTransformer = JsonToYamlTransformer;
class YamlToJsonTransformer {
    get label() {
        return 'YAML to JSON';
    }
    get description() {
        return this.label;
    }
    check(input) {
        return true;
    }
    transform(input) {
        var parsedInput = yaml.load(input);
        let output = JSON.stringify(parsedInput);
        return output;
    }
}
exports.YamlToJsonTransformer = YamlToJsonTransformer;
//# sourceMappingURL=yaml.js.map