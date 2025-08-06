import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'app-character-add',
  imports: [],
  templateUrl: './character-add.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAdd {

  name = signal('');
  power = signal(0);
  newCharacter = output<Character>();


  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      console.error('Invalid character data');
      return;
    }
    const newCharacter: Character = {
      name: this.name(),
      power: this.power(),
      id: Math.floor(Math.random() * 10000) // Random ID for simplicity
    };
    this.newCharacter.emit(newCharacter);
    this.resetForm();
  }

  resetForm() {
    this.name.set('');
    this.power.set(0);
  }
}
