import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class BoatSearch extends NavigationMixin(LightningElement) {
    
    isLoading = false;
    
    
    // Handles loading event
    handleLoading() {
        console.log('handleLoading');
        
        this.isLoading = true;
     }
    
    // Handles done loading event
    handleDoneLoading() {
        console.log('handleDoneLoading');
        
        this.isLoading = false;
     }
    
    // Handles search boat event
    // This custom event comes from the form
    searchBoats(event) {
       
       const boatTypeId = event.detail.boatTypeId;
       console.log('boatTypeId',boatTypeId);
       this.template.querySelector('c-boat-search-results').searchBoats(boatTypeId); 
       // this.searchBoats(boatTypeId);
     }
    
    createNewBoat() {
      //  alert('createNewBoat');
      this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes: {
            objectApiName: 'Boat__c',
            actionName: 'new'
        },
    });
    
     }
     
}
  