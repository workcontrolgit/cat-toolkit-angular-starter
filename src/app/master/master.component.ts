import { Component, OnInit, ViewChild } from '@angular/core';

import { Position } from '@shared/models/position';
import { ApiHttpService } from '@app/services/api-http.service';
import { ApiEndpointsService } from '@app/services/api-endpoints.service';
import { DataTablesResponse } from '@shared/classes/data-tables-response';
import { Logger } from '@core';
import { AuthService } from '@core/auth.service';
//import { Observable } from 'rxjs';

const log = new Logger('Master');
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss'],
})
export class MasterComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  positions: Position[];
  message = '';
  // isAuthenticated: Observable<boolean>;
  // isDoneLoading: Observable<boolean>;
  // canActivateProtectedRoutes: Observable<boolean>;

  constructor(
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService,
    ) {
    }

  wholeRowClick(position: Position): void {
    log.debug('Whole row clicked.', position);
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        //TODO Load from Akita
        //dataTablesParameters.start = 20;
        // Call WebAPI to get positions
        this.apiHttpService
          .post(this.apiEndpointsService.postPositionsPagedEndpoint(), dataTablesParameters)
          .subscribe((resp: DataTablesResponse) => {
            this.positions = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: [],
            });
          });
      },
      // Set column title and data field
      columns: [
        {
          title: 'Number',
          data: 'positionNumber',
        },
        {
          title: 'Title',
          data: 'positionTitle',
        },
        {
          title: 'Description',
          data: 'positionDescription',
        },
        {
          title: 'Salary',
          data: 'positionSalary',
        },
      ],
    };
  }
}
