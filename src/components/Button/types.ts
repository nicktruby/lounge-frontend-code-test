// types.ts

import { ReactNode } from 'react'

export interface ButtonProps {
  'aria-label'?: string
  color?: 'primary' | 'secondary'
  children: ReactNode
  iconLeft?: boolean
  isDisabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  size?: 's' | 'm' | 'l'
  testId?: string
  type?: HTMLButtonElement['type']
  variant?: 'solid' | 'outline'
}
