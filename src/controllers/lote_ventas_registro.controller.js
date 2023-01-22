import { getConnection, sql, queries8 } from "../database";
import req from "express/lib/request";

export const getLoteVentasRegistro= async (req,res)=> {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries8.getConsultaLoteVentasRegistro);
        console.log(result);
        res.json(result.recordset);
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
};

export const createNewLoteVentasRegistro = async (req,res) =>{
  const {Id_ref_lote_venta, Id_referencia_cliente, Fecha_venta, Valor_unidad_peso, Cantidad, Cantidad_pollos, Total_venta}=req.body
  if( Id_ref_lote_venta == null || Id_referencia_cliente == null ||  Fecha_venta == null || Valor_unidad_peso == null || Cantidad == null ||  Cantidad_pollos == null || Total_venta == null   ){
      return res.status(400).json({msg: 'Por favor llena todos los campos'})
  }
try {
  const pool = await getConnection()
  await pool.request()
.input("Id_ref_lote_venta", sql.Int,Id_ref_lote_venta)
.input("Id_referencia_cliente", sql.Int,Id_referencia_cliente)
.input("Fecha_venta", sql.Date,Fecha_venta)
.input("Valor_unidad_peso", sql.Float,Valor_unidad_peso)
.input("Cantidad", sql.Float,Cantidad)
.input("Cantidad_pollos", sql.Int,Cantidad_pollos)
.input("Total_venta", sql.Float,Total_venta)
.query(queries8.crearNuevosLoteVentasRegistro)
  res.json({Id_ref_lote_venta, Id_referencia_cliente, Fecha_venta, Valor_unidad_peso, Cantidad, Cantidad_pollos, Total_venta});
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};

export const getLoteVentasRegistroId = async(req,res)=>{
  const{ id } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input('Id', id)
  .query(queries8.getConsultaLoteVentasRegistroId)
  console.log(result)
  res.send(result.recordset[0])
};

export const eliminarLoteVentasRegistroId = async(req,res)=>{
  const{ id } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input('Id', id)
  .query(queries8.eliminarLoteVentasRegistroId);
  res.sendStatus(204);
};

export const getTotalLoteVentasRegistro = async(req,res)=>{
  const pool = await getConnection()
  const result = await pool
  .request()
  .query(queries8.getTotalLoteVentasRegistro);
  res.json(result.recordset[0][''])
};

export const editarLoteVentasRegistroId = async (req,res) =>{
  const {Id_ref_lote_venta, Id_referencia_cliente, Fecha_venta, Valor_unidad_peso, Cantidad, Cantidad_pollos, Total_venta}=req.body
  const { id } = req.params;
  if(Id_ref_lote_venta == null || Id_referencia_cliente == null ||  Fecha_venta == null || Valor_unidad_peso == null || Cantidad == null ||  Cantidad_pollos == null || Total_venta == null  ){
    return res.status(400).json({msg: 'Por favor llena todos los campos'})
}
const pool = await getConnection();
await pool 
  .request()
  .input("Id_ref_lote_venta", sql.Int,Id_ref_lote_venta)
  .input("Id_referencia_cliente", sql.Int,Id_referencia_cliente)
  .input("Fecha_venta", sql.Date,Fecha_venta)
  .input("Valor_unidad_peso", sql.Float,Valor_unidad_peso)
  .input("Cantidad", sql.Float,Cantidad)
  .input("Cantidad_pollos", sql.Int,Cantidad_pollos)
  .input("Total_venta", sql.Float,Total_venta)
  .input('Id', id)
  .query(queries8.editarLoteVentasRegistroId);
  res.json({Id_ref_lote_venta, Id_referencia_cliente, Fecha_venta, Valor_unidad_peso, Cantidad, Cantidad_pollos, Total_venta});
} 

export const getLoteVentasRegistroRef = async(req,res)=>{
  const{ id_ref } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input('Id_ref', id_ref)
  .query(queries8.getConsultaLoteVentasRegistroRef)
  console.log(result)
  res.json(result.recordset)
};

export const getTablaLoteVentasRegistro = async(req,res)=>{
  const{ id } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input('Id', id)
  .query(queries8.getConsultaTablaLoteVentasRegistro)
  console.log(result)
  res.send(result.recordset)
};