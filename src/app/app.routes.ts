import { Routes } from '@angular/router'
import { BoardLayoutComponent } from './components/board-layout/board-layout.component'
import { LandingPageComponent } from './components/landing-page/landing-page.component'
import { TodolistComponent } from './components/todolist/todolist.component'

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'board', component: BoardLayoutComponent },
    { path: 'todos', component: TodolistComponent },
]
