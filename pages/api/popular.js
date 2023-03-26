import data from './data'
export default function handler(req,res){
    const{Popular}=data;

    if(Popular){
        return res.status(200).json(Popular)
    }
    return res.status(422).json({error:"Data Not Found"})
}