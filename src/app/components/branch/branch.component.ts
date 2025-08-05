// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common'; // ✅ Import this

// @Component({
//   selector: 'app-branch',
//   templateUrl: './branch.component.html',
//   styleUrls: ['./branch.component.scss'],
//    imports: [
//     CommonModule,
//    ]
// })
// export class BranchComponent implements OnInit {
//   searchResults: any[] = [];
//   filteredResults: any[] = [];
//   isDropdownOpen: boolean = false;
//   currentPage: number = 1;
//   rowsPerPage: number = 10;
//   loggedInUser: string | null = '';
//   userBranchName: string = '';

//   constructor(private router: Router) {}

//   ngOnInit(): void {
//     this.loggedInUser = localStorage.getItem('userName');
//     const userBranchMap: { [key: string]: string } = {
//       JeddahHarmainUser: 'JEDDAH HARMAIN',
//       MakkahUser: 'MAKKAH',
//       YanbuUser: 'YANBU',
//       TaifUser: 'TAIF',
//       AbhaUser: 'ABHA',
//       MadinaManawaraUser: 'MADINA MANAWARA',
//       NajranUser: 'NAJRAN',
//       TabukUser: 'TABUK'
//     };
//     this.userBranchName = userBranchMap[this.loggedInUser || ''] || '';

//     this.fetchSearchData();
//   }

//   handleDropdownToggle() {
//     this.isDropdownOpen = !this.isDropdownOpen;
//   }

//   handleLogout() {
//     localStorage.clear();
//     this.router.navigate(['/login']);
//   }

//   get totalPages(): number {
//     return Math.ceil(this.filteredResults.length / this.rowsPerPage);
//   }

//   get paginatedData(): any[] {
//     const start = (this.currentPage - 1) * this.rowsPerPage;
//     return this.filteredResults.slice(start, start + this.rowsPerPage);
//   }

//   getPaginationButtons(): (number | string)[] {
//     const buttons: (number | string)[] = [];
//     const totalPages = this.totalPages;

//     if (totalPages <= 5) {
//       for (let i = 1; i <= totalPages; i++) {
//         buttons.push(i);
//       }
//     } else {
//       if (this.currentPage <= 3) {
//         buttons.push(1, 2, 3, '...', totalPages);
//       } else if (this.currentPage >= totalPages - 2) {
//         buttons.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
//       } else {
//         buttons.push(1, '...', this.currentPage - 1, this.currentPage, this.currentPage + 1, '...', totalPages);
//       }
//     }

//     return buttons;
//   }

//   fetchSearchData() {
//     const token = localStorage.getItem('apiKey');
//     fetch('http://localhost:5062/api/search?query=123&pageNumber=1&pageSize=5000', {
//       headers: {
//         'Content-Type': 'application/json',
//         authorizationheader: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2NvdW50YW50VXNlciIsImVtYWlsIjoiYWNjb3VudGFudEBjb21wYW55LmNvbSIsImp0aSI6ImRkYzY2Y2I3LTBmOGItNGQzMy1hMTAyLWYyYjgxNDc0M2FhMyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFjY291bnRhbnQiLCJleHAiOjE3NDE5NzIxODgsImlzcyI6Ik1lcmlrIiwiYXVkIjoiTWVyaWsifQ.nSMHVqzN_00jAGx6_jU7w9jR7GumgmgRGOVvSgn2e9I`
//       }
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Search API fetch failed: ${response.statusText}`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         const allResults = data.results || [];
//         this.searchResults = allResults;
//         if (this.userBranchName) {
//           //  this.filteredResults = allResults.filter(item: => item.branchName === this.userBranchName);
//           this.filteredResults = allResults.filter((item: any) => item.branchName === this.userBranchName);

//         } else {
//           this.filteredResults = allResults;
//         }
//       })
//       .catch(error => {
//         console.error('❌ Error fetching search data:', error.message);
//       });
//   }

//   handleRowsPerPageChange(event: any) {
//     this.rowsPerPage = parseInt(event.target.value, 10);
//     this.currentPage = 1;
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-branch',
//   standalone: true,
//   templateUrl: './branch.component.html',
//   styleUrls: ['./branch.component.scss'],
//   imports: [
//     CommonModule
//   ]
// })
// export class BranchComponent implements OnInit {
//   searchResults: any[] = [];
//   filteredResults: any[] = [];
//   isDropdownOpen: boolean = false;
//   currentPage: number = 1;
//   rowsPerPage: number = 10;
//   loggedInUser: string | null = '';
//   userBranchName: string = '';

//   constructor(private router: Router) {}

//   ngOnInit(): void {
//     this.loggedInUser = localStorage.getItem('userName');
//     const userBranchMap: { [key: string]: string } = {
//       JeddahHarmainUser: 'JEDDAH HARMAIN',
//       MakkahUser: 'MAKKAH',
//       YanbuUser: 'YANBU',
//       TaifUser: 'TAIF',
//       AbhaUser: 'ABHA',
//       MadinaManawaraUser: 'MADINA MANAWARA',
//       NajranUser: 'NAJRAN',
//       TabukUser: 'TABUK'
//     };
//     this.userBranchName = userBranchMap[this.loggedInUser || ''] || '';
//     this.fetchSearchData();
//   }

//   handleDropdownToggle() {
//     this.isDropdownOpen = !this.isDropdownOpen;
//   }

//   handleLogout() {
//     localStorage.clear();
//     this.router.navigate(['/login']);
//   }

//   get totalPages(): number {
//     return Math.ceil(this.filteredResults.length / this.rowsPerPage);
//   }

//   get paginatedData(): any[] {
//     const start = (this.currentPage - 1) * this.rowsPerPage;
//     return this.filteredResults.slice(start, start + this.rowsPerPage);
//   }

//   getPaginationButtons(): (number | string)[] {
//     const buttons: (number | string)[] = [];
//     const totalPages = this.totalPages;

//     if (totalPages <= 5) {
//       for (let i = 1; i <= totalPages; i++) {
//         buttons.push(i);
//       }
//     } else {
//       if (this.currentPage <= 3) {
//         buttons.push(1, 2, 3, '...', totalPages);
//       } else if (this.currentPage >= totalPages - 2) {
//         buttons.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
//       } else {
//         buttons.push(1, '...', this.currentPage - 1, this.currentPage, this.currentPage + 1, '...', totalPages);
//       }
//     }

//     return buttons;
//   }

//   fetchSearchData() {
//   fetch('http://localhost:5062/api/search?query=123&pageNumber=1&pageSize=5000', {
//     headers: {
//       'Content-Type': 'application/json',
//       'authorizationheader': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2NvdW50YW50VXNlciIsImVtYWlsIjoiYWNjb3VudGFudEBjb21wYW55LmNvbSIsImp0aSI6ImRkYzY2Y2I3LTBmOGItNGQzMy1hMTAyLWYyYjgxNDc0M2FhMyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFjY291bnRhbnQiLCJleHAiOjE3NDE5NzIxODgsImlzcyI6Ik1lcmlrIiwiYXVkIjoiTWVyaWsifQ.nSMHVqzN_00jAGx6_jU7w9jR7GumgmgRGOVvSgn2e9I'
//     }
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`Search API fetch failed: ${response.statusText}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     const allResults = data.results || [];
//     this.searchResults = allResults;
//     if (this.userBranchName) {
//       this.filteredResults = allResults.filter((item: any) => item.branchName === this.userBranchName);
//     } else {
//       this.filteredResults = allResults;
//     }
//     console.log('✅ Filtered Data:', this.filteredResults);
//   })
//   .catch(error => {
//     console.error('❌ Error fetching search data:', error.message);
//   });
// }


//   handleRowsPerPageChange(event: any) {
//     this.rowsPerPage = parseInt(event.target.value, 10);
//     this.currentPage = 1;
//   }

//   goToPage(page: number) {
//     if (typeof page === 'number') {
//       this.currentPage = page;
//     }
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';

//  @Component({
//   selector: 'app-branch',
//    standalone: true,
//       templateUrl: './branch.component.html',
//   styleUrls: ['./branch.component.scss'],
//    imports: [
//      CommonModule
//    ]
//  })
// export class BranchComponent implements OnInit {
//   searchResults: any[] = [];
//   filteredResults: any[] = [];
//   isDropdownOpen: boolean = false;
//   currentPage: number = 1;
//   rowsPerPage: number = 10;
//   loggedInUser: string | null = '';
//   userBranchName: string = '';

//   constructor(private router: Router) {}

//   ngOnInit(): void {
//     this.loggedInUser = localStorage.getItem('userName');
//     const userBranchMap: { [key: string]: string } = {
//       JeddahHarmainUser: 'JEDDAH HARMAIN',
//       MakkahUser: 'MAKKAH',
//       YanbuUser: 'YANBU',
//       TaifUser: 'TAIF',
//       AbhaUser: 'ABHA',
//       MadinaManawaraUser: 'MADINA MANAWARA',
//       NajranUser: 'NAJRAN',
//       TabukUser: 'TABUK',
//     };
//     this.userBranchName = userBranchMap[this.loggedInUser || ''] || '';
//     this.fetchSearchData();
//   }

//   handleDropdownToggle() {
//     this.isDropdownOpen = !this.isDropdownOpen;
//   }

//   handleLogout() {
//     localStorage.clear();
//     this.router.navigate(['/login']);
//   }

//   get totalPages(): number {
//     return Math.ceil(this.filteredResults.length / this.rowsPerPage);
//   }

//   get paginatedData(): any[] {
//     const start = (this.currentPage - 1) * this.rowsPerPage;
//     return this.filteredResults.slice(start, start + this.rowsPerPage);
//   }

//   getPaginationButtons(): (number | string)[] {
//     const buttons: (number | string)[] = [];
//     const totalPages = this.totalPages;

//     if (totalPages <= 5) {
//       for (let i = 1; i <= totalPages; i++) {
//         buttons.push(i);
//       }
//     } else {
//       if (this.currentPage <= 3) {
//         buttons.push(1, 2, 3, '...', totalPages);
//       } else if (this.currentPage >= totalPages - 2) {
//         buttons.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
//       } else {
//         buttons.push(
//           1,
//           '...',
//           this.currentPage - 1,
//           this.currentPage,
//           this.currentPage + 1,
//           '...',
//           totalPages
//         );
//       }
//     }

//     return buttons;
//   }

//   fetchSearchData() {
//     fetch('http://localhost:5062/api/search?query=123&pageNumber=1&pageSize=5000', {
//       headers: {
//         'Content-Type': 'application/json',
//         authorizationheader:
//           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2NvdW50YW50VXNlciIsImVtYWlsIjoiYWNjb3VudGFudEBjb21wYW55LmNvbSIsImp0aSI6ImRkYzY2Y2I3LTBmOGItNGQzMy1hMTAyLWYyYjgxNDc0M2FhMyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFjY291bnRhbnQiLCJleHAiOjE3NDE5NzIxODgsImlzcyI6Ik1lcmlrIiwiYXVkIjoiTWVyaWsifQ.nSMHVqzN_00jAGx6_jU7w9jR7GumgmgRGOVvSgn2e9I',
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Search API fetch failed: ${response.statusText}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         const allResults = data.results || [];
//         this.searchResults = allResults;
//         if (this.userBranchName) {
//           this.filteredResults = allResults.filter(
//             (item: any) => item.branchName === this.userBranchName
//           );
//         } else {
//           this.filteredResults = allResults;
//         }
//         this.currentPage = 1; // Reset to first page after fetching data
//         console.log('✅ Filtered Data:', this.filteredResults);
//       })
//       .catch((error) => {
//         console.error('❌ Error fetching search data:', error.message);
//       });
//   }

//   handleRowsPerPageChange(event: any) {
//     this.rowsPerPage = parseInt(event.target.value, 10);
//     this.currentPage = 1;
//   }

//   goToPage(page: number) {
//     if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
//       this.currentPage = page;
//     }
//   }

//   goToPreviousPage() {
//     if (this.currentPage > 1) {
//       this.currentPage--;
//     }
//   }

//   goToNextPage() {
//     if (this.currentPage < this.totalPages) {
//       this.currentPage++;
//     }
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-branch',
//   standalone: true,
//   templateUrl: './branch.component.html',
//   styleUrls: ['./branch.component.scss'],
//   imports: [CommonModule]
// })
// export class BranchComponent implements OnInit {
//   searchResults: any[] = [];
//   filteredResults: any[] = [];
//   isDropdownOpen: boolean = false;
//   currentPage: number = 1;
//   rowsPerPage: number = 10;
//   loggedInUser: string | null = '';
//   userBranchName: string = '';

//   constructor(private router: Router) {}

//   ngOnInit(): void {
//     this.loggedInUser = localStorage.getItem('userName');
//     const userBranchMap: { [key: string]: string } = {
//       JeddahHarmainUser: 'JEDDAH HARMAIN',
//       MakkahUser: 'MAKKAH',
//       YanbuUser: 'YANBU',
//       TaifUser: 'TAIF',
//       AbhaUser: 'ABHA',
//       MadinaManawaraUser: 'MADINA MANAWARA',
//       NajranUser: 'NAJRAN',
//       TabukUser: 'TABUK',
//     };
//     this.userBranchName = userBranchMap[this.loggedInUser || ''] || '';
//     this.fetchSearchData();
//   }

//   handleDropdownToggle() {
//     this.isDropdownOpen = !this.isDropdownOpen;
//   }

//   handleLogout() {
//     localStorage.clear();
//     this.router.navigate(['/login']);
//   }

//   get totalPages(): number {
//     return Math.ceil(this.filteredResults.length / this.rowsPerPage);
//   }

//   get paginatedData(): any[] {
//     const start = (this.currentPage - 1) * this.rowsPerPage;
//     return this.filteredResults.slice(start, start + this.rowsPerPage);
//   }

//   getPaginationButtons(): (number | '...')[] {
//     const pages: (number | '...')[] = [];

//     if (this.totalPages <= 5) {
//       for (let i = 1; i <= this.totalPages; i++) {
//         pages.push(i);
//       }
//     } else {
//       if (this.currentPage <= 3) {
//         pages.push(1, 2, 3, '...', this.totalPages);
//       } else if (this.currentPage >= this.totalPages - 2) {
//         pages.push(1, '...', this.totalPages - 2, this.totalPages - 1, this.totalPages);
//       } else {
//         pages.push(
//           1,
//           '...',
//           this.currentPage - 1,
//           this.currentPage,
//           this.currentPage + 1,
//           '...',
//           this.totalPages
//         );
//       }
//     }

//     return pages;
//   }

//   fetchSearchData() {
//     fetch('http://localhost:5062/api/search?query=123&pageNumber=1&pageSize=5000', {
//       headers: {
//         'Content-Type': 'application/json',
//         authorizationheader:
//           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2NvdW50YW50VXNlciIsImVtYWlsIjoiYWNjb3VudGFudEBjb21wYW55LmNvbSIsImp0aSI6ImRkYzY2Y2I3LTBmOGItNGQzMy1hMTAyLWYyYjgxNDc0M2FhMyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFjY291bnRhbnQiLCJleHAiOjE3NDE5NzIxODgsImlzcyI6Ik1lcmlrIiwiYXVkIjoiTWVyaWsifQ.nSMHVqzN_00jAGx6_jU7w9jR7GumgmgRGOVvSgn2e9I',
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Search API fetch failed: ${response.statusText}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         const allResults = data.results || [];
//         this.searchResults = allResults;
//         if (this.userBranchName) {
//           this.filteredResults = allResults.filter(
//             (item: any) => item.branchName === this.userBranchName
//           );
//         } else {
//           this.filteredResults = allResults;
//         }
//         this.currentPage = 1;
//         console.log('✅ Filtered Data:', this.filteredResults);
//       })
//       .catch((error) => {
//         console.error('❌ Error fetching search data:', error.message);
//       });
//   }

//   handleRowsPerPageChange(event: any) {
//     this.rowsPerPage = parseInt(event.target.value, 10);
//     this.currentPage = 1;
//   }

//   goToPage(page: number): void {
//     if (page >= 1 && page <= this.totalPages) {
//       this.currentPage = page;
//     }
//   }

//   goToPreviousPage(): void {
//     if (this.currentPage > 1) {
//       this.currentPage--;
//     }
//   }

//   goToNextPage(): void {
//     if (this.currentPage < this.totalPages) {
//       this.currentPage++;
//     }
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-branch',
//   standalone: true,
//   templateUrl: './branch.component.html',
//   styleUrls: ['./branch.component.scss'],
//    imports: [CommonModule],
// })
// export class BranchComponent implements OnInit {
//   searchResults: any[] = [];
//   filteredResults: any[] = [];
//   isDropdownOpen: boolean = false;
//   currentPage: number = 1;
//   rowsPerPage: number = 10;
//   loggedInUser: string | null = '';
//   userBranchName: string = '';

//   constructor(private router: Router) {}

//   ngOnInit(): void {
//     this.loggedInUser = localStorage.getItem('userName');
//     const userBranchMap: { [key: string]: string } = {
//       JeddahHarmainUser: 'JEDDAH HARMAIN',
//       MakkahUser: 'MAKKAH',
//       YanbuUser: 'YANBU',
//       TaifUser: 'TAIF',
//       AbhaUser: 'ABHA',
//       MadinaManawaraUser: 'MADINA MANAWARA',
//       NajranUser: 'NAJRAN',
//       TabukUser: 'TABUK',
    // };
    // this.userBranchName = userBranchMap[this.loggedInUser || ''] || '';
    // If user is 'BranchUser', show all branches
//   if (this.loggedInUser === 'BranchUser') {
//     this.userBranchName = ''; // Empty means no filtering
//   } else {
//     this.userBranchName = userBranchMap[this.loggedInUser || ''] || '';
//   }
    
    
//     this.fetchSearchData();
//   }

//   handleDropdownToggle() {
//     this.isDropdownOpen = !this.isDropdownOpen;
//   }

//   handleLogout() {
//     localStorage.clear();
//     this.router.navigate(['/login']);
//   }

//   get totalPages(): number {
//     return Math.ceil(this.filteredResults.length / this.rowsPerPage);
//   }

//   get paginatedData(): any[] {
//     const start = (this.currentPage - 1) * this.rowsPerPage;
//     return this.filteredResults.slice(start, start + this.rowsPerPage);
//   }

//   getPaginationButtons(): (number | string)[] {
//     const buttons: (number | string)[] = [];
//     const totalPages = this.totalPages;

//     if (totalPages <= 5) {
//       for (let i = 1; i <= totalPages; i++) {
//         buttons.push(i);
//       }
//     } else {
//       if (this.currentPage <= 3) {
//         buttons.push(1, 2, 3, '...', totalPages);
//       } else if (this.currentPage >= totalPages - 2) {
//         buttons.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
//       } else {
//         buttons.push(
//           1,
//           '...',
//           this.currentPage - 1,
//           this.currentPage,
//           this.currentPage + 1,
//           '...',
//           totalPages
//         );
//       }
//     }

//     return buttons;
//   }

//   fetchSearchData() {
//     fetch('http://localhost:5062/api/search?query=123&pageNumber=1&pageSize=5000', {
//       headers: {
//         'Content-Type': 'application/json',
//         authorizationheader:
//           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2NvdW50YW50VXNlciIsImVtYWlsIjoiYWNjb3VudGFudEBjb21wYW55LmNvbSIsImp0aSI6ImRkYzY2Y2I3LTBmOGItNGQzMy1hMTAyLWYyYjgxNDc0M2FhMyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFjY291bnRhbnQiLCJleHAiOjE3NDE5NzIxODgsImlzcyI6Ik1lcmlrIiwiYXVkIjoiTWVyaWsifQ.nSMHVqzN_00jAGx6_jU7w9jR7GumgmgRGOVvSgn2e9I',
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Search API fetch failed: ${response.statusText}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         const allResults = data.results || [];
//         this.searchResults = allResults;
//         this.filteredResults = this.userBranchName
//           ? allResults.filter((item: any) => item.branchName === this.userBranchName)
//           : allResults;
//         this.currentPage = 1;
//         console.log('✅ Filtered Data:', this.filteredResults);
//       })
//       .catch((error) => {
//         console.error('❌ Error fetching search data:', error.message);
//       });
//   }

//   handleRowsPerPageChange(event: any) {
//     this.rowsPerPage = parseInt(event.target.value, 10);
//     this.currentPage = 1;
//   }

//   goToPage(page: number) {
//     if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
//       this.currentPage = page;
//     }
//   }

//   goToPreviousPage() {
//     if (this.currentPage > 1) {
//       this.currentPage--;
//     }
//   }

//   goToNextPage() {
//     if (this.currentPage < this.totalPages) {
//       this.currentPage++;
//     }
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-branch',
//   standalone: true,
//   templateUrl: './branch.component.html',
//   styleUrls: ['./branch.component.scss'],
//    imports: [CommonModule],
// })
// export class BranchComponent implements OnInit {
//   searchResults: any[] = [];
//   filteredResults: any[] = [];
//   isDropdownOpen: boolean = false;
//   currentPage: number = 1;
//   rowsPerPage: number = 10;
//   loggedInUser: string | null = '';
//   userBranchName: string = '';

//   constructor(private router: Router) {}

//   ngOnInit(): void {
//     this.loggedInUser = localStorage.getItem('userName');
//     const userBranchMap: { [key: string]: string } = {
//       JeddahHarmainUser: 'JEDDAH HARMAIN',
//       MakkahUser: 'MAKKAH',
//       YanbuUser: 'YANBU',
//       TaifUser: 'TAIF',
//       AbhaUser: 'ABHA',
//       MadinaManawaraUser: 'MADINA MANAWARA',
//       NajranUser: 'NAJRAN',
//       TabukUser: 'TABUK',
//     };
//     this.userBranchName = userBranchMap[this.loggedInUser || ''] || '';
//     this.fetchSearchData();
//   }

//   handleDropdownToggle() {
//     this.isDropdownOpen = !this.isDropdownOpen;
//   }

//   handleLogout() {
//     localStorage.clear();
//     this.router.navigate(['/login']);
//   }

//   get totalPages(): number {
//     return Math.ceil(this.filteredResults.length / this.rowsPerPage);
//   }

//   get paginatedData(): any[] {
//     const start = (this.currentPage - 1) * this.rowsPerPage;
//     return this.filteredResults.slice(start, start + this.rowsPerPage);
//   }

//   getPaginationButtons(): (number | string)[] {
//     const buttons: (number | string)[] = [];
//     const totalPages = this.totalPages;

//     if (totalPages <= 5) {
//       for (let i = 1; i <= totalPages; i++) {
//         buttons.push(i);
//       }
//     } else {
//       if (this.currentPage <= 3) {
//         buttons.push(1, 2, 3, '...', totalPages);
//       } else if (this.currentPage >= totalPages - 2) {
//         buttons.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
//       } else {
//         buttons.push(
//           1,
//           '...',
//           this.currentPage - 1,
//           this.currentPage,
//           this.currentPage + 1,
//           '...',
//           totalPages
//         );
//       }
//     }

//     return buttons;
//   }

//   fetchSearchData() {
//     fetch('http://localhost:5062/api/search?query=123&pageNumber=1&pageSize=5000', {
//       headers: {
//         'Content-Type': 'application/json',
//         authorizationheader:
//           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2NvdW50YW50VXNlciIsImVtYWlsIjoiYWNjb3VudGFudEBjb21wYW55LmNvbSIsImp0aSI6ImRkYzY2Y2I3LTBmOGItNGQzMy1hMTAyLWYyYjgxNDc0M2FhMyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFjY291bnRhbnQiLCJleHAiOjE3NDE5NzIxODgsImlzcyI6Ik1lcmlrIiwiYXVkIjoiTWVyaWsifQ.nSMHVqzN_00jAGx6_jU7w9jR7GumgmgRGOVvSgn2e9I',
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
          // throw new Error(Search API fetch failed: ${response.statusText});
//         }
//         return response.json();
//       })
//       .then((data) => {
//         const allResults = data.results || [];
//         this.searchResults = allResults;
//         this.filteredResults = this.userBranchName
//           ? allResults.filter((item: any) => item.branchName === this.userBranchName)
//           : allResults;
//         this.currentPage = 1;
//         console.log('✅ Filtered Data:', this.filteredResults);
//       })
//       .catch((error) => {
//         console.error('❌ Error fetching search data:', error.message);
//       });
//   }

//   handleRowsPerPageChange(event: any) {
//     this.rowsPerPage = parseInt(event.target.value, 10);
//     this.currentPage = 1;
//   }

//   goToPage(page: number) {
//     if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
//       this.currentPage = page;
//     }
//   }

//   goToPreviousPage() {
//     if (this.currentPage > 1) {
//       this.currentPage--;
//     }
//   }

//   goToNextPage() {
//     if (this.currentPage < this.totalPages) {
//       this.currentPage++;
//     }
//   }
// } 

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-branch',
  standalone: true,
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss'],
  imports: [CommonModule]
})
export class BranchComponent implements OnInit {
  /* ─── Table data ───────────────────────────── */
  searchResults: any[]   = [];
  filteredResults: any[] = [];
  currentPage  = 1;
  rowsPerPage  = 10;

  /* ─── UI state ─────────────────────────────── */
  isDropdownOpen = false;
  loggedInUser   = '';
  userBranchName = '';

  constructor(private router: Router) {}

  /* ───────────────────────────────────────────── */

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('userName') || '';
    const map: Record<string, string> = {
      JeddahHarmainUser: 'JEDDAH HARMAIN',
      MakkahUser:        'MAKKAH',
      YanbuUser:         'YANBU',
      TaifUser:          'TAIF',
      AbhaUser:          'ABHA',
      MadinaManawaraUser:'MADINA MANAWARA',
      NajranUser:        'NAJRAN',
      TabukUser:         'TABUK'
    };
    this.userBranchName = map[this.loggedInUser] || '';
    this.fetchSearchData();
  }

  /* ─── Template helpers ─────────────────────── */

  get totalPages(): number {
    return Math.ceil(this.filteredResults.length / this.rowsPerPage) || 1;
  }

  get paginatedData(): any[] {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    return this.filteredResults.slice(start, start + this.rowsPerPage);
  }

  /** Build array like `[1,2,3,'...',10]` for template */
  getPaginationButtons(): (number | string)[] {
    const buttons: (number | string)[] = [];
    const total = this.totalPages;

    if (total <= 5) {
      for (let i = 1; i <= total; i++) buttons.push(i);
      return buttons;
    }

    if (this.currentPage <= 3) {
      buttons.push(1, 2, 3, '…', total);
    } else if (this.currentPage >= total - 2) {
      buttons.push(1, '…', total - 2, total - 1, total);
    } else {
      buttons.push(
        1,
        '…',
        this.currentPage - 1,
        this.currentPage,
        this.currentPage + 1,
        '…',
        total
      );
    }
    return buttons;
  }

  /* ─── Pagination actions ───────────────────── */

  goToPage(page: number | string): void {
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) this.currentPage--;
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  /* ─── Fetch + filter ───────────────────────── */

  fetchSearchData(): void {
    fetch(
      'http://localhost:5062/api/search?query=123&pageNumber=1&pageSize=5000',
      {
        headers: {
          'Content-Type': 'application/json',
          authorizationheader:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2NvdW50YW50VXNlciIsImVtYWlsIjoiYWNjb3VudGFudEBjb21wYW55LmNvbSIsImp0aSI6ImRkYzY2Y2I3LTBmOGItNGQzMy1hMTAyLWYyYjgxNDc0M2FhMyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFjY291bnRhbnQiLCJleHAiOjE3NDE5NzIxODgsImlzcyI6Ik1lcmlrIiwiYXVkIjoiTWVyaWsifQ.nSMHVqzN_00jAGx6_jU7w9jR7GumgmgRGOVvSgn2e9I' /* ← your token here */
        }
      }
    )
      .then((r) => r.json())
      .then((data) => {
        console.log('API Response:', data); // 👈 Log full response to console
        const all = data.results || [];
        this.searchResults = all;
        this.filteredResults = this.userBranchName
          ? all.filter((x: any) => x.branchName === this.userBranchName)
          : all;
          console.log('Filtered Results:', this.filteredResults); // 👈 Logs the filtered data
        this.currentPage = 1;
      })
      .catch((err) => console.error('Fetch error:', err));
  }

  /* ─── Misc UI helpers ──────────────────────── */

  handleDropdownToggle(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  handleLogout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
