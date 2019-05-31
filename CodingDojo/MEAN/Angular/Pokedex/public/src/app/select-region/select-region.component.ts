import { Component, OnInit } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {ThemePalette} from '@angular/material/core';
import { HttpService } from '../http.service';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-select-region',
  templateUrl: './select-region.component.html',
  styleUrls: ['./select-region.component.css']
})
export class SelectRegionComponent implements OnInit {
  onLoad = false;
  pokeNames: any[] = [];
  PokemonSpecies: any[] = [];
  Pokemon: any[] = [];

  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'}
  ];

  constructor(private _http: HttpService) { }

  ngOnInit() {
  }

  getRegion(id: number) {
    // Reset to empty so it doesn't append to other regions
    this.pokeNames = [];
    this.PokemonSpecies = [];
    this.Pokemon = [];

    this._http.getRegionInfo(id).subscribe((data: any) => {
      console.log(data);
      for(const species of data.pokemon_species) {
        this.pokeNames.push(species);
      }
      this.getPokemonSpecies();
    });
  }

  getPokemonSpecies() {
    for(const obj of this.pokeNames) {
      this._http.getPokeSpecies(obj.url).subscribe((data: any) => {
        this.PokemonSpecies.push(data);

        this._http.getPokeVarities(data.varieties[0].pokemon.url).subscribe((data2: any) => {
          this.Pokemon.push(data2);
        });
      });
    }
  }
}