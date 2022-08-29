import { LightningElement, wire } from 'lwc';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';

import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS=[NAME_FIELD, TYPE_FIELD, INDUSTRY_FIELDm,ANNUAL_REVENUE_FIELD];


export default class GetAccountRecord extends LightningElement {

    //if you wanna pass recordID publicly you need to use @api tag

  recordId='0018c00002SzeFTAAZ';

  account='';

  @wire(getRecord,{recordId:'$recordId', fields:FIELDS})

  accountInfoHandler({data, error}){

    if(data){
        console.log(data);
        this.account=data;
    }

    if(error){

        console.log(error);
    }



  }








}