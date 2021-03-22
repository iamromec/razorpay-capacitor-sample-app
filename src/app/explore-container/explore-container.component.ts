import { Component, OnInit, Input } from '@angular/core';
import  'capacitor-razorpay';
import { Plugins } from '@capacitor/core';
const { Checkout } = Plugins;

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {}

  private options = {
    description: 'Description',
    currency: 'INR', // your 3 letter currency code
    key: 'rzp_test_1DP5mmOlF5G5ag', // your Key Id from Razorpay dashboard
    amount: '5000', // Payment amount in smallest denomiation e.g. cents for USD
    name: 'Sample App',
    prefill: {
      email: 'mail@example.com',
      contact: '9999999999',
      name: 'Raj Suthar'
    },
    theme: {
      color: '#000000'
    }
  }

  async pay() {
    try {
      let data = (await Checkout.open(this.options));
      console.log(data.response);
      alert(data.response);
    } catch (error) {
      console.log(error);
    }
  }

}
