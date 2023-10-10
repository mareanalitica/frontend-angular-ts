import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavBarComponent implements OnInit {
    @Input() navbarProps: any;

    constructor() { }

    ngOnInit() { }

    toggleNav() {
    }
}
