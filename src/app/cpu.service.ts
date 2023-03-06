import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CpuService {

  num:number=15;

  getnumber():number {return this.num;}

  sumar():void{this.num+=1;}

  restar():void{this.num-=1;}

  constructor() { }

}
