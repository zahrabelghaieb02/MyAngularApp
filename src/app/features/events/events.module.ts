import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './list-event/list-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CartComponent } from './cart/cart.component';
import { AddEventComponent } from './add-event/add-event.component';


@NgModule({
  declarations: [
    EventsComponent,
    ListEventComponent,
    EventDetailsComponent,
    CartComponent,
    AddEventComponent,
    
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class EventsModule { }
