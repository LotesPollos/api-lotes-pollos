import req from "express/lib/request";
import { getConnection, sql, queriesloteterminado } from "..//../database";

export const getConsultarLoteTerminar = async(req,res)=>{
    const{ id_ref_lote } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Id_ref_lote', id_ref_lote)
    .query(queriesloteterminado.getLoteTerminado)
    console.log(result)
    res.json(result.recordset)
  };

  export const getConsultarLoteVentasTerminar = async(req,res)=>{
    const{ id_ref_lote } = req.params;
    const pool = await getConnection()
    const result = await pool 
    .request()
    .input('Id_ref_lote', id_ref_lote)
    .query(queriesloteterminado.getLoteVenta)
    console.log(result)
    res.json(result.recordset)
  };

  export const getConsultarLoteVentasProduccion = async(req,res)=>{
    const{ id_ref_lote } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Id_ref_lote', id_ref_lote)
    .query(queriesloteterminado.getLote_Venta_Produccion)
    console.log(result)
    res.json(result.recordset)
  };