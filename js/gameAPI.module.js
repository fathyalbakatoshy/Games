import { UI } from "./gameUI.module.js";

export class gameAPI {
  constructor(nameGame = "mmorpg") {
    this.nameGame = nameGame;
    let links = document.querySelectorAll(".navbar ul li a");
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        this.getGames(event.target.dataset.category);
        console.log(event.target.dataset.category);
        document.querySelector(".active")?.classList.remove("active");
        link.classList.add("active");
      });
    });
  }
  options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "728d3c8058msh92db760a01d4830p126468jsn96e65539a592",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  async getGames(game) {
    let data = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${
        game || this.nameGame
      }`,
      this.options
    );
    let res = await data.json();
    let ui = new UI();
    ui.displayGame(res);
    ui.detailsEvent();
  }

  async getGameDetails(id) {
    let data = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      this.options
    );
    let res = await data.json();
    let ui = new UI();
    ui.displayGamaDetails(res);
    document.querySelector(".displayDetails").classList.replace("d-none", "d-flex");
    ui.closs();
  }
}
