import { combineReducers, createStore } from 'redux';
import { gioHangReducer } from './reducers/gioHangReducer';
import usersReducer, { userReducer } from './reducers/userReducer';

const rootReducer = combineReducers({
    //Liệt kê các state của ứng dụng
    // stateGioHang: gioHangReducer,
    stateUser: usersReducer,
})

//đối với state là object hoặc array

// => redux chỉ render lại khi object hoặc array được gán = object hoặc array mới imutable

/*

    ví dụ có object A
    objectA.thuocTinh = giá trị mới => không thay đổi (redux không biết được giá trị đó thay đổi => không render lại giao diện)

    objectA = {} => gán = object mới
    objectA = {...objectA, thuocTinh: 'giaTriMoi'}

*/


export const store = createStore(rootReducer,
    
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());