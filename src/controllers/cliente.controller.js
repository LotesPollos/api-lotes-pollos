import req from "express/lib/request";
import { getConnection, sql, queries2 } from "../database";

export const getTablaCliente = async (req,res)=> {
  try {
    const pool = await getConnection();
    const result = await pool
    .request()
    .query(queries2.getConsultaCliente);
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewCliente = async (req,res) =>{

    const {Fecha_creacion,Identificacion_cliente,Nombre,Numero_contacto_cliente,Direccion_Cliente,Correo_Cliente,Descripcion_cliente, Id_referencia_usuario}=req.body
    if( Fecha_creacion == null || Identificacion_cliente == null || Nombre == null || Numero_contacto_cliente == null || Direccion_Cliente == null || Correo_Cliente == null || Descripcion_cliente == null  ){
        return res.status(400).json({msg: 'Por favor llena todos los campos'})
    }
  try {
    const pool = await getConnection()
  await pool.request().input("Fecha_creacion", sql.Date,Fecha_creacion)
  .input("Identificacion_cliente", sql.VarChar,Identificacion_cliente)
  .input("Nombre", sql.VarChar,Nombre)
  .input("Numero_contacto_cliente", sql.VarChar,Numero_contacto_cliente)
  .input("Direccion_Cliente", sql.VarChar,Direccion_Cliente)
  .input("Correo_Cliente", sql.VarChar,Correo_Cliente)
  .input("Descripcion_cliente", sql.VarChar,Descripcion_cliente)
  .input("Id_referencia_usuario", sql.Int,Id_referencia_usuario)
.query(queries2.crearNuevosCliente)
    res.json({Fecha_creacion,Identificacion_cliente,Nombre,Numero_contacto_cliente,Direccion_Cliente,Correo_Cliente,Descripcion_cliente,Id_referencia_usuario});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getClienteId = async(req,res)=>{
  const{ id } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input('Id', id)
  .query(queries2.getConsultaClienteId)
  console.log(result)
  res.send(result.recordset[0])
};

export const eliminarClienteId = async(req,res)=>{
  const{ id } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input('Id', id)
  .query(queries2.eliminarClienteId);
  res.sendStatus(204);
};

export const getTotalCliente = async(req,res)=>{
  const pool = await getConnection()
  const result = await pool
  .request()
  .query(queries2.getTotalCliente);
  res.json(result.recordset[0][''])
};

export const editarClienteId = async (req,res) =>{
  const {Fecha_creacion,Identificacion_cliente,Nombre,Numero_contacto_cliente,Direccion_Cliente,Correo_Cliente,Descripcion_cliente,Id_referencia_usuario}=req.body;
  const { id } = req.params;
  if(Fecha_creacion == null || Identificacion_cliente == null || Nombre == null|| Numero_contacto_cliente == null || Direccion_Cliente == null || Correo_Cliente == null || Descripcion_cliente == null || Id_referencia_usuario == null ){
    return res.status(400).json({msg: 'Por favor llena todos los campos'})
}
const pool = await getConnection();
await pool 
.request()
.input("Fecha_creacion", sql.Date,Fecha_creacion)
.input("Identificacion_cliente", sql.VarChar,Identificacion_cliente)
.input("Nombre", sql.VarChar,Nombre)
.input("Numero_contacto_cliente", sql.VarChar,Numero_contacto_cliente)
.input("Direccion_Cliente", sql.VarChar,Direccion_Cliente)
.input("Correo_Cliente", sql.VarChar,Correo_Cliente)
.input("Descripcion_cliente", sql.VarChar,Descripcion_cliente)
.input("Id_referencia_usuario", sql.Int,Id_referencia_usuario)
.input('Id', id)
.query(queries2.editarClienteId);

res.json({ Fecha_creacion,Identificacion_cliente,Nombre,Numero_contacto_cliente,Direccion_Cliente,Correo_Cliente,Descripcion_cliente,Id_referencia_usuario });

};

export const  getFiltroCliente = async(req,res)=>{
  const{ nombre,identificacion,direccion } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input("Nombre", nombre)
  .input("Identificacion", identificacion)
  .input("Direccion", direccion)
  .query(queries2.getbuscarCliente);
  console.log(result)
  res.json(result.recordset)  
};

export const getCliente = async (req,res)=> {
  try {
    const pool = await getConnection();
    const result = await pool
    .request()
    .query(queries2.getConsultaTablaCliente);
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};