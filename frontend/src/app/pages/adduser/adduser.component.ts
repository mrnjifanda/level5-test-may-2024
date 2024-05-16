import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent implements OnInit {

  userForm!: FormGroup
  constructor(private fb: FormBuilder, private api: ApiService) { 

  }
  ngOnInit(): void {
    
    this.userForm = this.fb.group({
      firstname: new FormControl ('', [Validators.required]),
       lastname: new FormControl ('', [Validators.required,]),
      category: new FormControl ('', [Validators.required]),
    })
  }
  
  submit() {
    this.api.adduser(this.userForm.value).then((response) => {
      if (response.error) {
        console.log(this.userForm.value);

        alert(response.data);
        console.log(response.data);
      } else {

        
        alert('User created successfully');
      }
    })
  }
}
