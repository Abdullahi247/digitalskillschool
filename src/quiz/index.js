import Crypto from 'crypto-js'

const hash = Crypto.AES.encrypt(JSON.stringify({ name: "Hi" }), "sjhbfuihjuihoihiugetuhiuhteuheubte").toString()
console.log(hash)

