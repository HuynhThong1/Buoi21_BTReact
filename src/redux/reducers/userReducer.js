import React, { Component } from 'react';

let initialState = {
    userList: [
        {
            id: 1,
            name: "Dinh Phuc Nguyen",
            username: "dpnguyen",
            email: "dpnguyen@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP",
        },
        {
            id: 2,
            name: "hao",
            username: "nguyendp",
            email: "nguyendp@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP",
        },
    ],

    editUser: null
}

const usersReducer = (state = initialState, action ) => {
    switch (action.type) {

        case 'DELETE_USER' :{
            let userId = action.payload;

            let userList = [...state.userList];

            // userList = userList.filter((user) => {
            //     return user.id !== action.payload
            // })

            userList = userList.filter(user => user.id !== userId)

            state.userList = userList;
            return {...state};
        }

        case 'SUBMIT' :{
            const user = {...action.payload, id: Date.now()};
            const userList = [...state.userList, user];

            state.userList = userList;
            return {...state};
        }

        case 'EDIT_USER' : {
            state.editUser = action.payload;

            return {...state};
        }
        
        default: 
            return {...state};
        
    }

}

export default usersReducer;
