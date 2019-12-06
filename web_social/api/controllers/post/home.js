module.exports = async function(req, res) {
    sails.log.warn("show the post  form now")
    
    const allPosts = await Post.find()
    res.view('pages/post/home', {
        allPosts
    })

    // res.end()
}