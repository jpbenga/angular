import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VariableRef';
  fullName: string = 'Jean-Paul BENGA'

  handleFullName(firstInput: string, secondInput: string){
    console.log(this.fullName = `${firstInput} ${secondInput}`)
  }
}
