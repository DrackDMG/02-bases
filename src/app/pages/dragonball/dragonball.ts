import { Component, signal } from '@angular/core';

interface Character {
  name: string;
  power: number;
  id: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.css'
})
export class Dragonball {

  characters = signal<Character[]>([
    { name: 'Goku', power: 9000, id: 1 },
    { name: 'Vegeta', power: 8500, id: 2 },
    { name: 'Piccolo', power: 8000, id: 3 },
    { name: 'Frieza', power: 10000, id: 4 }
  ]);
}
