import { Router,Request,Response } from "express";
import { Award } from "../models/awards.model";

    const awardsRoutes= Router();

    awardsRoutes.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); 
        res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept');
        res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
        next();
    });


    awardsRoutes.post('/create',(req:Request, resp: Response)=>{

        const award = {
            id : req.body.id,
            name : req.body.name,
            description : req.body.description,
            state : true,
            pathImage: req.body.pathImage
        }

       
        //SAVE      
        Award.create(award).then(awardDB =>{                                                        
            resp.json({
                ok: true,
                mensaje: 'Premio guardado exitosamente.',
                award: awardDB
            })
        }).catch(err=>{
            resp.json({
                ok:false,
                mensaje: 'Error: ' + err
            });
        });
        
    });
    
    awardsRoutes.get('/getAwards',async (req : Request, resp: Response)=>{

        const awards = await Award.find().exec();

        resp.json({
            ok:true,
            mensaje: 'Retornando todos los premios',
            awards
        })
    });
export default awardsRoutes;