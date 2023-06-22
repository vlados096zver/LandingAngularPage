import { Component } from '@angular/core';
import {RequestsService} from "../../service/requests.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {NotifyService} from "../../service/notify.service";
import {NOTIFY_TYPE} from "../../models/notify.model";
import {emailPattern} from "../../models/commons.model";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  public isSubmitted = false;
  constructor(
    public fb: FormBuilder,
    public requestsService: RequestsService,
    public ns: NotifyService
  ) {
  }
  public formContact = this.fb.group({
    email: [null, [Validators.required, Validators.pattern(emailPattern)]],
    name: [null, Validators.required],
    gender: 'male',
    status: 'active',
    message: [null,Validators.required]
  });

  get c_name(): FormControl {
    return this.formContact.get('name') as FormControl;
  }

  get c_email(): FormControl {
    return this.formContact.get('email') as FormControl;
  }

  get c_gender(): FormControl {
    return this.formContact.get('gender') as FormControl;
  }

  get c_status(): FormControl {
    return this.formContact.get('status') as FormControl;
  }

  get c_message(): FormControl {
    return this.formContact.get('message') as FormControl;
  }

  sendContact() {
    this.isSubmitted = true;
    if (this.c_email.errors?.['required']) {
      this.ns.err('Email is required', true);
      return;
    }
    if (this.c_email.errors?.['pattern']) {
      this.ns.err('Wrong email', true);
      return;
    }
    if (this.c_name.errors?.['required']) {
      this.ns.err('Name is required', true);
      return;
    }
    if (this.c_message.errors?.['required']) {
      this.ns.err('Message is required', true);
      return;
    }
    const notify = this.ns.loader('Sending message');
     this.requestsService.createUser(this.formContact.value).subscribe({
       next: (res: any) => {
         if (res.id) {
           this.ns.changeInformation(notify, {
             message: 'Message successful sent!',
             type: NOTIFY_TYPE.SUCCESS
           });
         } else {
         }
         this.ns.setTimer(notify);
         this.clearFormContact();
         this.isSubmitted = false;
       },
       error: (err: any) => {
         this.ns.changeInformation(notify, {
           message: `${err.error[0].field} ${err.error[0].message}`,
           type: NOTIFY_TYPE.ERROR
         });
         this.ns.setTimer(notify);
       }
     })
  }

  clearFormContact() {
    this.c_name.setValue(null);
    this.c_email.setValue(null);
    this.c_gender.setValue('male');
    this.c_status.setValue('active');
    this.c_message.setValue(null);
  }
}
