import { Component } from '@angular/core';
import { NgFor } from '@angular/common'; // ← import NgFor here

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor], // ← tell Angular to include NgFor
  template: `
    <div class="container">
      <h1>Hello World</h1>

      <input
        type="text"
        placeholder="Type something..."
        (input)="onInputChange($event)"
      />

      <div class="log">
        <h3>Logs:</h3>
        <ul>
          <li *ngFor="let log of logs">{{ log }}</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 40px;
    }

    input {
      padding: 10px;
      font-size: 16px;
      width: 300px;
      margin-top: 20px;
    }

    .log {
      margin-top: 20px;
      max-height: 200px;
      overflow-y: auto;
      text-align: left;
    }
  `]
})
export class AppComponent {
  logs: string[] = [];

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.logs.push(value);
  }
}

