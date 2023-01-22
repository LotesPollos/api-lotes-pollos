import { getConnection, sql, queries6 } from "../database";
import req from "express/lib/request";

export const getGastosProduccion = async (req,res)=> {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries6.getConsultaGastosProduccion);
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewGastosProduccion = async (req,res) =>{
  const {Id_ref_lote_produccion,Gasto_creado, Precio, Cantidad, Descripcion_gasto, Fecha_gasto }=req.body
  if( Id_ref_lote_produccion == null || Gasto_creado == null || Precio == null || Cantidad == null || Descripcion_gasto == null || Fecha_gasto == null ){
      return res.status(400).json({msg: 'Por favor llena todos los campos'})
  }
try {
  const pool = await getConnection()
await pool.request().input("Id_ref_lote_produccion", sql.Int,Id_ref_lote_produccion)
.input("Gasto_creado", sql.VarChar,Gasto_creado)
.input("Precio", sql.Float,Precio)
.input("Cantidad", sql.Float,Cantidad)
.input("Descripcion_gasto", sql.VarChar,Descripcion_gasto)
.input("Fecha_gasto", sql.Date,Fecha_gasto)
.query(queries6.crearNuevosGastosProduccion)
  res.json({Id_ref_lote_produccion,Gasto_creado,Precio,Cantidad,Descripcion_gasto,Fecha_gasto});
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};

export const getGastosProduccionId = async(req,res)=>{
  const{ id } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input('Id', id)
  .query(queries6.getConsultaGastosProduccionId)
  console.log(result)
  res.send(result.recordset[0])
};

export const eliminarGastosProduccionId = async(req,res)=>{
  const{ id } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input('Id', id)
  .query(queries6.eliminarGastosProduccionId);
  res.sendStatus(204);
};

export const getTotalGastosProduccion = async(req,res)=>{
  const pool = await getConnection()
  const result = await pool
  .request()
  .query(queries6.getTotalGastosProduccion);
  res.json(result.recordset[0][''])
};

export const editarGastosProduccionId = async (req,res) =>{
  const {Id_ref_lote_produccion,Gasto_creado, Precio, Cantidad, Descripcion_gasto, Fecha_gasto }=req.body
  const { id } = req.params;
  if( Id_ref_lote_produccion == null || Gasto_creado == null || Precio == null || Cantidad == null || Descripcion_gasto == null || Fecha_gasto == null ){
    return res.status(400).json({msg: 'Por favor llena todos los campos'})
}
const pool = await getConnection();
await pool 
.request()
.input("Id_ref_lote_produccion", sql.Int,Id_ref_lote_produccion)
.input("Gasto_creado", sql.VarChar,Gasto_creado)
.input("Precio", sql.Float,Precio)
.input("Cantidad", sql.Float,Cantidad)
.input("Descripcion_gasto", sql.VarChar,Descripcion_gasto)
.input("Fecha_gasto", sql.Date,Fecha_gasto)
.input('Id', id)
.query(queries6.editarGastosProduccionId);
res.json({ Id_ref_lote_produccion,Gasto_creado,Precio,Cantidad,Descripcion_gasto,Fecha_gasto });
} 

export const getGastosProduccionRef = async(req,res)=>{
  const{ id_ref } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input('Id_ref', id_ref)
  .query(queries6.getConsultaGastosProduccionRef)
  console.log(result)
  res.json(result.recordset)
};

