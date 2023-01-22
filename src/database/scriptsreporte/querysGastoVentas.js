export const queriesgastoventas = {
    getConsultaGastoVentas: 
"select Fecha_gasto, Descripcion_gasto,Cantidad,Precio from Lotes inner join Lote_venta lv on  lv.Id_ref_lote =  Id_lote INNER JOIN  Gastos_ventas gv ON  gv.Id_ref_lote_venta = lv.Id_lote_venta_total WHERE  Id_lote = @Id"
}