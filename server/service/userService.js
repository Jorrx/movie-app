import userModel from "../models/user-model.js";
import bcrypt from 'bcrypt'
import tokenService from './token-service.js'
import {UserDto} from "../dtos/user-dto.js";
import {ApiError} from "../exeptions/apiError.js";

class userService {
    async registration(body) {

        const {email, password, fullName} = body
        const candidate = await userModel.findOne({email})
        if (candidate) {
            throw ApiError.BadRequest(`user ${email} already exists`)
        }

        const hashPassword = await bcrypt.hash(password, 3)

        const user = await userModel.create({...body, password: hashPassword})
        console.log(user, '::user')
        const userDto = new UserDto(user)
        const tokens = tokenService.genreateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        console.log(email, password)
        return {...tokens, user: userDto}
    }

    async login(body) {
        const {email, password} = body

        const user = await userModel.findOne({email})
        if (!user) {
            throw ApiError.BadRequest(`User is not found`)
        }
        const isPassword = await bcrypt.compare(password, user.password)

        if (!isPassword) {
            throw ApiError.BadRequest('invalid login or password')
        }

        const userDto = new UserDto(user)
        const tokens = tokenService.genreateTokens({...userDto})

        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, user: userDto}

    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }


    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = tokenService.findToken(refreshToken)

        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError()
        }

        const user = await userModel.findById(userData.id)

        const userDto = new UserDto(user)
        const tokens = tokenService.genreateTokens({...userDto})

        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, user: userDto}
    }


    async saveMovie(req) {

        const {email, ...movieItem} = req.body.movie;
        const userData = await userModel.findOneAndUpdate(
            {email: email},
            {
                $push: {
                    savedMovies: movieItem
                }
            },
            {new: true}
        );
        const userDto = new UserDto(userData)

        return {user: userDto}
    }

    async cancelSaveMovie(req) {
        const {email, ...movieItem} = req.body.movie;

        const userData = await userModel.findOneAndUpdate(
            {email: email},
            {
                $pull: {
                    savedMovies: {id: movieItem.id}
                }
            },
            {new: true}
        );

        // console.log(userData)
        return {user: userData};
    }


}

export default new userService();