import { getConnection, sql, queries13 } from "../database";
import req from "express/lib/request";

export const getTablaLotes = async (req,res)=> {
    try {
      const pool = await getConnection();
      const result = await pool
      .request()
      .query(queries13.getConsultaLotes);
      console.log(result);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const createNewLotes = async (req,res) =>{
    const {Fecha_creacion_lote_sistema, Fecha_terminacion_lote_sistema, Estado_lote, Id_referencia_usuario}=req.body
    if( Fecha_creacion_lote_sistema == null || Fecha_terminacion_lote_sistema == null || Estado_lote== null || Id_referencia_usuario == null ){
        return res.status(400).json({msg: 'Por favor llena todos los campos'})
    }
  try {
    const pool = await getConnection()
    const result = await pool.request()
  .input("Fecha_creacion_lote_sistema", sql.Date,Fecha_creacion_lote_sistema)
  .input("Fecha_terminacion_lote_sistema", sql.Date,Fecha_terminacion_lote_sistema)
  .input("Estado_lote", sql.VarChar,Estado_lote)
  .input("Id_referencia_usuario", sql.Int,Id_referencia_usuario)
  .query(queries13.crearNuevosLotes)
    //res.json({Fecha_creacion_lote_sistema, Fecha_terminacion_lote_sistema, Estado_lote, Id_referencia_usuario});
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  };

  export const getLotesId = async(req,res)=>{
    const{ id } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Id', id)
    .query(queries13.getConsultaLotesId)
    console.log(result)
    res.send(result.recordset[0])
  };

  export const eliminarLotesId = async(req,res)=>{
    const{ id } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Id', id)
    .query(queries13.eliminarLotesId);
    res.sendStatus(204);
  };

  export const getTotalLotes = async(req,res)=>{
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(queries13.getTotalLotes);
    res.json(result.recordset[0][''])
  };
  export const editarLotesId = async (req,res) =>{
    const {Fecha_terminacion_lote_sistema, Estado_lote, Id_referencia_usuario}=req.body
    const { id } = req.params;
    if(Fecha_terminacion_lote_sistema == null || Estado_lote== null || Id_referencia_usuario == null ){
      return res.status(400).json({msg: 'Por favor llena todos los campos'})
  }
  const pool = await getConnection();
  await pool 
  .request()
  .input("Fecha_terminacion_lote_sistema", sql.Date,Fecha_terminacion_lote_sistema)
  .input("Estado_lote", sql.VarChar,Estado_lote)
  .input("Id_referencia_usuario", sql.Int,Id_referencia_usuario)
  .input('Id', id)
  .query(queries13.editarLotesId);
  res.json({Fecha_terminacion_lote_sistema, Estado_lote, Id_referencia_usuario});
  } 

  export const getConsultarFecha = async (req,res)=> {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(queries13.getConsultaLotes);
      console.log(result);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const getLotes = async (req,res)=> {
    try {
      const pool = await getConnection();
      const result = await pool
      .request()
      .query(queries13.getConsultaTablaLotes);
      console.log(result);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };