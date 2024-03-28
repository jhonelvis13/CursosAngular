import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
            <div class=" flex justify-center">
              <div>
                <h1 class="text-2xl font-bold " >Hola Counter</h1>

                <h1 class="text-2xl font-extrabold px-14" >{{counter}}</h1>
                <button (click)="incrementar(1)" class="bg-slate-600 rounded-md px-2 font-semibold">+1</button>
                <button (click)="resetear()" class = "bg-slate-400 rounded-md px-2 font-semibold text-2xl">resetear</button>
                <button (click)="incrementar(-1)" class="bg-slate-600 rounded-md px-2 font-semibold">-1</button> 
              </div>

            </div>`

          
      
          
})

export class CounterComponent {
  public counter: number = 0;

  public incrementar(value: number): void {
    this.counter+=value;
  }

  public resetear(): void {
    this.counter=0;
  }

}
