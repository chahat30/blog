import {Schema , model } from 'mongoose';

const CommentSchema= new Schema({
    user: {type: Schema.Types.ObjectId, ref: "User", required: true},
    desc: {type: String, required: true},
    postId: {type: Schema.Types.ObjectId, ref: "Post", required: true},
    check: {type: Boolean, default: false},
    parent:{
        type: Schema.Types.ObjectId,
        ref: "Comment",
        default: null
    },
    replyOnUser:{
        type: Schema.Types.ObjectId,
        ref: "User",
        default: null
    }
},
{
    timestamps: true        //options: automatically adds 2 fields: created at and updated at
}
);

CommentSchema.virtual("replies", {
    ref:"Comment",
    localField:"_id",
    foreignField:"parents"
})

const Comment = model("Comment", CommentSchema);     //model name, schema
export default Comment;