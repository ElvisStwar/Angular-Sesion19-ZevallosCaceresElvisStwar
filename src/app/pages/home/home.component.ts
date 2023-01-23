import { Component, OnInit } from '@angular/core';
import { DataPokemonService } from 'src/app/servicios/data-pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  data:any[] = [];

  num!:number;

  //pokemons = [];

  constructor(private datosPokemon:DataPokemonService){}

  ngOnInit():void{
    this.getPokemons()
  }

  getPokemons(){

    let pokemonData;
    for(let i = 1; i<150; i++){
      this.datosPokemon.getPokemon(String(i)).subscribe(
      res=>{
        console.log(res)
        pokemonData={
          position: i,
          image: res.sprites.front_default,
          name: res.name
        }
        this.data.push(pokemonData);
      },err=>{

      }
      );
    }
  }

  buscar(){
    alert(this.num);
  }
}
