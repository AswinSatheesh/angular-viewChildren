import { Component, ElementRef, ViewChild, ViewChildren,QueryList } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGULAR-VIEW-CHILDREN';
  fullName : string = '';
  @ViewChildren('inputEle') inputElements : QueryList<ElementRef>

  show(){
    let name = '';
    this.inputElements.forEach((el) =>{
      console.log(el.nativeElement.value);
      name += el.nativeElement.value + ' ';
    })
    this.fullName = name.trim();
  }
  
}
