import { AppService } from './app.service';
import { Student } from './entities/Student.entity';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getFicha(): string;
    getidentificacion(id: string, ciudad: string, name: string, edad: number): Student;
}
