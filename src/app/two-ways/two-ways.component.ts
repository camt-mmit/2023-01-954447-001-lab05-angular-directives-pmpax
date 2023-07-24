import { Component, EventEmitter,Input,Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-two-ways',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './two-ways.component.html',
  styleUrls: ['./two-ways.component.scss']
})
export class TwoWaysComponent {
  @Input() massage='';

  @Output() massageChange = new EventEmitter<string>();

  private updateMassage(): void{
    this.massageChange.emit(this.massage);
  }

  changeToAdam(): void{
    this.massage = 'Adam';
    this.updateMassage();
  }

  changeToBob(): void{
    this.massage = 'Bob';
    this.updateMassage();
  }
}
