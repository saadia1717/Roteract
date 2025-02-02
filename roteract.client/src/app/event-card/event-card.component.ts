import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Event } from '../model/event.model';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CardModule, ButtonModule, DatePipe, RouterLink],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {

  @Input() event!: Event
  @Input() showDetails!: boolean | null;

}
