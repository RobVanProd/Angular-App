import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contactsservice/contactscomponent.service';


@Component({
  selector: 'app-contactscomponent',
  templateUrl: './contactscomponent.component.html',
  styleUrls: ['./contactscomponent.component.css']
})
export class ContactscomponentComponent implements OnInit {
contacts: Contact[] ;
dataService: ContactsService;
  constructor(private ContactsService: ContactsService) {
    this.dataService = this.ContactsService
   }

  ngOnInit():void {
    this.dataService.getContact().subscribe(contacts => this.contacts = contacts);
  }

}
