import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Header } from './header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Header, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
