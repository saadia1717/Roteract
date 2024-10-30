import { Component } from '@angular/core';
import { EventsService } from '../../service/events.service';
import { Event } from '../../model/event.model';
import { EventCardComponent } from '../../event-card/event-card.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [EventCardComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {

  events:Event[]= [];

  constructor(private eventService:EventsService){

  }
  ngOnInit(): void{
   this.events = this.eventService.getEvents();
  }
}

