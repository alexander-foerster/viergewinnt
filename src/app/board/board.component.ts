import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  static readonly numRows = 6;
  static readonly numCols = 7;

  // Zeile x Spalte
  fields: boolean[][] = new Array(BoardComponent.numRows).fill(false).map(x => Array(BoardComponent.numCols).fill(false));

  public ngOnInit() {
    this.fields[0][1] = true;
  }

  flipValue(rowIndex: number, colIndex: number) {
    this.fields[rowIndex][colIndex] = !this.fields[rowIndex][colIndex];
  }

  reset() {
    for(let row=0; row<BoardComponent.numRows; ++row)
      for(let col=0; col<BoardComponent.numCols; ++col)
        this.fields[row][col] = false;
  }

}
