const univModel = require('../models/univModel');
const Univ = require('../models/univModel');
const ErrorResponse = require('../utils/errorResponse');


exports.addUniv = async (req, res, next) => {
    const { univName } = req.body;
    const univExist = await Univ.findOne({ univName });
    if (univExist) {
        return next(new ErrorResponse("University already added", 400));
    }
    try {
        const univ = await Univ.create({univName:req.body.univName,
            about:req.body.about,
            location:req.body.location,
            state:req.body.state,
            country:req.body.country, 
            type:req.body.type,
            rank:req.body.rank,
            founded:req.body.founded,
            gratio:req.body.gratio,
            alumini:req.body.alumini,
            strength:req.body.strength,
            gpa:req.body.gpa,
            acceptance:req.body.acceptance,
            approach:req.body.approach,
            ielts:req.body.ielts,
            gre:req.body.gre,
            gre_quant:req.body.gre_quant,
            gre_verbal:req.body.gre_verbal,
            gre_awa:req.body.gre_awa,
            gre:req.body.gre,
            intakes:req.body.intakes,
            exams_accepted:req.body.exams_accepted,
            salary:req.body.salary,
            majority:req.body.majority,
            expenses:req.body.expenses,
            tuition_expenses:req.body.tuition_expenses,
            living_expenses:req.body.living_expenses,
            safety:req.body.safety,
            weather:req.body.weather,
            logo:req.body.logo,
            image:req.body.image,
            programs:req.body.programs,
        user:req.user.id});
        res.status(201).json({
            success: true,
            univ
        })
    } catch (error) {
        next(error);
    }
}

exports.allUnivs = async (req, res, next) => {
    try {
        const univs = await Univ.find();
        res.status(200).json({
            success: true,
            univs
        })
    } catch (error) {
        next(error)
    }
}

exports.singleUniv = async (req, res, next) => {
    try {
        const univ = await Univ.findById(req.params.id);
        res.status(200).json({
            success: true,
            univ
        })
    } catch (error) {
        next(error)
    }
}

exports.updateUniv = async (req, res, next) => {
    try {
        const univ = await Univ.findByIdAndUpdate(req.params.univ_id,req.body,{new:true});
        res.status(200).json({
            success: true,
            message: 'Updated university successfully',
            univ
        })
    } catch (error) {
        next(error)
    }
}

exports.deleteUniv = async (req, res, next) => {
    try {
        const univ = await Univ.findByIdAndRemove(req.params.id);
        res.status(200).json({
            success: true,
            message:'University was deleted successfully',
            univ
        })
    } catch (error) {
        next(error)
    }
}



//show results
exports.showUnivs = async (req, res, next) => {

    //enable search 
    const keyword = req.query.keyword ? {
        title: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}


    // filter jobs by category ids
    let ids = [];
    const univType = await Univ.find({}, { _id: 1 });
    univType.forEach(cat => {
        ids.push(cat._id);
    })

    let cat = req.query.cat;
    let categ = cat !== '' ? cat : ids;


    //jobs by location
    let locations = [];
    const univByLocation = await Univ.find({}, { location: 1 });
    univByLocation.forEach(val => {
        locations.push(val.location);
    });
    let setUniqueLocation = [...new Set(locations)];
    let location = req.query.location;
    let locationFilter = location !== '' ? location : setUniqueLocation;


    //enable pagination
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;
    // const count = await Univ.find({}).estimatedDocumentCount();
    const count = await Univ.find({ ...keyword }).countDocuments();

    try {
        const univs = await Univ.find({ ...keyword}).sort({ rank: 1 }).skip(pageSize * (page - 1)).limit(pageSize)
        res.status(200).json({
            success: true,
            univs,
            page,
            pages: Math.ceil(count / pageSize),
            count,
            setUniqueLocation

        })
    } catch (error) {
        next(error);
    }
}