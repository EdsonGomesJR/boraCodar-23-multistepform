'use client'
import React from 'react'

import './stepper.css'
import { TiTick } from 'react-icons/ti'
import { IconType } from 'react-icons'

interface Item {
  title: string
  icon: IconType | null
}
interface ItemProps {
  items: Array<Item>
  complete: boolean
  currentStep: number
}

const Stepper = ({ items, currentStep, complete }: ItemProps) => {
  return (
    <>
      <div className="flex justify-between">
        {items.map(({ icon: Icon, title }, i) => {
          return (
            <>
              <div
                key={i}
                className={`step-item2 relative flex w-36 flex-col items-center justify-center 
                 [&:not(:first-child):before]:bg-slate-200
                 [&:not(:first-child)]:before:absolute
                 [&:not(:first-child)]:before:right-[65%]
                 [&:not(:first-child)]:before:top-1/3
                 [&:not(:first-child)]:before:h-[3px]
                 [&:not(:first-child)]:before:w-full
                 [&:not(:first-child)]:before:-translate-y-2/4
                 [&:not(:first-child)]:before:content-['']
                ${
                  // estilo do caminho
                  currentStep === i + 1 &&
                  'active2 [&:not(:first-child)]:before:bg-green-600'
                } 
                ${
                  (i + 1 < currentStep || complete) &&
                  ' [&:not(:first-child)]:before:bg-green-600'
                } `}
              >
                <div
                  className={`step2   relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 font-semibold text-white
                  ${currentStep === i + 1 && '  bg-sky-600  '}
                  ${(i + 1 < currentStep || complete) && 'bg-green-600'}
                  `}
                >
                  {i + 1 < currentStep || complete ? (
                    <TiTick size={24} />
                  ) : (
                    i + 1
                  )}
                </div>
                <p className="text-black">{title}</p>
              </div>

              <div>{Icon && <Icon />}</div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Stepper
