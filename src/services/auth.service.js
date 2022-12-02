const { userService } = require('./user.service');
const { roleService } = require('./role.service');
const bcrypt = require('bcryptjs');
const { jwtService } = require('./jwt.service');

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

    signIn(email, password) {

        return userService
        .findUserByEmail(email)
        .then((user) => {
            if(user) {

                let validPass = bcrypt.compareSync(password, user.password);
                if(validPass) {
                    return user.getRoles()
                    .then((roles) => {
                        let roleName = roles.map((role) => role.name);
                        let token = jwtService.createJwtToken({
                            id : user.id,
                            name : user.name,
                            roles : roleName
                        })
                        
                        return {
                            id : user.id,
                            name : user.name,
                            roles : roleName,
                            accessToken : token
                        }
                    })
                } else {
                    return Promise.reject({
                        errorCode : 401,
                        message : 'Password is incorrect'
                    })
                }

            } else {
                return Promise.reject({
                    errorCode : 404,
                    message : 'User not found'
                })
            }
        })
    }

}

const authService = new AuthService();

module.exports = { authService }