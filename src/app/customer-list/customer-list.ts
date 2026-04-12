import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomerService } from '../services/customer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerList {

  constructor(private customerService: CustomerService){

  }

  customers: any;

  ngOnInit(){

    this.customers = this.customerService.getCustomers();
  }
}
