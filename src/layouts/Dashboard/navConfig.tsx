import {
  faWallet,
  faPiggyBank,
  faChartPie,
  faHandHoldingDollar,
  faMemory,
  faQuestionCircle,
  faStoreSlash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const navDashboard = [
  {
    title: 'Market Overview',
    icon: <FontAwesomeIcon icon={faChartPie} />,
    path: '/markets',
  },
  {
    title: 'My Assets',
    icon: <FontAwesomeIcon icon={faWallet} />,
    path: '/markets',
  },
  {
    title: 'Deposit/Withdraw',
    icon: <FontAwesomeIcon icon={faPiggyBank} />,
    path: '/markets',
  },
  {
    title: 'Borrow/Repay',
    icon: <FontAwesomeIcon icon={faHandHoldingDollar} />,
    path: '/markets',
  },
  {
    title: 'History',
    icon: <FontAwesomeIcon icon={faMemory} />,
    path: '/markets',
  },
  {
    title: 'FAQ',
    icon: <FontAwesomeIcon icon={faQuestionCircle} />,
    path: '/markets',
  },
]

export const navDashboard2 = [
  {
    title: 'DAO',
    icon: <FontAwesomeIcon icon={faStoreSlash} />,
    path: '/markets',
  },
  {
    title: 'Bridges',
    icon: <FontAwesomeIcon icon={faStoreSlash} />,
    path: '/markets',
  },
  {
    title: 'NFT Gallery',
    icon: <FontAwesomeIcon icon={faStoreSlash} />,
    path: '/markets',
  },
]
