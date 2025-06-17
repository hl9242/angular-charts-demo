import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class V2vDashboardHttpService {

  constructor(private http: HttpClient) { }

  getV2vDashboardChartReq(req: any): Observable<any[]> {
    let params = new HttpParams().set('page', '0').set('size', '50000');
    return this.http.post<any[]>(`${environment.constants.domain}v1/api/v2v/list`, req, { params });
  }
}