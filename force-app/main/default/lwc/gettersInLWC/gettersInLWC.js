import { LightningElement } from 'lwc';

export default class GettersInLWC extends LightningElement {

  number1=10;
  number2=20;

  fruits=["Appple","Banana","Strawbery"];

  get FirstFruit(){

  return this.fruits[0];

  }


   get sumOfNums(){

    return this.number1 + this.number2;
   }

}