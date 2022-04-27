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
    path: '/dashboard',
  },
  {
    title: 'Deposit/Withdraw',
    icon: <FontAwesomeIcon icon={faPiggyBank} />,
    path: '/access',
  },
  {
    title: 'Borrow/Repay',
    icon: <FontAwesomeIcon icon={faHandHoldingDollar} />,
    path: '/borrow',
  },
  {
    title: 'History',
    icon: <FontAwesomeIcon icon={faMemory} />,
    path: '/records',
  },
  {
    title: 'FAQ',
    icon: <FontAwesomeIcon icon={faQuestionCircle} />,
    path: '/faq',
  },
]

export const navDashboard2 = [
  {
    title: 'DAO',
    icon: <FontAwesomeIcon icon={faStoreSlash} />,
    path: '/DAO',
  },
  {
    title: 'Bridges',
    icon: <FontAwesomeIcon icon={faStoreSlash} />,
    path: '/Bridges',
  },
  {
    title: 'NFT Gallery',
    icon: <FontAwesomeIcon icon={faStoreSlash} />,
    path: '/nft-market',
  },
]
