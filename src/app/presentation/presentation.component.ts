import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  links = [
    {title: 'Projects', fragment:''},
    {title: 'Games', fragment:'games'}
  ]

}
