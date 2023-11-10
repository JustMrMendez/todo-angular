import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { TodolistComponent } from './components/todolist/todolist.component'
import { FormsModule } from '@angular/forms'
import { BoardLayoutComponent } from './components/board-layout/board-layout.component'
import { NavComponent } from './components/nav/nav.component'
import { ResizableDirective } from './directives/resizable.directive'
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        CommonModule,
        RouterOutlet,
        TodolistComponent,
        FormsModule,
        BoardLayoutComponent,
        NavComponent,
    ],
})
export class AppComponent {
    title = 'todo'
}
