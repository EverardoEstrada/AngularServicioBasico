import { Component } from '@angular/core';
import { CpuService } from '../cpu.service';

@Component({
  selector: 'app-restador',
  templateUrl: './restador.component.html',
  styleUrls: ['./restador.component.css']
})
export class RestadorComponent {

  constructor(private cpuservice:CpuService) { }

  get numero(){
    return this.cpuservice.getnumber();
  }

  resta():void{this.cpuservice.restar();}

}
