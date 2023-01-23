import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataPokemonService } from 'src/app/servicios/data-pokemon.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit{

  datosPokemon:any[]=[];

  id!:string
  //name!:string

  constructor(private route:ActivatedRoute, private detallesPokemon:DataPokemonService){}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get("id"));
    this.id = this.id.toLowerCase();
    this.getPokemons();
  }

  getPokemons(){
    let pokemonData
    this.detallesPokemon.getPokemon(String(this.id)).subscribe(
      res=>{
        pokemonData={
          position: this.id,
          image: res.sprites.front_default,
          name: res.name,
          ability: `${res.abilities[0].ability.name}, ${res.abilities[1].ability.name}`,
          base_exp: res.base_experience
        }

        this.datosPokemon.push(pokemonData);
        console.log(this.datosPokemon)
      },err=>{
        
      }
      );
  }
}
