import { getConnection, sql, queries5 } from "../database";
import req from "express/lib/request";

export const getRegSacrificioPollo = async (req,res)=> {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries5.getConsultaRegSacrificioPollo);
        console.log(result);
        res.json(result.recordset);
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
    };

    export const createNewRegSacrificioPollo = async (req,res) =>{
        const {Id_ref_lote_produccion,Fecha_sacrificio, Cantidad_pollos }=req.body
        if( Id_ref_lote_produccion == null || Fecha_sacrificio == null || Cantidad_pollos == null ){
            return res.status(400).json({msg: 'Por favor llena todos los campos'})
        }
      try {
        const pool = await getConnection()
      await pool.request()
      .input("Id_ref_lote_produccion", sql.Int,Id_ref_lote_produccion)
      .input("Fecha_sacrificio", sql.Date,Fecha_sacrificio)
      .input("Cantidad_pollos", sql.Int,Cantidad_pollos)
      .query(queries5.crearNuevosRegSacrificioPollo)
        res.json({Id_ref_lote_produccion,Fecha_sacrificio,Cantidad_pollos});
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
    };

    export const getRegSacrificioPolloId = async(req,res)=>{
        const{ id } = req.params;
        const pool = await getConnection()
        const result = await pool
        .request()
        .input('Id', id)
        .query(queries5.getConsultaRegSacrificioPolloId)
        console.log(result)
        res.send(result.recordset[0])
      };

      export const eliminarRegSacrificioPolloId = async(req,res)=>{
        const{ id } = req.params;
        const pool = await getConnection()
        const result = await pool
        .request()
        .input('Id', id)
        .query(queries5.eliminarRegSacrificioPolloId);
        res.sendStatus(204);
      };

      export const getTotalRegSacrificioPollo = async(req,res)=>{
        const pool = await getConnection()
        const result = await pool
        .request()
        .query(queries5.getTotalRegSacrificioPollo);
        res.json(result.recordset[0][''])
      };

      export const editarRegSacrificioPolloId = async (req,res) =>{
        const {Id_ref_lote_produccion,Fecha_sacrificio, Cantidad_pollos}=req.body;
        const { id } = req.params;
        if( Id_ref_lote_produccion == null || Fecha_sacrificio == null || Cantidad_pollos == null ){
          return res.status(400).json({msg: 'Por favor llena todos los campos'})
      }
      const pool = await getConnection();
      await pool 
      .request()
      .input("Id_ref_lote_produccion", sql.Int,Id_ref_lote_produccion)
      .input("Fecha_sacrificio", sql.Date,Fecha_sacrificio)
      .input("Cantidad_pollos", sql.Int,Cantidad_pollos)
      .input('Id', id)
      .query(queries5.editarRegSacrificioPolloId);
      res.json({ Id_ref_lote_produccion,Fecha_sacrificio,Cantidad_pollos });
      } 

      export const getRegSacrificioPolloRef = async(req,res)=>{
        const{ id_ref } = req.params;
        const pool = await getConnection()
        const result = await pool
        .request()
        .input('Id_ref', id_ref)
        .query(queries5.getConsultaRegSacrificioPolloRef)
        console.log(result)
        res.json(result.recordset)
      };