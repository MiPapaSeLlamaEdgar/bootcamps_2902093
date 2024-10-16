import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('bootcamps')
export class BootcampController {
    @Get()
    getAllBootCamps(): string {
        return 'Aqui se mostran todos los bootcamps';
    }

    @Get(':id')
    getBootCampById(@Param('id') id:string): string {
        return `Aqui se va a mostrar el bootcamp con id: ${id}  `;
    }

    @Post()
    createBootCamp(): string {
        return 'Aqui se va a crear un bootcamp';
    }

    @Put(':id')
    updateBootCamp(@Param('id') id:string): string {
        return `Aqui se va a actualizar el bootcamp con id: ${id}`;
    }

    @Patch(':id')
    partialUpdateBootCamp(@Param('id') id:string): string {
        return `Aqui se va a actualizar parcialmente el bootcamp con id: ${id}`;
    }

    @Delete(':id')  
    deleteBootCamp(@Param('id') id:string): string {
        return `Aqui se va a borrar el bootcamp con id: ${id}`;
    }
}
