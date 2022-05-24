import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lithuanian',
  templateUrl: './lithuanian.component.html',
  styleUrls: ['./lithuanian.component.css']
})
export class LithuanianComponent implements OnInit {

  title = 'roof-material-calculator';
  options: FormGroup;
  roofTypeControl = new FormControl('Shed roof');
  roofMaterialTypeControl = new FormControl('');
  roomLengthControl = new FormControl('10.0');
  roomWidthControl = new FormControl('8.0');
  roofHeightControl = new FormControl('3.0');
  roofSurfaceAreaControl = new FormControl(Math.round((this.roomLengthControl.value * this.roomWidthControl.value / Math.cos(Math.atan(this.roofHeightControl.value / this.roomWidthControl.value))) * 100) / 100);
  roofingSheetPriceControl = new FormControl('10.0');
  roofingSheetOverlapControl = new FormControl('0.0');

  calculateRoofSurface() {
    if (this.roofTypeControl.value == 'Shed roof') {
      this.roofSurfaceAreaControl.patchValue(Math.round((this.roomLengthControl.value * this.roomWidthControl.value / Math.cos(Math.atan(this.roofHeightControl.value / this.roomWidthControl.value))) * 100) / 100);
    }
    else if (this.roofTypeControl.value == 'Open gable roof') {
      this.roofSurfaceAreaControl.patchValue(Math.round((this.roomLengthControl.value * this.roomWidthControl.value / Math.cos(Math.atan(this.roofHeightControl.value / (this.roomWidthControl.value / 2)))) * 100) / 100);

    }
  }

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      roofType: this.roofTypeControl,
      roofMaterialType: this.roofMaterialTypeControl,
      roomLength: this.roomLengthControl,
      roomWidth: this.roomWidthControl,
      roofHeight: this.roofHeightControl,
      roofSurfaceArea: this.roofSurfaceAreaControl,
      roofingSheetPrice: this.roofingSheetPriceControl,
      roofingSheetOverlap: this.roofingSheetOverlapControl,
    });
  }

  ngOnInit(): void {
  }

}
