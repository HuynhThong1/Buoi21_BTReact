const stateGioHangDefault = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/phone/vsphone.jpg", soLuong: 1 },
]


export const gioHangReducer = (state = stateGioHangDefault, action) => {

    console.log('action', action);
    switch (action.type){
        case 'THEM_GIO_HANG': {
            //Nhận được sản phẩm click thông qua biến action.sanPhamClick
            let spGH = {...action.sanPhamClick, soLuong:1}

            //Check xem sản phẩm có trong giỏ hàng hay chưa
            let sanPhamGH = state.find(sp => sp.maSP === spGH.maSP);
            if(sanPhamGH){
                //nếu có trong giỏ hàng thì soLuong +1
                sanPhamGH.soLuong += 1;
            }
            else{
                //Nếu chưa có trong giỏ hàng thì thêm vào giỏ hàng
                state = [...state,spGH];
            }

            console.log('state', state)
            //return về state mới của giỏ hàng khi xử lý
            return [...state];
        }

        case 'XOA_GIO_HANG': {
            let maSP = action.maSP 
            //xử lý xóa giỏ hàng

            let gioHangCapNhat = [...state];

            gioHangCapNhat = gioHangCapNhat.filter(sp => sp.maSP !== maSP);
            return [...gioHangCapNhat];
        }

        case 'TANG_GIAM_SO_LUONG': {
            let maSP = action.maSP;
            let soLuong = action.soLuong;

            let gioHangCapNhat = [...state];

            let sanPham = gioHangCapNhat.find(sp => sp.maSP === maSP)

            if(sanPham){
                sanPham.soLuong += soLuong;

                if(sanPham.soLuong < 1){
                    alert('Số lượng tối thiểu là 1.');
                    sanPham.soLuong -= soLuong;
                }
            }
            return [...gioHangCapNhat];
        }
    }
    return state;

    //stateNaoDo: (state, action) => {}
}