import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account' //reference integretiry we are always importing object

export default class GetAccountObjInfo extends LightningElement {


accDefRecordTypeId;

  @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})  ///comess automatically

  //my results comes as a data and errror combination when we check consolos

    accountInfoHandler(data, error){
           
        if(data){
            console.log(data);
            this.accDefRecordTypeId=data.defaultRecordTypeId;
        }

        if(error){
            console.log(error);
        }

        
    }
}