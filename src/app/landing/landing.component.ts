import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../shared/service/color-scss.service' 

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public colorPicker : ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('landing');
  }

  portfolio = [
    {
      img:'assets/images/landing/portfolio/1.png',
      link:'/portfolio/centered-slide'
    },
    {
      img:'assets/images/landing/portfolio/2.png',
      link:'/portfolio/full-width-4-grid'
    },
    {
      img:'assets/images/landing/portfolio/3.png',
      link:'/portfolio/portfolio-parallex'
    }
  ]

  portfolioOptions = {
    items: 2,
    center:true,
    nav: false,
    dots:true,
    autoplay: true,
    slideSpeed: 300,
    loop: true
  }

  blog = [
    {
      img:'assets/images/landing/blog/1.jpg',
      link:'/blog/blog-grid/column-left-sidebar'
    },
    {
      img:'assets/images/landing/blog/2.jpg',
      link:'/blog/blog-grid/column-no-sidebar'
    },
    {
      img:'assets/images/landing/blog/3.jpg',
      link:'/blog/blog-detail/detail-video'
    },
    {
      img:'assets/images/landing/blog/4.jpg',
      link:'/blog/blog-masonary/fullwidth-3'
    },
    {
      img:'assets/images/landing/blog/5.jpg',
      link:'/blog/blog-detail/detail-no-sidebar'
    }
  ]

  blogOptions = {
    items: 2,
    nav: false,
    dots:true,
    autoplay: true,
    slideSpeed: 300,
    loop: true,
  }
  
  testimonial = [
  {
    name:'fcastillo18',
    sortDescription:'Dominican Republic, Member since February 2019',
    fullDescription:'The truth is that this a amazing template, they have done an incredible job. Beside that, I had a little situation and with their help I could be able to solve it, they give the right solution at once! Thanks!'
  },
  {
    name:'drinkstuff',
    sortDescription:'United Kingdom, Member since April 2019',
    fullDescription:'Great theme! Exactly what we were looking for for our new website. We had an issue with the mega menus and we contacted support with a video demo of the issue and example HTML/CSS via FreshDesk. The issue was fixed within 24 hours. Superb!'
  },
  {
    name:'adelinabrask1988',
    sortDescription:'Denmark, Member since May 2019',
    fullDescription:'Everything is perfect about this theme. And if something is not perfect the team has helped me fast and friendly to adapt what I needed. It\'s a complete and complex theme that has saved me money on extra apps . I recommend it from the heart. Especially the team around it.'
  }
  ]

  testimonialOptions = {
    items: 1,
    nav: false,
    dots:true,
    autoplay: false,
    slideSpeed: 300,
    loop: false,
    responsive: {
      0: {
        items: 1
      }
    }
  }
}
