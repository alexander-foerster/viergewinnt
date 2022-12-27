import { Component, Output } from '@angular/core';
import { FieldComponent } from './field/field.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output()  
  player1Name = "Player 1";
  
  @Output()
  player2Name = "Player 2";
}
