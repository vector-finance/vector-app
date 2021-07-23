"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggedOut = exports.LoggedIn = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Page_1 = require("./Page");
const HeaderStories = __importStar(require("./Header.stories"));
exports.default = {
    title: 'Example/Page',
    component: Page_1.Page,
};
const Template = (args) => jsx_runtime_1.jsx(Page_1.Page, Object.assign({}, args), void 0);
exports.LoggedIn = Template.bind({});
exports.LoggedIn.args = Object.assign({}, HeaderStories.LoggedIn.args);
exports.LoggedOut = Template.bind({});
exports.LoggedOut.args = Object.assign({}, HeaderStories.LoggedOut.args);
//# sourceMappingURL=Page.stories.js.map