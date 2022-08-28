import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {

   showContent = true;

   handleClick(){
    this.showContent=!this.showContent;
   }


}