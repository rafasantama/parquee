"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var src_1 = require("./src");
__export(require("./src/animate-on-scroll.directive"));
var AnimateOnScrollModule = (function () {
    function AnimateOnScrollModule() {
    }
    AnimateOnScrollModule.forRoot = function () {
        return {
            ngModule: AnimateOnScrollModule,
            providers: [src_1.ScrollService]
        };
    };
    AnimateOnScrollModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [
                        src_1.AnimateOnScrollDirective
                    ],
                    exports: [
                        src_1.AnimateOnScrollDirective
                    ]
                },] },
    ];
    return AnimateOnScrollModule;
}());
exports.AnimateOnScrollModule = AnimateOnScrollModule;
//# sourceMappingURL=index.js.map