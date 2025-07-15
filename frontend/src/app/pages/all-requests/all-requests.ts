import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-all-requests',
  imports: [RouterOutlet, FormsModule, NgFor],
  templateUrl: './all-requests.html',
  styleUrl: './all-requests.css'
})
export class AllRequests {
  requests: any[] = [];

  constructor(private http: HttpClient) {}
// Execute GET
  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/api/deposits/all').subscribe({
      next: data => this.requests = data,
      error: err => console.error('Error loading requests', err)
    });
  }
// Transform information from database to String values
  termToString(term: number): string {
    switch (term) {
      case 1: return '1 Month';
      case 3: return '3 Months';
      case 6: return '6 Months';
      case 12: return '1 Year';
      case 24: return '2 Years';
      case 36: return '3 Years';
      default: return term + ' Months';
    }
  }
}
