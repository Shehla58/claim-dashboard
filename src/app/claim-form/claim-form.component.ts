// import {
//   Component,
//   Input,
//   Output,
//   EventEmitter,
//   OnInit,
//   ViewChild,
//   ElementRef
// } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-claim-form',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './claim-form.component.html',
//   styleUrls: ['./claim-form.component.scss']
// })
// export class ClaimFormComponent implements OnInit {
//   @Input() selectedBranch: any;
//   @Input() selectedApplication: any;
//   @Input() selectedClaim: any;
//   @Input() isEditable = false;
//   @Output() onClose = new EventEmitter<void>();

//   @ViewChild('approvalInput') approvalInputRef!: ElementRef<HTMLInputElement>;
//   @ViewChild('clearanceInput') clearanceInputRef!: ElementRef<HTMLInputElement>;

//   claimForm!: FormGroup;
//   approvalFile?: File;
//   clearanceFile?: File;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit(): void {
//     const claim = this.selectedClaim || this.selectedBranch || this.selectedApplication || {};
//     this.claimForm = this.fb.group({
//       branchCode: [claim.branchCode || ''],
//       posCode: [claim.posCode || ''],
//       branchName: [claim.branchName || ''],
//       insuranceCompanyCode: [claim.insuranceCompanyCode || ''],
//       insuranceCompanyName: [claim.insuranceCompanyName || ''],
//       invoiceNumber: [claim.invoiceNumber || ''],
//       wipNumber: [claim.wipNumber || ''],
//       fullClaimNumber: [claim.fullClaimNumber || ''],
//       approvalForm: [claim.approvalForm || ''],
//       customerClearanceForm: [claim.customerClearanceForm || '']
//     });
//   }

//   handleFileInput(event: Event, field: 'approvalForm' | 'customerClearanceForm'): void {
//     const input = event.target as HTMLInputElement;
//     const file = input.files?.[0];
//     if (file) {
//       this.claimForm.patchValue({ [field]: file.name });
//       if (field === 'approvalForm') {
//         this.approvalFile = file;
//       } else {
//         this.clearanceFile = file;
//       }
//     }
//   }

//   triggerFileInput(field: 'approvalForm' | 'customerClearanceForm'): void {
//     if (!this.isEditable) return;
//     const input = field === 'approvalForm' ? this.approvalInputRef : this.clearanceInputRef;
//     input.nativeElement.click();
//   }

//   submit(): void {
//     if (!this.claimForm.valid) return;

//     const formData = new FormData();
//     Object.entries(this.claimForm.value).forEach(([key, value]) => {
//       formData.append(key, value as string);
//     });

//     if (this.approvalFile) {
//       formData.append('approvalFormFile', this.approvalFile);
//     }
//     if (this.clearanceFile) {
//       formData.append('customerClearanceFormFile', this.clearanceFile);
//     }

//     console.log('Submitting form data:', formData);
//     this.onClose.emit();
//   }
// }

// ngOnInit(): void {
//   let claim = {};

//   if (this.selectedClaim) {
//     claim = this.selectedClaim;
//   } else if (this.selectedBranch) {
//     claim = this.selectedBranch;
//   } else if (this.selectedApplication) {
//     claim = this.selectedApplication;
//   }

//   this.claimForm = this.fb.group({
//     branchCode: [claim['branchCode'] || ''],
//     posCode: [claim['posCode'] || ''],
//     branchName: [claim['branchName'] || ''],
//     insuranceCompanyCode: [claim['insuranceCompanyCode'] || ''],
//     insuranceCompanyName: [claim['insuranceCompanyName'] || ''],
//     invoiceNumber: [claim['invoiceNumber'] || ''],
//     wipNumber: [claim['wipNumber'] || ''],
//     fullClaimNumber: [claim['fullClaimNumber'] || ''],
//     approvalForm: [claim['approvalForm'] || ''],
//     customerClearanceForm: [claim['customerClearanceForm'] || ''],
//   });


// import {
//   Component,
//   Input,
//   Output,
//   EventEmitter,
//   OnInit,
//   ViewChild,
//   ElementRef
// } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

// // ✅ Interface for claim data
// interface ClaimData {
//   branchCode?: string;
//   posCode?: string;
//   branchName?: string;
//   insuranceCompanyCode?: string;
//   insuranceCompanyName?: string;
//   invoiceNumber?: string;
//   wipNumber?: string;
//   fullClaimNumber?: string;
//   approvalForm?: string;
//   customerClearanceForm?: string;
// }

// @Component({
//   selector: 'app-claim-form',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './claim-form.component.html',
//   styleUrls: ['./claim-form.component.scss']
// })
// export class ClaimFormComponent implements OnInit {
//   @Input() selectedBranch: any;
//   @Input() selectedApplication: any;
//   @Input() selectedClaim: any;
//   @Input() isEditable = false;
//   @Output() onClose = new EventEmitter<void>();

//   @ViewChild('approvalInput') approvalInputRef!: ElementRef<HTMLInputElement>;
//   @ViewChild('clearanceInput') clearanceInputRef!: ElementRef<HTMLInputElement>;

//   claimForm!: FormGroup;
//   approvalFile?: File;
//   clearanceFile?: File;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit(): void {
//     let claim: ClaimData = {};

//     if (this.selectedClaim) {
//       claim = this.selectedClaim;
//     } else if (this.selectedBranch) {
//       claim = this.selectedBranch;
//     } else if (this.selectedApplication) {
//       claim = this.selectedApplication;
//     }

//     this.claimForm = this.fb.group({
//       branchCode: [claim.branchCode || ''],
//       posCode: [claim.posCode || ''],
//       branchName: [claim.branchName || ''],
//       insuranceCompanyCode: [claim.insuranceCompanyCode || ''],
//       insuranceCompanyName: [claim.insuranceCompanyName || ''],
//       invoiceNumber: [claim.invoiceNumber || ''],
//       wipNumber: [claim.wipNumber || ''],
//       fullClaimNumber: [claim.fullClaimNumber || ''],
//       approvalForm: [claim.approvalForm || ''],
//       customerClearanceForm: [claim.customerClearanceForm || ''],
//     });
//   }

//   handleFileInput(event: Event, field: 'approvalForm' | 'customerClearanceForm'): void {
//     const input = event.target as HTMLInputElement;
//     const file = input.files?.[0];

//     if (file) {
//       this.claimForm.patchValue({ [field]: file.name });

//       if (field === 'approvalForm') {
//         this.approvalFile = file;
//       } else {
//         this.clearanceFile = file;
//       }
//     }
//   }

//   triggerFileInput(field: 'approvalForm' | 'customerClearanceForm'): void {
//     if (!this.isEditable) return;

//     const input = field === 'approvalForm' ? this.approvalInputRef : this.clearanceInputRef;
//     input.nativeElement.click();
//   }

//   submit(): void {
//     if (!this.claimForm.valid) return;

//     const formData = new FormData();

//     Object.entries(this.claimForm.value).forEach(([key, value]) => {
//       formData.append(key, value as string);
//     });

//     if (this.approvalFile) {
//       formData.append('approvalFormFile', this.approvalFile);
//     }

//     if (this.clearanceFile) {
//       formData.append('customerClearanceFormFile', this.clearanceFile);
//     }

//     console.log('Submitting form data:', formData);
//     this.onClose.emit();
//   }
// }

// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// // import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';


// @Component({
//   selector: 'app-claim-form',
//   templateUrl: './claim-form.component.html',
//   styleUrls: ['./claim-form.component.scss']
// })
// export class ClaimFormComponent implements OnInit {
//   @Input() isEditable = true;
//   @Output() onClose = new EventEmitter<void>();

//   claimForm!: FormGroup;

//   ngOnInit() {
//     this.claimForm = new FormGroup({
//       branchCode: new FormControl('', Validators.required),
//       posCode: new FormControl('', Validators.required),
//       branchName: new FormControl('', Validators.required),
//       insuranceCompanyCode: new FormControl('', Validators.required),
//       insuranceCompanyName: new FormControl('', Validators.required),
//       invoiceNumber: new FormControl('', Validators.required),
//       wipNumber: new FormControl('', Validators.required),
//       fullClaimNumber: new FormControl('', Validators.required),
//       approvalForm: new FormControl(''),
//       customerClearanceForm: new FormControl(''),
//     });
//   }

//   submit() {
//     if (this.claimForm.valid) {
//       console.log('Form submitted:', this.claimForm.value);
//       // Your submit logic here
//     }
//   }

//   triggerFileInput(fieldName: string) {
//     // Implement file input trigger logic here
//   }

//   handleFileInput(event: Event, fieldName: string) {
//     // Implement file input handling logic here
//   }
// }

// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms'; // ✅ Correct import here

// @Component({
//   selector: 'app-claim-form',
//   templateUrl: './claim-form.component.html',
//   styleUrls: ['./claim-form.component.scss']
// })
// export class ClaimFormComponent implements OnInit {
//   @Input() isEditable = true;
//   @Input() formData: any; // If you want to pre-fill
//   @Output() onClose = new EventEmitter<void>();
//   @Output() onSubmit = new EventEmitter<any>();

//   claimForm!: FormGroup;

//   ngOnInit() {
//     this.claimForm = new FormGroup({
//       branchCode: new FormControl('', Validators.required),
//       posCode: new FormControl('', Validators.required),
//       branchName: new FormControl('', Validators.required),
//       insuranceCompanyCode: new FormControl('', Validators.required),
//       insuranceCompanyName: new FormControl('', Validators.required),
//       invoiceNumber: new FormControl('', Validators.required),
//       wipNumber: new FormControl('', Validators.required),
//       fullClaimNumber: new FormControl('', Validators.required),
//       approvalForm: new FormControl(''),
//       customerClearanceForm: new FormControl(''),
//     });

//     if (this.formData) {
//       this.claimForm.patchValue(this.formData); // ✅ Pre-fill
//     }
//   }

//   submit() {
//     if (this.claimForm.valid) {
//       console.log('Form submitted:', this.claimForm.value);
//       this.onSubmit.emit(this.claimForm.value); // ✅ Emit form data
//     }
//   }

//   closeForm() {
//     this.onClose.emit();
//   }

//   triggerFileInput(fieldName: string) {
//     // File trigger logic here
//   }

//   handleFileInput(event: Event, fieldName: string) {
//     // File input handler here
//   }
// }

// import { Component, OnInit, Input, Output, EventEmitter, inject } from '@angular/core';
// import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-claim-form',
//   standalone: true, // ✅ Important for loadComponent()
//   imports: [CommonModule, ReactiveFormsModule], // ✅ Needed to use formGroup, formControlName
//   templateUrl: './claim-form.component.html',
//   styleUrls: ['./claim-form.component.scss']
// })
// export class ClaimFormComponent implements OnInit {
//   @Input() isEditable = true;
//   @Output() onClose = new EventEmitter<void>();

//   claimForm!: FormGroup;

//   ngOnInit() {
//     this.claimForm = new FormGroup({
//       branchCode: new FormControl('', Validators.required),
//       posCode: new FormControl('', Validators.required),
//       branchName: new FormControl('', Validators.required),
//       insuranceCompanyCode: new FormControl('', Validators.required),
//       insuranceCompanyName: new FormControl('', Validators.required),
//       invoiceNumber: new FormControl('', Validators.required),
//       wipNumber: new FormControl('', Validators.required),
//       fullClaimNumber: new FormControl('', Validators.required),
//       approvalForm: new FormControl(''),
//       customerClearanceForm: new FormControl(''),
//     });
//   }

//   submit() {
//     if (this.claimForm.valid) {
//       console.log('Form submitted:', this.claimForm.value);
//     }
//   }

//   closeForm() {
//     this.onClose.emit();
//   }

//   triggerFileInput(fieldName: string) {}
//   handleFileInput(event: Event, fieldName: string) {}
// }

// import {
//   Component,
//   OnInit,
//   Input,
//   Output,
//   EventEmitter
// } from '@angular/core';
// import {
//   FormGroup,
//   FormControl,
//   Validators,
//   ReactiveFormsModule
// } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-claim-form',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './claim-form.component.html',
//   styleUrls: ['./claim-form.component.scss']
// })
// export class ClaimFormComponent implements OnInit {
//   @Input() isEditable = true;
//   @Input() formData: any; // ✅ Required input
//   @Output() onClose = new EventEmitter<void>();
//   @Output() onSubmit = new EventEmitter<any>(); // ✅ Needed for (onSubmit)

//   claimForm!: FormGroup;

//   ngOnInit() {
//     this.claimForm = new FormGroup({
//       branchCode: new FormControl('', Validators.required),
//       posCode: new FormControl('', Validators.required),
//       branchName: new FormControl('', Validators.required),
//       insuranceCompanyCode: new FormControl('', Validators.required),
//       insuranceCompanyName: new FormControl('', Validators.required),
//       invoiceNumber: new FormControl('', Validators.required),
//       wipNumber: new FormControl('', Validators.required),
//       fullClaimNumber: new FormControl('', Validators.required),
//       approvalForm: new FormControl(''),
//       customerClearanceForm: new FormControl('')
//     });

//     // ✅ Pre-fill form if formData is passed
//     if (this.formData) {
//       this.claimForm.patchValue(this.formData);
//     }
//   }

//   submit() {
//     if (this.claimForm.valid) {
//       console.log('Form submitted:', this.claimForm.value);
//       this.onSubmit.emit(this.claimForm.value); // ✅ Emit data
//     }
//   }

//   closeForm() {
//     this.onClose.emit();
//   }

//   triggerFileInput(fieldName: string) {}
//   handleFileInput(event: Event, fieldName: string) {}
// }


// import {
//   Component,
//   OnInit,
//   Input,
//   Output,
//   EventEmitter
// } from '@angular/core';
// import {
//   FormGroup,
//   FormControl,
//   Validators
// } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-claim-form',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './claim-form.component.html',
//   styleUrls: ['./claim-form.component.scss']
// })

// export class ClaimFormComponent implements OnInit {
//   @Input() rowData: any; // <-- must accept this input from parent
//   @Output() formSubmitted = new EventEmitter<any>(); // <-- emit when form submits
//   @Output() formClosed = new EventEmitter<void>();   // <-- emit when form closes

//   claimForm!: FormGroup;

//   ngOnInit() {
//     this.claimForm = new FormGroup({
//       branchCode: new FormControl('', Validators.required),
//       posCode: new FormControl('', Validators.required),
//       branchName: new FormControl('', Validators.required),
//       insuranceCompanyCode: new FormControl('', Validators.required),
//       insuranceCompanyName: new FormControl('', Validators.required),
//       invoiceNumber: new FormControl('', Validators.required),
//       wipNumber: new FormControl('', Validators.required),
//       fullClaimNumber: new FormControl('', Validators.required),
//       approvalForm: new FormControl(''),
//       customerClearanceForm: new FormControl('')
//     });

//     // Patch values from rowData input to prefill the form if available
//     if (this.rowData) {
//       this.claimForm.patchValue(this.rowData);
//     }
//   }

//   submit() {
//     if (this.claimForm.valid) {
//       this.formSubmitted.emit(this.claimForm.value); // emit with new name
//     }
//   }

//   closeForm() {
//     this.formClosed.emit();
//   }
// }


// import {
//   Component,
//   OnInit,
//   OnChanges,
//   SimpleChanges,
//   Input,
//   Output,
//   EventEmitter,
// } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-claim-form',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './claim-form.component.html',
//   styleUrls: ['./claim-form.component.scss'],
// })
// export class ClaimFormComponent implements OnInit, OnChanges {
//   /* ---------- Inputs & Outputs ---------- */
//   /** Row data coming from the table (parent component) */
//   @Input() claim: any = null;

//   /** Emits the filled-in form data back to the parent on submit */
//   @Output() formSubmit = new EventEmitter<any>();

//   /** Emits when the user closes / cancels the modal */
//   @Output() close = new EventEmitter<void>();

//   /* ---------- Reactive-form model ---------- */
//   claimForm!: FormGroup;

//   /* ---------- Lifecycle ---------- */
//   ngOnInit(): void {
//     this.buildForm();

//     // Prefill the form if claim data already exists
//     if (this.claim) {
//       this.claimForm.patchValue(this.claim);
//     }
//   }

//   /** Handle updated `claim` input after the modal is already open */
//   ngOnChanges(changes: SimpleChanges): void {
//     if (changes['claim'] && this.claimForm) {
//       this.claimForm.patchValue(this.claim || {});
//     }
//   }

//   /* ---------- Public methods ---------- */
//   /** Triggered by the form’s submit button */
//   submit(): void {
//     if (this.claimForm.valid) {
//       this.formSubmit.emit(this.claimForm.value);
//     }
//   }

//   /** Triggered by the cancel / close button */
//   cancel(): void {
//     this.close.emit();
//   }

//   /* ---------- Helpers ---------- */
//   private buildForm(): void {
//     this.claimForm = new FormGroup({
//       branchCode: new FormControl('', Validators.required),
//       posCode: new FormControl('', Validators.required),
//       branchName: new FormControl('', Validators.required),
//       insuranceCompanyCode: new FormControl('', Validators.required),
//       insuranceCompanyName: new FormControl('', Validators.required),
//       invoiceNumber: new FormControl('', Validators.required),
//       wipNumber: new FormControl('', Validators.required),
//       fullClaimNumber: new FormControl('', Validators.required),
//       approvalForm: new FormControl(''),
//       customerClearanceForm: new FormControl(''),
//     });
//   }
// }

// import {
//   Component,
//   Input,
//   Output,
//   EventEmitter,
//   OnInit,
//   OnChanges,
//   SimpleChanges,
// } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-claim-form',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './claim-form.component.html',
//   styleUrls: ['./claim-form.component.scss'],
// })
// export class ClaimFormComponent implements OnInit, OnChanges {
//   /* ───────── Inputs & Outputs ───────── */
//   @Input() claim: any = null;                 // from parent
//   @Output() formSubmit = new EventEmitter<any>(); // back to parent
//   @Output() close      = new EventEmitter<void>();

//   /* ───────── Reactive Form ───────── */
//   claimForm!: FormGroup;

//   ngOnInit(): void {
//     this.buildForm();
//     if (this.claim) this.claimForm.patchValue(this.claim);
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     if (changes['claim'] && this.claimForm) {
//       this.claimForm.patchValue(this.claim || {});
//     }
//   }

//   /* ───────── Public handlers ───────── */
//   submit(): void {
//     if (this.claimForm.valid) {
//       this.formSubmit.emit(this.claimForm.value);
//     }
//   }

//   cancel(): void {
//     this.close.emit();
//   }

//   /* ───────── Helpers ───────── */
//   private buildForm() {
//     this.claimForm = new FormGroup({
//       branchCode:             new FormControl('', Validators.required),
//       posCode:                new FormControl('', Validators.required),
//       branchName:             new FormControl('', Validators.required),
//       insuranceCompanyCode:   new FormControl('', Validators.required),
//       insuranceCompanyName:   new FormControl('', Validators.required),
//       invoiceNumber:          new FormControl('', Validators.required),
//       wipNumber:              new FormControl('', Validators.required),
//       fullClaimNumber:        new FormControl('', Validators.required),
//       approvalForm:           new FormControl(''),
//       customerClearanceForm:  new FormControl(''),
//     });
//   }
// }


// import {
//   Component,
//   Input,
//   Output,
//   EventEmitter,
//   OnInit,
//   OnChanges,
//   SimpleChanges,
// } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-claim-form',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './claim-form.component.html',
//   styleUrls: ['./claim-form.component.scss'],
// })
// export class ClaimFormComponent implements OnInit, OnChanges {
//   /* ───────── Inputs & Outputs ───────── */
//   @Input() claim: any = null; // from parent
//   @Output() formSubmit = new EventEmitter<any>(); // to parent
//   @Output() close = new EventEmitter<void>(); // close event

//   /* ───────── Reactive Form ───────── */
//   claimForm!: FormGroup;

//   ngOnInit(): void {
//     this.buildForm();
//     if (this.claim) {
//       this.claimForm.patchValue(this.claim);
//     }
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     if (changes['claim'] && this.claimForm) {
//       this.claimForm.patchValue(this.claim || {});
//     }
//   }

//   /* ───────── Public handlers ───────── */
//   submit(): void {
//     if (this.claimForm.valid) {
//       console.log('Form submitted:', this.claimForm.value);
//       this.formSubmit.emit(this.claimForm.value); // send data to parent
//       this.close.emit(); // auto-close form after submit
//     }
//   }

//   cancel(): void {
//     this.close.emit(); // just close form
//   }

//   /* ───────── Form Builder ───────── */
//   private buildForm(): void {
//     this.claimForm = new FormGroup({
//       branchCode: new FormControl('', Validators.required),
//       posCode: new FormControl('', Validators.required),
//       branchName: new FormControl('', Validators.required),
//       insuranceCompanyCode: new FormControl('', Validators.required),
//       insuranceCompanyName: new FormControl('', Validators.required),
//       invoiceNumber: new FormControl('', Validators.required),
//       wipNumber: new FormControl('', Validators.required),
//       fullClaimNumber: new FormControl('', Validators.required),
//       approvalForm: new FormControl(''),
//       customerClearanceForm: new FormControl(''),
//     });
//   }
// }

// import {
//   Component,
//   Input,
//   Output,
//   EventEmitter,
//   OnInit,
//   OnChanges,
//   SimpleChanges,
// } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-claim-form',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './claim-form.component.html',
//   styleUrls: ['./claim-form.component.scss'],
// })
// export class ClaimFormComponent implements OnInit, OnChanges {
//   @Input() claim: any = null;
//   @Output() formSubmit = new EventEmitter<any>();
//   @Output() close = new EventEmitter<void>();

//   claimForm!: FormGroup;

//   ngOnInit(): void {
//     this.buildForm();
//     if (this.claim) {
//       this.claimForm.patchValue(this.claim);
//     }
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     if (changes['claim'] && this.claimForm) {
//       this.claimForm.patchValue(this.claim || {});
//     }
//   }

//   submit(): void {
//     if (this.claimForm.valid) {
//       console.log('Form submitted:', this.claimForm.value); // show in console
//       this.formSubmit.emit(this.claimForm.value);           // emit to parent
//       this.close.emit();                                    // close form
//     }
//   }

//   cancel(): void {
//     this.close.emit(); // close form on cancel or ✖ icon
//   }

//   private buildForm(): void {
//     this.claimForm = new FormGroup({
//       branchCode: new FormControl('', Validators.required),
//       posCode: new FormControl('', Validators.required),
//       branchName: new FormControl('', Validators.required),
//       insuranceCompanyCode: new FormControl('', Validators.required),
//       insuranceCompanyName: new FormControl('', Validators.required),
//       invoiceNumber: new FormControl('', Validators.required),
//       wipNumber: new FormControl('', Validators.required),
//       fullClaimNumber: new FormControl('', Validators.required),
//       approvalForm: new FormControl(''),
//       customerClearanceForm: new FormControl(''),
//     });
//   }
// }

// import {
//   Component,
//   Input,
//   Output,
//   EventEmitter,
//   OnInit,
//   OnChanges,
//   SimpleChanges,
// } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-claim-form',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './claim-form.component.html',
//   styleUrls: ['./claim-form.component.scss'],
// })
// export class ClaimFormComponent implements OnInit, OnChanges {
//   @Input() claim: any = null;
//   @Output() formSubmit = new EventEmitter<any>();
//   @Output() close = new EventEmitter<void>();

//   claimForm!: FormGroup;

//   ngOnInit(): void {
//     this.buildForm();
//     if (this.claim) {
//       this.claimForm.patchValue(this.claim);
//     }
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     if (changes['claim'] && this.claimForm) {
//       this.claimForm.patchValue(this.claim || {});
//     }
//   }

//   submit(): void {
//     if (this.claimForm.valid) {
//       console.log('Form submitted:', this.claimForm.value); // show in console
//       this.formSubmit.emit(this.claimForm.value);           // emit to parent
//       this.close.emit();                                    // close form
//     }
//   }

//   cancel(): void {
//     this.close.emit(); // close form on cancel or ✖ icon
//   }

//   private buildForm(): void {
//     this.claimForm = new FormGroup({
//       branchCode: new FormControl('', Validators.required),
//       posCode: new FormControl('', Validators.required),
//       branchName: new FormControl('', Validators.required),
//       insuranceCompanyCode: new FormControl('', Validators.required),
//       insuranceCompanyName: new FormControl('', Validators.required),
//       invoiceNumber: new FormControl('', Validators.required),
//       wipNumber: new FormControl('', Validators.required),
//       fullClaimNumber: new FormControl('', Validators.required),
//       approvalForm: new FormControl(''),
//       customerClearanceForm: new FormControl(''),
//     });
//   }
// }

import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-claim-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './claim-form.component.html',
  styleUrls: ['./claim-form.component.scss'],
})
export class ClaimFormComponent implements OnInit, OnChanges {
  @Input() claim: any = null;

  // These two are needed for interaction
  @Output() formSubmit = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  claimForm!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
    if (this.claim) {
      this.claimForm.patchValue(this.claim);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['claim'] && this.claimForm) {
      this.claimForm.patchValue(this.claim || {});
    }
  }

  // Submit button logic
  submit(): void {
    if (this.claimForm.valid) {
      console.log('Form Submitted:', this.claimForm.value);
      this.formSubmit.emit(this.claimForm.value); // send data to parent
      this.close.emit(); // close form
    } else {
      console.warn('Form is invalid');
    }
  }

  // Close icon or cancel button logic
  cancel(): void {
    console.log('Form closed by user');
    this.close.emit();
  }

  private buildForm(): void {
    this.claimForm = new FormGroup({
      branchCode: new FormControl(''),
      posCode: new FormControl(''),
      branchName: new FormControl(''),
      insuranceCompanyCode: new FormControl(''),
      insuranceCompanyName: new FormControl(''),
      invoiceNumber: new FormControl(''),
      wipNumber: new FormControl(''),
      fullClaimNumber: new FormControl(''),
      approvalForm: new FormControl(''),
      customerClearanceForm: new FormControl(''),
    });
  }
}
