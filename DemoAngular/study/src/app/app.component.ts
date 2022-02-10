import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title : string = 'study';
  public num : number = 10;
  public all : any = new Array();

  public printAll(arg=""){
    console.log(arg);
  }

  private print(arg=""){
    console.log(arg);
  }

  constructor() {
    var text : string = 'plain text';
    this.print(text);
    this.printAll(text);
    
    console.log(this.title, this.num, this.all);  //멤버들도 this를 써 주어야 한다.
  }
}