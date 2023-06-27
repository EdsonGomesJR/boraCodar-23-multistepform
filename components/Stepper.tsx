'use client'
import React, { useState } from 'react'
import './stepper.css'
import { TiTick } from 'react-icons/ti'
const Stepper = () => {
  const steps = ['Customer Info', 'Shipping Info', 'Payment', 'Step 4']
  const [currentStep, setCurrentStep] = useState(1)
  const [complete, setComplete] = useState(false)
  return (
    <>
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && 'active'} ${
              (i + 1 < currentStep || complete) && 'complete'
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-white">{step}</p>
          </div>
        ))}
      </div>{' '}
      <div className="flex gap-4 ">
        {!complete && (
          <button
            className="btn"
            onClick={() => {
              currentStep === steps.length
                ? setComplete(true)
                : setCurrentStep((prev) => prev + 1)
            }}
          >
            {currentStep === steps.length ? 'Finish' : 'Next'}
          </button>
        )}
        {!complete && (
          <button
            className="btn border border-white p-2 text-white"
            onClick={() => {
              currentStep !== steps.length
                ? setCurrentStep((prev) => prev - 1)
                : setCurrentStep(0)
            }}
          >
            {currentStep === steps.length ? 'Reset' : 'Back'}
          </button>
        )}
      </div>
    </>
  )
}

export default Stepper
