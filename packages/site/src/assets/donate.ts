import type { MoneyMethod } from '@sponsors/types'

export const donateMethod: {
  [key in keyof typeof MoneyMethod]: {
    title: string
    url: string
  }
} = {
  ALI_PAY: {
    title: '支付宝',
    url: 'https://upload-bbs.miyoushe.com/upload/2023/09/30/260511332/379cb3e57561c164124b641324ab24c7_1468657779553037247.jpg',
  },
  WECHAT_PAY: {
    title: '微信支付',
    url: '',
  },
  WECHAT_REWARD: {
    title: '微信赞赏',
    url: '',
  },
  QQ_PAY: {
    title: 'QQ 钱包',
    url: '',
  },
}
