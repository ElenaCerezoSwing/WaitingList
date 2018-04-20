function application() {


    'use strict';
    function start() {


        let userName = document.querySelector('.userName');
        const addNewUserButton = document.getElementById('addNewUserButton');
        const userList = document.querySelector('.userList');
        const userGroup = document.querySelector('.userGroup');
        let users = [];
        let groups = [];

        addNewUserButton.addEventListener('click', addUserToList);
    }

    addNewUserButton.addEventListener('click', addUserToList);

    function addUserToList() {

    }


    return {
        users: users,
        groups: groups,
        start: start
    };
}
