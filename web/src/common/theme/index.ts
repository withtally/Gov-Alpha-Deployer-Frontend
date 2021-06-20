import { extendTheme } from '@chakra-ui/react'

// styles
import styles from './styles'

// foundations
import colors from './foundations/colors'
import fonts from './foundations/fonts'
import borders from './foundations/borders'
import spacing from './foundations/spacing'
import textStyles from './foundations/textStyles'
import layerStyles from './foundations/layerStyles'
import shadows from './foundations/shadows'

// components
import Button from './components/button'
import Tag from './components/tag'
import Avatar from './components/avatar'
import Skeleton from './components/skeleton'
import Input from './components/input'
import Table from './components/table'
import Link from './components/link'
import Modal from './components/modal'
import Code from './components/code'
import Tabs from './components/tabs'

// const overrides = {
//   styles,
//   fonts,
//   space: spacing,
//   colors,
//   borders,
//   textStyles,
//   layerStyles,
//   shadows,
//   components: {
//     Button,
//     Avatar,
//     Skeleton,
//     Link,
//     Input,
//     Tag,
//     Code,
//     Modal,
//     Tabs,
//     Table,
//   },
// }

const overrides = {
  components: {
    Button,
    Avatar,
    Skeleton,
    Link,
    Input,
    Tag,
    Code,
    Modal,
    Tabs,
    Table,
  },
}

export default extendTheme(overrides)
