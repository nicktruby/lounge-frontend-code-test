import { forwardRef } from 'react'
import classNames from 'classnames'

import { LeadingIcons } from '../Icons/types'
import { IconTick, IconLoading } from '../Icons'
import { ButtonProps } from './types'

import './Button.styles.css'

const LeadingIconsMap: LeadingIcons = {
  tick: IconTick,
  loading: IconLoading,
}

/**
 * Use `Button` to allow users to take actions with clicks/taps.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const {
      'aria-label': ariaLabel,
      children,
      color = 'primary',
      leadingIcon,
      isLoading,
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

    const IconComponent = leadingIcon ? LeadingIconsMap[leadingIcon] : null

    return (
      <button
        aria-label={ariaLabel}
        className={buttonClasses}
        data-testid={testId}
        disabled={isDisabled || isLoading}
        onClick={onClick}
        ref={forwardedRef}
        type={type}
      >
        {IconComponent && (
          <IconComponent
            className="button__icon"
            testId={`${testId}-leading-icon`}
          />
        )}
        {children}
        {isLoading && (
          <IconLoading
            className="button__loading"
            testId={`${testId}-loading-icon`}
          />
        )}
      </button>
    )
  }
)

export default Button
