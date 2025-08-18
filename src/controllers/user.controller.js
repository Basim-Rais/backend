import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js"
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


const registerUser = asyncHandler( async (req, res) => {
   const { fulname, email, username, password} = req.body
   console.log("email : ", email)


   if(
      [email, fullname, password, username].some( (fields) =>
      fields?.trim() === " " )
   ){
      throw new apiError(400, " All fields are required ")
   }


    const existedUser = User.findOne(
      {
         $or : [{email}, {username}]
      }

      
   )

   if(existedUser){
      throw new apiError(409, "User with username or email already exists")
   }

   const avatarlocalpath = req.files?.avatar[0]?.path;
   const coverImagelocalpath = req.files?.coverImage[0]?.path;

   if(!avatarlocalpath){
      throw new apiError(400, "avatar is required");
   }

   const avatar = await uploadOnCloudinary(avatarlocalpath);
   const coverImage = await uploadOnCloudinary(coverImagelocalpath);

   if(!avatar){
      throw new apiError(400, "avatar is required");
   }

   const user = await User.create({
      fullname,
      avatar : avatar.url,
      coverImage : coverImage?url || " ",
      email,
      password,
      username : username.toLowerCase()
   })


   const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
   )

   if(!createdUser){
      throw new apiError(500, "something went wrong while registering the user")
   }

   return res.status(201, createdUser, "user registered successfully")
})

export {registerUser};      