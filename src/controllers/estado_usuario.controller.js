import { getConnection, sql, queries12 } from "../database";
import req from "express/lib/request";

export const getEstadoUsuario = async (req,res)=> {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(queries12.getConsultaEstadoUsuario);
      console.log(result);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const createNewEstadoUsuario= async (req,res) =>{
    const {Id_ref_usuario, Estado, Permiso}=req.body
    if( Id_ref_usuario == null || Estado == null|| Permiso == null ){
        return res.status(400).json({msg: 'Por favor llena todos los campos'})
    }
  try {
    const pool = await getConnection()
  await pool.request()
  .input("Id_ref_usuario", sql.Int,Id_ref_usuario)
  .input("Estado", sql.VarChar,Estado)
  .input("Permiso", sql.VarChar,Permiso)
  .query(queries12.crearNuevosEstadoUsuario)
    res.json({Id_ref_usuario, Estado, Permiso});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  };

  export const getEstadoUsuarioId = async(req,res)=>{
    const{ id } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Id', id)
    .query(queries12.getConsultaEstadoUsuarioId)
    console.log(result)
    res.send(result.recordset[0])
  };

  export const eliminarEstadoUsuarioId = async(req,res)=>{
    const{ id } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Id', id)
    .query(queries12.eliminarEstadoUsuarioId);
    res.sendStatus(204);
  };

  export const getTotalEstadoUsuario = async(req,res)=>{
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(queries12.getTotalEstadoUsuario);
    res.json(result.recordset[0][''])
  };

  export const editarEstadoUsuarioId = async (req,res) =>{
    const {Id_ref_usuario, Estado, Permiso}=req.body
    const { id } = req.params;
    if( Id_ref_usuario == null || Estado == null|| Permiso == null){
      return res.status(400).json({msg: 'Por favor llena todos los campos'})
  }
  const pool = await getConnection();
  await pool 
  .request()
  .input("Id_ref_usuario", sql.Int,Id_ref_usuario)
  .input("Estado", sql.VarChar,Estado)
  .input("Permiso", sql.VarChar,Permiso)
  .input('Id', id)
  .query(queries12.editarEstadoUsuarioId);
  res.json({Id_ref_usuario, Estado, Permiso});
  };

  export const getValidarEditarCrear = async(req,res)=>{
    const{ Id_ref_usuario} = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Id_ref_usuario', Id_ref_usuario)
    .query(queries12.editarCrearEstadoUsuario)
    console.log(result)
    res.json(result.recordset)

  };
