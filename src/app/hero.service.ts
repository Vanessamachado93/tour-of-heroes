import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';


@Injectable({
  providedIn: 'root',
})
export class HeroService {

constructor(private messagesService: MessagesService) {}
  
  getHeroes(): Observable<Hero[]> {

    const heroes = of(HEROES);
    this.messagesService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(hero => hero.id === id)!
    this.messagesService.add('HeroService:fetched hero id=${id}');
    return of(hero);
  }
}
    