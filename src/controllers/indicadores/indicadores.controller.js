import req from "express/lib/request";
import { getConnection, sql, queriesindicadores } from "..//../database";

export const getIndicadorSacrificio = async(req,res)=>{
    const{ id } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Id', id)
    .query(queriesindicadores.getConsultaIndicadorSacrificio);
    console.log(result)
    res.json(result.recordset[0])  
};

export const getIndicadorMortalidad = async(req,res)=>{
    const{ id } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Id', id)
    .query(queriesindicadores.getConsultaIndicadorMortalidad);
    console.log(result)
    res.json(result.recordset[0])  
};

export const getIndicadorPollosVendidos = async(req,res)=>{
    const{ id } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Id', id)
    .query(queriesindicadores.getConsultaIndicadorPollosVendidos);
    console.log(result)
    res.json(result.recordset[0])  
};