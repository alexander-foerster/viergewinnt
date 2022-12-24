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

  setValue(index: number, value: boolean): void {
    if(index < 0 || index > BoardComponent.numCols) {
      console.log('Zugriff auf falsche Spalte %d', index)
      return;
    }

    this.fields[index] = value;
  }

}
