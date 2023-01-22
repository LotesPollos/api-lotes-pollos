import { getConnection, sql, queries9 } from "../database";
import req from "express/lib/request";

export const getGastosVentas = async (req,res)=> {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(queries9.getConsultaGastosVentas);
      console.log(result);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const createNewGastosVentas = async (req,res) =>{
    const {Id_ref_lote_venta,Gasto_creado, Precio, Cantidad, Descripcion_gasto, Fecha_gasto }=req.body
    if( Id_ref_lote_venta == null || Gasto_creado == null || Precio == null || Cantidad == null || Descripcion_gasto == null || Fecha_gasto == null ){
        return res.status(400).json({msg: 'Por favor llena todos los campos',Gasto_creado})
    }
  try {
    const pool = await getConnection()
  await pool.request().input("Id_ref_lote_venta", sql.Int,Id_ref_lote_venta)
  .input("Gasto_creado", sql.VarChar,Gasto_creado)
  .input("Precio", sql.Float,Precio)
  .input("Cantidad", sql.Float,Cantidad)
  .input("Descripcion_gasto", sql.VarChar,Descripcion_gasto)
  .input("Fecha_gasto", sql.Date,Fecha_gasto)
  .query(queries9.crearNuevosGastosVentas)
    res.json({Id_ref_lote_venta,Gasto_creado,Precio,Cantidad,Descripcion_gasto,Fecha_gasto});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  };

  export const getGastosVentasId = async(req,res)=>{
    const{ id } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Id', id)
    .query(queries9.getConsultaGastosVentasId)
    console.log(result)
    res.send(result.recordset[0])
  };

  export const eliminarGastosVentasId = async(req,res)=>{
    const{ id } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Id', id)
    .query(queries9.eliminarGastosVentasId);
    res.sendStatus(204);
  };

  export const getTotalGastosVentas = async(req,res)=>{
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(queries9.getTotalGastosVentas);
    res.json(result.recordset[0][''])
  };

  export const editarGastosVentasId = async (req,res) =>{
    const {Id_ref_lote_venta,Gasto_creado, Precio, Cantidad, Descripcion_gasto, Fecha_gasto }=req.body
    const { id } = req.params;
    if( Id_ref_lote_venta == null || Gasto_creado == null || Precio == null || Cantidad == null || Descripcion_gasto == null || Fecha_gasto == null ){
      return res.status(400).json({msg: 'Por favor llena todos los campos',Id_ref_lote_venta})
  }
  const pool = await getConnection();
  await pool 
  .request()
  .input("Id_ref_lote_venta", sql.Int,Id_ref_lote_venta)
  .input("Gasto_creado", sql.VarChar,Gasto_creado)
  .input("Precio", sql.Float,Precio)
  .input("Cantidad", sql.Float,Cantidad)
  .input("Descripcion_gasto", sql.VarChar,Descripcion_gasto)
  .input("Fecha_gasto", sql.Date,Fecha_gasto)
  .input('Id', id)
  .query(queries9.editarGastosVentasId);
  res.json({ Id_ref_lote_venta,Gasto_creado,Precio,Cantidad,Descripcion_gasto,Fecha_gasto });
  } 
  
  export const getLoteGastosVentasRef = async(req,res)=>{
    const{ id_ref } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Id_ref', id_ref)
    .query(queries9.getConsultaGastosVentasRef)
    console.log(result)
    res.json(result.recordset)
  };