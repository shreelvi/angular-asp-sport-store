import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private title: Title) 
  {
    title.setTitle("Home| Freak Street Hippie Finds");
  }

  ngOnInit(): void {
  }

}
