import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  City = ['Step index', 'Boom', 'Crash', 'Volatality', 'Jump', 'Crash', 'RangeBreak'];
  totalRisk: any = 0;
  lotSize: any = 0;
  isLoader: boolean = false;

  profileForm = new FormGroup({
    n1: new FormControl('100'),
    n2: new FormControl('5'),
    n3: new FormControl(''),
    cityName: new FormControl('', Validators.required),
  });

  changeCity(e: any) {
    this.cityName?.setValue(e.target[e.target.selectedIndex].text, {
      onlySelf: true,
    });
  }

  // Access formcontrols getter
  get cityName() {
    return this.profileForm.get('cityName');
  }

  calculate(){
    this.isLoader = true;

    this.totalRisk = (Number(this.profileForm.get('n1')?.value) * Number(this.profileForm.get('n2')?.value) / 100).toFixed(2);
    
    if(this.profileForm.get('cityName')?.value == 'Step index'){
      this.lotSize = ((Number(this.profileForm.get('n1')?.value) * Number(this.profileForm.get('n2')?.value) / 100) / (Number(this.profileForm.get('n3')?.value)*10) ).toFixed(3);
    } else {
      this.lotSize = ((Number(this.profileForm.get('n1')?.value) * Number(this.profileForm.get('n2')?.value) / 100) / Number(this.profileForm.get('n3')?.value) ).toFixed(3);
    }

    console.log(this.totalRisk);
    console.log(this.lotSize);

    this.isLoader = false;
  }

}
