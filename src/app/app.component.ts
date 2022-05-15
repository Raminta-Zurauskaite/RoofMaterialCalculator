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
  roofTypeControl = new FormControl('Select roof type');
  roofMaterialTypeControl = new FormControl('Select roof material type');
  roomLengthControl = new FormControl('0.0');
  roomWidthControl = new FormControl('0.0');
  roofHeightControl = new FormControl('0.0');

  roofSurface: number = 0.0;

  calculate() {
    this.roofSurface = this.roomLengthControl.value;
  }

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      roofType: this.roofTypeControl,
      roofMaterialType: this.roofMaterialTypeControl,
      roomLength: this.roomLengthControl,
      roomWidth: this.roomWidthControl,
      roofHeight: this.roofHeightControl,
    });
  }
}
