import { Routes } from '@angular/router';
import { EventDetailComponent } from './page/event-detail/event-detail.component';
import { EventsComponent } from './page/events/events.component';

export const routes: Routes = [

    {
        path: "event/:id", component: EventDetailComponent
    },
    {
        path: "", component: EventsComponent
    },
];
