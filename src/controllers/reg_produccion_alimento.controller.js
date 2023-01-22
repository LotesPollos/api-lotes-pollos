import { getConnection, sql, queries3 } from "../database";
import req from "express/lib/request";

export const getRegProduccionAlimento = async (req,res)=> {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(queries3.getConsultaRegProduccionAlimento);
      console.log(result);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  
  };

  export const createNewRegProduccionAlimento = async (req,res) =>{

    const {Id_ref_lote_produccion,Fecha_compra,Cantidad_alimento,Valor_alimento,Descripcion_alimento,Precio_compra}=req.body
    if( Id_ref_lote_produccion == null || Fecha_compra == null || Cantidad_alimento == null || Valor_alimento == null || Descripcion_alimento == null || Precio_compra == null ){
        return res.status(400).json({msg: 'Por favor llena todos los campos',Id_ref_lote_produccion})
    }

  try {
    const pool = await getConnection()
  await pool.request().input("Id_ref_lote_produccion", sql.Int,Id_ref_lote_produccion)
  .input("Fecha_compra", sql.Date,Fecha_compra)
  .input("Cantidad_alimento", sql.Float,Cantidad_alimento)
  .input("Valor_alimento", sql.Float,Valor_alimento)
  .input("Descripcion_alimento", sql.VarChar,Descripcion_alimento)
  .input("Precio_compra", sql.Float,Precio_compra)
  .query(queries3.crearNuevosRegProduccionAlimento)
    res.json({Id_ref_lote_produccion,Fecha_compra,Cantidad_alimento,Valor_alimento,Descripcion_alimento,Precio_compra});
  } catch (error) {
    res.status(500);
    res.send(error.message);
    
  }

};

export const getRegProduccionAlimentoId = async(req,res)=>{
  const{ id } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input('Id', id)
  .query(queries3.getConsultaRegProduccionAlimentoId)
  console.log(result)
  res.send(result.recordset[0])
};

export const eliminarRegProduccionAlimentoId = async(req,res)=>{
  const{ id } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input('Id', id)
  .query(queries3.eliminarRegProduccionAlimentoId);
  res.sendStatus(204);
};

export const getTotalRegProduccionAlimento = async(req,res)=>{
  const pool = await getConnection()
  const result = await pool
  .request()
  .query(queries3.getTotalRegProduccionAlimento);
  res.json(result.recordset[0][''])
};

export const editarRegProduccionAlimentoId = async (req,res) =>{
  const {Id_ref_lote_produccion,Fecha_compra,Cantidad_alimento,Valor_alimento,Descripcion_alimento,Precio_compra}=req.body;
  const { id } = req.params;
  if(Id_ref_lote_produccion == null || Fecha_compra == null || Cantidad_alimento == null || Valor_alimento == null || Descripcion_alimento == null || Precio_compra == null ){
    return res.status(400).json({msg: 'Por favor llena todos los campos'})
}
const pool = await getConnection();
await pool 
.request()
.input("Id_ref_lote_produccion", sql.Int,Id_ref_lote_produccion)
.input("Fecha_compra", sql.Date,Fecha_compra)
.input("Cantidad_alimento", sql.Float,Cantidad_alimento)
.input("Valor_alimento", sql.Float,Valor_alimento)
.input("Descripcion_alimento", sql.VarChar,Descripcion_alimento)
.input("Precio_compra", sql.Float,Precio_compra)
.input('Id', id)
.query(queries3.editarRegProduccionAlimentoId);
res.json({ Id_ref_lote_produccion,Fecha_compra,Cantidad_alimento,Valor_alimento,Descripcion_alimento,Precio_compra });
} 

export const getRegProduccionAlimentoRef = async(req,res)=>{
  const{ id_ref } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input('Id_ref', id_ref)
  .query(queries3.getConsultaRegProduccionAlimentoRef)
  console.log(result)
  res.json(result.recordset)
};