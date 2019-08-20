import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() date: Date = new Date();
  @Input() content: string;
  @Input() loveit: number;
  @Input() dontloveit: number;

  ratio: boolean;
  egalite: boolean;

  difference: number;

  constructor() {
  };

  ngOnInit() {
    console.log('je passe là')
    this.ratio=this.loveit-this.dontloveit>=0;
    this.egalite = (this.loveit-this.dontloveit ===0) ? (true) : false;
    this.difference = this.loveit-this.dontloveit;
  };

  onLove() {
    this.loveit++;
    this.difference = this.loveit-this.dontloveit;
  };

  onDontLove() {
    this.dontloveit++;
    this.difference = this.loveit-this.dontloveit;
  };

}
