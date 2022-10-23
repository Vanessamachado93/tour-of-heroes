import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

construtor(private messagesService: MessagesService) {}
  


  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
    