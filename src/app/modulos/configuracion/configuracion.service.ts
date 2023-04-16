import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Configuracion } from './configuracion';

@Injectable()
export class ConfiguracionService {

  constructor(private http: HttpClient) { }

  findByFilter(filtro: string): Observable <any> {
  
    const params = filtro ? { params: new HttpParams().set('filtro', filtro) } : {};
    return this.http.get<any>('configuracion/findByFilter', params);
  }

  getReportExcel(filtro: string): Observable <Blob> {
  
    return this.http.get('configuracion/getReportExcel?filtro='+encodeURI(filtro), {responseType: 'blob'});
    
  }

  findById(id: number): Observable <Configuracion> {
  
    const params = id ? { params: new HttpParams().set('id', id) } : {};
    return this.http.get<Configuracion>('configuracion/find', params);
  }

  update(configuracion: Configuracion) {
    
	if (configuracion.id == null) {
      return this.http.post(this.endpoint + '/save', configuracion, {responseType: 'text'});
    } else {
      return this.http.put(this.endpoint + '/update/' + configuracion.id, configuracion, {responseType: 'text'});
    }
  }

}
