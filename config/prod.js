// module.exports={
//     googleClientID:'340871556045-sojcou0rq01isnieal464qv88jl60jsh.apps.googleusercontent.com',
//     googleClientSecret:'NfpYLtcFWTaWIfQvA5-053rC',
//     mongoURI:'mongodb+srv://usman:ywanNFn4j4vkzSlW@cluster0-7x0te.mongodb.net/test?retryWrites=true&w=majority',
//     cookieKey:'idjjkhjksdhjkhsjkdhjkhutrfdnfjkrhjkthjk'

// }

module.exports={
    googleClientID:process.env.GOOGLE_CLIENT_ID,
    googleClientSecret:process.env.GOOGLE_CLIENT_SECRET,
    mongoURI:process.env.MONGO_URI,
    cookieKey:process.env.COOKIE_KEY

}