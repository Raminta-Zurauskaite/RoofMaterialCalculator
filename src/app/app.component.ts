import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'roof-material-calculator';
  options: FormGroup;
  roofTypeControl = new FormControl('Shed roof');
  roofMaterialTypeControl = new FormControl('');
  roomLengthControl = new FormControl('10.0');
  roomWidthControl = new FormControl('8.0');
  roofHeightControl = new FormControl('3.0');
  roofSurfaceAreaControl = new FormControl(Math.round((this.roomLengthControl.value * this.roomWidthControl.value / this.roofHeightControl.value) * 100) / 100);

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      roofType: this.roofTypeControl,
      roofMaterialType: this.roofMaterialTypeControl,
      roomLength: this.roomLengthControl,
      roomWidth: this.roomWidthControl,
      roofHeight: this.roofHeightControl,
      roofSurfaceArea: this.roomLengthControl.value * this.roomWidthControl.value / this.roofHeightControl.value,
    });
  }

  /*  roofTypeTin() {
     if (this.roofMaterialTypeControl.value == "Roof tin") {
       return true;
     }
     else false;
   } */
}
