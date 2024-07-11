// types.ts

import { ReactNode, FC } from 'react'
import { IconName } from '../Icons/types'

export type ButtonProps = {
  'aria-label'?: string
  color?: 'primary' | 'secondary'
  children: ReactNode
  leadingIcon?: IconName
  isDisabled?: boolean
  isLoading?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  size?: 's' | 'm' | 'l'
  testId?: string
  type?: HTMLButtonElement['type']
  variant?: 'solid' | 'outline'
}
