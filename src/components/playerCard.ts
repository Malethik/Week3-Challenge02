import { Component } from './components';
import { Character } from "../model/character";
import { anyCharacter } from '../model/character';

export class playerCard extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
  }

  createTemplate(item: anyCharacter) {
    return `<li class="character col">
    <div class="card character__card">
      <img src="img/${item.name.toLowerCase()}.jpg" alt="Foto de ${item.name} ${
      item.house
    }" class="character__picture card-img-top" />
      <div class="card-body">
        <h2 class="character__name card-title h4">${item.name} ${
      item.house
    }</h2>`;
  }
}
