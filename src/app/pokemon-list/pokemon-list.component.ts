import { PokedexService } from './../service/pokedex.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  api = environment.baseUrl;
  name = '';
  pokemons: any[] = [];
  page = 1;
  totalPokes: number = 0;
  next: string = '';
  previous: string = '';
  constructor(private pokeService: PokedexService) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {
    this.pokeService.getPokemons(this.api)
    .subscribe((pokemons: any) => {
      this.next = pokemons.next;
      this.previous = pokemons.previous;
      this.totalPokes = pokemons.count;
      pokemons.results.forEach((pokemon: any) => {
        this.pokeService.getDetails(pokemon.name)
        .subscribe((response: any)=> {
          response.shiny = false;
          this.pokemons.push(response);
          console.log(this.pokemons)
        })
      });
    })
  }
  shinyVersion(item: string){
    
  }
  nextPage(){
    if(this.next)
    this.pokemons = []
    this.api = this.next;
    this.getPokemons();
  }
  previousPage(){
    if(this.previous)
    this.pokemons = []
    this.api = this.previous
    this.getPokemons();
  }

}
