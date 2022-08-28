import { LightningElement, track } from 'lwc';

export default class TrackProperty extends LightningElement {
  
    @track location={
      
         city:"Houston",
         country:"United States",
         postalcode:"11232"

    }

    changeHandler(event){

   this.location.country=event.target.value //assign java script value with the value that comes from Html

    }


}