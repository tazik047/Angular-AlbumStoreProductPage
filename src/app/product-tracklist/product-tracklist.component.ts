import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-tracklist',
  templateUrl: './product-tracklist.component.html',
  styleUrls: ['./product-tracklist.component.css']
})
export class ProductTracklistComponent implements OnInit {

  albumInfo: Album

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(result=>this.albumInfo = result);
  }

}
