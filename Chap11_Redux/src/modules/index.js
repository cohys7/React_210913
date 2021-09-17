
import { combineReducers } from 'redux'
import counterR from './counterR'
import todoListR from './todoListR'

// 모든 reducer를 통합 관리.. store는 단일 스토어만 지원한다.
const rootReducer = combineReducers({
    counterR, todoListR, 
})
export default rootReducer;