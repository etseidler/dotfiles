"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util = require("util");
const vscode = require("vscode");
const base64 = require("./lib/base64");
const crockford32 = require("./lib/crockford32");
const htmlentities = require("./lib/htmlentities");
const json = require("./lib/json");
const hash = require("./lib/hash");
const unicode = require("./lib/unicode");
const urlEncode = require("./lib/urlencode");
const xmlentities = require("./lib/xmlentities");
const yaml = require("./lib/yaml");
const hex = require("./lib/hex");
class Context {
    constructor() {
        this.failedChanges = [];
    }
}
class Change {
    constructor(textEditor, originalSelection, transformer, originalOffset) {
        this.updatedSelectionStartOffset = -1;
        this.inputOutputLengthDelta = -1;
        this.updatedOffset = -1;
        this.input = "";
        this.output = "";
        this.textEditor = textEditor;
        this.originalSelection = originalSelection;
        this.updatedSelection = this.originalSelection;
        this.transformer = transformer;
        this.originalOffset = originalOffset;
    }
    transformText(context, edit) {
        let originalSelectionStartOffset = this.textEditor.document.offsetAt(this.originalSelection.start);
        //let originalSelectionEndOffset = this.textEditor.document.offsetAt(this.originalSelection.end);
        //let originalSelectionLength = originalSelectionEndOffset - originalSelectionStartOffset;
        this.updatedSelectionStartOffset = originalSelectionStartOffset + this.originalOffset;
        let range = new vscode.Range(this.originalSelection.start, this.originalSelection.end);
        this.input = this.textEditor.document.getText(range);
        if (this.transformer.check(this.input) == true) {
            this.output = this.transformer.transform(this.input);
        }
        else {
            this.output = this.input;
            context.failedChanges.push(this);
        }
        edit.replace(range, this.output);
        this.inputOutputLengthDelta = this.output.length - this.input.length;
        this.updatedOffset = this.originalOffset + this.inputOutputLengthDelta;
    }
    updateSelection() {
        if (this.updatedSelectionStartOffset != undefined && this.output != undefined) {
            let updatedSelectionStart = this.textEditor.document.positionAt(this.updatedSelectionStartOffset);
            let updatedSelectionEnd = this.textEditor.document.positionAt(this.updatedSelectionStartOffset + this.output.length);
            // Build and store the new selection.
            this.updatedSelection = new vscode.Selection(updatedSelectionStart, updatedSelectionEnd);
        }
    }
}
function processSelections(textEditor, edit, transformer) {
    // let document = textEditor.document;
    let changes = [];
    let updatedSelections = [];
    let context = new Context();
    textEditor.edit((editBuilder) => {
        for (let selectionIndex = 0; selectionIndex < textEditor.selections.length; selectionIndex++) {
            let selection = textEditor.selections[selectionIndex];
            let offset = 0;
            if (selectionIndex != 0) {
                let previousChange = changes[selectionIndex - 1];
                offset = previousChange.updatedOffset;
            }
            let change = new Change(textEditor, selection, transformer, offset);
            changes[selectionIndex] = change;
            change.transformText(context, editBuilder);
        }
    }).then(() => {
        for (let changeIndex = 0; changeIndex < changes.length; changeIndex++) {
            let change = changes[changeIndex];
            change.updateSelection();
            updatedSelections.push(change.updatedSelection);
        }
        textEditor.selections = updatedSelections;
    }).then(() => {
        if (context.failedChanges.length != 0) {
            let message = util.format('%s selections could not be processed.', context.failedChanges.length);
            vscode.window.showWarningMessage(message);
        }
    });
}
function selectAndApplyTransformation(textEditor, edit) {
    let transformers = [
        new base64.StringToBase64Transformer(),
        new base64.Base64ToStringTransformer(),
        new json.StringToJsonArrayTransformer(),
        new json.StringToJsonStringTransformer(),
        new json.JsonStringToStringTransformer(),
        new json.Base64ToJsonArrayTransformer(),
        new hash.StringToMD5Base64Transformer(),
        new hash.StringToMD5HexTransformer(),
        new hash.StringToSHA1Base64Transformer(),
        new hash.StringToSHA1HexTransformer(),
        new hash.StringToSHA256Base64Transformer(),
        new hash.StringToSHA256HexTransformer(),
        new hash.StringToSHA512Base64Transformer(),
        new hash.StringToSHA512HexTransformer(),
        new htmlentities.StringToHtmlEntitiesTransformer(),
        new htmlentities.StringToHtmlDecimalEntitiesTransformer(),
        new htmlentities.HtmlEntitiesToStringTransformer(),
        new xmlentities.StringToXmlEntitiesTransformer(),
        new xmlentities.XmlEntitiesToStringTransformer(),
        new crockford32.IntegerToCrockfordBase32Transformer(),
        new crockford32.CrockfordBase32ToIntegerTransformer(),
        new unicode.StringToUnicodeTransformer(),
        new unicode.UnicodeToStringTransformer(),
        new urlEncode.StringToEncodedUrlTransformer(),
        new urlEncode.EncodedUrlToStringTransformer(),
        new yaml.JsonToYamlTransformer(),
        new yaml.YamlToJsonTransformer(),
        new hex.JsonByteArrayToHexStringTransformer()
    ];
    vscode.window.showQuickPick(transformers).then((transformer) => {
        if (transformer != undefined) {
            processSelections(textEditor, edit, transformer);
        }
    });
}
function registerConvertSelectionCommands(context) {
    let subtleConvertSelectionDisposable = vscode.commands.registerTextEditorCommand('extension.subtleConvertSelection', (textEditor, edit) => {
        selectAndApplyTransformation(textEditor, edit);
    });
    let convertSelectionDisposable = vscode.commands.registerTextEditorCommand('extension.convertSelection', (textEditor, edit) => {
        selectAndApplyTransformation(textEditor, edit);
    });
    context.subscriptions.push(subtleConvertSelectionDisposable);
    context.subscriptions.push(convertSelectionDisposable);
}
function activate(context) {
    registerConvertSelectionCommands(context);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map