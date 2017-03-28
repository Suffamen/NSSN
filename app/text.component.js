"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TextComponent = (function () {
    function TextComponent() {
    }
    TextComponent.prototype.setText = function (text) {
        this.text = text;
    };
    TextComponent.prototype.clean = function () {
        this.text = "";
    };
    TextComponent = __decorate([
        core_1.Component({
            selector: 'text',
            template: "\n\t\t<div class=\"well\">\n\t\t\t<form>\n\t\t\t\t<textarea class=\"form-control\">\n\t\t\t\t\t{{text}}\n\t\t\t\t</textarea>\n\t\t\t</form>\n\t\t</div>\n\t\t<div>\n\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\">Save</button>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], TextComponent);
    return TextComponent;
}());
exports.TextComponent = TextComponent;
//# sourceMappingURL=text.component.js.map