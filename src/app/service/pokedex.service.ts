import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor( private httpClient: HttpClient) { }

  getPokemons(api:string) {
    return this.httpClient.get(api);
  }

  getDetails(pokemon: string) {
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  }

}
