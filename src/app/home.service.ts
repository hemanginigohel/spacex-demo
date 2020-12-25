import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  launch_year: string = '';
  launch_success: string = '';
  land_success: string = '';

  url = "https://api.spacexdata.com/v3/launches"

  constructor(public http: HttpClient) { }

  getSpaceXData() {
    let params = new HttpParams()
    params = params.append('limit', '100')
    if (this.launch_year) params = params.append('launch_year', this.launch_year)
    if (this.launch_success) params = params.append('launch_success', this.launch_success)
    if (this.land_success) params = params.append('land_success', this.land_success)

    return this.http.get(this.url, { params: params })
  }
}

