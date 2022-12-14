import { Component, OnInit }from '@angular/core';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero.model';


@Component({ 
  selector: 'app-hero-details', 
  templateUrl: './hero-details.component.html', 
  styleUrls: ['./hero-details.component.css'],
}) 
export class HeroDetailsComponent implements OnInit {
  hero!: Hero;
  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
      this.getHero();
    }


    getHero(): void {
      const id = this.route.snapshot.paramMap.get('id');
      console.log(id);  
    }
}
