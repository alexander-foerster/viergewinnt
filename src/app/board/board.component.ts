import { Component, Input } from '@angular/core';
import { Token } from '../Token';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  static readonly numRows = 6;
  static readonly numCols = 7;

  // Zeile x Spalte
  fields: Token[][] = new Array(BoardComponent.numRows).fill(null).map(x => Array(BoardComponent.numCols).fill(null));

  private gelbIstAmZug = true;

  @Input()
  player1Name = 'Player 1';

  @Input()
  player2Name = 'Player 2';

  public ngOnInit() {
    
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

  // gibt true zurück, wenn der Stein gelegt werden konnte
  legeStein(colIndex: number): boolean {
    let row=0;
    for(; row<BoardComponent.numRows; ++row) {
      if(this.fields[row][colIndex] == null)
        break;
    }
    
    if(row<BoardComponent.numRows) {
      this.fields[row][colIndex] = new Token(this.gelbIstAmZug);
      this.gelbIstAmZug = !this.gelbIstAmZug;
      return true;
    } else
      return false;
    
  }

  reset() {
    this.fields = new Array(BoardComponent.numRows).fill(null).map(x => Array(BoardComponent.numCols).fill(null));
    this.gelbIstAmZug = true;
  }

}
