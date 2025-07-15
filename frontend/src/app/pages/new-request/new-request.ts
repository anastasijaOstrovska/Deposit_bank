import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-new-request',
  imports: [RouterOutlet, FormsModule, NgIf],
  templateUrl: './new-request.html',
  styleUrl: './new-request.css'
})

export class NewRequest {
  constructor(private http: HttpClient) {}
  protected readonly title = signal('deposit-front');

  deposit = {
    customerID: null,
    customerName: '',
    depositAmount: null,
    currency: '',
    term: ''
  };

  termError: string | null = null;
  customerIDError: string | null = null;
  generalError: string | null = null;
  depositAmountError: string | null = null;


  onSubmit() {
    this.termError = null;
    this.customerIDError = null;
    this.generalError = null;
    this.depositAmountError = null;

// Check if all fields are filled 
  if (
    this.deposit.customerID == null ||
    this.deposit.customerName.trim() === '' ||
    this.deposit.depositAmount == null ||
    this.deposit.currency === '' ||
    this.deposit.term === ''
  ) {
    this.generalError = 'Please fill in all required fields.';
    return; 
  }

//Chek if cutomer id is exectly 7 digits and does not strat with 0
  const custIdStr = String(this.deposit.customerID);
  if (!/^[1-9]\d{6}$/.test(custIdStr)) {
    this.customerIDError = 'Customer ID must be exactly 7 digits and cannot start with 0.';
    return;
  }

// Check minimal of deposit amount
   if (this.deposit.depositAmount < 1000) {
    this.depositAmountError = 'Deposit amount must be at least 1000.';
    return;
  }

// Check USD and EUR minimal term 
  const termNum = Number(this.deposit.term);
  if (this.deposit.currency === 'EUR' && termNum < 1) {
    this.termError = 'For EUR deposits, term must be at least 1 month.';
    return;
  }
  if (this.deposit.currency === 'USD' && termNum < 3) {
    this.termError = 'For USD deposits, term must be at least 3 months.';
    return;
  }
// If fields are correctly filled makes post and resets values
    const url = 'http://localhost:8080/api/deposits/new';

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(url, this.deposit, { headers }).subscribe({
      next: (response) => {
        console.log('Deposit request created:', response);
        this.deposit = {
          customerID: null,
          customerName: '',
          depositAmount: null,
          currency: '',
          term: ''
        };
        this.termError = null;
        this.customerIDError = null;
        this.generalError = null;
      },
      error: (err) => {
        console.error('Error creating deposit request:', err);
      }
    });
  }
}
