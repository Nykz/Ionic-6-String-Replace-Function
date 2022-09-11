import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // str = 'Coding Technyks';
  // str = 'Mr Blue has a blue house and a blue car.';
  str = 'He is [doing] a great [work]';
  replacedStr: string = '';

  constructor() {}

  replace() {
    // this.replacedStr = this.str.replace('Technyks', 'Techniques');
    // this.replacedStr = this.str.replace(/blue/gi, 'red');
    this.replacedStr = this.str.replace(/\[\w+\]/g, this.replacer);
  }

  replacer(match) {
    console.log(match);
    const str = match.replace(/\[|]/g, '');
    return str.toUpperCase();
  }

}
