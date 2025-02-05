"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
class StringToSHATransformer {
    get label() {
        return `String to SHA1 Hash (${this.digestMethodDescription})`;
    }
    get description() {
        return this.label;
    }
    check(input) {
        return true;
    }
    transform(input) {
        let hash = crypto.createHash('sha1');
        hash.update(input, 'utf8');
        let output = hash.digest(this.digestMethod);
        return output;
    }
}
class StringToSHA1Base64Transformer extends StringToSHA1Transformer {
    get hashFunction() {
        return "sha1";
    }
    get digestMethodDescription() {
        return "as Base64";
    }
    get digestMethod() {
        return "base64";
    }
}
exports.StringToSHA1Base64Transformer = StringToSHA1Base64Transformer;
class StringToSHA1HexTransformer extends StringToSHA1Transformer {
    get hashFunction() {
        return "sha1";
    }
    get digestMethodDescription() {
        return "as Hex";
    }
    get digestMethod() {
        return "hex";
    }
}
exports.StringToSHA1HexTransformer = StringToSHA1HexTransformer;
//# sourceMappingURL=sha.js.map