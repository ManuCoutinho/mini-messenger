import { screen, render } from '@testing-library/react'
import { SendMessageForm } from '.'

describe('<SendMessageForm />', () => {
  it('should render the component correctly', () => {
    render(<SendMessageForm />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
