/**
 * ----------------
 *      jwt
 * ----------------
 * 1. install jsonwebtoken cookieparser
 * use middleware cookieparaser
 * get jwt access token require('crypto').randomBytes(64).toString('hex')
 *
 * 2/ create a token
 * jwt.sign(data, secret, {expiresIn: '4h'})
 * set token to the cookie of res.cookie('token',{
 *  httpOnly: true,
 *  secure: false
 * })
 * cors({
 * origin: [''],
 *  credentials: true
 * })
 *
 * client: {
 *  withCredentials: true
 * }
 *
 * 3/ send the token to the client side
 * make sure token is in the cookies (applications)
 *
 * 4/ before logout clear token
 *
 */
