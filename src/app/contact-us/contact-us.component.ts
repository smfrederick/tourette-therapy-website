import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";

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
      this.http.post('https://formspree.io/f/mlezvayk',
          { name: email.fullName, replyto: email.email, message: email.message },
          { 'headers': headers }).subscribe(
          response => {
            // Add toast here for successful email sent or error
            this.formData.reset();
          }
      );
    }
  }
}
