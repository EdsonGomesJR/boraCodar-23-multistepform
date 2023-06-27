'use client'
import { MouseEvent } from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
  label: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  outline?: boolean
  small?: boolean
  icon?: IconType
}

export function Button({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}: ButtonProps) {
  return (
    <div
      className={`flex  w-full flex-row gap-8  ${
        outline ? 'justify-start' : 'justify-end'
      } `}
    >
      <button
        disabled={disabled}
        onClick={onClick}
        className={`flex items-center justify-center gap-2 rounded-md border  px-8  py-4 font-bold uppercase transition-all 
        ${outline ? 'bg-white' : 'bg-[#633BBC]'}
        ${outline ? 'border-[#633BBC]' : 'border-[#633BBC]'}
        ${outline ? 'text-[#633BBC]' : 'text-white'}

        `}
      >
        {label}
      </button>
    </div>
  )
}
