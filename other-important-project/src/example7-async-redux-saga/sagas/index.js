import { takeEvery, takeLatest } from 'redux-saga';
import { call, put ,take,fork,select,cancel} from 'redux-saga/effects';


import { 
    increaseAction, 
    deleteAction, 
    increaseActionSagas
} from '../actions/action';

// 一个工具函数：返回一个 Promise，这个 Promise 将在 1 秒后 resolve
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
export const getCart = state => state


//-----------------example1-start
// worker saga
function* showPostsAsync(action) {
    // select 获取的state...
    const cart = yield select(getCart)
    console.log(cart)
    try {
        // const response = yield call(axios.get, GET_POSTS_URL);
       // yield put({ type: 'increase'});
        console.log(123456)
        // yield put({ type:'delete' })
        yield delay(1000)
        yield put({ type: 'increase' })
    } catch(e) {
        console.log(789789)
        yield put({ type: 'delete'});
    }
}

// wacther saga
function* watchGetPosts() {
    const action = yield takeLatest(increaseActionSagas,showPostsAsync);
    console.log(action)
}

//-----------------example1-end

//-----------------example2-start >>>>>观察cancel和fork///每当fork任务被cancel。。。那么是会取消子genertor函数的奥。。。
//yield cancel(task) 不会等待被取消的任务完成（即执行其 catch 区块）
let i=1;
function* handleInput(input) {
    // 500ms 防抖动
    yield call(delay, 3000)
    console.log(i)
    i++;
  }
function* watchInput() {
    let task
    while(true) {
        const { input } = yield take('increase')
        console.log(task)
        if(task)  yield cancel(task); //cancel 
        task = yield fork(handleInput, input)
        console.log(task)
    }
}
//-----------------example2-end

//-----------------example3-start
function* watchFirstThreeTodosCreation() {
    for(let i = 0; i < 3; i++) {
      const action = yield take('increase')
      console.log(action,i)
    }
    yield put({type: 'delete'})
  }

//-----------------example3-end

//call 创建了一条描述结果的信息
//Sagas 被实现为 Generator 函数，它 yield 对象到 redux-saga middleware。 
//被 yield 的对象都是一类指令，指令可被 middleware 解释执行。
//当 middleware 取得一个 yield 后的 Promise，middleware 会暂停 Saga，直到 Promise 完成。
//yield === 产出
// root saga
export default function* rootSaga() {
    yield watchFirstThreeTodosCreation()
}
