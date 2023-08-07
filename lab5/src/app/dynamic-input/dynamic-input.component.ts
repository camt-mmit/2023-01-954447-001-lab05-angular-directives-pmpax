import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss']
})
export class DynamicInputComponent {

  updateResult(): void {
    const result = this.getResult();
    console.log(result);
  }

  items = [{value: 0}, {value: 0}];
  onChange(index: number, value: number): void {
    this.items[index].value = value;
    this.updateResult();
    console.debug(this.items);
  }

  add(): void {
    this.items.push({ value: 0 });
    this.updateResult();
  }

  delete(index: number): void {
    this.items.splice(index, 1);
    }

  getResult(): number {
     return this.items.reduce((sum, item) => sum + item.value, 0);
    }
    
}
