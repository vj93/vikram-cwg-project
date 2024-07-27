import { LightningElement, track, wire } from 'lwc';
import { CurrentPageReference, NavigationMixin } from 'lightning/navigation';


export default class InvoiceDetails extends LightningElement {
    @track currentPageReference;
    @track data;

    
    @wire(CurrentPageReference)
    currentPageReference;

    connectedCallback() {   
        console.log('currentPageReference==>'+JSON.stringify(this.currentPageReference.state));
                this.data = Object.keys(this.currentPageReference.state).map(key => ({
                    key: key,
                    value: this.currentPageReference.state[key]
                }));
        


    }
  
}             