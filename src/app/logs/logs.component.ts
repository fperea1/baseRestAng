import { Component, OnInit } from '@angular/core';
import { Log } from './log';
import { LogService } from './log.service';
import { BreadcrumbService } from '../shared/menu/breadcrumb.service';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { saveAs } from 'file-saver';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  titulo: String = 'Logs';

  registros: Log[];

  cols: any[];

  loading: boolean;

  first: number;

  last: number;

  totalRecords: number;

  filtro: string;

  filtroTablaInicial= '{"first":0,"rows":10,"sortOrder":1,"filters":{},"globalFilter":null}';

  constructor(private logService: LogService, private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {

    this.breadcrumbService.cambioBreadcrumb('Logs'); 
    
    this.loading = true;

    this.cols = [
      { field: 'username', header: 'Usuario', width: '10%' },
      { field: 'entidad', header: 'Entidad', width: '15%' },
      { field: 'accion', header: 'Acción', width: '25%' },
      { field: 'observaciones', header: 'Observaciones', width: '25%' },
      { field: 'fecha', header: 'Fecha', width: '10%', data: true, format: 'dd/MM/yyyy HH:mm:ss' }
    ];

  }

  cargarTabla(res: any) {
    this.registros = res.list;
    this.totalRecords = res.totalRecords;
    this.loading = false;
  }

  exportar() {
    
		const filename = 'report_' + formatDate(Date.now(),'yyyy-MM-dd', 'en-US') + '.xlsx';
    this.logService.getReportExcel(this.filtro).subscribe(blob => saveAs(blob, filename));
  }

  loadRegistros(event: LazyLoadEvent) {

    this.loading = true;

    this.first=event.first;

    this.last=this.first + event.rows;

    this.filtro = JSON.stringify(event);

    setTimeout(() => {
          this.logService.findByFilter(this.filtro).subscribe({
              next: this.cargarTabla.bind(this)
          });
    }, 1000);
  }

  next() {
      this.first = this.first + this.last;
  }

  prev() {
      this.first = this.first - this.last;
  }

  clear(table: Table) {
      table.clear();
  }

  isLastPage(): boolean {
      return this.registros ? this.first === (this.registros.length - this.last): true;
  }

  isFirstPage(): boolean {
      return this.registros ? this.first === 0 : true;
  }

}
