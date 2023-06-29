'use client'

import { useMemo, useState } from 'react'
import { CardContent } from './CardContent'
import { Heading } from './Heading'
import { Input } from './Input'
import { TextArea } from './TextArea'
import Stepper from './Stepper'
import { IconType } from 'react-icons'
import { LuChevronRight } from 'react-icons/lu'
import { useRouter } from 'next/navigation'

enum STEPS {
  CONTACT = 1,
  ENTERPRISE = 2,
  PROJECT = 3,
}

interface Step {
  title: string
  icon: IconType | null
}
const steps: Step[] = [
  { title: 'Contato', icon: LuChevronRight },
  { title: 'Empresa', icon: LuChevronRight },
  { title: 'Projeto', icon: null },
]

export function CardContainer() {
  const [step, setStep] = useState(STEPS.CONTACT)
  const [complete, setComplete] = useState(false)
  const router = useRouter()
  function onBack() {
    setStep((value) => value - 1)
  }
  function onNext() {
    setStep((value) => value + 1)
  }

  function onSubmit(e: Event) {
    if (step !== STEPS.PROJECT) {
      return onNext()
    }

    setInterval(() => {
      setComplete(true)
    }, 2000)
  }
  const actionLabel = useMemo(() => {
    if (step === STEPS.PROJECT) {
      console.log('cheguei')
      return 'Enviar Proposta'
    }
    return 'Continuar'
  }, [step])

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CONTACT) {
      return undefined
    }
    return 'Voltar'
  }, [step])

  let bodyContent = (
    <>
      <Input label="Nome" placeholder="Como prefere ser chamado?" />
      <Input label="Telefone" placeholder="Digite seu número de WhatsApp" />
      <Input label="E-mail" placeholder="Digite seu e-mail" />
    </>
  )
  if (step === STEPS.ENTERPRISE) {
    bodyContent = (
      <>
        <Input
          label="Nome da Empresa"
          placeholder="Qual é o nome da empresa?"
        />
        <Input
          label="Número de funcionários"
          placeholder="Digite o número de colaboradores"
        />
        <TextArea
          label="Sobre o seu negócio"
          placeholder="Fale um pouco sobre seus produtos ou serviços"
        />
      </>
    )
  }
  return (
    <div className=" flex w-[37rem] flex-col gap-8 rounded-md border border-[#e1e1e6] p-8">
      {/* <Heading /> */}
      <Stepper complete={complete} currentStep={step} items={steps} />

      <div className="w-full border bg-[#e1e1e6]" />

      <CardContent
        actionLabel={actionLabel}
        secondaryAction={step === STEPS.CONTACT ? undefined : onBack}
        secondaryActionLabel={secondaryActionLabel}
        body={bodyContent}
        onSubmit={onSubmit}
      />
    </div>
  )
}
