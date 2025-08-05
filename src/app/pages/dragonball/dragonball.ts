import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  name: string;
  power: number;
  id: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [CommonModule],
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.css'
})
export class Dragonball {

  name = signal('Gohan');
  power = signal(7000);

  characters = signal<Character[]>([
    { name: 'Goku', power: 9000, id: 1 },
    { name: 'Vegeta', power: 8500, id: 2 },
    { name: 'Piccolo', power: 8000, id: 3 },
    { name: 'Frieza', power: 10000, id: 4 },
    { name: 'Yamcha', power: 500, id: 5 }
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
