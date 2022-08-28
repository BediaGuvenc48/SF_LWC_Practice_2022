import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import BIRTHDATE_FIELD from '@salesforce/schema/Contact.Birthdate';

export default class ContactEditForm extends LightningElement {



    recordId='0038c00002gIcnsAAC';

    objectName=CONTACT_OBJECT;
    fields= {
    
    firstname: FIRSTNAME_FIELD,
    lastname: LASTNAME_FIELD,
    title : TITLE_FIELD,
    email: EMAIL_FIELD,
    birthdate: BIRTHDATE_FIELD
    
    
    }

    SuccessHandler(){

        const successEvent= new ShowToastEvent({
         
            title:"Success",
            message:"The record has been updated succesfully",
            variant:"success"


        });
        this.dispatchEvent(successEvent);
    }
}