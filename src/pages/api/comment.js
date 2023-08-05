import getAll from "@/components/services/product"
import { data } from "autoprefixer";

export default function handler(req, res) {
    console.log(req.method,"cmnt")
    if (req.method==="POST"){
      getAll ();
      
      return res.status(200).json(data)
    }
     return res.status(404).send()
}