import { routes } from '@redwoodjs/router'
import { Flex, Text, Link } from '@chakra-ui/react'
import Web3Connect from '../../components/Web3Connect'

const SiteLayout = ({ children }) => {
  return (
    <>
      <Flex flexDirection="column" height="100vh">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          margin="1.5em"
          minHeight="3em"
        >
          <Link to={routes.home()}>
            <Text fontSize="2xl" fontWeight="bold">
              Governance Deployer
            </Text>
          </Link>
          <Web3Connect />
        </Flex>

        <Flex
          flexDirection="column"
          flex="1"
          alignItems="center"
          justifyContent="center"
        >
          {children}
        </Flex>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          margin="1.5em"
          minHeight="3em"
        >
          <Text fontSize="sm">
            Governance deployer smart contract by{' '}
            <Link
              href="https://github.com/Ro5s/Awesome-Governance/blob/main/COMP/GovernanceFactory.sol"
              isExternal
            >
              Ross Campbel
            </Link>
            . Interface by{' '}
            <Link href="www.withTally.com" isExternal>
              Tally
            </Link>
          </Text>
        </Flex>
      </Flex>
    </>
  )
}

export default SiteLayout
