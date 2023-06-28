import { IconType } from 'react-icons'
import { BsPersonFill, BsTruck, BsCreditCard } from 'react-icons/bs'

interface StepProps {
  title: string
  Icon: IconType | null
}

const steps: StepProps[] = [
  { title: 'Customer Info', Icon: BsPersonFill },
  { title: 'Shipping Info', Icon: BsTruck },
  { title: 'Payment', Icon: BsCreditCard },
  { title: 'Step 4', Icon: null }, // Último item sem ícone
]

// eslint-disable-next-line no-undef
const Steps: React.FC = () => {
  return (
    <ul>
      {steps.map((step, index) => (
        <li key={index}>
          {step.Icon && <step.Icon />} {step.title}
        </li>
      ))}
    </ul>
  )
}

export default Steps
