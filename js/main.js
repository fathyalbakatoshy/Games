import { gameAPI } from "./gameAPI.module.js";

let game = new gameAPI();
const loadingSection = document.getElementById('loading');

loadingSection.style.display = 'block';

game.getGames().then(() => {
  loadingSection.style.display = 'none';
});
