import type { MoneyMethod } from '@sponsors/types'

export const donateMethod: {
  [key in keyof typeof MoneyMethod]: {
    title: string
    url: string
  }
} = {
  // ALI_PAY: {
  //   title: '支付宝',
  //   url: '',
  // },
  // WECHAT_PAY: {
  //   title: '微信支付',
  //   url: '',
  // },
  WECHAT_REWARD: {
    title: '微信赞赏',
    url: '',
  },
  QQ_PAY: {
    title: 'QQ 钱包',
    url: '',
  },
}
