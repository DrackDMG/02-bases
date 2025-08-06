import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterInterface } from '../../interfaces/character.interface';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super',
  imports: [CommonModule, CharacterList, CharacterAdd],
  templateUrl: './dragonball-super.html',
  styleUrl: './dragonball-super.css'
})
export class DragonballSuper {
  public dragonballService = inject(DragonballService);
  characters = this.dragonballService.characters;

  addCharacter(newCharacter: CharacterInterface) {
    this.dragonballService.addCharacter(newCharacter);
  }

}
