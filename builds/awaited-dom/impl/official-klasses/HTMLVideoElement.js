"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLVideoElement_1 = require("../../base/official-klasses/HTMLVideoElement");
const create_1 = require("../create");
const HTMLMediaElement_1 = __importDefault(require("./HTMLMediaElement"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
const HTMLVideoElementBaseClass = HTMLVideoElement_1.HTMLVideoElementGenerator(HTMLMediaElement_1.default);
class HTMLVideoElement extends HTMLVideoElementBaseClass {
    constructor() {
        super();
    }
    // methods
    getVideoPlaybackQuality() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createVideoPlaybackQuality(awaitedPath.addMethod(this, 'getVideoPlaybackQuality'), awaitedOptions);
    }
}
exports.default = HTMLVideoElement;
//# sourceMappingURL=HTMLVideoElement.js.map