export const queriesregproduccionalimentos = {
    getConsultaRegProduccionAlimentos : 
"SELECT Fecha_compra,Cantidad_alimento,Valor_alimento,Descripcion_alimento,Precio_compra from Lotes inner join Lote_produccion lp on  lp.Id_ref_lote =  Id_lote inner JOIN  Reg_produccion_alimento rpa ON  rpa.Id_ref_lote_produccion = lp.Id_lote_produccion WHERE  Id_lote = @Id"
}