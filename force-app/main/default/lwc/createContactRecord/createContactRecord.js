import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import { createRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/PlatformShowToastEvent';



export default class CreateContactRecord extends LightningElement {

    fields={};


changeHandler(event){
const {name,value}=event.target;
this.fields[name]=value;

}

createContact(){


const recordInput={


    apiName:CONTACT_OBJECT.objectApiName,
    fields:this.fields
};

createRecord(recordInput).then(result => {

    console.log(result);
    this.displayToast("Success", "Record has been ceated succesfully","success");
    this.template.querySelector('form.contactForm').requestFullscreen();
}).catch(error=>{
   
    this.displayToast("Error", error.body.message,"Error");

})
}

displayToast(title,message,variant){
    const toast= new ShowToastEvent({title,message,variant});
    this.dispatchEvent(toast);
}




}
