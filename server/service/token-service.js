import jwt from 'jsonwebtoken'
import tokenModel from '../models/token-model.js'


class tokenService {
    genreateTokens(payload){
        const accessToken = jwt.sign(payload , process.env.JWT_ACCESS_SECRET , {expiresIn:'30m'})
        const refreshToken = jwt.sign(payload , process.env.JWT_REFRESH_SECRET , {expiresIn:'30d'})
        return{
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId , refreshToken){
        const tokenData = await tokenModel.findOne({user:userId})
        if(tokenData){
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        const token = await tokenModel.create({user:userId , refreshToken})
        return token
    }

    async removeToken(refreshToken){
        const tokenData = await tokenModel.deleteOne({refreshToken})
        return tokenData
    }

    validateAccessToken(token){
        try {
            const userData = jwt.verify(token , process.env.JWT_ACCESS_SECRET)
            return userData  
        } catch (error) {
            return null
        }
    }

    validateRefreshToken(token){
        try {
            const userData = jwt.verify(token , process.env.JWT_REFRESH_SECRET)
            return userData  
        } catch (error) {
            return null
        }
    }

    findToken(token){
        try {
            const tokenData = tokenModel.findOne({token})
            return tokenData
        } catch (error) {
            return null
        }
    }
}


export default new tokenService()