import { createAlova } from 'alova';
import AdapterTaro from '@alova/adapter-taro';

export const alovaInst = createAlova({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  ...AdapterTaro()
});

console.log(alovaInst.options.statesHook)