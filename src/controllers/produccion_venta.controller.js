import { getConnection, sql, queries11 } from "../database";
import req from "express/lib/request";

export const getProduccionVenta = async (req,res)=> {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(queries11.getConsultaProduccionVenta);
      console.log(result);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const createNewProduccionVenta = async (req,res) =>{
    const {Conversion,Ganancia_neta,Id_ref_lote_venta,Id_ref_lote_produccion}=req.body
    if( Conversion == null || Ganancia_neta == null || Id_ref_lote_venta == null || Id_ref_lote_produccion == null ){
        return res.status(400).json({msg: 'Por favor llena todos los campos'})
    }
  try {
    const pool = await getConnection()
  await pool.request()
  .input("Conversion", sql.Float,Conversion)
  .input("Ganancia_neta", sql.Float,Ganancia_neta)
  .input("Id_ref_lote_venta", sql.Int,Id_ref_lote_venta)
  .input("Id_ref_lote_produccion", sql.Int,Id_ref_lote_produccion)
  .query(queries11.crearNuevosProduccionVenta)
    res.json({Conversion,Ganancia_neta,Id_ref_lote_venta,Id_ref_lote_produccion});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  };

  export const getProduccionVentaId = async(req,res)=>{
    const{ id } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Id', id)
    .query(queries11.getConsultaProduccionVentaId)
    console.log(result)
    res.send(result.recordset[0])
  };

  export const eliminarProduccionVentaId = async(req,res)=>{
    const{ id } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Id', id)
    .query(queries11.eliminarProduccionVentaId);
    res.sendStatus(204);
  }; 

  export const getTotalProduccionVenta = async(req,res)=>{
  const pool = await getConnection()
  const result = await pool
  .request()
  .query(queries11.getTotalProduccionVenta);
  res.json(result.recordset[0][''])
}; 

export const editarProduccionVentaId = async (req,res) =>{
    const {Conversion,Ganancia_neta,Id_ref_lote_venta,Id_ref_lote_produccion}=req.body
    const { id } = req.params; 
    if(Conversion == null || Ganancia_neta == null || Id_ref_lote_venta == null || Id_ref_lote_produccion == null  ){
      return res.status(400).json({msg: 'Por favor llena todos los campos'})
  }
  const pool = await getConnection();
  await pool 
  .request()
  .input("Conversion", sql.Float,Conversion) 
  .input("Ganancia_neta", sql.Float,Ganancia_neta)
  .input("Id_ref_lote_venta", sql.Int,Id_ref_lote_venta)
  .input("Id_ref_lote_produccion", sql.Int,Id_ref_lote_produccion)
  .input('Id', id)
  .query(queries11.editarProduccionVentaId);
  res.json({Conversion,Ganancia_neta,Id_ref_lote_venta,Id_ref_lote_produccion});
  } 