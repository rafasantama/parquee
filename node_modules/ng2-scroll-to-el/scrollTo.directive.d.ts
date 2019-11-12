import { OnInit } from '@angular/core';
import { ScrollToService } from './scrollTo.service';
export declare class ScrollToDirective implements OnInit {
    private scrollToService;
    scrollTo: any;
    scrollDuration: number;
    scrollOffset: number;
    constructor(scrollToService: ScrollToService);
    ngOnInit(): void;
    onMouseClick(): void;
}
