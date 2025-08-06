import { Injectable, signal } from '@angular/core';
import { CharacterInterface } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DragonballService {
  constructor() { }

   characters = signal<CharacterInterface[]>([
    { name: 'Goku', power: 9000, id: 1 },
    { name: 'Vegeta', power: 8500, id: 2 }
  ]);

  addCharacter(newCharacter: CharacterInterface) {
    this.characters.update(chars => [...chars, newCharacter]);
  }
}
