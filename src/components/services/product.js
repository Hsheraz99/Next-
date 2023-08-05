import fs from "fs"
import path from "path";
import { encode } from "querystring";


const filePath=path.join(process.cwd(), "data","product.json");


export default function getAll(){
  const data= fs.readFileSync(filePath,{encoding:"utf-8"});
  const result = JSON.parse(data);
  console.log(result);
};

export default function getById(id){
const data=getAll();
data.find(u=>u.id===id);


}