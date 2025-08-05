

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimFormComponent } from '../../claim-form/claim-form.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accountant',
  standalone: true,
  imports: [CommonModule, ClaimFormComponent, FormsModule],
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.scss'],
})
export class AccountantComponent implements OnInit {
  tableData: any[] = [];
  paginatedData: any[] = [];

  selectedFile: File | null = null;
  selectedRowData: any = null;
  showClaimForm: boolean = false;

  currentPage: number = 1;
  rowsPerPage: number = 20;
  totalPages: number = 0;
  totalPagesArray: number[] = [];

  isDropdownOpen: boolean = false;
  loggedInUser: string | null = 'Accountant User';

  selectedClaim: any = null;
  searchQuery: string = ''; // 🔍 Added search query for filtering

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.fetchClaims();
  }

  async fetchClaims() {
    try {
      const response = await fetch(
        'http://localhost:5062/api/Claims/claims?pageSize=7500&pageNumber=1',
        {
          method: 'GET',
          headers: {
            authorizationheader:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2NvdW50YW50VXNlciIsImVtYWlsIjoiYWNjb3VudGFudEBjb21wYW55LmNvbSIsImp0aSI6ImRkYzY2Y2I3LTBmOGItNGQzMy1hMTAyLWYyYjgxNDc0M2FhMyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFjY291bnRhbnQiLCJleHAiOjE3NDE5NzIxODgsImlzcyI6Ik1lcmlrIiwiYXVkIjoiTWVyaWsifQ.nSMHVqzN_00jAGx6_jU7w9jR7GumgmgRGOVvSgn2e9I',
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
       console.log("API Data: ", data);
      this.tableData = data.claims || [];
      this.updatePaginatedData();
    } catch (error) {
      console.error('Error fetching claims:', error);
    }
  }

  handleSearchQueryChange(query: string) {
    this.searchQuery = query.toLowerCase();
    this.currentPage = 1;
    this.updatePaginatedData();
  }

  filteredData(): any[] {
    if (!this.searchQuery.trim()) return this.tableData;
    return this.tableData.filter((claim) =>
      Object.values(claim).some((value) =>
        String(value).toLowerCase().includes(this.searchQuery)
      )
    );
  }

  calculatePagination() {
    this.totalPages = Math.ceil(this.filteredData().length / this.rowsPerPage);
    this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  updatePaginatedData() {
    const filtered = this.filteredData();
    const startIndex = (this.currentPage - 1) * this.rowsPerPage;
    const endIndex = startIndex + this.rowsPerPage;
    this.paginatedData = filtered.slice(startIndex, endIndex);
    this.calculatePagination();
  }

  changePage(page: number) {
    this.currentPage = page;
    this.updatePaginatedData();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedData();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedData();
    }
  }

  goToPage(page: number) {
    if (page !== this.currentPage) {
      this.currentPage = page;
      this.updatePaginatedData();
    }
  }

  getPaginationRange(): number[] {
    const range: number[] = [];
    for (let i = -1; i <= 3; i++) {
      const page = this.currentPage + i;
      if (page > 0 && page <= this.totalPages) {
        range.push(page);
      }
    }
    return range;
  }

  handlePageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedData();
    }
  }

  setRowsPerPage(value: string): void {
    this.rowsPerPage = Number(value);
    this.currentPage = 1;
    this.updatePaginatedData();
  }

  openClaimForm(claim: any): void {
    this.selectedClaim = { ...claim };
    this.showClaimForm = true;
  }

  handleFormSubmit(formData: any): void {
    console.log('Submitted claim form data:', formData);
    this.closeClaimForm();
  }

  closeClaimForm(): void {
    this.showClaimForm = false;
    this.selectedClaim = null;
  }

  uploadSingle() {
    console.log('Upload Single clicked');
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
      console.log('Selected file:', this.selectedFile.name);
      this.submitFile();
    }
  }

  async submitFile() {
    if (!this.selectedFile) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    try {
      const response = await fetch(
        'http://localhost:5062/api/Claims/upload?uploadId=43',
        {
          method: 'POST',
          headers: {
            authorizationheader:
              `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2NvdW50YW50VXNlciIsImVtYWlsIjoiYWNjb3VudGFudEBjb21wYW55LmNvbSIsImp0aSI6ImRkYzY2Y2I3LTBmOGItNGQzMy1hMTAyLWYyYjgxNDc0M2FhMyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFjY291bnRhbnQiLCJleHAiOjE3NDE5NzIxODgsImlzcyI6Ik1lcmlrIiwiYXVkIjoiTWVyaWsifQ.nSMHVqzN_00jAGx6_jU7w9jR7GumgmgRGOVvSgn2e9I`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log('Upload successful:', result);
      } else {
        console.error('Upload failed:', await response.text());
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }

  markAsReviewed() {
    console.log('Reviewed button clicked');
  }

  handleDropdownToggle() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  handleLogout() {
    localStorage.removeItem('authToken');
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
