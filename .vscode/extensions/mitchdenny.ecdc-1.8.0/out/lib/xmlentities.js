"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entities = require('html-entities');
class XmlEntitiesToStringTransformer {
    get label() {
        return 'XML Entities to String';
    }
    get description() {
        return this.label;
    }
    check(input) {
        return true;
    }
    transform(input) {
        let output = entities.decode(input, { level: 'xml' });
        return output;
    }
}
exports.XmlEntitiesToStringTransformer = XmlEntitiesToStringTransformer;
class StringToXmlEntitiesTransformer {
    get label() {
        return 'String to XML Entities';
    }
    get description() {
        return this.label;
    }
    check(input) {
        return true;
    }
    transform(input) {
        let output = entities.encode(input, { level: 'xml' });
        return output;
    }
}
exports.StringToXmlEntitiesTransformer = StringToXmlEntitiesTransformer;
//# sourceMappingURL=xmlentities.js.map