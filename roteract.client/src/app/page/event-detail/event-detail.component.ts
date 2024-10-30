import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { EventCardComponent } from "../../event-card/event-card.component";
import { EventsService } from '../../service/events.service';
import { Event } from '../../model/event.model'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CardModule, EventCardComponent],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.scss'
})
export class EventDetailComponent {
  event!: Event;

  constructor(private eventService: EventsService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.event = this.eventService.getEvent(params['id']);
    });
  }
}
