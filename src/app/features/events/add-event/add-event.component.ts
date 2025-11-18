import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { futurDateValidator } from '../../../shared/validateur/futur-date.validator';
import { FormArray } from '@angular/forms';
import { Event } from '../../../models/event';
import { DataService } from '../../../shared/services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {
  eventform!:FormGroup;
  constructor(private eventService: DataService, private router: Router) {

   this.eventform = new FormGroup({
      id: new FormControl('',[Validators.required]),
      titre: new FormControl('',[Validators.required , Validators.minLength(5),Validators.pattern('[a-zA-Z ]*')]),
      date: new FormControl('',[Validators.required,futurDateValidator(1)]),
      lieu: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required, Validators.minLength(30)]),
      prix: new FormControl('',[Validators.required, Validators.pattern(/^\d+(\.\d+)?$/)]),
      organizerId: new FormControl('',[Validators.required]),
      imageUrl: new FormControl(''),
      nbPlaces: new FormControl('',[Validators.required, Validators.pattern(/^([1-9][0-9]?|100)$/)]),
      nbrLikes: new FormControl(0),
      domaines: new FormArray([new FormControl('')])
  });

  }

  get domaines() {
    return this.eventform.get('domaines') as FormArray;
  }
  addDomain() {
    this.domaines.push(
      new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ])
    );
  }
  get titre() {
    return this.eventform.get('titre');
  }
  get date() {
    return this.eventform.get('date');
  }
  get lieu() {
    return this.eventform.get('lieu');
  }
  get description() { 
    return this.eventform.get('description');
  }
  get prix() {
    return this.eventform.get('prix');
  } 
  get nbPlaces() {
    return this.eventform.get('nbPlaces');
  }
  get organizerId() {
    return this.eventform.get('organizerId');
  }
  get nbrLikes() {
    return this.eventform.get('nbrLikes');
  }
  get id() {
    return this.eventform.get('id');
  }
  get imageUrl() {
    return this.eventform.get('imageUrl');
  } 
  
  onReset() {
    this.eventform.reset();
  }

onSubmit() {
    // console.log(this.eventForm.value);
    // const formValue = this.eventForm.value;
    // let newEvent = {};
    // newEvent = formValue;
    // console.log(newEvent);
    const formValue = this.eventform.value;
    const newEvent: Event = {
      id :5,
      titre: formValue.titre,
      description: formValue.description,
      date: new Date(formValue.date),
      prix: Number(formValue.prix),
      nbPlaces: Number(formValue.nbPlaces),
      lieu: formValue.lieu,
      imageUrl: formValue.imageUrl || '',
      domaines: formValue.domaines,
      organisateurId: 1,
      nbrLikes: 0,
    };

    this.eventService.addEvent(newEvent);
    this.router.navigate(['/events']);
  } 
}