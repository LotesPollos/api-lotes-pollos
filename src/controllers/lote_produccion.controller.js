import { getConnection, sql, queries7 } from "../database";
import req from "express/lib/request";

export const getLoteProduccion = async (req,res)=> {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(queries7.getConsultaLoteProduccion);
      console.log(result);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const createNewLoteProduccion = async (req,res) =>{
    const {Id_ref_lote, Fecha_entrada_pollos, Fecha_sacrificio_final, Cantidad_inicial_pollos, Costo_pollo_unidad, Total_pollos_muertos, Mortalidad, Consumo_pollo, Total_pollos_sacrificados, Cantidad_total_alimento, Valor_total_alimento, Costo_total_lote}=req.body
    if( Id_ref_lote == null || Fecha_entrada_pollos == null || Fecha_sacrificio_final == null || Cantidad_inicial_pollos == null || Costo_pollo_unidad == null ||  Total_pollos_muertos == null || Mortalidad == null || Consumo_pollo == null || Total_pollos_sacrificados == null || Cantidad_total_alimento == null || Valor_total_alimento == null ||  Costo_total_lote == null  ){
        return res.status(400).json({msg: 'Por favor llena todos los campos',Id_ref_lote_produccion})
    }
  try {
    const pool = await getConnection()
  const result = await pool.request()
  .input("Id_ref_lote", sql.Int,Id_ref_lote)
  .input("Fecha_entrada_pollos", sql.Date,Fecha_entrada_pollos)
  .input("Fecha_sacrificio_final", sql.Date,Fecha_sacrificio_final)
  .input("Cantidad_inicial_pollos", sql.Int,Cantidad_inicial_pollos)
  .input("Costo_pollo_unidad", sql.Float,Costo_pollo_unidad)
  .input("Total_pollos_muertos", sql.Int,Total_pollos_muertos)
  .input("Mortalidad", sql.Float,Mortalidad)
  .input("Consumo_pollo", sql.Float,Consumo_pollo)
  .input("Total_pollos_sacrificados", sql.Int,Total_pollos_sacrificados)
  .input("Cantidad_total_alimento", sql.Float,Cantidad_total_alimento)
  .input("Valor_total_alimento", sql.Float,Valor_total_alimento)
  .input("Costo_total_lote", sql.Float,Costo_total_lote)
  .query(queries7.crearNuevosLoteProduccion)
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getLoteProduccionId = async(req,res)=>{
  const{ id } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input('Id', id)
  .query(queries7.getConsultaLoteProduccionId)
  console.log(result)
  res.send(result.recordset[0])
};

export const eliminarLoteProduccionId = async(req,res)=>{
  const{ id } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input('Id', id)
  .query(queries7.eliminarLoteProduccionId);
  res.sendStatus(204);
};

export const getTotalLoteProduccion = async(req,res)=>{
  const pool = await getConnection()
  const result = await pool
  .request()
  .query(queries7.getTotalLoteProduccion);
  res.json(result.recordset[0][''])
};

export const editarLoteProduccionId = async (req,res) =>{
  const {Id_ref_lote, Fecha_entrada_pollos, Fecha_sacrificio_final, Cantidad_inicial_pollos, Costo_pollo_unidad, Total_pollos_muertos, Mortalidad, Consumo_pollo, Total_pollos_sacrificados, Cantidad_total_alimento, Valor_total_alimento, Costo_total_lote}=req.body
  const { id } = req.params;
  if(Id_ref_lote == null || Fecha_entrada_pollos == null || Fecha_sacrificio_final == null || Cantidad_inicial_pollos == null || Costo_pollo_unidad == null ||  Total_pollos_muertos == null || Mortalidad == null || Consumo_pollo == null || Total_pollos_sacrificados == null || Cantidad_total_alimento == null || Valor_total_alimento == null ||  Costo_total_lote == null ){
    return res.status(400).json({msg: 'Por favor llena todos los campos'})
}
const pool = await getConnection();
await pool 
  .request()
  .input("Id_ref_lote", sql.Int,Id_ref_lote)
  .input("Fecha_entrada_pollos", sql.Date,Fecha_entrada_pollos)
  .input("Fecha_sacrificio_final", sql.Date,Fecha_sacrificio_final)
  .input("Cantidad_inicial_pollos", sql.Int,Cantidad_inicial_pollos)
  .input("Costo_pollo_unidad", sql.Float,Costo_pollo_unidad)
  .input("Total_pollos_muertos", sql.Int,Total_pollos_muertos)
  .input("Mortalidad", sql.Float,Mortalidad)
  .input("Consumo_pollo", sql.Float,Consumo_pollo)
  .input("Total_pollos_sacrificados", sql.Int,Total_pollos_sacrificados)
  .input("Cantidad_total_alimento", sql.Float,Cantidad_total_alimento)
  .input("Valor_total_alimento", sql.Float,Valor_total_alimento)
  .input("Costo_total_lote", sql.Float,Costo_total_lote)
  .input('Id', id)
  .query(queries7.editarLoteProduccionId);
  res.json({Id_ref_lote, Fecha_entrada_pollos, Fecha_sacrificio_final, Cantidad_inicial_pollos, Costo_pollo_unidad, Total_pollos_muertos, Mortalidad, Consumo_pollo, Total_pollos_sacrificados, Cantidad_total_alimento, Valor_total_alimento, Costo_total_lote });
} 

export const terminarLote = async (req,res) =>{
  const {  Fecha_sacrificio_final,  Total_pollos_muertos, Mortalidad, Consumo_pollo, Total_pollos_sacrificados, Cantidad_total_alimento, Valor_total_alimento, Costo_total_lote}=req.body
  const { id } = req.params;
  if( Fecha_sacrificio_final == null ||  Total_pollos_muertos == null || Mortalidad == null || Consumo_pollo == null || Total_pollos_sacrificados == null || Cantidad_total_alimento == null || Valor_total_alimento == null ||  Costo_total_lote == null ){
    return res.status(400).json({msg: 'Por favor llena todos los campos'})
}
const pool = await getConnection();
await pool 
  .request()
  .input("Fecha_sacrificio_final", sql.Date,Fecha_sacrificio_final)
  .input("Total_pollos_muertos", sql.Int,Total_pollos_muertos)
  .input("Mortalidad", sql.Float,Mortalidad)
  .input("Consumo_pollo", sql.Float,Consumo_pollo)
  .input("Total_pollos_sacrificados", sql.Int,Total_pollos_sacrificados)
  .input("Cantidad_total_alimento", sql.Float,Cantidad_total_alimento)
  .input("Valor_total_alimento", sql.Float,Valor_total_alimento)
  .input("Costo_total_lote", sql.Float,Costo_total_lote)
  .input('Id', id)
  .query(queries7.terminarLoteId);
  res.json({ Fecha_sacrificio_final, Total_pollos_muertos, Mortalidad, Consumo_pollo, Total_pollos_sacrificados, Cantidad_total_alimento, Valor_total_alimento, Costo_total_lote });
} 

export const getLoteProduccionRef = async(req,res)=>{
  const{ id_ref } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input('Id_ref', id_ref)
  .query(queries7.getConsultarLoteProduccionRef)
  console.log(result)
  res.json(result.recordset)
};

export const getFechaLotesProduccion = async(req,res)=>{
  const{ id } = req.params;
  const pool = await getConnection()
  const result = await pool
  .request()
  .input('Id', id)
  .query(queries7.getConsultaFechaProdiccionLotes)
  console.log(result)
  res.send(result.recordset[0])
};
