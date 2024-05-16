import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  base_url = 'http://localhost:3000/api'

  async getAllUsers() {

    try {

      const request = await fetch(`${this.base_url}/getusers`)
      if (request.ok) {
        console.log('ok');
        const response = await request.json()
        return {
          error: false,
          data: response.data
        }

      }
      return {
        error: true,
        data: request.status
      }
    } catch (error: any) {

      return {
        error: true,
        data: error.message
      }
    }
  }
  async getAllcontacts() {

    try {

      const request = await fetch(`${this.base_url}/getcontacts`)
      if (request.ok) {
        console.log('ok');
        const response = await request.json()
        return {
          error: false,
          data: response.data
        }

      }
      return {
        error: true,
        data: request.status
      }
    } catch (error: any) {

      return {
        error: true,
        data: error.message
      }
    }
  }

  async adduser(data: any) {
    try {
      const request = await fetch(this.base_url + '/adduser', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if (request.status === 201) {

        const response = await request.json();
        return { error: false, data: response.data };
      }

      return { error: true, data: request.status };
    } catch (error: any) {
      return { error: true, data: error.message }
    }
  }
  async addcontact(data: any) {
    try {
      const request = await fetch(this.base_url + '/addcontact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if (request.status === 201) {

        const response = await request.json();
        return { error: false, data: response.data };
      }

      return { error: true, data: request.status };
    } catch (error: any) {
      return { error: true, data: error.message }
    }
  }

  async updatecontact(data: any, id: any) {
    try {
      const request = await fetch(this.base_url + '/update/' + id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if (request.status === 201) {

        const response = await request.json();
        return { error: false, data: response.data };
      }

      return { error: true, data: request.status };
    } catch (error: any) {
      return { error: true, data: error.message }
    }
  }
  async deletecontact(id: any) {
    try {
      const request = await fetch(this.base_url + '/delete/' + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      })
      if (request.status === 201) {

        const response = await request.json();
        return { error: false, data: response.data };
      }

      return { error: true, data: request.status };
    } catch (error: any) {
      return { error: true, data: error.message }
    }
  }
  async getcontact(id: any) {
    try {
      const request = await fetch(`${this.base_url}/getcontact/${id}`);
      if (request.ok) {
        console.log('ok');
        const response = await request.json()
        return {
          error: false,
          data: response.data
        }

      }
      return {
        error: true,
        data: request.status
      }
    } catch (error: any) {

      return {
        error: true,
        data: error.message
      }
    }
  }
}