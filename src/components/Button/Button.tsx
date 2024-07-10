import { forwardRef } from 'react'
import classNames from 'classnames'

import { ButtonProps } from './types'

import './Button.styles.css'
import { TickIcon } from '../TickIcon/TickIcon'

/**
 * Use `Button` to allow users to take actions with clicks/taps.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const {
      'aria-label': ariaLabel,
      children,
      color = 'primary',
      iconLeft = false,
      isDisabled,
      onClick,
      size = 'm',
      testId,
      type = 'button',
      variant = 'solid',
    } = props

    const buttonClasses = classNames({
      button: true,
      [`button_color-${color}`]: true,
      [`button_variant-${variant}`]: true,
      [`button_size-${size}`]: true,
    })

    return (
      <button
        aria-label={ariaLabel}
        className={buttonClasses}
        data-testid={testId}
        disabled={isDisabled}
        onClick={onClick}
        ref={forwardedRef}
        type={type}
      >
        {iconLeft && (
          <TickIcon className="button__icon" testId={`${testId}-icon`} />
        )}
        {children}
      </button>
    )
  }
)

export default Button
