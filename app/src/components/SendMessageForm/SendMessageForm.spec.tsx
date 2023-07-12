import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SendMessageForm } from '.'

describe('<SendMessageForm />', () => {
  it('should render the component correctly', () => {
    render(<SendMessageForm />)
    expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument()
  })
})
