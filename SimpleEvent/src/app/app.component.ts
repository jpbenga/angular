import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleEvent';
  message: string = 'Ceci est un message'

  handleSimpleClick(){
      alert('hello')
  }

  handleDoubleClick(){
      alert('hello hello')
  }

  handleButtonClick(event: Event){
    const btn = event.target as HTMLButtonElement
    alert(btn.value)
  }

  handleMouseOver(event: MouseEvent){
    const x = event.clientX
    const y = event.clientY
    alert(`coordonnées x: ${x}, coordonées y: ${y}`)
  }

  handleInput(event: Event){
    const input = event.target as HTMLInputElement
    return this.message = input.value
  }

  handleInputEnter(event: KeyboardEvent){
    if (event.key === 'Enter') {
      const value = (event.target as HTMLInputElement).value;
      console.log(value);
    }
  }
}
