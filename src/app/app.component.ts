import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TwoWaysComponent } from './two-ways/two-ways.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TwoWaysComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class
 AppComponent {
  title = 'MY-NG2';

  products = [
    {code: 'PD001' ,name: 'product001'},
    {code: 'PD002' ,name: 'product002'},
    {code: 'PD003' ,name: 'product003'},
    {code: 'BK001' ,name: 'book001'},
    {code: 'BK002' ,name: 'book002'},

  ];
  externalmassage = "cindy"
}


