import React from 'react'
import { screen, render } from '@testing-library/react'
import { LoginBox } from '.'

jest.spyOn(React, 'useState')
jest.spyOn(React, 'useContext')

describe('<LoginBox />', () => {
  it('should render the component correctly', () => {
    render(<LoginBox />)
    expect(screen.getByRole('link', { name: /entrar/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /compartilhe/i })
    ).toBeInTheDocument()
  })
})
