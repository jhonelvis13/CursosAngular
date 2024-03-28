import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public heroName: string[]= ['Ironman', 'Spiderman', 'Thor', 'Hulk'];
  public deletehero?: string;

  removeLastHero() {
    this.deletehero=this.heroName.pop();
  }

  removeHeroName(heroName: string) {
    const index = this.heroName.indexOf(heroName);
    this.heroName.splice(index, 1);
  }


}
