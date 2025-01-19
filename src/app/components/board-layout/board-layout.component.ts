import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ResizableDirective } from '../../directives/resizable.directive'
import { Console } from 'console'

@Component({
    selector: 'app-board-layout',
    standalone: true,
    imports: [CommonModule, ResizableDirective],
    templateUrl: './board-layout.component.html',
})
export class BoardLayoutComponent {
    layoutConfig = {
        leftSidebar: {
            isHovering: false,
            display: true,
            collapsed: false,
            keepCollapsedState: false,
        },
        rightSidebar: {
            display: true,
            collapsed: false,
            keepCollapsedState: false,
        },
        newMenu: false,
        newRow1: false,
        newRow2: false,
        newRow3: false,
        newFooter: false,
    }

    toggleLeftSidebar() {
        this.layoutConfig.leftSidebar.collapsed =
            !this.layoutConfig.leftSidebar.collapsed
        console.log('toggleLeftSidebar', this.layoutConfig.leftSidebar)
    }
    onMouse(event: MouseEvent) {
        event.preventDefault()
        event.stopPropagation()
        if (event.type === 'mouseenter') {
            this.layoutConfig.leftSidebar.isHovering = true
            if (!this.layoutConfig.leftSidebar.keepCollapsedState) {
                this.layoutConfig.leftSidebar.collapsed = false
            }
            console.log('mauseenter', this.layoutConfig.leftSidebar)
        } else if (event.type === 'mouseleave') {
            this.layoutConfig.leftSidebar.isHovering = false
            if (!this.layoutConfig.leftSidebar.keepCollapsedState) {
                this.layoutConfig.leftSidebar.collapsed = true
            }
            console.log('mouseLeave', this.layoutConfig.leftSidebar)
        }
    }
      
    toggleKeepLeftSidebar() {
        this.layoutConfig.leftSidebar.keepCollapsedState =
            !this.layoutConfig.leftSidebar.keepCollapsedState
        console.log('toggleKeepLeftSidebar', this.layoutConfig.leftSidebar)
    }

    toggleRightSidebar() {
        this.layoutConfig.rightSidebar.collapsed =
            !this.layoutConfig.rightSidebar.collapsed
        console.log(
            'toggleLeftSidebar',
            this.layoutConfig.leftSidebar.collapsed
        )
    }
}
