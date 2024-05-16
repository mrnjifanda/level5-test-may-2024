import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {

  contacts: any = [];
  constructor(private apiService: ApiService) {

    this.apiService.getAllByUserId().then((res) => {

      if (res.error) {

        alert(res.data);
        console.log(res.data);
      } else {

        this.contacts = res.data;
      }
    });
  }
}
