import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/model/product';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  productId: string;
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // console.log('PARAMS : ', this.route.snapshot.params);
    // let productId = this.route.snapshot.params['productId'];

    this.route.params.subscribe((params) => {
      this.productId = params['productId'];
      this.productService
        .getProduct(this.productId)
        .subscribe((data) => (this.product = data));
    });
  }
}
