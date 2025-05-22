"use client"

import React from 'react'
import Loading from '@/components/Loading'
import { useUser } from '@clerk/nextjs'
import WizardSteppers from '@/components/WizardSteppers';
import { useCheckoutNavigation } from '@/hooks/useCheckoutNavigation';
import CheckoutDetailsPage from './details';
import PaymentPage from './payment';
import CompletionPage from "./completion/index"

const CheckOutWizard = () => {

    const {isLoaded}=useUser();

    const {checkoutStep}=useCheckoutNavigation();

    if(!isLoaded) return <Loading />;

    const renderStep=()=>{
        switch(checkoutStep){
            case 1:
                return <CheckoutDetailsPage/> ;
            case 2:
                return <PaymentPage />;
            case 3:
                return <CompletionPage/>;
            default:
                return <CheckoutDetailsPage/>;
        }
    }

  return (
    <div>
        <WizardSteppers currentStep={checkoutStep} />
        <div className="checkout__content">{renderStep()}</div>
    </div>
  )
return <div></div>
}

export default CheckOutWizard