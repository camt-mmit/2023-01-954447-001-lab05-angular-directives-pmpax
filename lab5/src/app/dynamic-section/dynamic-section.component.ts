import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-section.component.html',
  styleUrls: ['./dynamic-section.component.scss']
})
export class DynamicSectionComponent {

  sections: { items: { value: number }[] }[] = [{ items: [{ value: 0 }, { value: 0 }] }];

  updateResult(): void {
    this.sections.forEach((section, index) => {
      const result = this.getResult(section.items);
      console.log(`Section ${index + 1} Result: ${result}`);
    });
  }

  addSection(): void {
    this.sections.push({ items: [{ value: 0 }] });
    this.updateResult();
  }


  onChange(sectionIndex: number, itemIndex: number, value: number): void {
    this.sections[sectionIndex].items[itemIndex].value = value;
    this.updateResult();
    console.debug(this.sections[sectionIndex].items);
  }

  add(sectionIndex: number): void {
    this.sections[sectionIndex].items.push({ value: 0 });
    this.updateResult();
  }

  delete(sectionIndex: number, itemIndex: number): void {
    const section = this.sections[sectionIndex];
  
    if (section.items.length > 1) {
      section.items.splice(itemIndex, 1);
      this.updateResult();
    }
  }

  getResult(items: { value: number }[]): number {
    return items.reduce((sum, item) => sum + item.value, 0);
  }

  deleteSection(sectionIndex: number): void {
      this.sections.splice(sectionIndex, 1);
      this.updateResult();
  }

    
}
