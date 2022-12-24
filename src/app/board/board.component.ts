import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  static readonly numRows = 6;
  static readonly numCols = 7;

  fields: boolean[] = new Array(BoardComponent.numCols).fill(false);

  public ngOnInit() {
    this.fields[1] = true;
  }

  flipValue(index: number) {
    console.log('Index %d flipped', index);
    this.fields[index] = !this.fields[index];
  }

  reset() {
    console.log('Zurückgesetzt');
    for(let i=0; i<BoardComponent.numCols; ++i)
      this.fields[i] = false;
  }

}
