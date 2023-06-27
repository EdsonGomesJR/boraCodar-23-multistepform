import { Button } from './Button'
import { ReactElement, useCallback } from 'react'
interface CardContentProps {
  body?: ReactElement
  onSubmit: () => void
  disabled?: boolean
  actionLabel: string
  secondaryActionLabel?: string
  secondaryAction?: () => void
}
export function CardContent({
  body,
  onSubmit,
  disabled,
  actionLabel,
  secondaryAction,
  secondaryActionLabel,
}: CardContentProps) {
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return
    }
    onSubmit()
  }, [disabled, onSubmit])

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return
    }
    secondaryAction()
  }, [disabled, secondaryAction])
  return (
    <div className="flex flex-col gap-8">
      {body}
      <div className=" flex">
        {secondaryAction && secondaryActionLabel && (
          <Button
            outline
            label={secondaryActionLabel}
            disabled={disabled}
            onClick={handleSecondaryAction}
          />
        )}
        <Button
          disabled={disabled}
          label={actionLabel}
          onClick={handleSubmit}
        />
      </div>
    </div>
  )
}
