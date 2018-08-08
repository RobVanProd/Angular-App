import { Injectable } from '@angular/core';
import {Contact} from '../models/contact';
import { Observable, of } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts:  Contact[] =[
    {
    firstName: 'Donald',
    lastName: 'Trump',
    phoneNumber:8645554758,
    email: 'd.trump@gmail.com'
  },  
  {
    firstName: 'Bob',
    lastName: 'Dole',
    phoneNumber:7545586658,
    email: 'Bob.Dole@gmail.com'
  },
  {
    firstName: 'Barak',
    lastName: 'Obama',
    phoneNumber:6644458873,
    email: 'B.Obama@gmail.com'
  }
  
  ];
 getContact = (): Observable<Contact[]> => {
   return of(this.contacts);
 }

 addContact (contact: Contact){
   this.contacts.push(contact);
 }

 constructor() {}
}
