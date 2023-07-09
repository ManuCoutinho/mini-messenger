import { screen, render } from '@testing-library/react'
import { MessageList } from '.'

describe('<MessageList />', () => {
  it('should render the component correctly', () => {
    render(<MessageList />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
