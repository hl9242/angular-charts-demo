export interface V2vDashboardChartData {
    appId: string,
    cio: string,
    sourceDatacenter: string,
    targetDatacenter: string,
    total: number,
    level: number,
    expandable: boolean,
    sourceEnvDescription: string,
    migrationStatus: string,
    sourceCluster: string,
    targetCluster: string,
}