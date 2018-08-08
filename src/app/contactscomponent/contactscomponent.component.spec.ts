import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactscomponentComponent } from './contactscomponent.component';

describe('ContactscomponentComponent', () => {
  let component: ContactscomponentComponent;
  let fixture: ComponentFixture<ContactscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactscomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
