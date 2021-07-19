import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent {}

export class Player {
  life: number = 100;
  name: string;
  power: number;
  hitCount: number;

  constructor(theName: string, thePower: number, theHitCount: number) {
    this.life = 100;
    this.name = theName;
    this.power = thePower;
    this.hitCount = theHitCount;
  }
}

class Ranger extends Player {
  constructor(theName: string, thePower: number, theHitCount: number) {
    super(theName, thePower, theHitCount);
  }

  start() {
    console.log(
      `${this.name}'s remaining life is ${
        this.life - this.power * this.hitCount
      } %.`
    );
  }

  stop() {
    return this.life - this.power * this.hitCount;
  }

}

const ranger1 = new Ranger('Ranger1', 3, 4);
ranger1.start();

const ranger2 = new Ranger('Ranger2', 9, 4);
ranger2.start();


if(ranger1.stop () > ranger2.stop ()){
  console.log(`${ranger1.name} is winner!`)
}else{
  console.log(`${ranger2.name} is winner!`)
}