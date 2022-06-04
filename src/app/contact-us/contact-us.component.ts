import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  public formData: FormGroup;
  public disabledSubmitButton: boolean = true;

  @HostListener('input') oninput() {
    if (this.formData.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private builder: FormBuilder) {
    this.formData = this.builder.group({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl(''),
      message: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log(this.formData)
    // this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
    //   alert('Your message has been sent.');
    //   this.contactForm.reset();
    //   this.disabledSubmitButton = true;
    // }, error => {
    //   console.log('Error', error);
    // });
  }
}
