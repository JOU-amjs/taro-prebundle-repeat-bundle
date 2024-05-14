import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import './app.css'
import { alovaInst } from './alova'
import { useRequest } from 'alova'
import { useCaptcha, useAutoRequest } from '@alova/scene-react'

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log('App launched.')
  })

  debugger
  const hook1 = useRequest(() => alovaInst.Get('/todos/1'));
  // const hook2 = useCaptcha(() => alovaInst.Get('/todos/1'), { initialCountdown: 60 });

  const hook3 = useAutoRequest(() => alovaInst.Get('/todos/1'));
  console.log(hook1, hook3)

  // children 是将要会渲染的页面
  return children
}

export default App
