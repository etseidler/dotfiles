"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
class StringToHashTransformer {
    get label() {
        return `String to ${this.hashFunctionDescription} Hash (${this.digestMethodDescription})`;
    }
    get description() {
        return this.label;
    }
    check(input) {
        return true;
    }
    transform(input) {
        let hash = crypto.createHash(this.hashFunction);
        hash.update(input, 'utf8');
        let output = hash.digest(this.digestMethod);
        return output;
    }
}
class StringToMD5Base64Transformer extends StringToHashTransformer {
    get hashFunction() {
        return "md5";
    }
    get hashFunctionDescription() {
        return "MD5";
    }
    get digestMethodDescription() {
        return "as Base64";
    }
    get digestMethod() {
        return "base64";
    }
}
exports.StringToMD5Base64Transformer = StringToMD5Base64Transformer;
class StringToMD5HexTransformer extends StringToHashTransformer {
    get hashFunction() {
        return "md5";
    }
    get hashFunctionDescription() {
        return "MD5";
    }
    get digestMethodDescription() {
        return "as Hex";
    }
    get digestMethod() {
        return "hex";
    }
}
exports.StringToMD5HexTransformer = StringToMD5HexTransformer;
class StringToSHA1Base64Transformer extends StringToHashTransformer {
    get hashFunction() {
        return "sha1";
    }
    get hashFunctionDescription() {
        return "SHA1";
    }
    get digestMethodDescription() {
        return "as Base64";
    }
    get digestMethod() {
        return "base64";
    }
}
exports.StringToSHA1Base64Transformer = StringToSHA1Base64Transformer;
class StringToSHA1HexTransformer extends StringToHashTransformer {
    get hashFunction() {
        return "sha1";
    }
    get hashFunctionDescription() {
        return "SHA1";
    }
    get digestMethodDescription() {
        return "as Hex";
    }
    get digestMethod() {
        return "hex";
    }
}
exports.StringToSHA1HexTransformer = StringToSHA1HexTransformer;
class StringToSHA256Base64Transformer extends StringToHashTransformer {
    get hashFunction() {
        return "sha256";
    }
    get hashFunctionDescription() {
        return "SHA256";
    }
    get digestMethodDescription() {
        return "as Base64";
    }
    get digestMethod() {
        return "base64";
    }
}
exports.StringToSHA256Base64Transformer = StringToSHA256Base64Transformer;
class StringToSHA256HexTransformer extends StringToHashTransformer {
    get hashFunction() {
        return "sha256";
    }
    get hashFunctionDescription() {
        return "SHA256";
    }
    get digestMethodDescription() {
        return "as Hex";
    }
    get digestMethod() {
        return "hex";
    }
}
exports.StringToSHA256HexTransformer = StringToSHA256HexTransformer;
class StringToSHA512Base64Transformer extends StringToHashTransformer {
    get hashFunction() {
        return "sha512";
    }
    get hashFunctionDescription() {
        return "SHA512";
    }
    get digestMethodDescription() {
        return "as Base64";
    }
    get digestMethod() {
        return "base64";
    }
}
exports.StringToSHA512Base64Transformer = StringToSHA512Base64Transformer;
class StringToSHA512HexTransformer extends StringToHashTransformer {
    get hashFunction() {
        return "sha512";
    }
    get hashFunctionDescription() {
        return "SHA512";
    }
    get digestMethodDescription() {
        return "as Hex";
    }
    get digestMethod() {
        return "hex";
    }
}
exports.StringToSHA512HexTransformer = StringToSHA512HexTransformer;
//# sourceMappingURL=hash.js.map