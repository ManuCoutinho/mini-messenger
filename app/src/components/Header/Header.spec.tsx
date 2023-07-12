import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from '.'
describe('<Header/>', () => {
  it('should render the header correctly', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /beatle/i })).toBeInTheDocument()
    expect(
      screen.getByText('Não perca o maior beattle royale tech!')
    ).toBeInTheDocument()
  })
})
