import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {

  @Input()
  onoff: boolean = false;
  public color = 'blue';

  public ngOnInit() {
    if(this.onoff) {
      this.color = 'red'
    }
    else {
      this.color = 'black'
    }
  }

  public onClick() {
    this.onoff = !this.onoff;

    if(this.onoff) {
      this.color = 'red'
    }
    else {
      this.color = 'black'
    }
  }
}
