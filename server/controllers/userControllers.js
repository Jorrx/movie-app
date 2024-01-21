import { ApiError } from "../exeptions/apiError.js";
import tokenService from "../service/token-service.js";
import userService from "../service/userService.js";
import { validationResult } from "express-validator";


class userControllers {
    async registration(req, res, next) {
        try {
            console.log(req.body);
            const errors = validationResult(req)
            console.log('hellow validatoin error ');
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Validation Error', errors.array()))
            }
            const userData = await userService.registration(req.body)
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 24 * 30 * 3600 * 1000, httpOnly: true })
            return res.json(userData)
        } catch (e) {
            console.log()

            next(e)
        }
    }

    async login(req, res, next) {
        try {
            const userData = await userService.login(req.body)
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 24 * 30 * 3600 * 1000, httpOnly: true })
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (e) {
            next(e)
        }
    }

    async refresh(req, res, next) {
        try {
            console.log(req)
            const { refreshToken } = req.cookies
            const userData = await userService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 24 * 30 * 3600 * 1000, httpOnly: true })
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async saveMovie(req, res, next) {
        try {
            const savedMovies = await userService.saveMovie(req)
            return res.json(savedMovies)
        } catch (e) {
            next(e)
        }
    }
    async cancelSaveMovie(req, res, next) {
        try {
            const removedMovies = await userService.cancelSaveMovie(req)
            return res.json(removedMovies)
        } catch (e) {
            next(e)
        }
    }

}


export default new userControllers()