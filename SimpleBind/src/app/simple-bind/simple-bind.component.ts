import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-bind',
  templateUrl: './simple-bind.component.html',
  styleUrls: ['./simple-bind.component.css']
})
export class SimpleBindComponent {

  imageUrl: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png'
  imageTitle: string = 'Angular'
  isChecked: boolean = true
  columnMerged: number = 2
  titleCssClass: string = 'mainTitle testTitle'
  titleStyle: object = {fontSize: '24px', color: 'red'}
}
