import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcontact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './editcontact.component.html',
  styleUrl: './editcontact.component.css'
})
export class EditcontactComponent implements OnInit {
  editForm!: FormGroup
  users!: any
  contact!: any
  id!: any;
  constructor(private fb: FormBuilder, private api: ApiService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.api.getAllUsers().then((response) => {
      if (response.error) {


        alert(response.data);
        console.log(response.data);
      } else {
        console.log(response.data);
        this.users = response.data

        alert('all users successfully');
      }
    })
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    })
    this.api.getcontact(this.id).then((response) => {
      if (response.error) {
        alert('could not find')
      }
      else {
        console.log(response.data);
        this.contact = response.data
      }
    })
    this.editForm = this.fb.group({
      fullname: new FormControl(this.contact.fullname),
      phone: new FormControl(this.contact.phone),
      email: new FormControl(this.contact.email),
      added_by: new FormControl(this.contact.added_by),
    })
  }

  submit() {
    this.api.updatecontact(this.editForm.value, this.contact._id).then((response) => {
      if (response.error) {
        console.log(this.editForm.value);

        alert(response.data);
        console.log(response.data);
      } else {


        alert('Contact created succesfully');
      }
    })
  }
}
