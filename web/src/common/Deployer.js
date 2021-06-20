const ABI = [
  {
    inputs: [
      { internalType: 'address', name: '_timeLockTemplate', type: 'address' },
      {
        internalType: 'address',
        name: '_governorAlphaTemplate',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'timelock',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'governor',
        type: 'address',
      },
    ],
    name: 'DeployGovernance',
    type: 'event',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'admin', type: 'address' },
      { internalType: 'string', name: '_name', type: 'string' },
      { internalType: 'string', name: '_symbol', type: 'string' },
      { internalType: 'uint256', name: '_totalSupply', type: 'uint256' },
      { internalType: 'uint256', name: 'timeLockDelay', type: 'uint256' },
      { internalType: 'uint256', name: '_quorumVotes', type: 'uint256' },
      { internalType: 'uint256', name: '_proposalThreshold', type: 'uint256' },
      { internalType: 'uint256', name: '_votingPeriod', type: 'uint256' },
    ],
    name: 'deployGovernance',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'governorAlphaTemplate',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'timeLockTemplate',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
]

export default ABI
