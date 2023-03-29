import data from './data'
export default function handler(req,res){
    const{Allposts}=data;

    if(Allposts){
        return res.status(200).json(Allposts)
    }
    return res.status(422).json({error:"Data Not Found"})
}