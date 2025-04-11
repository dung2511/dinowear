
const Comment = require("../../Models/comment")


// Gọi API hiện thị list comment của sản phẩm 
// Phương thức GET
module.exports.index = async (req, res) => {

    const comment_product = await Comment.find().populate("id_user").limit(6)

    res.json(comment_product)

}

module.exports.getCommentByIdProduct = async (req, res) => {
    const id_product = req.params.id

    const comment_product = await Comment.find({ id_product: id_product }).populate('id_user')

    res.json(comment_product)
}
// Gửi comment
// Phương Thức Post
module.exports.post_comment = async (req, res) => {

    const id_product = req.params.id


    const data = {
        id_product: id_product,
        id_user: req.body.id_user,
        content: req.body.content,
        star: req.body.star
    }

    await Comment.create(data)

    res.send('Thanh Cong')

}