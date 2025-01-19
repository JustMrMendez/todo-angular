import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
    RouterOutlet,
    ActivatedRoute,
    UrlSegment,
    RouterLink,
    RouterLinkActive,
} from '@angular/router'
import { TodolistComponent } from './components/todolist/todolist.component'
import { FormsModule } from '@angular/forms'
import { BoardLayoutComponent } from './components/board-layout/board-layout.component'
import { NavComponent } from './components/nav/nav.component'
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        TodolistComponent,
        FormsModule,
        BoardLayoutComponent,
        NavComponent,
    ],
})
export class AppComponent {
    title = 'todo'
    currentPath: string = ''
    queryParams: any
    routeParams: any

    constructor(private route: ActivatedRoute) {
        // Get the current path
        this.route.url.subscribe((urlSegments: UrlSegment[]) => {
            this.currentPath = urlSegments
                .map((segment) => segment.path)
                .join('/')
        })

        // Get query parameters
        this.route.queryParams.subscribe((params) => {
            this.queryParams = params
        })

        // Get route parameters
        this.route.params.subscribe((params) => {
            this.routeParams = params
        })
    }
}
