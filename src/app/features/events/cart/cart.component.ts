import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Event } from '../../../models/event';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  @Input() event!:Event;
  @Output() notiflike:EventEmitter<Event>= new EventEmitter<Event>();
  @Output() notifBuy:EventEmitter<Event>= new EventEmitter<Event>();

BuyEvent(event:Event){
  this.notifBuy.emit(event);
}
LikeEvent(event:Event){
  this.notiflike.emit(event);
}

isExpired (event: Event) {
 return new Date (event.date) < new Date();
  
}



}
