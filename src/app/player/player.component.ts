import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  @Input() playerNumber = 0;

  @Input() playerName?: string;
  @Output() playerNameChange = new EventEmitter<string>();

  acceptChanges() {
    this.playerNameChange.emit(this.playerName);
  }
}
