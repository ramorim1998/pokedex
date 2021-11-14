import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor( private httpClient: HttpClient) { }

  getPokemons() {
    return this.httpClient.get("https://pokeapi.co/api/v2/pokemon?limit=20");
  }

  getDetails(pokemon: string) {
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  }

}
