import { Component } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  public color = 'black'
  private onoff = false;

  public onClick() {
    if(!this.onoff) {
      this.color = 'red'
    }
    else {
      this.color = 'black'
    }

    this.onoff = !this.onoff;
  }
}
