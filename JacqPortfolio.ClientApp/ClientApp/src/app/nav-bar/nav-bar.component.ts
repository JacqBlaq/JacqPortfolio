import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    @Input() menuBtn: TemplateRef<any>;

    constructor() { }

    ngOnInit(): void {
    }

}
