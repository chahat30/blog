import Post from "../models/Post";
import PostCategories from "../models/PostCategories";

export const createPostCategory =async (req, res, next) =>{
    try {
        const {title} =req.body;
        const PostCategory = await PostCategories.findOne({title});
        if(PostCategory){
            const error = new Error("Category is already created!");
            return next(error);
        }
        const newPostCategory = new PostCategories({
            title
        });
        const savedPostCategory = await newPostCategory.save();
        return res.status(201).json(savedPostCategory);
    } catch (error) {
        next(error);
    }
}

export const getAllPostCategories =async (req, res, next) =>{
    try {
        
        const postCategories = await PostCategories.find({});
        return res.json(postCategories);
        
    } catch (error) {
        next(error);
    }
}

export const updatePostCategory =async (req, res, next) =>{
    try {
        const {title} = req.body;
        const postCategory = await PostCategories.findByIdAndUpdate(req.params.postCategoryId,{
            title
        },{ new: true});
        if(!postCategory){
            const error = new Error("Category was not found");
            return next(error);
        }
        return res.json(postCategory);
    } catch (error) {
        next(error);
    }
}

export const deletePostCategory =async (req, res, next) =>{
    try {
        const categoryId =req.params.postCategoryId;
        await Post.updateMany(
            {categories: {$in:[categoryId]}},
            { $pull : {categories:categoryId}}
        );
        await PostCategories.deleteOne({_id: categoryId});
        res.send({
            message: "post category is deleted",
        })
    } catch (error) {
        next(error);
    }
}