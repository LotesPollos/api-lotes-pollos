import req from "express/lib/request";
import { getConnection, sql, queriesvalidacion  } from "../../database";

export const getCantidadDisponibleMortalidad = async (req,res)=> {
    const{ id } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Id', id)
    .query(queriesvalidacion.getConsultalCantidadDisponibleMortalidad);
    console.log(result);
    res.json(result.recordset[0]) 
};

export const getRangoFecha = async (req,res)=> {
    const{ id, fecha } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Id', id)
    .input('Fecha', fecha)
    .query(queriesvalidacion.getConsultalRangoFecha);
    console.log(result);
    res.json(result.recordset[0]) 
};

export const getCantidadDisponibleVentas = async (req,res)=> {
    const{ id } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Id', id)
    .query(queriesvalidacion.getConsultalCantidadDisponibleVenta);
    console.log(result);
    res.json(result.recordset[0]) 
};

export const getRecuperarContrasena = async (req,res)=> {
    const{ usuario, documento } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Usuario', usuario)
    .input('Documento', documento)
    .query(queriesvalidacion.getConsultalRecuperarContrasena);
    console.log(result);
    res.json(result.recordset[0]) 
};

export const getRecuperarUsuario = async (req,res)=> {
    const{ correo, documento } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Correo', correo)
    .input('Documento', documento)
    .query(queriesvalidacion.getConsultalRecuperarUsuario);
    console.log(result);
    res.json(result.recordset[0]) 
};