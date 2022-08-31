
import { LightningElement, wire } from 'lwc';


import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';

import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import { getFieldDisplayValue, getFieldValue, getRecord } from 'lightning/uiRecordApi';


const FIELDS=[NAME_FIELD,PHONE_FIELD,INDUSTRY_FIELD,ANNUAL_REVENUE_FIELD];

export default class GetValuesFunctionDemo extends LightningElement {

recordId='0018c00002CgCPZAA3';

name;
industry;
revenue;
phone;


@wire(getRecord, {recordId:'$recordID', fields:FIELDS})

accountHandler({data, error}){

    if(data){
        this.name=getFieldValue(data,NAME_FIELD);
        this.industry=getFieldValue(data,INDUSTRY_FIELD);
        this.revenue=getFieldDisplayValue(data,ANNUAL_REVENUE_FIELD);
        this.phone=getFieldDisplayValue(data,PHONE_FIELD);

    }



    if(error){


    }


}


}