import Island from "./Island.js";

export default class World {
    constructor() {
      this.islands = []; // a good place to keep track of your islands
      this.hookEvents(); // let's kick things of by hooking up events
    }
  
    hookEvents() {
      // hook events like clicking buttons to a specific function
      //add island btn
      document.querySelector("#btnAddIsland").addEventListener("click", () => {
        this.addIsland();
      });

      //save btn
      document.querySelector("#btnSave").addEventListener("click", () => {
        this.save();
        console.log("save");
      });

      //load btn
      document.querySelector("#btnLoad").addEventListener("click", () => {
        this.load();
        console.log("load");
      });
    }
  
    save() {
      // save array islands to localstorage as string
      // loop over all this.islands and save the names
    }
  
    load() {
      // load islands from localstorage into array
      // loop over the array and addIslands()
    }
  
    getCoordinates() {
      // return coordinates within the screen at random, feel free to change it up!
      let randomSign = Math.random() < 0.5 ? -1 : 1;
      return {
        x: ((Math.random() * window.innerWidth) / 2),
        y: ((Math.random() * window.innerHeight) / 2)
      };
    }
  
    addIsland(island) {
      // add the islands to the DOM
      let newIsland = new Island();
      const newIslandElement = document.createElement("div");
      newIslandElement.classList.add("island");

      // get coordinates
      const coordinates = this.getCoordinates();
      newIslandElement.style.left = coordinates.x + "px";
      newIslandElement.style.top = coordinates.y + "px";

      // add color
      newIslandElement.style.backgroundColor = newIsland.color;

      // add name
      newIslandElement.innerHTML = newIsland.name;

      document.querySelector("#app").appendChild(newIslandElement);

      console.log(newIslandElement);
    }
  
    moveIsland(island) {
      // this might be a good point to animate the islands with JS Animations API
    }
  }
