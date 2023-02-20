import { Router,Request,Response } from "express";
import {Punishment } from "../models/punishment.model";

    const punishmentRoutes= Router();

    punishmentRoutes.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); 
        res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept');
        res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
        next();
    });


    punishmentRoutes.post('/create',(req:Request, resp: Response)=>{

        const punishment = {
            id : req.body.id,
            name : req.body.name,
            description : req.body.description,
            state : true,
            pathImage: req.body.pathImage
        }

       
        //SAVE      
        Punishment.create(punishment).then(punishmentDB =>{                                                        
            resp.json({
                ok: true,
                mensaje: 'Castigo guardado exitosamente.',
                punishment: punishmentDB
            })
        }).catch(err=>{
            resp.json({
                ok:false,
                mensaje: 'Error: ' + err
            });
        });
        
    });
    
    punishmentRoutes.get('/getPunishments',async (req : Request, resp: Response)=>{

        const punishments = await Punishment.find().exec();

        resp.json({
            ok:true,
            mensaje: 'Retornando todos los castigos',
            punishments
        })
    });
export default punishmentRoutes;