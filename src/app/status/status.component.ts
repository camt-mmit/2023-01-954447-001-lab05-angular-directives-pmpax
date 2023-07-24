import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  date = new Date()
  user = navigator.userAgent
  lang = navigator.languages
  cookie = navigator.cookieEnabled
  logicel = navigator.hardwareConcurrency
  max = navigator.maxTouchPoints
}
