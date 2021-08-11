import  express  from "express";
import herosController from "../controller/herosController.js";   

const router = express.Router();
const heros = new herosController();

//todo las rutas tiene el prefijo /heros
router.get('/',(req,res)=>{
    heros.getheros().then(
        (data) =>{
            if(data){
                res.json(data);
            }else{
                res.status(500).end();
            }
        }); ; 
});

router.get("/:id",(req,res)=>{
    heros.gethero(req.params.id).then(
        (data) =>{
            if(data){
                res.json(data);
            }else{
                res.status(300).end();
            }
        });
});

router.post("/",(req,res)=>{
    heros.postHero(req.body).then(
        (data)=>{
            if(data){
                res.json(data);
            }else{
                res.status(300).end();
            }
    });
})
router.delete("/:id",(req,res)=>{
    res.json(heros.deletehero(req.params.id));
})

export default router;