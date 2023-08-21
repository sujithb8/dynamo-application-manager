const mongoose = require('mongoose')
const {ObjectId}= mongoose.Schema


const univSchema = new mongoose.Schema({
    univName: {
        type: String,
        required: [true, 'Name is required'],
        unique: true,
        maxlength: 32,
    },
    about:{
        type: String,
        required: false,
        maxlength: 255,
    },
    location: {
        type: String,
        required:true,
    },
    state:{
        type: String,
        required:true,
    },
    country: {
        type: String,
        required: true,
    },
     //0 = Public, 1 = private
    type: {
        type: Boolean,
        required:true,
    },
    rank: {
        type:Number,
        required:false,
        default:0
    },
    founded: {
        type:Number,
        required:false,
    },
    gratio: {
        type:String,
        required: false,
    },
    alumini:{
        type:[String],
        required: false
    },
    strength:{
        type:Number,
        required: false,
    },
   
    gpa:{
        type:Number,
        required:false,
    },
    acceptance:{
        type:Number,
        required:false,
    }, 
    //0=GPA. 1=Holostic
    approach:{
        type:Boolean,
        required:false,
    },
    ielts:{
        type:Number,
        required: false,
    },
    gre_quant:{
        type:Number,
        required:false,
    },
    gre_verbal:{
        type:Number,
        required:false,
    },
    gre_awa:{
        type:Number,
        required:false,
    },
    
    gre:{
        type:Number,
        required: false,
    },
    exams_accepted:{
        type:[String],
        required:false
    },
    intakes:{
        type:[String],
        required:false
    },
    salary:{
        type:Number,
        required:false,
    },
    majority:{
        type:String,
        required:false,
    },
    expenses:{
        type:Number,
        required:false,
    },
    tuition_expenses:{
        type:Number,
        required:false,
    },
    living_expenses:{
        type:Number,
        required:false,
    },
    safety:{
        type:String,
        required:false,
    },
    weather:{
        type:String,
        required:false,
        default:"moderate",
    },
    logo:{
        type:String,
        required:false,
    },
    image:{
        type:String,
        required:false,
    },
    programs:{
        type:[String],
        required:false,
        default:"lol",
    },
    user:{
        type:ObjectId,
        ref:"User",
        required:true,
    }

}, { timestamps: true })


module.exports = mongoose.model("Univ", univSchema);