import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  itemList: any;

  constructor() {}

  ngOnInit(): void {
    this.itemList = [
      {
        position_count: 1001,
        employee_count: 40,
        assignment_count: 150,
      },
    ];
  }
}
