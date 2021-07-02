import { combineReducers, createStore } from 'redux';
import { gioHangReducer } from './reducers/gioHangReducer';

const stateGioHangDefault = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/phone/vsphone.jpg", soLuong: 1 },
]
const rootReducer = combineReducers({
    //Liệt kê các state của ứng dụng
    stateGioHang: gioHangReducer,
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