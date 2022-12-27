import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Token } from '../Token';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {

  @Input()
  token?: Token;
  public color = 'blue';

  @Output()
  change = new EventEmitter();

  private updateColor() {
    if(this.token != null) {
      if(this.token.istGelb)
        this.color = 'yellow';
      else 
        this.color = 'red';
    }
    else {
      this.color = 'white'
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
