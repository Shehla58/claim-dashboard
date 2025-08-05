// import {
//   Component,
//   Input,
//   Output,
//   EventEmitter,
//   OnInit,
//   ElementRef,
//   ViewChild,
//   OnDestroy,
//   inject
// } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-claim-service',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './claim-service.component.html',
//   styleUrls: ['./claim-service.component.css']
// })
// export class ClaimService implements OnInit, OnDestroy {
//   @Input() selectedBranch: any;
//   @Input() selectedApplication: any;
//   @Input() selectedClaim: any;
//   @Input() isEditable: boolean = false;
//   @Output() onClose = new EventEmitter<void>();

//   claimForm!: FormGroup;

//   @ViewChild('approvalInput') approvalInputRef!: ElementRef;
//   @ViewChild('clearanceInput') clearanceInputRef!: ElementRef;

//   private fb = inject(FormBuilder);

//   ngOnInit(): void {
//     this.initializeForm();
//     this.populateForm();
//     document.addEventListener('mousedown', this.handleClickOutside.bind(this));
//   }

//   ngOnDestroy(): void {
//     document.removeEventListener('mousedown', this.handleClickOutside.bind(this));
//   }

//   initializeForm(): void {
//     this.claimForm = this.fb.group({
//       branchCode: [''],
//       posCode: [''],
//       branchName: [''],
//       insuranceCompanyCode: [''],
//       insuranceCompanyName: [''],
//       invoiceNumber: [''],
//       wipNumber: [''],
//       fullClaimNumber: [''],
//       approvalForm: [''],
//       customerClearanceForm: ['']
//     });
//   }

//   populateForm(): void {
//     const claim = this.selectedClaim || this.selectedBranch || this.selectedApplication;
//     if (this.claimForm && claim) {
//       this.claimForm.patchValue({
//         branchCode: claim.branchCode || '',
//         posCode: claim.posCode || '',
//         branchName: claim.branchName || '',
//         insuranceCompanyCode: claim.insuranceCompanyCode || '',
//         insuranceCompanyName: claim.insuranceCompanyName || '',
//         invoiceNumber: claim.invoiceNumber || '',
//         wipNumber: claim.wipNumber || '',
//         fullClaimNumber: claim.fullClaimNumber || '',
//         approvalForm: claim.approvalForm || '',
//         customerClearanceForm: claim.customerClearanceForm || ''
//       });
//     }
//   }

//   handleClickOutside(event: MouseEvent): void {
//     const formContainer = document.querySelector('.form-container');
//     if (formContainer && !formContainer.contains(event.target as Node)) {
//       this.onClose.emit();
//     }
//   }

//   onFileSelected(event: Event, controlName: string): void {
//     const input = event.target as HTMLInputElement;
//     if (input.files && input.files.length > 0) {
//       const file = input.files[0];
//       console.log(`${controlName} File:`, file);
//       this.claimForm.patchValue({ [controlName]: file.name });
//     }
//   }

//   triggerFileInput(controlName: string): void {
//     if (controlName === 'approvalForm') {
//       this.approvalInputRef.nativeElement.click();
//     } else if (controlName === 'customerClearanceForm') {
//       this.clearanceInputRef.nativeElement.click();
//     }
//   }

//   onSubmit(): void {
//     if (this.claimForm.valid) {
//       const formData = this.claimForm.value;
//       const newClaim = {
//         branchCode: formData.branchCode,
//         posCode: formData.posCode,
//         insuranceCompanyCode: formData.insuranceCompanyCode,
//         claimNumber: formData.fullClaimNumber,
//         invoiceNumber: formData.invoiceNumber,
//         wipNumber: formData.wipNumber,
//         // Include file data as needed
//       };
//       console.log('Submitting Claim Data:', newClaim);
//       // TODO: Add your API call here
//       this.onClose.emit();
//     }
//   }
// }


// src/app/services/claims.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ClaimService {
//   private apiUrl = 'http://localhost:5062/api/Claims/create';

//   constructor(private http: HttpClient) {}

//   getClaims(pageSize: number, pageNumber: number): Observable<{ claims: any[] }> {
//     return this.http.get<{ claims: any[] }>(`${this.apiUrl}/claims?pageSize=${pageSize}&pageNumber=${pageNumber}`);
//   }

//   uploadBulkFile(file: File): Observable<any> {
//     const formData = new FormData();
//     formData.append('file', file);
//     return this.http.post(`${this.apiUrl}/upload`, formData);
//   }

//   createClaim(claimData: any): Observable<any> {
//     return this.http.post<any>(`${this.apiUrl}`, claimData);
//   }
// }


// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ClaimService {
//   private apiUrl = 'http://localhost:5062/api/Claims/create';

//   constructor(private http: HttpClient) {}

//   // ✅ Original method (optional if still used elsewhere)
//  getClaims(pageSize: number, pageNumber: number) {
//   return this.http.get<{ claims: any[] }>(
//     `http://localhost:5062/api/Claims/claims?pageSize=${pageSize}&pageNumber=${pageNumber}`
//   );
// }

//   // ✅ Fixed method to use the correct URL and token
//   getClaimsForAccountant(pageSize: number, pageNumber: number): Observable<any> {
//     const token = localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2NvdW50YW50VXNlciIsImVtYWlsIjoiYWNjb3VudGFudEBjb21wYW55LmNvbSIsImp0aSI6ImRkYzY2Y2I3LTBmOGItNGQzMy1hMTAyLWYyYjgxNDc0M2FhMyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFjY291bnRhbnQiLCJleHAiOjE3NDE5NzIxODgsImlzcyI6Ik1lcmlrIiwiYXVkIjoiTWVyaWsifQ.nSMHVqzN_00jAGx6_jU7w9jR7GumgmgRGOVvSgn2e9I'); // or 'authorizationHeader' if that’s your key
//     const headers = new HttpHeaders().set('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2NvdW50YW50VXNlciIsImVtYWlsIjoiYWNjb3VudGFudEBjb21wYW55LmNvbSIsImp0aSI6ImRkYzY2Y2I3LTBmOGItNGQzMy1hMTAyLWYyYjgxNDc0M2FhMyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFjY291bnRhbnQiLCJleHAiOjE3NDE5NzIxODgsImlzcyI6Ik1lcmlrIiwiYXVkIjoiTWVyaWsifQ.nSMHVqzN_00jAGx6_jU7w9jR7GumgmgRGOVvSgn2e9Iization', `Bearer ${token}`);

//     return this.http.get(
//       `http://localhost:5062/api/Claims/claims?pageSize=20&pageNumber=1=${pageNumber}&pageSize=${pageSize}`,
//       { headers }
//     );
//   }

//   uploadBulkFile(file: File): Observable<any> {
//     const formData = new FormData();
//     formData.append('file', file);
//     return this.http.post(`${this.apiUrl}/upload`, formData);
//   }

//   createClaim(claimData: any): Observable<any> {
//     return this.http.post<any>(`${this.apiUrl}`, claimData);
//   }
// }

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClaimService {
  private apiUrl = 'http://localhost:5062/api/Claims';

  constructor(private http: HttpClient) {}

  // ✅ Helper method to get token and set proper Authorization header
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2NvdW50YW50VXNlciIsImVtYWlsIjoiYWNjb3VudGFudEBjb21wYW55LmNvbSIsImp0aSI6ImRkYzY2Y2I3LTBmOGItNGQzMy1hMTAyLWYyYjgxNDc0M2FhMyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFjY291bnRhbnQiLCJleHAiOjE3NDE5NzIxODgsImlzcyI6Ik1lcmlrIiwiYXVkIjoiTWVyaWsifQ.nSMHVqzN_00jAGx6_jU7w9jR7GumgmgRGOVvSgn2e9I'); // store your token in localStorage under key 'token'
    return new HttpHeaders({
      authorizationheader: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2NvdW50YW50VXNlciIsImVtYWlsIjoiYWNjb3VudGFudEBjb21wYW55LmNvbSIsImp0aSI6ImRkYzY2Y2I3LTBmOGItNGQzMy1hMTAyLWYyYjgxNDc0M2FhMyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFjY291bnRhbnQiLCJleHAiOjE3NDE5NzIxODgsImlzcyI6Ik1lcmlrIiwiYXVkIjoiTWVyaWsifQ.nSMHVqzN_00jAGx6_jU7w9jR7GumgmgRGOVvSgn2e9I`,
    });
  }

  getClaims(pageSize: number, pageNumber: number) {
    return this.http.get<{ claims: any[] }>(
      `${this.apiUrl}/claims?pageSize=${pageSize}&pageNumber=${pageNumber}`,
      { headers: this.getAuthHeaders() } // ✅ proper syntax here
    );
  }

  uploadBulkFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.apiUrl}/upload-bulk`, formData, {
      headers: this.getAuthHeaders(),
    });
  }

  createClaim(claim: any) {
    return this.http.post(`${this.apiUrl}/create`, claim, {
      headers: this.getAuthHeaders(),
    });
  }
}
