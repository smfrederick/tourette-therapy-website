import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import toast from '@brenoroosevelt/toast'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  public formData: FormGroup;
  public disabledSubmitButton: boolean = true;

  @HostListener('input') oninput() {
    if (this.formData.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private builder: FormBuilder, private http: HttpClient) {
    this.formData = this.builder.group({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      message: new FormControl('', [Validators.required])
    });
  }
  public onSubmit(): void {
    if (this.formData.valid) {
      const email = this.formData.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/xrgdgnon',
          { name: email.fullName, replyto: email.email, message: email.message },
          { 'headers': headers })
        .subscribe(
          (response) => {
            // Add toast here for successful email sent or error
            toast.success("We have received your email!", {
              "position": "bottom",
              "align": "center",
              "title": "Success",
              "type": "success",
              "closeBtn": false,
              "dismissible": true,
              "append": true,
              "shadow": true,
              "duration": 5000,
              "maxWidth": 600,
              "animateOut": 200,
              "animateIn": 200,
              "actions": []
            });
            this.formData.reset();
          },
          (error) => {
            // Add toast here for successful email sent or error
            toast.error("Unable to send email. Please try again later.", {
              "position": "bottom",
              "align": "center",
              "title": "Something went wrong",
              "type": "error",
              "closeBtn": false,
              "dismissible": true,
              "append": true,
              "shadow": true,
              "duration": 5000,
              "maxWidth": 600,
              "animateOut": 200,
              "animateIn": 200,
              "actions": []
            });
            this.formData.reset();
          }
      );
    }
  }
}
