import { Component } from '@angular/core';
import { CpuService } from '../cpu.service';

@Component({
  selector: 'app-sumador',
  templateUrl: './sumador.component.html',
  styleUrls: ['./sumador.component.css']
})
export class SumadorComponent {
  constructor(private cpuservice:CpuService) { }

  get numero(){
    return this.cpuservice.getnumber();
  }

  suma():void{this.cpuservice.sumar();}

}
