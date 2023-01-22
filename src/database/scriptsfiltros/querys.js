export const queriesprincipal = {
    getConsultaEstado: 'select Id_lote,lote_p.Id_lote_produccion,Estado_lote,lote_p.Fecha_entrada_pollos,lote_p.Fecha_sacrificio_final from Lotes inner join Lote_produccion lote_p on Id_ref_lote = Id_lote where Estado_lote = @Estado order by Id_lote  DESC',

    getConsultaIdLote:'select Id_lote,Estado_lote,lote_p.Fecha_entrada_pollos,lote_p.Fecha_sacrificio_final from Lotes inner join Lote_produccion lote_p on Id_ref_lote = Id_lote where Estado_lote = @Estado  and Id_lote = @Id_lote',

    getConsultaFsacrificio:'select Id_lote,Estado_lote,lote_p.Fecha_entrada_pollos,lote_p.Fecha_sacrificio_final from Lotes inner join Lote_produccion lote_p on Id_ref_lote = Id_lote where Estado_lote = @Estado  and lote_p.Fecha_sacrificio_final = @Sacrificio',

    getConsultaFentrada: 'select Id_lote,Estado_lote,lote_p.Fecha_entrada_pollos,lote_p.Fecha_sacrificio_final from Lotes inner join Lote_produccion lote_p on Id_ref_lote = Id_lote where Estado_lote = @Estado and lote_p.Fecha_entrada_pollos = @Entrada ',
}