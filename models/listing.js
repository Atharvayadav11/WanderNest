const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
  title:{
    type:String,
    required:true,
  },
  description:String,
  image:{
    type:String,
    default:"https://images.freecreatives.com/wp-content/uploads/2016/12/Hotel-Service-Icons.jpg",
    set:(v) => v===" "?"https://images.freecreatives.com/wp-content/uploads/2016/12/Hotel-Service-Icons.jpg link":v,
  },
  price:Number,
  location:String,
  country:String,
})
const Listing=mongoose.model("Listing",listingSchema)
module.exports=Listing;