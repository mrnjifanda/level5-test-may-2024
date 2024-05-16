import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addcontact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './addcontact.component.html',
  styleUrl: './addcontact.component.css'
})
export class AddcontactComponent implements OnInit {
  contactForm!: FormGroup
  users:any
  constructor(private fb: FormBuilder, private api: ApiService) {

  }
  ngOnInit(): void {
     this.api.getAllUsers().then((response) => {
      if (response.error) {
       

        alert(response.data);
        console.log(response.data);
      } else {
console.log(response.data);
        this.users = response.data

       ;
      }
    })
    this.contactForm = this.fb.group({
      fullname: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required, Validators.email]),
      added_by: new FormControl('', [Validators.required]),
    })
  }

  submit() {
    this.api.addcontact(this.contactForm.value).then((response) => {
      if (response.error) {
        console.log(this.contactForm.value);

        alert(response.data);
        console.log(response.data);
      } else {


        alert('Contact created succesfully');
      }
    })
  }
}
