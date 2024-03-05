import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;
  memory: string[] = [];
  operation: string = '?';
  text: string = '';

  set(text: string = '') {
    this.text = this.text + text;
    this.num1 = parseFloat(this.text);
  }

  ope(operation: string = '') {
    this.operation = operation;
    this.num2 = this.num1;
    this.text = '';
    this.num1 = 0;
  }

  calc() {
    this.result = eval(this.num2 + this.operation + this.num1);
    this.memory.push(this.num2 + " " + this.operation + " " + this.num1 + ' = ' + this.result);
    this.text = '';
  }

  clear() {
    if(this.num1 == 0){
      this.memory = [];
    }
    this.num1 = 0;
    this.num2 = 0;
    this.result = 0;
    this.operation = '';
    this.text = '';
  }

  esp(num: number = 0){
    num = Math.floor(Math.random() * (this.num2 - this.num1 + 1)) + this.num1;
    alert("o número sorteado foi: " + num);
  }
}
