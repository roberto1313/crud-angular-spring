import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-empty',
  templateUrl: './message-empty.component.html',
  styleUrls: ['./message-empty.component.scss']
})
export class MessageEmptyComponent {
  @Input() ngShow: boolean = false;
}
