module.exports = async function(req, res) {
    const postBody = req.body.postBody
    console.log("create post object" + postBody)

    // waterline createion syntax
    const record = await Post.create({text: postBody}).fetch()
    res.send(record)
    // res.end()
}