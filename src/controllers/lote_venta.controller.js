import { getConnection, sql, queries10 } from "../database";
import req from "express/lib/request";

export const getLoteVenta= async (req,res)=> {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries10.getConsultaLoteVenta);
        console.log(result);
        res.json(result.recordset);
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
};

export const createNewLoteVenta = async (req,res) =>{
    const {Id_ref_lote, Total_pollos_vendidos, Peso_total_vendido, Valor_promedio_peso, Total_venta_lote, Ganancia_bruta, Promedio_total_peso, Promedio_venta_pollo, Cantidad_ventas }=req.body
    if( Id_ref_lote == null || Total_pollos_vendidos == null ||  Peso_total_vendido == null || Valor_promedio_peso == null || Total_venta_lote == null ||  Ganancia_bruta == null || Promedio_total_peso == null ||  Promedio_venta_pollo == null || Cantidad_ventas == null  ){
        return res.status(400).json({msg: 'Por favor llena todos los campos'})
    }
  try {
    const pool = await getConnection()
    const result = await pool.request()
  .input("Id_ref_lote", sql.Int,Id_ref_lote)
  .input("Total_pollos_vendidos", sql.Int,Total_pollos_vendidos)
  .input("Peso_total_vendido", sql.Float,Peso_total_vendido)
  .input("Valor_promedio_peso", sql.Float,Valor_promedio_peso)
  .input("Total_venta_lote", sql.Float,Total_venta_lote)
  .input("Ganancia_bruta", sql.Float,Ganancia_bruta)
  .input("Promedio_total_peso", sql.Float,Promedio_total_peso)
  .input("Promedio_venta_pollo", sql.Float,Promedio_venta_pollo)
  .input("Cantidad_ventas", sql.Int,Cantidad_ventas)
  .query(queries10.crearNuevosLoteVenta)
  res.json(result.recordset);
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};

  export const getLoteVentaId = async(req,res)=>{
    const{ id } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Id', id)
    .query(queries10.getConsultaLoteVentaId)
    console.log(result)
    res.send(result.recordset[0])
  };

  export const eliminarLoteVentaId = async(req,res)=>{
    const{ id } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Id', id)
    .query(queries10.eliminarLoteVentaId);
    res.sendStatus(204);
  };

  export const getTotalLoteVenta = async(req,res)=>{
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(queries10.getTotalLoteVenta);
    res.json(result.recordset[0][''])
  };

  export const editarLoteVentaId = async (req,res) =>{
    const {Id_ref_lote, Total_pollos_vendidos, Peso_total_vendido, Valor_promedio_peso, Total_venta_lote, Ganancia_bruta, Promedio_total_peso, Promedio_venta_pollo, Cantidad_ventas}=req.body
    const { id } = req.params;
    if(Id_ref_lote == null || Total_pollos_vendidos == null ||  Peso_total_vendido == null || Valor_promedio_peso == null || Total_venta_lote == null ||  Ganancia_bruta == null || Promedio_total_peso == null ||  Promedio_venta_pollo == null || Cantidad_ventas == null  ){
      return res.status(400).json({msg: 'Por favor llena todos los campos'})
  }
  const pool = await getConnection();
  await pool 
    .request()
    .input("Id_ref_lote", sql.Int,Id_ref_lote)
    .input("Total_pollos_vendidos", sql.Int,Total_pollos_vendidos)
    .input("Peso_total_vendido", sql.Float,Peso_total_vendido)
    .input("Valor_promedio_peso", sql.Float,Valor_promedio_peso)
    .input("Total_venta_lote", sql.Float,Total_venta_lote)
    .input("Ganancia_bruta", sql.Float,Ganancia_bruta)
    .input("Promedio_total_peso", sql.Float,Promedio_total_peso)
    .input("Promedio_venta_pollo", sql.Float,Promedio_venta_pollo)
    .input("Cantidad_ventas", sql.Int,Cantidad_ventas)
    .input('Id', id)
    .query(queries10.editarLoteVentaId);
    res.json({Id_ref_lote, Total_pollos_vendidos, Peso_total_vendido, Valor_promedio_peso, Total_venta_lote, Ganancia_bruta, Promedio_total_peso, Promedio_venta_pollo, Cantidad_ventas });
  } 

  export const getLoteVentaRef = async(req,res)=>{
    const{ id_ref } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Id_ref', id_ref)
    .query(queries10.getConsultarLoteVentaRef)
    console.log(result)
    res.json(result.recordset)
  };

  export const getFechaLotesVentas = async(req,res)=>{
    const{ id } = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('Id', id)
    .query(queries10.getConsultaFechaVentaLotes)
    console.log(result)
    res.send(result.recordset[0])
  };