import { LightningElement, wire, track } from 'lwc';
import getBoatTypes from '@salesforce/apex/BoatDataService.getBoatTypes';
export default class BoatSearchForm extends LightningElement {

   // Private
    @track error = undefined;
    
    // Needs explicit track due to nested data
    @track searchOptions =[];
    @track boatTypeId;
    @track selectedBoatTypeId ='';
    
    
    @wire(getBoatTypes)
      boatTypes({ error, data }) {
      if (data) {
        this.searchOptions = data.map(type => {
            return {
                label: type.Name,
                value: type.Id
            };
        });
        this.searchOptions.unshift({ label: 'All Types', value: '' });
      } else if (error) {
        this.searchOptions = undefined;
        this.error = error;
      }
    }

  
    get options() {
        console.log('searchOptions',this.searchOptions);
        return this.searchOptions;
    }
    
    // Fires event that the search option has changed.
    // passes boatTypeId (value of this.selectedBoatTypeId) in the detail
    handleSearchOptionChange(event) {
      // Create the const searchEvent
      event.preventDefault();
      this.selectedBoatTypeId = event.detail.value ;
      this.boatTypeId = selectedBoatTypeId;
      console.log('OUTPUT : ',selectedBoatTypeId);
      // searchEvent must be the new custom event search
       const searchEvent = new CustomEvent(
           'search',
           {
               detail : {
                boatTypeId : this.selectedBoatTypeId
               }
           }
       );
      this.dispatchEvent(searchEvent);

    }
}