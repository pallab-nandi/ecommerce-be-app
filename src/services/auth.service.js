const { userService } = require('./user.service');
const { roleService } = require('./role.service');
const bcrypt = require('bcryptjs');

class AuthService {

    signUp(user, role) {
        user.password = bcrypt.hashSync(user.password, 8);

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
            }
            user.setRoles([2]);
        }).catch((err) => {
            console.log('Error while creating user', err);
            return Promise.reject("Error while creating user");
        })
    }

}

const authService = new AuthService();

module.exports = { authService }