import { useState, useEffect } from 'react'

export function useDeployedAddress(chainId) {
  const [address, setAddress] = useState(null)

  useEffect(() => {
    switch (chainId) {
      case 1: // Mainnet
        setAddress('0x72237Caa65c3092Be989D997D19C2b6c694ac8b0')
        break
      case 3: // Ropsten
        console.error('Invalid ChainId: No contract deployed on this chain')
        setAddress(null)
        break
      case 4: // Rinkeby
        setAddress('0x5d2BdE5f4F66fa5086e6e4003Bed98ae9c951039')
        break
      case 42: // Kovan
        console.error('Invalid ChainId: No contract deployed on this chain')
        setAddress(null)
        break
      case 5: // Gorli
        console.error('Invalid ChainId: No contract deployed on this chain')
        setAddress(null)
        break
      default:
        console.error('Invalid ChainId: No contract deployed on this chain')
        setAddress(null)
    }
  }, [chainId])

  return address
}
