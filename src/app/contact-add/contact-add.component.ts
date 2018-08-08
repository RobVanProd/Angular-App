import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contactsservice/contactscomponent.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})

export class ContactAddComponent implements OnInit {
 model: Contact = new Contact();
 dataService: ContactsService;

  constructor(private contactsService: ContactsService) { 
    this.dataService = this.contactsService;
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log('Submit Successful: ', this.model);
    this.dataService.addContact(this.model);
  }

}
