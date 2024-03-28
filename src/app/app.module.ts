import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { HeroModule } from './heroes/hero.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
