"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AwaitedPath {
    constructor(parent, ...jsPath) {
        this.jsPath = jsPath;
        this.parent = parent;
        this.hasNodeId = jsPath && jsPath.length > 0 && typeof jsPath[0] === 'number';
    }
    addProperty(parent, name) {
        return new AwaitedPath(parent, ...this.jsPath, name);
    }
    addMethod(parent, name, ...args) {
        return new AwaitedPath(parent, ...this.jsPath, [name, ...args]);
    }
    withNodeId(parent, id) {
        return new AwaitedPath(parent, id);
    }
    toJSON() {
        return this.jsPath;
    }
    static createFromString(parent, path) {
        let pendingString = '';
        let topPath = [];
        const jsPath = topPath;
        const stack = [topPath];
        let isEscape = false;
        let isMethodCall = false;
        let isQuoteStarted = false;
        const pushChars = new Set(['.', '(', ')', ',', '[', ']']);
        for (const char of path) {
            if (char === '\\') {
                isEscape = !isEscape;
                continue;
            }
            if (!isEscape && (char === "'" || char === '`' || char === '"')) {
                if (isQuoteStarted) {
                    topPath.push(pendingString);
                    pendingString = '';
                }
                isQuoteStarted = !isQuoteStarted;
                continue;
            }
            if (isQuoteStarted) {
                pendingString += char;
                continue;
            }
            if (char === '\\s' || char === ' ' || char === '\t') {
                // don't add spacing to an empty pending string
                if (!pendingString)
                    continue;
            }
            if (char === '(' && !isEscape) {
                topPath = [];
                isMethodCall = true;
                stack.push(topPath);
                jsPath.push(topPath);
            }
            if (!isEscape && pushChars.has(char)) {
                if (isMethodCall && pendingString.match(/^\d+$/)) {
                    topPath.push(Number(pendingString));
                }
                else if (pendingString) {
                    topPath.push(pendingString);
                }
                pendingString = '';
            }
            if (char === ')' && !isEscape) {
                isMethodCall = false;
                stack.pop();
                topPath = stack[stack.length - 1];
            }
            if (!pushChars.has(char) && !isEscape) {
                pendingString += char;
            }
            isEscape = false;
        }
        if (pendingString)
            topPath.push(pendingString);
        return new AwaitedPath(parent, ...jsPath);
    }
}
exports.default = AwaitedPath;
//# sourceMappingURL=AwaitedPath.js.map