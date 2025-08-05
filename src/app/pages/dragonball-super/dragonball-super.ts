import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-dragonball-super',
  imports: [CommonModule, CharacterList],
  templateUrl: './dragonball-super.html',
  styleUrl: './dragonball-super.css'
})
export class DragonballSuper {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { name: 'Goku', power: 9000, id: 1 },
    { name: 'Vegeta', power: 8500, id: 2 }
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      console.error('Invalid character data');
      return;
    }
    const newCharacter: Character = {
      name: this.name(),
      power: this.power(),
      id: this.characters().length + 1
    };
    console.log('Adding character:', newCharacter);
    this.characters.update(chars => [...chars, newCharacter]);
    this.resetForm();
  }

  resetForm() {
    this.name.set('');
    this.power.set(0);
  }

}
