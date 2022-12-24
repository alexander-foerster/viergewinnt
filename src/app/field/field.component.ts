import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {

  @Input()
  onoff: boolean = false;
  public color = 'blue';

  @Output()
  change = new EventEmitter();

  private updateColor() {
    if(this.onoff) {
      this.color = 'red'
    }
    else {
      this.color = 'black'
    }
  }

  public ngOnInit() {
    this.updateColor();
  }

  public ngOnChanges(changes: SimpleChanges) {
    this.updateColor();
  }

  public onClick() {
    this.change.emit();
  }
}
