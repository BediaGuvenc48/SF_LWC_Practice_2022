
import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';

export default class GetCaseRecord extends LightningElement {

//recordId='5008c00001H51exAAB';
  @api recordId;
subject;
priority;
status;
caseNumber;


//our data will get properties from Compact layout
@wire(getRecord,{recordId:'$recordId',layoutTypes:['Compact'], modes:['View']})

caseRecordHandler({data,error}){
   if(data){


    this.subject=data.fields.Subject.value;
    this.priority=data.fields.Priority.value;
    this.status=data.fields.Status.value;
    this.caseNumber=data.fields.CaseNumber.value;

   }

   if(error){
    console.log(error)
   }


}

}