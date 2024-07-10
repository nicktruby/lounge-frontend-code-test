import React from 'react'
import { Preview } from '@storybook/react'

import '../src/styles/main.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',
    backgrounds: {
      default: 'grey',
      values: [
        {
          name: 'grey',
          value: '#B5B5B5',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'black',
          value: '#000000',
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="preview">
        <Story />
      </div>
    ),
  ],
}

export default preview
