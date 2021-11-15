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
/**
 * @method getPokemons
 * 
 * metodo criado para montar a lista de pokemons, com alguns detalhes sobre eles
 */
  getPokemons() {
    this.pokeService.getPokemons(this.api)
      .subscribe((pokemons: any) => {
        let{next, count, previous, results} = pokemons;
        this.next = next;
        this.previous = previous;
        this.totalPokes = count;
        results.forEach((pokemon: any) => {
          this.pokeService.getDetails(pokemon.name)
            .subscribe((response: any) => {
              response.shiny = false;
              this.pokemons.push(response);
            })
        });
      })
  }
  /**
   * @method handlePage
   * @param page 
   * 
   * metodo criado para fazer a transição de paginas, indo ou voltando
   */
  handlePage(page: string) {
    this.pokemons = []
    page === "next" ? this.api = this.next : this.api = this.previous
    this.getPokemons();
  }

}
