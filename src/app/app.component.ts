import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodolistComponent } from "./todolist/todolist.component";
import { FormsModule } from '@angular/forms';
import { BoardLayoutComponent } from './board-layout/board-layout.component';
import { NavComponent } from "./nav/nav.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, TodolistComponent, FormsModule, BoardLayoutComponent, NavComponent]
})
export class AppComponent {
  title = 'todo';
}
