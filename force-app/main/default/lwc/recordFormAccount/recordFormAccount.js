import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import ACCNUMBER_FIELD from '@salesforce/schema/Account.AccountNumber';



export default class RecordFormAccount extends LightningElement {

   recordId='0018c00002CgCPZAA3';
    objectName=ACCOUNT_OBJECT;
    fields=[NAME_FIELD, TYPE_FIELD, INDUSTRY_FIELD,PHONE_FIELD,REVENUE_FIELD,ACCNUMBER_FIELD];


    successHandler(){
        //prepare Toast message
        const successToast= new ShowToastEvent({
           
            title: "Success",
            message:"The account record has been saved sucessfuly",
            variant: "success"


        });
        //fire message
        this.dispatchEvent(successToast);

    }

}

//if you don't provide recordID form becomes create form