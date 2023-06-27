'use client'

import { useMemo, useState } from 'react'
import { CardContent } from './CardContent'
import { Heading } from './Heading'
import { Input } from './Input'
import { TextArea } from './TextArea'

enum STEPS {
  CONTACT = 0,
  ENTERPRISE = 1,
  PROJECT = 2,
}

export function CardContainer() {
  const [step, setStep] = useState(STEPS.CONTACT)
  const [isCurrentForm, setIsCurrentForm] = useState(true)

  function onBack() {
    setStep((value) => value - 1)
  }
  function onNext() {
    setStep((value) => value + 1)
  }

  function onSubmit() {
    if (step !== STEPS.PROJECT) {
      return onNext()
    }
    alert('Fim')
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
      <Heading />

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
