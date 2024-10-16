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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootcampController = void 0;
const common_1 = require("@nestjs/common");
let BootcampController = class BootcampController {
    getAllBootCamps() {
        return 'Aqui se mostran todos los bootcamps';
    }
    getBootCampById(id) {
        return `Aqui se va a mostrar el bootcamp con id: ${id}  `;
    }
    createBootCamp() {
        return 'Aqui se va a crear un bootcamp';
    }
    updateBootCamp(id) {
        return `Aqui se va a actualizar el bootcamp con id: ${id}`;
    }
    partialUpdateBootCamp(id) {
        return `Aqui se va a actualizar parcialmente el bootcamp con id: ${id}`;
    }
    deleteBootCamp(id) {
        return `Aqui se va a borrar el bootcamp con id: ${id}`;
    }
};
exports.BootcampController = BootcampController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], BootcampController.prototype, "getAllBootCamps", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], BootcampController.prototype, "getBootCampById", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], BootcampController.prototype, "createBootCamp", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], BootcampController.prototype, "updateBootCamp", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], BootcampController.prototype, "partialUpdateBootCamp", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], BootcampController.prototype, "deleteBootCamp", null);
exports.BootcampController = BootcampController = __decorate([
    (0, common_1.Controller)('bootcamps')
], BootcampController);
//# sourceMappingURL=bootcamps.controller.js.map