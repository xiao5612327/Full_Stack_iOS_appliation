module.exports = async function(req, res) {
    // res.send("a randome old message")
    console.log("listing all user now")

    // fetch all users using waterline
    const users = await User.find({})

    // // silly solution
    // const objs = []
    // users.forEach(element => {
    //     objs.push({id: element.id, fullName: element.fullName, email: element.email})
    // });


    res.send(users)
}