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
        console.log("add island");
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
        x: ((Math.random() * window.innerWidth) / 2) * randomSign,
        y: ((Math.random() * window.innerHeight) / 2) * randomSign
      };
    }
  
    addIsland(island) {
      // add the islands to the DOM
    }
  
    moveIsland(island) {
      // this might be a good point to animate the islands with JS Animations API
    }
  }
