import Report from "../models/Report.js";

export const getUserReports = async (req, res) => {
    try{
        const reports = await Report.find({user:req.user._id}).sort({createdAt: -1});
        res.status(200).json(reports);
    }catch (error) {
        console.error("Fetching Reports error: ", error);
        res.status
    }
}