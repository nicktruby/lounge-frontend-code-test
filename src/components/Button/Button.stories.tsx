import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

type ButtonStory = StoryObj<typeof Button>
type ButtonMeta = Meta<typeof Button>

const meta: ButtonMeta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Use `Button` to allow users to take actions with clicks and taps.',
      },
    },
  },
  argTypes: {
    color: {
      control: {
        options: ['primary', 'secondary'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['s', 'm', 'l'],
      },
    },
    leadingIcon: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
    type: {
      control: {
        type: 'inline-radio',
        options: ['button', 'submit', 'reset'],
      },
    },
    variant: {
      control: {
        type: 'inline-radio',
        options: ['solid', 'outline'],
      },
    },
  },
}

export default meta

export const SolidPrimary: ButtonStory = {
  args: {
    color: 'primary',
    isDisabled: false,
    isLoading: false,
    size: 'l',
    children: 'Button',
    variant: 'solid',
    type: 'button',
  },
}

export const SolidSecondary: ButtonStory = {
  args: {
    color: 'secondary',
    size: 'l',
    isDisabled: false,
    isLoading: false,
    children: 'Button',
    variant: 'solid',
    type: 'button',
  },
}

export const OutlinePrimary: ButtonStory = {
  args: {
    color: 'primary',
    isDisabled: false,
    isLoading: false,
    size: 'l',
    children: 'Button',
    variant: 'outline',
    type: 'button',
  },
}

export const OutlineSecondary: ButtonStory = {
  args: {
    color: 'secondary',
    isDisabled: false,
    isLoading: false,
    variant: 'outline',
    children: 'Button',
    size: 'l',
    type: 'button',
  },
}

export const SizeSmall: ButtonStory = {
  args: {
    color: 'primary',
    isDisabled: false,
    isLoading: false,
    size: 's',
    children: 'Button',
    variant: 'solid',
    type: 'button',
  },
}

export const SizeMedium: ButtonStory = {
  args: {
    color: 'primary',
    isDisabled: false,
    isLoading: false,
    size: 'm',
    children: 'Button',
    variant: 'solid',
    type: 'button',
  },
}

export const SizeLarge: ButtonStory = {
  args: {
    color: 'primary',
    isDisabled: false,
    isLoading: false,
    size: 'l',
    children: 'Button',
    variant: 'solid',
    type: 'button',
  },
}

export const Disabled: ButtonStory = {
  args: {
    color: 'primary',
    isDisabled: true,
    isLoading: false,
    size: 'l',
    children: 'Button',
    variant: 'solid',
    type: 'button',
  },
}

export const WithLeadingIcon: ButtonStory = {
  args: {
    color: 'primary',
    isDisabled: false,
    isLoading: false,
    leadingIcon: 'tick',
    size: 'l',
    children: 'Button',
    variant: 'solid',
    type: 'button',
  },
}

export const Loading: ButtonStory = {
  args: {
    color: 'primary',
    isDisabled: false,
    isLoading: true,
    size: 'l',
    children: 'Button',
    variant: 'solid',
    type: 'button',
  },
}
