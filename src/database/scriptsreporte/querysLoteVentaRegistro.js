export const queriesloteventaregistro = {
    getConsultaLoteVentaRegistro: 
"select Nombre,Fecha_venta,Valor_unidad_peso,Cantidad,Cantidad_pollos,Total_venta from Lotes inner join Lote_venta lv on  lv.Id_ref_lote =  Id_lote INNER JOIN  Lote_ventas_registro lvr ON  lvr.Id_ref_lote_venta = lv.Id_lote_venta_total INNER JOIN  Cliente  ON  Id_Cliente = lvr.Id_referencia_cliente WHERE  Id_lote = @Id"
}