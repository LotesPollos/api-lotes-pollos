export const queriesgraficasacrificiopollo = {
    getConsultaGraficaSacrificioPollo: 
    "SELECT case when SUM(vr.Gastos)  IS NULL then 0 else SUM(vr.Gastos) end sacrificio from Meses m left join (select FORMAT(Fecha_sacrificio,'MM') MES,SUM(Cantidad_pollos) Gastos FROM Reg_sacrificio_pollo gv where year(Fecha_sacrificio) = @Year group by FORMAT(Fecha_sacrificio,'MM')) vr on vr.MES = m.Mes Group by M.Mes order by M.Mes",
}