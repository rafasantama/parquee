import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-modern-sass-brand',
    templateUrl: './modern-sass-brand.component.html',
    styleUrls: ['./modern-sass-brand.component.scss']
})
export class ModernSassBrandComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    brands = [
        { img: "assets/images/saas2/brand/1.png" },
        { img: "assets/images/saas2/brand/2.png" },
        { img: "assets/images/saas2/brand/3.png" },
        { img: "assets/images/saas2/brand/1.png" },
        { img: "assets/images/saas2/brand/5.png" }
    ]

    brandcarouselOptions = {
        items: 5,
        margin: 40,
        autoHeight: true,
        nav: false,
        dots: false,
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        responsive: {
            0: {
                items: 1,
                margin: 40
            },
            320: {
                items: 1,
                margin: 30
            },
            360: {
                items: 2,
                margin: 20
            },
            480: {
                items: 3,
                margin: 30
            },
            768: {
                items: 4,
                margin: 30
            },
            992: {
                items: 5
            }
        }
    }
}
