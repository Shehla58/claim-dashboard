// import { TestBed } from '@angular/core/testing';

// import { ClaimServiceComponent } from '../services/claims.service';

// describe('ClaimsService', () => {
//   let service: ClaimsService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(ClaimsService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  private apiUrl = 'http://your-api-url/api/Claims';

  constructor(private http: HttpClient) {}

  getClaims(pageSize: number, pageNumber: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/claims?pageSize=${pageSize}&pageNumber=${pageNumber}`);
  }

  uploadBulkFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/upload`, formData);
  }

  createClaim(claimData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, claimData);
  }
}
