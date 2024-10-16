import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entities/Student.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  //EndPoint: Puerta del software
  //  - Acepta peticiones de clientes mediante una URL Semantica.
  //  - Retornar el(los) datos esperados al cliente.
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
//Segundo EndPoint - ESTRUCTURAR ENDPOINTS
//  1. Verbo(Metodo) HTTP sobre el cual recibir,
//  Metodos Disponibles: GET, POST, PUT, PATCH, DELETE.
//  Junto con la ruta a invocar.
//  2. Firma del metodo a ejecutar cuando se invoque el EndPoint.
@Get('/ficha')
getFicha(){
  return "EndPoint de la Ficha 2902093";
}

//Tercer EndPoint
@Get('/identificacion/:id/ciudad/:ciudad')
getidentificacion( 
                  @Param('id') id:string, 
                  @Param('ciudad') ciudad:string,
                  @Query('name') name:string,
                  @Query('edad') edad:number
                 ): Student {
  return new Student(+id, "Fernando", 20, ciudad);
}
}
