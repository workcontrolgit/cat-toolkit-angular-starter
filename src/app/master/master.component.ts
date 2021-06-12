import { Component, OnInit, ViewChild } from '@angular/core';

import { Position } from '@shared/models/position';
import { ApiHttpService } from '@app/services/api-http.service';
import { ApiEndpointsService } from '@app/services/api-endpoints.service';
import { DataTablesResponse } from '@shared/classes/data-tables-response';
import { Logger } from '@core';

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

  constructor(private apiHttpService: ApiHttpService, private apiEndpointsService: ApiEndpointsService) {}

  someClickHandler(info: any): void {
    this.message = info.id + ' - ' + info.firstName;
    log.debug(this.message);
  }

  wholeRowClick(position: Position): void {
    console.log('Whole row clicked.', position);
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
      // rowCallback: (row: Node, data: any[] | Object, index: number) => {
      //   const self = this;
      //   // Unbind first in order to avoid any duplicate handler
      //   // (see https://github.com/l-lin/angular-datatables/issues/87)
      //   // Note: In newer jQuery v3 versions, `unbind` and `bind` are
      //   // deprecated in favor of `off` and `on`
      //   $('td', row).off('click');
      //   $('td', row).on('click', () => {
      //     self.someClickHandler(data);
      //   });
      //   return row;
      // }
    };
  }
}
