import { LightningElement, api } from 'lwc';

const TOAST_TITLE = 'Review Created!';
const TOAST_SUCCESS_VARIANT = 'success';
export default class BoatAddReviewForm extends LightningElement {
    // Private
   @api boatId;
   @api rating;
    
    // Public Getter and Setter to allow for logic to run on recordId change
    get recordId() { 
        return this.boatId;
    }
    set recordId(value) {
      //sets boatId attribute
      thisthis.setAttribute('boatId', value);
      //sets boatId assignment
      this.boatId = value;
    }
    
    // Gets user rating input from stars component
    handleRatingChanged(event) { 
        this.rating = event.detail.rating;
    }
    
    // Custom submission handler to properly set Rating
    // This function must prevent the anchor element from navigating to a URL.
    // form to be submitted: lightning-record-edit-form
    handleSubmit(event) { }
    
    // Shows a toast message once form is submitted successfully
    // Dispatches event when a review is created
    handleSuccess() {
      // TODO: dispatch the custom event and show the success message
      this.handleReset();
    }
    
    // Clears form data upon submission
    // TODO: it must reset each lightning-input-field
    handleReset() { }
}

  