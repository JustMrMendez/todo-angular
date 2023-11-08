import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodolistComponent } from "./todolist/todolist.component";
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, TodolistComponent, FormsModule]
})
export class AppComponent {
  title = 'todo';
}
