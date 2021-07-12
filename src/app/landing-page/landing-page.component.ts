import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  links = [
    {title: 'Projects', fragment:''},
    {title: 'Games', fragment:'games'},
    {title:'Resume', fragment:'resume'},
    {title:'About Me', fragment:'about'},
    {title:'Contact', fragment:'contact'}
  ]

}
