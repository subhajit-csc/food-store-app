import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Catagories } from 'src/app/_models/catalgories';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {

  constructor(private http: HttpClient) { }

  getAllCatagories() : Observable<Catagories[]> {
    return this.http.get<Catagories[]>('/api/v1/catalog');
  }
}
