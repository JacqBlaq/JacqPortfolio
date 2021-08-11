import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-side-nav-menu',
    templateUrl: './side-nav-menu.component.html',
    styleUrls: ['./side-nav-menu.component.scss']
})
export class SideNavMenuComponent implements OnInit {

    @Output() onMenuClose: EventEmitter<null> = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

}
