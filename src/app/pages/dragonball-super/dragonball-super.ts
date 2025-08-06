import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { Character } from '../../interfaces/character';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';

@Component({
  selector: 'app-dragonball-super',
  imports: [CommonModule, CharacterList, CharacterAdd],
  templateUrl: './dragonball-super.html',
  styleUrl: './dragonball-super.css'
})
export class DragonballSuper {

  name = signal('jyfv');
  power = signal(10);

  characters = signal<Character[]>([
    { name: 'Goku', power: 9000, id: 1 },
    { name: 'Vegeta', power: 8500, id: 2 }
  ]);

  addCharacter(newCharacter: Character) {
    this.characters.update(chars => [...chars, newCharacter]);
  }

}
