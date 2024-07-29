import { Component } from '@angular/core';

@Component({
  //standalone: true, <---sería descomentarlo
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'bases';
  public title: string = 'en el export class puse el title: bases';
  public counter: number = 10;

  incrementaContador():void{
    this.counter+=1;
  }

  decrementaContador():void{
    this.counter-=1;
  }

  increaseBy(value: number ):void{
    this.counter += value;
  }

  resetCounter():void{
    this.counter = 10;
  }

}

