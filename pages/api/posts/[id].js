import data from '../data'

export default function handler(req,res){
   const {id}= req.query;
   const {Allposts} = data;

   if(id){
   const post= Allposts.find(value=>value.id == id)

   return res.status(200).json(post)
   }

   return res.status(404).json({error:"Post not found"})
}