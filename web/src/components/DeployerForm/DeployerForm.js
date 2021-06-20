import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Flex,
  Text,
  Box,
  useToast,
} from '@chakra-ui/react'

import { useEffect, useState } from 'react'
import { useContractFunction, useEthers } from '@usedapp/core'
import { utils, Contract } from 'ethers'
import { Formik, Form, Field } from 'formik'

const DeployerForm = ({ contractAddress, ABI }) => {
  const toast = useToast()
  const { library, chainId } = useEthers()

  const initialValues = {
    admin: '',
    name: '',
    symbol: '',
    totalSupply: '',
    timeLockDelay: '',
    quorumVotes: '',
    proposalThreshold: '',
    votingPeriod: '',
  }

  const contract = new Contract(contractAddress, ABI, library?.getSigner())

  const { state, send } = useContractFunction(contract, 'deployGovernance', {
    transactionName: 'DeployGovernance',
  })

  const [informUserIsDeployed, setInformUserIsDeployed] = useState(false)

  useEffect(() => {
    const getConfirmedEvents = async () => {
      // from: https://www.chainshot.com/article/ethers-cheat-sheet
      const topic = contract.interface.getEventTopic('DeployGovernance')

      const log = state.receipt.logs.find((x) => x.topics.indexOf(topic) >= 0)

      // finally, you can parse the log with the escrow interface
      // to get a more user-friendly event object
      const deployedEvent = contract.interface.parseLog(log)

      if (!informUserIsDeployed) {
        setInformUserIsDeployed(true)
        toast({
          title: 'Deployment Result',
          description: `Token: ${deployedEvent?.args[0]} \nTimelock: ${deployedEvent?.args[1]} \nGovernor: ${deployedEvent?.args[2]} `,
          status: 'success',
          duration: 2000000,
          isClosable: true,
        })
      }
    }

    if (contract && state.receipt) {
      getConfirmedEvents()
    }
  }, [state, contract, toast])

  const handleSubmit = (values, actions) => {
    // Check that Admin is an address
    if (!utils.isAddress(values.admin)) {
      toast({
        title: 'Guardian Address Error',
        description: 'Guardian address must be a valid address.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
      return
    }

    // Convert Total Supply from e18 to Wei
    let totalSupply
    try {
      totalSupply = utils.parseEther(values.totalSupply)
    } catch (error) {
      toast({
        title: 'Total Supply Error',
        description: 'The entered total supply is not valid.',
        status: 'error',
        duration: 1000,
        isClosable: true,
      })
      return
    }

    try {
      send(
        values.admin,
        values.name,
        values.symbol,
        totalSupply,
        values.timeLockDelay,
        values.quorumVotes,
        values.proposalThreshold,
        values.votingPeriod
      )
    } catch (error) {
      toast({
        title: 'Transaction Error',
        description: error,
        status: 'error',
        duration: 1000,
        isClosable: true,
      })
    }
  }

  return (
    <Box>
      <Formik initialValues={{ ...initialValues }} onSubmit={handleSubmit}>
        {(props) => (
          <Form>
            <Box marginBottom="2em">
              <Text fontSize="3xl" marginBottom=".5em">
                Token
              </Text>
              <Flex justifyContent="space-between">
                <Field name="name">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel htmlFor="name" fontSize="lg" color="gray.500">
                        Name
                      </FormLabel>
                      <Input {...field} id="name" placeholder="eg: Dao Token" />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="symbol">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.symbol && form.touched.symbol}
                    >
                      <FormLabel
                        htmlFor="symbol"
                        fontSize="lg"
                        color="gray.500"
                      >
                        Symbol
                      </FormLabel>
                      <Input {...field} id="symbol" placeholder="eg: DT" />
                      <FormErrorMessage>{form.errors.symbol}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="totalSupply">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.totalSupply && form.touched.totalSupply
                      }
                    >
                      <FormLabel
                        htmlFor="totalSupply"
                        fontSize="lg"
                        color="gray.500"
                      >
                        Total Supply
                      </FormLabel>
                      <Input
                        {...field}
                        id="totalSupply"
                        placeholder="eg: 10000"
                      />
                      <FormErrorMessage>
                        {form.errors.totalSupply}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Flex>
            </Box>
            <Box marginBottom="2em">
              <Text fontSize="3xl" marginBottom=".5em">
                Governor
              </Text>
              <Flex justifyContent="space-between">
                <Field name="admin">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.admin && form.touched.admin}
                    >
                      <FormLabel htmlFor="admin" fontSize="lg" color="gray.500">
                        Guardian Address
                      </FormLabel>
                      <Input {...field} id="admin" placeholder="0x000...." />
                      <FormErrorMessage>{form.errors.admin}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="quorumVotes">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.quorumVotes && form.touched.quorumVotes
                      }
                    >
                      <FormLabel
                        htmlFor="quorumVotes"
                        fontSize="lg"
                        color="gray.500"
                      >
                        Quorum Votes
                      </FormLabel>
                      <Input
                        {...field}
                        id="quorumVotes"
                        placeholder="eg: 4000 votes"
                      />
                      <FormErrorMessage>
                        {form.errors.quorumVotes}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="proposalThreshold">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.proposalThreshold &&
                        form.touched.proposalThreshold
                      }
                    >
                      <FormLabel
                        htmlFor="proposalThreshold"
                        fontSize="lg"
                        color="gray.500"
                      >
                        Proposal Threshold
                      </FormLabel>
                      <Input
                        {...field}
                        id="proposalThreshold"
                        placeholder="eg: 1000 votes"
                      />
                      <FormErrorMessage>
                        {form.errors.proposalThreshold}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="votingPeriod">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.votingPeriod && form.touched.votingPeriod
                      }
                    >
                      <FormLabel
                        htmlFor="votingPeriod"
                        fontSize="lg"
                        color="gray.500"
                      >
                        Voting Period
                      </FormLabel>
                      <Input
                        {...field}
                        id="votingPeriod"
                        placeholder="eg: 28800 (5 days)"
                      />
                      <FormErrorMessage>
                        {form.errors.votingPeriod}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Flex>
            </Box>
            <Box marginBottom="2em">
              <Text fontSize="3xl" marginBottom=".5em">
                Timelock
              </Text>
              <Field name="timeLockDelay">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.timeLockDelay && form.touched.timeLockDelay
                    }
                  >
                    <FormLabel
                      htmlFor="timeLockDelay"
                      fontSize="lg"
                      color="gray.500"
                    >
                      Delay
                    </FormLabel>
                    <Input
                      {...field}
                      id="timeLockDelay"
                      placeholder="In Seconds: 172800 < delay < 2.592e+6"
                      width="40%"
                    />
                    <FormErrorMessage>
                      {form.errors.timeLockDelay}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Box>
            <Button
              colorScheme="teal"
              size="lg"
              isLoading={state.status == 'Mining'}
              type="submit"
            >
              {state.status == 'None' ? 'Deploy' : state.status}
            </Button>
          </Form>
        )}
      </Formik>
      <Box marginTop="2em">
        Network: {chainId} FactoryAddress: {contractAddress}
      </Box>
    </Box>
  )
}

export default DeployerForm
