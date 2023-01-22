import req from "express/lib/request";
import { getConnection, sql, queriesrol } from "..//../database";

export const getRol = async(req,res)=>{
    try {
      const pool = await getConnection();
      const result = await pool.request()
      .query(queriesrol.getConsultaRol);
      console.log(result);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    } 
  };

  export const getBuscarRol = async (req,res)=> {
    const{ id } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Id', id)
    .query(queriesrol.getBuscar);
    console.log(result);
    res.json(result.recordset)
};

export const getEditarRol = async (req,res) =>{
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
.query(queriesrol.getEditar);
res.json({Id_ref_usuario, Estado, Permiso});
};

export const getEliminarRol = async(req,res)=>{
  const{ id } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input('Id', id)
  .query(queriesrol.getEliminar);
  res.sendStatus(204);
};