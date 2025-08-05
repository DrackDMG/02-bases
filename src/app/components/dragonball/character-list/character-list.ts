import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.html',
  imports: [CommonModule],
})
export class CharacterList {
characters = input.required<Character[]>();


}
