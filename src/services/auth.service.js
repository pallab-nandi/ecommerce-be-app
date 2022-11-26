const { userService } = require('./user.service');
const { roleService } = require('./role.service');

function signUp(user, role) {

    return userService
    .createUser(user)
    .then((user) => {
        console.log('User created successfully');
        if(role) {
            roleService
            .findAllRoles(role)
            .then((roles) => {
                user.setRoles(roles);
                console.log('Role added to the user successfully');
            })
        } else {
            user.setRoles([2]);
        }
    }).catch((err) => {
        console.log('Error while creating user', err);
        return Promise.reject("Error while creating user");
    })
}

module.exports = { signUp }