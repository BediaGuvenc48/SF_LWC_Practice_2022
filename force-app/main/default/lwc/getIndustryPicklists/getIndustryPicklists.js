import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';


import ACCOUNT_OBJECT from '@salesforce/schema/Account';

import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class GetIndustryPicklists extends LightningElement {


    accRtId;
    industryOptions=[];
    

    @wire(getObjectInfo,{objectApiName: ACCOUNT_OBJECT})
    objectInfoHandler({data, error}){

      if(data){
        this.accRtId= data.defaultRecordTypeId;
      }

      if(error){
        console.error(error);
      }




    }





   @wire(getPicklistValues,{fieldApiName: INDUSTRY_FIELD, recordTypeId: '$accRtId'}) //we are making reactive 

   //wire service will be provision lates data makes reactive by passing $
picklistHandler({data, error}){

    if(data){
        console.log(data);
        this.industryOptions=this.pickListGenerator(data);
    }

    if(error){
        console.log(error);
    }

}


pickListGenerator(data){

    return data.values.map(item =>({

     label:item.label,
     value: item.value,



    }))
}


industryChangeHandler(event){

  this.selectedIndustry=event.target.value;
}


}