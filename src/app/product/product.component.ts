import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  products: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/product').subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }

}