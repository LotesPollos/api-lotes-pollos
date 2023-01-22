import { getConnection, sql, queries4 } from "../database";
import req from "express/lib/request";

export const getRegProduccionMortalidad = async (req,res)=> {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries4.getConsultaRegProduccionMortalidad);
        console.log(result);
        res.json(result.recordset);
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
    };

    export const createNewRegProduccionMortalidad = async (req,res) =>{
        const {Id_ref_lote_produccion,Fecha_reg_mortalidad, Cantidad_pollos_muertos }=req.body
        if( Id_ref_lote_produccion == null || Fecha_reg_mortalidad == null || Cantidad_pollos_muertos == null ){
            return res.status(400).json({msg: 'Por favor llena todos los campos'})
        }
      try {
        const pool = await getConnection()
      await pool.request().input("Id_ref_lote_produccion", sql.Int,Id_ref_lote_produccion)
      .input("Fecha_reg_mortalidad", sql.Date,Fecha_reg_mortalidad)
      .input("Cantidad_pollos_muertos", sql.Int,Cantidad_pollos_muertos)
      .query(queries4.crearNuevosRegProduccionMortalidad)
        res.json({Id_ref_lote_produccion,Fecha_reg_mortalidad,Cantidad_pollos_muertos});
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
    };

    export const getRegProduccionMortalidadId = async(req,res)=>{
        const{ id } = req.params;
        const pool = await getConnection()
        const result = await pool
        .request()
        .input('Id', id)
        .query(queries4.getConsultaRegProduccionMortalidadId)
        console.log(result)
        res.send(result.recordset[0])
      };

      export const eliminarRegProduccionMortalidadId = async(req,res)=>{
        const{ id } = req.params;
        const pool = await getConnection()
        const result = await pool
        .request()
        .input('Id', id)
        .query(queries4.eliminarRegProduccionMortalidadId);
        res.sendStatus(204);
      };

      export const getTotalRegProduccionMortalidad = async(req,res)=>{
        const pool = await getConnection()
        const result = await pool
        .request()
        .query(queries4.getTotalRegProduccionMortalidad);
        res.json(result.recordset[0][''])
      };

      export const editarRegProduccionMortalidadId = async (req,res) =>{
        const {Id_ref_lote_produccion,Fecha_reg_mortalidad, Cantidad_pollos_muertos}=req.body;
        const { id } = req.params;
        if( Id_ref_lote_produccion == null || Fecha_reg_mortalidad== null || Cantidad_pollos_muertos == null ){
          return res.status(400).json({msg: 'Por favor llena todos los campos'})
      }
      const pool = await getConnection();
      await pool 
      .request()
      .input("Id_ref_lote_produccion", sql.Int,Id_ref_lote_produccion)
      .input("Fecha_reg_mortalidad", sql.Date,Fecha_reg_mortalidad)
      .input("Cantidad_pollos_muertos", sql.Int,Cantidad_pollos_muertos)
      .input('Id', id)
      .query(queries4.editarRegProduccionMortalidadId);
      res.json({ Id_ref_lote_produccion,Fecha_reg_mortalidad,Cantidad_pollos_muertos });
      } 

      export const getRegProduccionMortalidadRef = async(req,res)=>{
        const{ id_ref } = req.params;
        const pool = await getConnection()
        const result = await pool
        .request()
        .input('Id_ref', id_ref)
        .query(queries4.getConsultaRegProduccionMortalidadRef)
        console.log(result)
        res.json(result.recordset)
      };