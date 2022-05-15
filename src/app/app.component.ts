import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'roof-material-calculator';
  options: FormGroup;
  floatLabelControl = new FormControl('auto');

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      floatLabel: this.floatLabelControl,
    });
  }
}
