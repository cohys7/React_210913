const loggerMiddleware = (store) => {           // 값 참조를 위해 store 참조.
    return (next) => {                          // 넘어오는 값이 함수니 객체니를 따져서 함수면 넘어온 함수를 실행하고 객체면 reducer로 전달
        return (dispatch) => {                  // 실질적으로 넘기는 값.
            console.group('logger middleware');
            console.log('이전 상태: ', store.getState());
            console.log('넘어노는 값: ', dispatch);

            let result = next(dispatch);

            console.log('이후 상태: ', store.getState());
            console.groupEnd();

            return result;
        }
    }
}
export default loggerMiddleware;