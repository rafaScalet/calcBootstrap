import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  num1: number = 0
  num2: number = 0
  result: any = 0
  text: string = ""

  set(text: string = ""){
    this.text = this.text + text;
    this.num1 = parseFloat(this.text);
  }
}
