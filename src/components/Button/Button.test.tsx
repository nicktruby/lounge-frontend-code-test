import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('<Button>', () => {
  it('should render with default props', () => {
    render(<Button testId="test-id">Default</Button>)
    const button = screen.getByRole('button')
    const leadingIcon = screen.queryByTestId('test-id-leading-icon')
    const loadingIcon = screen.queryByTestId('test-id-loading-icon')

    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'button')
    expect(button).not.toHaveAttribute('aria-label')
    expect(button).not.toHaveAttribute('disabled')
    expect(leadingIcon).not.toBeInTheDocument()
    expect(loadingIcon).not.toBeInTheDocument()
    expect(button).toHaveClass('button')
    expect(button).toHaveClass('button_color-primary')
    expect(button).toHaveClass('button_variant-solid')
    expect(button).toHaveClass('button_size-m')
  })

  it('should render the correct class for each color', () => {
    render(
      <>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
      </>
    )
    const primaryBtn = screen.getByRole('button', { name: /Primary/i })
    const secondaryBtn = screen.getByRole('button', { name: /Secondary/i })

    expect(primaryBtn).toHaveClass('button_color-primary')
    expect(secondaryBtn).toHaveClass('button_color-secondary')
  })

  it('should render the correct class for each variant', () => {
    render(
      <>
        <Button variant="solid">Solid</Button>
        <Button variant="outline">Outline</Button>
      </>
    )
    const solidBtn = screen.getByRole('button', { name: /Solid/i })
    const outlineBtn = screen.getByRole('button', { name: /Outline/i })

    expect(solidBtn).toHaveClass('button_variant-solid')
    expect(outlineBtn).toHaveClass('button_variant-outline')
  })

  it('should render the type attribute for each button type', () => {
    render(
      <>
        <Button type="button">Button</Button>
        <Button type="submit">Submit</Button>
        <Button type="reset">Reset</Button>
      </>
    )
    const buttonBtn = screen.getByRole('button', { name: /Button/i })
    const submitBtn = screen.getByRole('button', { name: /Submit/i })
    const resetBtn = screen.getByRole('button', { name: /Reset/i })

    expect(buttonBtn).toHaveAttribute('type', 'button')
    expect(submitBtn).toHaveAttribute('type', 'submit')
    expect(resetBtn).toHaveAttribute('type', 'reset')
  })

  it('should renders the correct class for each size', () => {
    render(
      <>
        <Button size="s">Small</Button>
        <Button size="m">Medium</Button>
        <Button size="l">Large</Button>
      </>
    )
    const smallBtn = screen.getByRole('button', { name: /Small/i })
    const mediumBtn = screen.getByRole('button', { name: /Medium/i })
    const largeBtn = screen.getByRole('button', { name: /Large/i })

    expect(smallBtn).toHaveClass('button_size-s')
    expect(mediumBtn).toHaveClass('button_size-m')
    expect(largeBtn).toHaveClass('button_size-l')
  })

  it('should render with aria-label', () => {
    render(<Button aria-label="screen-reader-text">With aria label</Button>)
    const button = screen.getByRole('button')

    expect(button).toHaveAttribute('aria-label', 'screen-reader-text')
  })

  it('should render with leading icon', () => {
    render(
      <Button leadingIcon="tick" testId="test-button">
        With icon
      </Button>
    )
    const button = screen.getByRole('button')
    const icon = screen.getByTestId('test-button-leading-icon')

    expect(button).toContainElement(icon)
  })

  it('triggers onClick when clicked', async () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Clickable</Button>)
    const button = screen.getByRole('button')

    await userEvent.click(button)

    expect(handleClick).toHaveBeenCalled()
  })

  it('should render a disabled button, which should not trigger onClick', async () => {
    const handleClick = jest.fn()
    render(
      <Button isDisabled onClick={handleClick}>
        Disabled
      </Button>
    )
    const button = screen.getByRole('button')

    await userEvent.click(button)

    expect(button).toHaveAttribute('disabled')
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('should render the loading state, which should not trigger onClick', async () => {
    const handleClick = jest.fn()
    const { debug } = render(
      <Button isLoading onClick={handleClick} testId="test-id">
        Loading
      </Button>
    )
    const button = screen.getByRole('button')
    const loadingIcon = screen.queryByTestId('test-id-loading-icon')

    await userEvent.click(button)

    expect(button).toContainElement(loadingIcon)
    expect(button).toHaveAttribute('disabled')
    expect(handleClick).not.toHaveBeenCalled()
  })
})
