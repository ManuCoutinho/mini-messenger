import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@/__mocks__/utils/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { LoginBox } from '.'

vi.spyOn(React, 'useState')
vi.spyOn(React, 'useContext')

describe('<LoginBox />', () => {
  it('should render the component correctly', () => {
    render(<LoginBox />)
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /compartilhe/i })
    ).toBeInTheDocument()
  })
})
