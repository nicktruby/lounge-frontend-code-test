// types.ts

import { FC } from 'react'

export type IconName = 'tick' | 'loading' // other possible icon names go here.

export type LeadingIcons = Record<IconName, FC<IconProps>>

export type IconProps = {
  className?: string
  testId?: string
}
