import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-board-layout',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './board-layout.component.html',
    styleUrl: './board-layout.component.scss',
})
export class BoardLayoutComponent {
    layoutConfig = {
        newMenu: false,
        newRow1: false,
        newRow2: false,
        newRow3: false,
        newFooter: false,
    }
}
