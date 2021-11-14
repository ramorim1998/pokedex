import { PokedexService } from './../service/pokedex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];

  constructor(private pokeService: PokedexService) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {
    this.pokeService.getPokemons()
    .subscribe((pokemons: any) => {
      pokemons.results.forEach((pokemon: any) => {
        this.pokeService.getDetails(pokemon.name)
        .subscribe((response: any)=> {
          this.pokemons.push(response);
          console.log(this.pokemons)
        })
      });
    })
  }

}
