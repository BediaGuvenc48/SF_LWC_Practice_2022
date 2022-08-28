
import { LightningElement , api} from 'lwc';
import CASE_OBJECT from '@salesforce/schema/Case';
import CASE_NUMBER_FIELD from '@salesforce/schema/Case.CaseNumber';
import ACCOUNT_FIELD from '@salesforce/schema/Case.AccountId';
import ORIGIN_FIELD from '@salesforce/schema/Case.Origin';
import STATUS_FIELD from '@salesforce/schema/Case.Status';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';

export default class CaseViewForm extends LightningElement {

    //recordId='5008c00001H51exAAB';

    //when you put @api flag any variable you are exposing your variable within the components
    @api recordId;
    objectName=CASE_OBJECT;

    fields={
        caseNumber : CASE_NUMBER_FIELD,
        account : ACCOUNT_FIELD,
        origin : ORIGIN_FIELD,
        priority: PRIORITY_FIELD,
        status : STATUS_FIELD,
        subject : SUBJECT_FIELD

    }


}