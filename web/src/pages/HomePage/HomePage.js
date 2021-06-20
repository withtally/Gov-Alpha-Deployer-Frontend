import { Spinner, Text, Flex } from '@chakra-ui/react'
import DeployerForm from '../../components/DeployerForm/DeployerForm'

// Get ABI
import ABI from '../../common/Deployer'
import { useDeployedAddress } from 'src/common/useDeployedAddress'

// UseDapp
import { useEthers } from '@usedapp/core'

// Component
const HomePage = () => {
  const { chainId } = useEthers()
  const deployedContractAddress = useDeployedAddress(chainId)

  if (!deployedContractAddress) {
    return (
      <Flex flexDirection="column" alignItems="center">
        <Text>
          Loading...if the spinner does not disapear, try a different network
        </Text>
        <Spinner size="xl" />
      </Flex>
    )
  }

  return (
    <>
      <DeployerForm contractAddress={deployedContractAddress} ABI={ABI} />
    </>
  )
}

export default HomePage
