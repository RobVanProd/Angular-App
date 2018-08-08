import { TestBed, inject } from '@angular/core/testing';

import { ContactscomponentService } from './contactscomponent.service';

describe('ContactscomponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactscomponentService]
    });
  });

  it('should be created', inject([ContactscomponentService], (service: ContactscomponentService) => {
    expect(service).toBeTruthy();
  }));
});
