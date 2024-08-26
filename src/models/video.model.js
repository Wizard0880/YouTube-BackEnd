import mongoose, { Mongoose } from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
    {
        videoFile:{
            type: String, // url - cloudinary
            required : true,
        },
        thumbnail:{
            type: String, // url - cloudinary
            required : true,
        },
        title:{
            type: String,
            required : true,
        },
        description:{
            type: String, // url - cloudinary
            required : true,
        },
        time:{
            type: Number,
            required: true
        },
        views:{
            type: Number,
            default:0
        },
        isPublished:{
            type: Boolean,
            default: true
        },
        owner : {
            type: Mongoose.Schema.Types.ObjectId,
            ref: "User"
        }

    }
    ,{timestamps: true})

videoSchema.plugin(mongooseAggregatePaginate)    

export const Video = mongoose.model("Video",videoSchema)