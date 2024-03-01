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
  operation: string = ""
  text: string = ""

  set(text: string = ""){
    this.text = this.text + text
    this.num1 = parseFloat(this.text)
  }

  ope(operation: string = ""){
    this.operation = operation
    this.num2 = this.num1
    this.text = ""
  }

  calc(){
    this.result = eval(this.num1 + this.operation + this.num2)
  }

  ce(){
    this.num1 = 0
    this.num2 = 0
    this.result = 0
    this.operation = ""
    this.text = ""
  }
}
