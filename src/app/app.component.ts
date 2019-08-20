import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Très mini blog';

  posts = [
    {
      title: 'Mon premier post',
      date: new Date('December 17, 2018 03:24:00'),
      content: 'Victus universis caro ferina est lactisque abundans copia qua sustentantur, et herbae multiplices et siquae alites capi per aucupium possint, et plerosque mos vidimus frumenti usum et vini penitus ignorantes.',
      loveit:0,
      dontloveit:0
    },
    {
      title: 'Mon deuxième post',
      date: new Date('December 18, 2018 14:12:00'),
      content: 'Victus universis caro ferina est lactisque abundans copia qua sustentantur, et herbae multiplices et siquae alites capi per aucupium possint, et plerosque mos vidimus frumenti usum et vini penitus ignorantes.',
      loveit:0,
      dontloveit:0
    },
    {
      title: 'Mon troisième post',
      date: new Date('December 17, 2018 07:38:00'),
      content: 'Victus universis caro ferina est lactisque abundans copia qua sustentantur, et herbae multiplices et siquae alites capi per aucupium possint, et plerosque mos vidimus frumenti usum et vini penitus ignorantes.',
      loveit:0,
      dontloveit:0
    }
  ];
}
