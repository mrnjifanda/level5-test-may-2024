import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboardpage',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './dashboardpage.component.html',
  styleUrl: './dashboardpage.component.css'
})
export class DashboardpageComponent implements OnInit {
  contacts: any
  constructor(private api: ApiService, private router: Router) { }
  ngOnInit(): void {
    this.api.getAllcontacts().then((response) => {
      if (response.error) {


        alert(response.data);
        console.log(response.data);
      } else {
        console.log(response.data);
        this.contacts = response.data

        
      }
    })
  }
  edit(id: any) {
    this.router.navigate(
      ['/edit'],
      { queryParams: { id: id } }
    );
  }
  openModal(modalId: any,) {
    document.getElementById(modalId)!.style.display = 'block'
    document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden')
  }

  closeModal(modalId: any) {
    document.getElementById(modalId)!.style.display = 'none'
    document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
  }
  delete(id: any) {
    this.api.deletecontact(id).then((response) => {
      if (response.error) {


        
        console.log(response.data);
        this.closeModal('modalConfirm')
        window.location.reload();
      } 
    })
  }
}
