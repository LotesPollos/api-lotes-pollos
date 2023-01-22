export const queriesgastoproduccion = {
    getConsultaGastoProduccion: 
"SELECT Fecha_gasto, Descripcion_gasto,Cantidad,Precio from Lotes inner join Lote_produccion lp on  lp.Id_ref_lote =  Id_lote inner JOIN  Gastos_produccion gp ON  gp.Id_ref_lote_produccion = lp.Id_lote_produccion WHERE  Id_lote = @Id"
}