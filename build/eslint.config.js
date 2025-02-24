"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_plugin_1 = __importDefault(require("@typescript-eslint/eslint-plugin"));
const parser_1 = __importDefault(require("@typescript-eslint/parser"));
const node_path_1 = __importDefault(require("node:path"));
const node_url_1 = require("node:url");
const js_1 = __importDefault(require("@eslint/js"));
const eslintrc_1 = require("@eslint/eslintrc");
const __filename = (0, node_url_1.fileURLToPath)(import.meta.url);
const __dirname = node_path_1.default.dirname(__filename);
const compat = new eslintrc_1.FlatCompat({
    baseDirectory: 'src/',
    recommendedConfig: js_1.default.configs.recommended,
    allConfig: js_1.default.configs.all
});
exports.default = [{
        ignores: ["**/node_modules", "**/build"],
    }, ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended"), {
        plugins: {
            "@typescript-eslint": eslint_plugin_1.default,
        },
        languageOptions: {
            parser: parser_1.default,
        },
    }];
//# sourceMappingURL=eslint.config.js.map