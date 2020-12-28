import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public homeSevice: HomeService, private render: Renderer2) { }

  spaceXData: any = [];
  activeYear: any = "";
  activeLaunch: any = "";
  activeLand: any = "";
  developdBy = "Hemangini Gohel";

  ngOnInit(): void {
    this.getSpecxData();
  }

  successLaunch(val) {
    this.activeLaunch == val ? this.activeLaunch = '' : this.activeLaunch = val;
    this.homeSevice.launch_success == val ? this.homeSevice.launch_success = '' : this.homeSevice.launch_success = val;
    this.getSpecxData();
  }

  successLand(val) {
    this.activeLand == val ? this.activeLand = '' : this.activeLand = val;
    this.homeSevice.land_success == val ? this.homeSevice.land_success = '' : this.homeSevice.land_success = val;
    this.getSpecxData();
  }

  setYear(val) {
    this.activeYear == val ? this.activeYear = '' : this.activeYear = val;
    this.homeSevice.launch_year == val ? this.homeSevice.launch_year = '' : this.homeSevice.launch_year = val;
    this.getSpecxData();
  }

  getSpecxData() {
    this.homeSevice.getSpaceXData().subscribe(response => {
      this.spaceXData = response;
    }, error => {
      console.log(error)
    })
  }

}
