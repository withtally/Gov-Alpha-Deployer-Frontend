import { render } from '@redwoodjs/testing'

import Web3Connect from './Web3Connect'

describe('Web3Connect', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Web3Connect />)
    }).not.toThrow()
  })
})
