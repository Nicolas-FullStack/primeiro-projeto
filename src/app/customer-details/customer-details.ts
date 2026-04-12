import { Component } from '@angular/core';
import { CustomerService } from '../services/customer';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-customer-details',
  imports: [RouterLink],
  templateUrl: './customer-details.html',
  styleUrl: './customer-details.css',
})
export class CustomerDetails {

    constructor(private route: ActivatedRoute, private customerService: CustomerService){

    }

    customer: any;

    ngOnInit(){

      //pegar o id da url
     let id =  this.route.snapshot.paramMap.get('id');

     if (id !== null){

        this.customer = this.customerService.getById(+id);
     }
    }
}
