import { Component, Input } from '@angular/core';

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

  private gelbIstAmZug = true;

  @Input()
  player1Name = 'Player 1';

  @Input()
  player2Name = 'Player 2';

  public ngOnInit() {
    this.fields[0][2] = true;
  }
  
  get numRows() {
    return BoardComponent.numRows;
  }

  get currentPlayerName() {
    if(this.gelbIstAmZug)
      return this.player1Name;
    else
      return this.player2Name;
  }

  flipValue(rowIndex: number, colIndex: number) {
    this.fields[rowIndex][colIndex] = !this.fields[rowIndex][colIndex];
  }
  
  // gibt true zurück, wenn der Stein gelegt werden konnte
  legeStein(colIndex: number): boolean {
    let row=0;
    for(; row<BoardComponent.numRows; ++row) {
      if(this.fields[row][colIndex] == false)
        break;
    }
    
    if(row<BoardComponent.numRows) {
      this.fields[row][colIndex] = true;
      return true;
    } else
      return false;
    
  }

  reset() {
    for(let row=0; row<BoardComponent.numRows; ++row)
      for(let col=0; col<BoardComponent.numCols; ++col)
        this.fields[row][col] = false;
  }

}
