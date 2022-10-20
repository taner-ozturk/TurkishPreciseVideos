import { LightningElement } from 'lwc';

export default class GettersInLwc extends LightningElement {
    fruits = ["Elma", "Armut", "Muz"];

    number = 10;
    number2 = 20;

    get firstFruit() {
        return this.fruits[0];
    }

    get sumOfNums() {
        return this.number*this.number2;
    }
}