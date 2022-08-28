import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {

fullName="Kesgin";
course="Salesforce Developer";

changeHandler(event){


    this.course=event.target.value;

}





}

//if you reach out your variable in the method need to use this.

//onkeyup event occurs when 
//the user releases a key (on the keyboard).