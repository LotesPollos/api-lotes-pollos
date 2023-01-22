import { getConnection, sql, queries14 } from "../database";
import req from "express/lib/request";

export const getValorUnidadMedida = async (req,res)=> {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(queries14.getConsultaValorUnidadMedida);
      console.log(result);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const createNewValorUnidadMedida= async (req,res) =>{
    const {Fecha, Descripcion, Valor}=req.body
    if( Fecha == null || Descripcion == null|| Valor == null ){
        return res.status(400).json({msg: 'Por favor llena todos los campos'})
    }
  try {
    const pool = await getConnection()
  await pool.request()
  .input("Fecha", sql.Date,Fecha)
  .input("Descripcion", sql.VarChar,Descripcion)
  .input("Valor", sql.Float,Valor)
  .query(queries14.crearNuevosValorUnidadMedida)
    res.json({Fecha, Descripcion, Valor});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  };

  export const getValorUnidadMedidaId = async(req,res)=>{
    const{ id } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Id', id)
    .query(queries14.getConsultaValorUnidadMedidaId)
    console.log(result)
    res.send(result.recordset[0])
  };

  export const eliminarValorUnidadMedidaId = async(req,res)=>{
    const{ id } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Id', id)
    .query(queries14.eliminarValorUnidadMedidaId);
    res.sendStatus(204);
  };

  export const getTotalValorUnidadMedida = async(req,res)=>{
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(queries14.getTotalValorUnidadMedida);
    res.json(result.recordset[0][''])
  };

  export const editarValorUnidadMedidaId = async (req,res) =>{
    const {Fecha, Descripcion, Valor}=req.body
    const { id } = req.params;
    if(  Fecha == null || Descripcion == null|| Valor == null){
      return res.status(400).json({msg: 'Por favor llena todos los campos'})
  }
  const pool = await getConnection();
  await pool 
  .request()
  .input("Fecha", sql.Date,Fecha)
  .input("Descripcion", sql.VarChar,Descripcion)
  .input("Valor", sql.Float,Valor)
  .input('Id', id)
  .query(queries14.editarValorUnidadMedidaId);
  res.json({Fecha, Descripcion, Valor});
  } 