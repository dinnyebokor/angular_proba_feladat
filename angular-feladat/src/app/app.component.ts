import { Component } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string | undefined;
  experience: number | undefined;
  position: string | undefined;
  email: string | undefined;
  status: string | undefined;
  date: string | undefined;

  rows: Array<{
    name: string | undefined,
    experience: number | undefined,
    position: string | undefined,
    email: string | undefined,
    status: string | undefined,
    date: string | undefined
  }> = [];


  showUnsorted: boolean = false;

  buttonClicked() {
    this.showUnsorted = true;
    this.rows.push({
      name: this.name,
      experience: this.experience,
      position: this.position,
      email: this.email,
      status: this.status,
      date: this.date
    });
  }

  sortColumn = 'name';
  sortOrder = 'asc';

  sort(column: string) {
    if (this.sortColumn === column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortOrder = 'asc';
    }
  }

  //For filtering rows

  filteredRows = this.rows;
  filterText: string = "";

  applyFilter() {

    const filteredRows = this.rows.filter(row => {
      return row.name?.toLowerCase().includes(this.filterText.toLowerCase()) ||
        row.experience?.toString().includes(this.filterText) ||
        row.position?.toLowerCase().includes(this.filterText.toLowerCase()) ||
        row.email?.toLowerCase().includes(this.filterText.toLowerCase()) ||
        row.status?.toLowerCase().includes(this.filterText.toLowerCase()) ||
        row.date?.toLowerCase().includes(this.filterText.toLowerCase());
    });
    this.filteredRows = filteredRows;
  }

  //For status update

  updateStatus(row: any, newStatus: string) {
    row.status = newStatus;
  }
}