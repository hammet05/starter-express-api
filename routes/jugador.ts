import { json } from "body-parser";
import { Router,Request,Response } from "express";
import { buffer } from "stream/consumers";
import { Player } from '../models/player.model';
var express = require('express')
  , bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const playerRoutes = Router();


playerRoutes.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    next();
  });


    playerRoutes.get('/test',( req: Request , res: Response)=>{

        res.json({
            ok: true,
            mensaje: 'All OKis'
        })
    });


    playerRoutes.post('/create',(req : Request, resp: Response)=>{
        console.log('%cjugador.ts line:30 req.body', 'color: #007acc;', req.body);
        const player = {
            name: req.body.name,
            avatar: req.body.avatar,
            path: req.body.path,
            patePerro: req.body.patePerro,
            unos: req.body.unos,
        }
        //SAVE      
        Player.create(player).then(userDB =>{                                                        
            resp.json({
                ok: true,
                mensaje: 'Jugador guardado exitosamente.',
                player: userDB
            })
        }).catch(err=>{
            resp.json({
                ok:false,
                mensaje: 'Error: ' + err
            });
        });
       
    });

    playerRoutes.get('/getPlayers',async (req : Request, resp: Response)=>{

        const players = await Player.find().exec();

        resp.json({
            ok:true,
            mensaje: 'Retornando todos los jugadores',
            players
        })
    });

    playerRoutes.post('/updateUnos', async(req: Request , resp: Response)=>{
       
        console.log('%cjugador.ts line:66 req', 'color: #007acc;', req.body);
       
        if(!req.body) {
            console.log('viene nulo el cuerpo ' );
            resp.json({
                ok:false,
                mensaje: "Valor nulo el body",
                player: req.body
            })
            return;
        }
        
        const value=1;
        const player = {
            unos: req.body.unos

        }
        Player.findById( req.body._id, function(err: any, docs: any) {
            console.log('%cjugador.ts line:98 seletedPlayer', 'color: #007acc;', docs);
            
             player.unos=docs.unos+1;

            Player.findByIdAndUpdate(req.body._id, player, {new: true},(err,userDB )=>{
            
                if(err ) throw err;

                if(!userDB) {
                    return resp.json({
                        ok: false,
                        mensaje: "Error: No existe usuario con ese ID" + req.body._id
                    });
                }
            
                resp.json({
                    ok:true,
                    mensaje: "Actualizado",
                    player: userDB
                })

                console.log("Result : ", userDB.unos);
            });
        })     
        

    });
    //-------------------

playerRoutes.post('/updatePatePerros', async(req: Request , resp: Response)=>{                     
    if(!req.body) {
        console.log('viene nulo el cuerpo ' );
        resp.json({
                ok:false,
                mensaje: "Valor nulo el body",
                player: req.body
            })
            return;
        }
                
        const player = {
            patePerro: req.body.patePerro

        }
        Player.findById( req.body._id, function(err: any, docs: any) {                     
            player.patePerro = docs.patePerro+1;

            Player.findByIdAndUpdate(req.body._id, player, {new: true},(err,userDB )=>{
            
                if(err ) throw err;

                if(!userDB) {
                    return resp.json({
                        ok: false,
                        mensaje: "Error: No existe usuario con ese ID, valide la info" + req.body._id
                    });
                }
            
                resp.json({
                    ok:true,
                    mensaje: "Actualizado",
                    player: userDB
                })

                console.log("Result : ", userDB.patePerro);
            });
        })     
        

    });

    
export default playerRoutes;