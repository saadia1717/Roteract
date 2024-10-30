import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { EventCardComponent } from '../event-card/event-card.component';
import { EventsComponent } from "../page/events/events.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MenubarModule, EventCardComponent, EventsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Events',
        route: '/'
      },
      {
        label: 'Blog',
        route: "blog"
      },
      {
        label: 'Contact',
        route: "contact"
      },

    ]
  }
}
