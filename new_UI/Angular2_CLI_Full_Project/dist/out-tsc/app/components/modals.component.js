var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
var ModalsComponent = (function () {
    function ModalsComponent() {
    }
    ModalsComponent.prototype.showChildModal = function () {
        this.childModal.show();
    };
    ModalsComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    return ModalsComponent;
}());
__decorate([
    ViewChild('childModal'),
    __metadata("design:type", ModalDirective)
], ModalsComponent.prototype, "childModal", void 0);
ModalsComponent = __decorate([
    Component({
        templateUrl: 'modals.component.html'
    })
], ModalsComponent);
export { ModalsComponent };
//# sourceMappingURL=../../../../src/app/components/modals.component.js.map