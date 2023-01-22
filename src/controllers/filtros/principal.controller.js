import req from "express/lib/request";
import { getConnection, sql, queriesprincipal } from "..//../database";

export const getFiltroEstado = async(req,res)=>{
    const{ estado } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Estado', estado)
    .query(queriesprincipal.getConsultaEstado);
    console.log(result)
    res.json(result.recordset)  
  };

  export const getFiltroIdLote = async(req,res)=>{
    const{ estado } = req.params;
    const{ id_lote } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Estado', estado)
    .input('Id_lote', id_lote)
    .query(queriesprincipal.getConsultaIdLote);
    console.log(result)
    res.json(result.recordset)  
  };

  export const getFiltroFsacrificio = async(req,res)=>{
    const{ estado } = req.params;
    const{ sacrificio } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Estado', estado)
    .input('Sacrificio', sacrificio)
    .query(queriesprincipal.getConsultaFsacrificio);
    console.log(result)
    res.json(result.recordset)  
  };

  export const getFiltroFentrada = async(req,res)=>{
    const{ estado } = req.params;
    const{ entrada } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Estado', estado)
    .input('Entrada', entrada)
    .query(queriesprincipal.getConsultaFentrada);
    console.log(result)
    res.json(result.recordset)  
  };