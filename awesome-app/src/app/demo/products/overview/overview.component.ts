import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // console.log('PARAMS : ', this.route.snapshot.params);
    // let productId = this.route.snapshot.params['productId'];

    // this.route.params.subscribe((params) => {
    //   this.productId = params['productId'];
    // this.productService
    //   .getProduct(this.productId)
    //   .subscribe((data) => (this.product = data));
    // });

    // this.product = this.route.snapshot.data['productData'];

    this.route.data.subscribe((data) => {
      this.product = data['productData'];
    });
  }

  onMoreInfo() {
    this.router.navigate([`/products/spec`], {
      queryParams: { name: this.product.name, price: this.product.price },
    });
  }
}
