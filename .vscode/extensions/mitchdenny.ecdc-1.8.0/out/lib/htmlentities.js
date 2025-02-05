"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ent = require('ent');
class HtmlEntitiesToStringTransformer {
    get label() {
        return 'HTML Entities to String';
    }
    get description() {
        return this.label;
    }
    check(input) {
        return true;
    }
    transform(input) {
        let output = ent.decode(input);
        return output;
    }
}
exports.HtmlEntitiesToStringTransformer = HtmlEntitiesToStringTransformer;
class StringToHtmlEntitiesTransformer {
    get label() {
        return 'String to HTML Entities';
    }
    get description() {
        return this.label;
    }
    check(input) {
        return true;
    }
    transform(input) {
        let output = ent.encode(input, { named: true });
        return output;
    }
}
exports.StringToHtmlEntitiesTransformer = StringToHtmlEntitiesTransformer;
class StringToHtmlDecimalEntitiesTransformer {
    get label() {
        return 'String to HTML Entities (as Decimal Entity)';
    }
    get description() {
        return this.label;
    }
    check(input) {
        return true;
    }
    transform(input) {
        let output = ent.encode(input, { named: false });
        return output;
    }
}
exports.StringToHtmlDecimalEntitiesTransformer = StringToHtmlDecimalEntitiesTransformer;
//# sourceMappingURL=htmlentities.js.map