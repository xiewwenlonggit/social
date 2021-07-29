import { SETAPPLYLIST } from "../constant";

const initState = []; //初始化状态
export default function applyReducer(preState = initState, action) {
  // console.log(preState);
  //从action对象中获取：type、data
  const { type, data } = action;

  //根据type决定如何加工数据
  if (type === SETAPPLYLIST) return [...data];
  return preState;
}
