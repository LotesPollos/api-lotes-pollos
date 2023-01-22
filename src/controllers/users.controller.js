import req from "express/lib/request";
import { getConnection, sql, queries } from "../database";

export const getUsers = async (req,res)=> {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getConsultaUsuarios);
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}; 

export const createNewUser = async (req,res) =>{
    const { Identificacion,Nombre,Apellido,Numero_contacto,Contrasena,Correo_usuario,Nombre_usuario}=req.body
    if(Identificacion == null || Nombre == null || Apellido == null || Numero_contacto == null || Contrasena == null || Correo_usuario == null || Nombre_usuario == null ){
        return res.status(400).json({msg: 'Por favor llena todos los campos'})
    }
  try {
    const pool = await getConnection()
    const result = await pool.request()
  .input("Identificacion", sql.VarChar,Identificacion)
  .input("Nombre", sql.VarChar,Nombre)
  .input("Apellido", sql.VarChar,Apellido)
  .input("Numero_contacto", sql.VarChar,Numero_contacto)
  .input("Contrasena", sql.VarChar,Contrasena)
  .input("Correo_usuario", sql.VarChar,Correo_usuario)
  .input("Nombre_usuario", sql.VarChar,Nombre_usuario)
  .query(queries.crearNuevosUsuarios)
  res.json(result.recordset);
  } catch (error) { 
    res.status(500);
    res.send(error.message);
  }
};

export const getUsuarioId = async(req,res)=>{
  const{ id } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input('Id', id)
  .query(queries.getConsultaUsuarioId)
  console.log(result)
  res.send(result.recordset[0])
};

export const eliminarUsuarioId = async(req,res)=>{
  const{ id } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input('Id', id)
  .query(queries.eliminarUsuarioId);
  res.sendStatus(204);
};

export const getTotalUsuarios = async(req,res)=>{
  const pool = await getConnection()
  const result = await pool
  .request()
  .query(queries.getTotalUsuarios);
  res.json(result.recordset[0][''])
};

export const editarUsuarioId = async (req,res) =>{
  const {Identificacion,Nombre,Apellido,Numero_contacto,Contrasena,Correo_usuario,Nombre_usuario}=req.body;
  const { id } = req.params;
  if(Identificacion == null || Nombre == null || Apellido == null || Numero_contacto == null || Contrasena == null || Correo_usuario == null || Nombre_usuario == null ){
    return res.status(400).json({msg: 'Por favor llena todos los campos'})
}
const pool = await getConnection();
await pool 
.request()
.input("Identificacion", sql.VarChar,Identificacion)
.input("Nombre", sql.VarChar,Nombre)
.input("Apellido", sql.VarChar,Apellido)
.input("Numero_contacto", sql.VarChar,Numero_contacto)
.input("Contrasena", sql.VarChar,Contrasena)
.input("Correo_usuario", sql.VarChar,Correo_usuario)
.input("Nombre_usuario", sql.VarChar,Nombre_usuario)
.input('Id', id)
.query(queries.editarUsuarioId);
res.json({Identificacion, Nombre, Apellido, Numero_contacto, Contrasena, Correo_usuario, Nombre_usuario });
} 

export const getValidarLoguin = async(req,res)=>{
  const {contrasena ,nombre_usuario} = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input('Contrasena', contrasena)
  .input('Nombre_usuario', nombre_usuario)
  .query(queries.getLogin);
  console.log(result)
  res.json(result.recordset) 
};

export const  getFiltroUsuario = async(req,res)=>{
  const{ nombre,identificacion,usuario } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input("Identificacion", identificacion)
  .input("Nombre", nombre)
  .input("Usuario", usuario)
  .query(queries.getbuscarUsuario);
  console.log(result)
  res.json(result.recordset)  
};

export const  getRecuperarUsuario = async(req,res)=>{
  const{ cedula,email } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input("Correo", email)
  .input("Identificacion", cedula)
  .query(queries.getValidarUsuario);
  console.log(result)
  res.json(result.recordset)  
};

export const  getCambiarUsuario = async(req,res)=>{
  const {Contrasena}=req.body;
  const { id } = req.params;
  const pool = await getConnection();
  await pool 
.request()
.input("Contrasena", sql.VarChar,Contrasena)
.input('Id', id)
.query(queries.getCambiarContrasenaUsuario);
res.json({Contrasena});
};

export const getNombreUsuario = async(req,res)=>{
  const{ id } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input('Id', id)
  .query(queries.getConsultaNombreUsuario)
  console.log(result)
  const prueba = result.recordset.map(pru =>{
    return pru.Nombre_usuario
    })
    res.send(prueba); 
};