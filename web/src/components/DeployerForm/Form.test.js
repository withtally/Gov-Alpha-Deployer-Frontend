import { render } from '@redwoodjs/testing'

import DeployerForm from './DeployerForm'

describe('DeployerForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DeployerForm />)
    }).not.toThrow()
  })
})
