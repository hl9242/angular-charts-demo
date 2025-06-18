import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { PspDashboardHttpService } from './psp-dashboard-http.service';
import { PspDashboardChartData } from '../model/pspDashboard.model';

@Injectable({
  providedIn: 'root'
})
export class PspDashboardService {
  templateFlow: string;
  constructor(private pspDashboardHttpService: PspDashboardHttpService) {
    this.templateFlow = "pie|line|bar|doughnut";
   }

  getPspDashboardData(req: PspDashboardChartData, filters: any){
    return this.pspDashboardHttpService.getPspDashboardChartReq(req).pipe(
      map((data: any) => {
    let chartdata = {"pspStatusResponseList" :[
      {
        "id": 1,
        "cio": "CTO",
        "neighborhood": "non-production",
        "migrationMethod": "Lift & Shift",
        "targetDate": "2026-05-30T00:00:00.000+00:00",
        "targetPlatform": "Private-IaaS",
        "sanAttached": "Yes",
        "primaryAppId": "MQ4U",
        "primaryAppName": "MQ HOSTING",
        "sourceHostName": "CCPRM01A0021",
        "sourceModelName": "HPE PROLIANT DL380 G9 SERVER",
        "sourceCiType": "CCPRM01A0021",
        "sourceSerialNumber": "MXQ64105BX",
        "sourceManufacturer": "HEWLETT-PACKARD",
        "sourceModelNumber": "719064-B21",
        "sourceIp": "162.111.178.82",
        "sourceRack": "301.04",
        "sourceRackUnit": "12",
        "sanFabric": "San_fabric",
        "sourceManagedGroup": "PLATMGMT-MWS-INTEGRATION",
        "sourceTscName": "HPE PROLIANT DL380 G9 SERVER",
        "sourceDatacenter": "WEC",
        "sourceEnvironment": "UAT",
        "sourceRam": "257325",
        "sourceCpu": "16.0",
        "targetHostName": "CCPRM01A0021",
        "targetEnvironment": "UAT",
        "targetDatacenter": "Silas",
        "targetIp": "162.111.178.82",
        "targetCluster": "DANDRWA53000-RD",
        "targetNetworkZone": "PROD-CDE",
        "targetRack": "102.23 MAPR - BD01SLSD9901",
        "targetRackUnit": "5",
        "migrationGroup": "Group 14"
    },
    {
        "id": 2,
        "cio": "CTO",
        "neighborhood": "non-production",
        "migrationMethod": "Lift & Shift",
        "targetDate": "2026-05-30T00:00:00.000+00:00",
        "targetPlatform": "Private-IaaS",
        "sanAttached": "Yes",
        "primaryAppId": "MQ4U",
        "primaryAppName": "MQ HOSTING",
        "sourceHostName": "CCPRM01A0023",
        "sourceModelName": "HPE PROLIANT DL380 G9 SERVER",
        "sourceCiType": "CCPRM01A0023",
        "sourceSerialNumber": "MXQ64105BT",
        "sourceManufacturer": "HEWLETT-PACKARD",
        "sourceModelNumber": "719064-B21",
        "sourceIp": "162.111.178.108",
        "sourceRack": "301.04",
        "sourceRackUnit": "8",
        "sanFabric": "San_fabric",
        "sourceManagedGroup": "PLATMGMT-MWS-INTEGRATION",
        "sourceTscName": "HPE PROLIANT DL380 G9 SERVER",
        "sourceDatacenter": "WEC",
        "sourceEnvironment": "UAT",
        "sourceRam": "257325",
        "sourceCpu": "16.0",
        "targetHostName": "CCPRM01A0023",
        "targetEnvironment": "UAT",
        "targetDatacenter": "Silas",
        "targetIp": "162.111.178.108",
        "targetCluster": "testCluster2",
        "targetNetworkZone": "PROD-CDE",
        "targetRack": "100.20 MAPR - BD03SLSD0301",
        "targetRackUnit": "5",
        "migrationGroup": "Group 14"
    },
    {
        "id": 3,
        "cio": "CCIBT",
        "neighborhood": "non-production",
        "migrationMethod": "Lift & Shift",
        "targetDate": "2026-03-31T00:00:00.000+00:00",
        "targetPlatform": "Traditional-Compute",
        "sanAttached": "No",
        "primaryAppId": "PSCOH",
        "primaryAppName": "WFS COHERENCE CACHE",
        "sourceHostName": "CDPRA00A0039",
        "sourceModelName": "HPE PROLIANT DL380 G9 SERVER",
        "sourceCiType": "CDPRA00A0039",
        "sourceSerialNumber": "MXQ642081P",
        "sourceManufacturer": "HEWLETT-PACKARD",
        "sourceModelNumber": "719064-B21",
        "sourceIp": "162.111.177.173",
        "sourceRack": "304.06 DCAM NP",
        "sourceRackUnit": "14",
        "sanFabric": "San_fabric",
        "sourceManagedGroup": "WHLSWFSCACHESERVICES",
        "sourceTscName": "HPE PROLIANT DL380 G9 SERVER",
        "sourceDatacenter": "WEC",
        "sourceEnvironment": "DEVELOPMENT",
        "sourceRam": "515331",
        "sourceCpu": "36.0",
        "targetHostName": "CDPRA00A0039",
        "targetEnvironment": "DEVELOPMENT",
        "targetDatacenter": "Silas",
        "targetIp": "162.111.177.173",
        "targetCluster": "DANPXW690001-XU--4431681",
        "targetNetworkZone": "PROD-CDE",
        "targetRack": "101.24 MAPR - BD01SLSD9401",
        "targetRackUnit": "5",
        "migrationGroup": "Group 1"
    },
    {
        "id": 4,
        "cio": "CCIBT",
        "neighborhood": "non-production",
        "migrationMethod": "Lift & Shift",
        "targetDate": "2026-03-31T00:00:00.000+00:00",
        "targetPlatform": "Traditional-Compute",
        "sanAttached": "No",
        "primaryAppId": "PSCOH",
        "primaryAppName": "WFS COHERENCE CACHE",
        "sourceHostName": "CDPRA00A0044",
        "sourceModelName": "HPE PROLIANT DL380 G9 SERVER",
        "sourceCiType": "CDPRA00A0044",
        "sourceSerialNumber": "MXQ642082N",
        "sourceManufacturer": "HEWLETT-PACKARD",
        "sourceModelNumber": "719064-B21",
        "sourceIp": "162.111.177.178",
        "sourceRack": "304.06 DCAM NP",
        "sourceRackUnit": "4",
        "sanFabric": "San_fabric",
        "sourceManagedGroup": "WHLSWFSCACHESERVICES",
        "sourceTscName": "HPE PROLIANT DL380 G9 SERVER",
        "sourceDatacenter": "WEC",
        "sourceEnvironment": "DEVELOPMENT",
        "sourceRam": "515331",
        "sourceCpu": "36.0",
        "targetHostName": "CDPRA00A0044",
        "targetEnvironment": "DEVELOPMENT",
        "targetDatacenter": "Silas",
        "targetIp": "162.111.177.178",
        "targetCluster": "DANPXW690001-XU--4431681",
        "targetNetworkZone": "PROD-CDE",
        "targetRack": "101.24 MAPR - BD01SLSD9401",
        "targetRackUnit": "5",
        "migrationGroup": "Group 1"
    },
    {
        "id": 5,
        "cio": "CCIBT",
        "neighborhood": "non-production",
        "migrationMethod": "Lift & Shift",
        "targetDate": "2026-03-31T00:00:00.000+00:00",
        "targetPlatform": "Traditional-Compute",
        "sanAttached": "No",
        "primaryAppId": "PSCOH",
        "primaryAppName": "WFS COHERENCE CACHE",
        "sourceHostName": "CDPRA00A0053",
        "sourceModelName": "HPE PROLIANT DL380 G9 SERVER",
        "sourceCiType": "CDPRA00A0053",
        "sourceSerialNumber": "MXQ642081R",
        "sourceManufacturer": "HEWLETT-PACKARD",
        "sourceModelNumber": "719064-B21",
        "sourceIp": "162.111.177.187",
        "sourceRack": "304.05 DCAM NP",
        "sourceRackUnit": "6",
        "sanFabric": "San_fabric",
        "sourceManagedGroup": "WHLSWFSCACHESERVICES",
        "sourceTscName": "HPE PROLIANT DL380 G9 SERVER",
        "sourceDatacenter": "WEC",
        "sourceEnvironment": "DEVELOPMENT",
        "sourceRam": "515331",
        "sourceCpu": "36.0",
        "targetHostName": "CDPRA00A0053",
        "targetEnvironment": "DEVELOPMENT",
        "targetDatacenter": "Silas",
        "targetIp": "162.111.177.187",
        "targetCluster": "DANPXW690001-XU--4431681",
        "targetNetworkZone": "PROD-CDE",
        "targetRack": "101.24 MAPR - BD01SLSD9401",
        "targetRackUnit": "5",
        "migrationGroup": "Group 1"
    },
    {
        "id": 6,
        "cio": "CCIBT",
        "neighborhood": "non-production",
        "migrationMethod": "Lift & Shift",
        "targetDate": "2026-03-31T00:00:00.000+00:00",
        "targetPlatform": "Traditional-Compute",
        "sanAttached": "No",
        "primaryAppId": "PSCOH",
        "primaryAppName": "WFS COHERENCE CACHE",
        "sourceHostName": "CDPRA00A0054",
        "sourceModelName": "HPE PROLIANT DL380 G9 SERVER",
        "sourceCiType": "CDPRA00A0054",
        "sourceSerialNumber": "MXQ642081Y",
        "sourceManufacturer": "HEWLETT-PACKARD",
        "sourceModelNumber": "719064-B21",
        "sourceIp": "162.111.177.188",
        "sourceRack": "304.05 DCAM NP",
        "sourceRackUnit": "4",
        "sanFabric": "San_fabric",
        "sourceManagedGroup": "WHLSWFSCACHESERVICES",
        "sourceTscName": "HPE PROLIANT DL380 G9 SERVER",
        "sourceDatacenter": "WEC",
        "sourceEnvironment": "DEVELOPMENT",
        "sourceRam": "515331",
        "sourceCpu": "36.0",
        "targetHostName": "CDPRA00A0054",
        "targetEnvironment": "DEVELOPMENT",
        "targetDatacenter": "Silas",
        "targetIp": "162.111.177.188",
        "targetCluster": "DANPXW690001-XU--4431681",
        "targetNetworkZone": "PROD-CDE",
        "targetRack": "101.24 MAPR - BD01SLSD9401",
        "targetRackUnit": "5",
        "migrationGroup": "Group 1"
    },
    {
        "id": 7,
        "cio": "CCIBT",
        "neighborhood": "non-production",
        "migrationMethod": "Lift & Shift",
        "targetDate": "2026-03-31T00:00:00.000+00:00",
        "targetPlatform": "Traditional-Compute",
        "sanAttached": "No",
        "primaryAppId": "PSCOH",
        "primaryAppName": "WFS COHERENCE CACHE",
        "sourceHostName": "CSPRA00A0027",
        "sourceModelName": "HPE PROLIANT DL380 G9 SERVER",
        "sourceCiType": "CSPRA00A0027",
        "sourceSerialNumber": "MXQ6420820",
        "sourceManufacturer": "HEWLETT-PACKARD",
        "sourceModelNumber": "719064-B21",
        "sourceIp": "162.111.177.167",
        "sourceRack": "304.07 DCAM 15",
        "sourceRackUnit": "6",
        "sanFabric": "San_fabric",
        "sourceManagedGroup": "WHLSWFSCACHESERVICES",
        "sourceTscName": "HPE PROLIANT DL380 G9 SERVER",
        "sourceDatacenter": "WEC",
        "sourceEnvironment": "SIT/IST",
        "sourceRam": "515331",
        "sourceCpu": "36.0",
        "targetHostName": "CSPRA00A0027",
        "targetEnvironment": "SIT/IST",
        "targetDatacenter": "Silas",
        "targetIp": "162.111.177.167",
        "migrationGroup": "Group 17"
    },
    {
        "id": 8,
        "cio": "EFT",
        "neighborhood": "non-production",
        "migrationMethod": "Lift & Shift",
        "targetDate": "2026-03-31T00:00:00.000+00:00",
        "targetPlatform": "Private-IaaS",
        "sanAttached": "Yes",
        "primaryAppId": "1GSM",
        "primaryAppName": "GLOBAL SANCTIONS MANAGEMENT OPERATIONS SYSTEM",
        "sourceHostName": "CUP1GSM00A003",
        "sourceModelName": "HPE PROLIANT DL380 G10 SERVER",
        "sourceCiType": "CUP1GSM00A003",
        "sourceSerialNumber": "2M204804HJ",
        "sourceManufacturer": "HEWLETT-PACKARD",
        "sourceModelNumber": "868703-B21",
        "sourceIp": "10.144.145.230",
        "sourceRack": "111.02 DCAM",
        "sourceRackUnit": "28",
        "sanFabric": "San_fabric",
        "sourceManagedGroup": "CUSTOMERDUEDILIGENCE",
        "sourceTscName": "HPE PROLIANT DL380 G10 SERVER",
        "sourceDatacenter": "WEC",
        "sourceEnvironment": "UAT",
        "sourceRam": "262144",
        "sourceCpu": "16.0",
        "targetHostName": "CUP1GSM00A003",
        "targetEnvironment": "UAT",
        "targetDatacenter": "Silas",
        "targetIp": "10.144.145.230",
        "migrationGroup": "Group 2"
    },
    {
        "id": 9,
        "cio": "CCIBT",
        "neighborhood": "non-production",
        "migrationMethod": "Lift & Shift",
        "targetDate": "2025-05-31T00:00:00.000+00:00",
        "targetPlatform": "Private-IaaS",
        "sanAttached": "Yes",
        "primaryAppId": "1MCR",
        "primaryAppName": "MARKET RISK SYSTEM",
        "sourceHostName": "CUPWD00A0068",
        "sourceModelName": "HPE PROLIANT DL380 G9 SERVER",
        "sourceCiType": "CUPWD00A0068",
        "sourceSerialNumber": "MXQ7160JGN",
        "sourceManufacturer": "HEWLETT-PACKARD",
        "sourceModelNumber": "719064-B21",
        "sourceIp": "162.111.224.221",
        "sourceRack": "301.20 (Q1 2017)",
        "sourceRackUnit": "2",
        "sanFabric": "San_fabric",
        "sourceManagedGroup": "MARKETRISKDEV",
        "sourceTscName": "HPE PROLIANT DL380 G9 SERVER",
        "sourceDatacenter": "WEC",
        "sourceEnvironment": "SIT/IST",
        "sourceRam": "524288",
        "sourceCpu": "36.0",
        "targetHostName": "CUPWD00A0068",
        "targetEnvironment": "SIT/IST",
        "targetDatacenter": "Silas",
        "targetIp": "162.111.224.221",
        "migrationGroup": "Group 13"
    },
    {
        "id": 10,
        "cio": "CTO",
        "neighborhood": "Technology Enablement Services",
        "migrationMethod": "Lift & Shift",
        "targetDate": "2026-05-30T00:00:00.000+00:00",
        "targetPlatform": "Private-IaaS",
        "sanAttached": "No",
        "primaryAppId": "DANHP",
        "primaryAppName": "DAN HIGH PERFORMANCE DATABASE SOLUTION FOR ORACLE",
        "sourceHostName": "DANPXW6900CE08",
        "sourceModelName": "ORACLE SERVER",
        "sourceCiType": "DANPXW6900CE08",
        "sourceSerialNumber": "1615NM70VX",
        "sourceManufacturer": "ORACLE",
        "sourceModelNumber": "X6-2",
        "sourceRack": "139.69 EXADATA",
        "sourceRackUnit": "27",
        "sanFabric": "San_fabric",
        "sourceManagedGroup": "DBS-EXADATA",
        "sourceTscName": "ORACLE SERVER",
        "sourceDatacenter": "WEC",
        "sourceEnvironment": "PRODUCTION",
        "targetHostName": "DANPXW6900CE08",
        "targetEnvironment": "PRODUCTION",
        "targetDatacenter": "Silas",
        "migrationGroup": "Out of Scope"
    },
    {
        "id": 11,
        "cio": "CTO",
        "neighborhood": "Technology Enablement Services",
        "migrationMethod": "Lift & Shift",
        "targetDate": "2026-05-30T00:00:00.000+00:00",
        "targetPlatform": "Private-IaaS",
        "sanAttached": "No",
        "primaryAppId": "DANHP",
        "primaryAppName": "DAN HIGH PERFORMANCE DATABASE SOLUTION FOR ORACLE",
        "sourceHostName": "DANPXW6900CE12",
        "sourceModelName": "ORACLE SERVER",
        "sourceCiType": "DANPXW6900CE12",
        "sourceSerialNumber": "1615NM70XF",
        "sourceManufacturer": "ORACLE",
        "sourceModelNumber": "X6-2",
        "sourceRack": "139.69 EXADATA",
        "sourceRackUnit": "35",
        "sanFabric": "San_fabric",
        "sourceManagedGroup": "DBS-EXADATA",
        "sourceTscName": "ORACLE SERVER",
        "sourceDatacenter": "WEC",
        "sourceEnvironment": "PRODUCTION",
        "targetHostName": "DANPXW6900CE12",
        "targetEnvironment": "PRODUCTION",
        "targetDatacenter": "Silas",
        "targetCluster": "DANDRWA53000-RD--5325077",
        "targetNetworkZone": "PROD-CDE",
        "targetRack": "1001.66 - PFLEX 02",
        "targetRackUnit": "4",
        "migrationGroup": "Out of Scope"
    },
    {
        "id": 12,
        "cio": "CTO",
        "neighborhood": "Technology Enablement Services",
        "migrationMethod": "Lift & Shift",
        "targetDate": "2026-05-30T00:00:00.000+00:00",
        "targetPlatform": "Private-IaaS",
        "sanAttached": "No",
        "primaryAppId": "DANHP",
        "primaryAppName": "DAN HIGH PERFORMANCE DATABASE SOLUTION FOR ORACLE",
        "sourceHostName": "DANPXW6900SW-IBA1",
        "sourceModelName": "ORACLE SERVER",
        "sourceCiType": "DANPXW6900SW-IBA1",
        "sourceSerialNumber": "AK00365359",
        "sourceManufacturer": "ORACLE",
        "sourceModelNumber": "X6-2",
        "sanFabric": "San_fabric",
        "sourceManagedGroup": "DBS-EXADATA",
        "sourceTscName": "ORACLE SERVER",
        "sourceDatacenter": "WEC",
        "sourceEnvironment": "PRODUCTION",
        "targetHostName": "DANPXW6900SW-IBA1",
        "targetEnvironment": "PRODUCTION",
        "targetDatacenter": "Silas",
        "migrationGroup": "Out of Scope"
    },
    {
        "id": 13,
        "cio": "CCIBT",
        "neighborhood": "non-production",
        "migrationMethod": "Lift & Shift",
        "targetDate": "2027-03-30T00:00:00.000+00:00",
        "targetPlatform": "Private-IaaS",
        "sanAttached": "Yes",
        "primaryAppId": "GMTS",
        "primaryAppName": "GLOBAL MONEY TRANSFER SYSTEM",
        "sourceCluster": "DANURWA65100-RU--10844613",
        "sourceHostName": "DANURWA65101",
        "sourceModelName": "HPE PROLIANT DL380 G10 SERVER",
        "sourceCiType": "DANURWA65101",
        "sourceSerialNumber": "2M204804JW",
        "sourceManufacturer": "HEWLETT-PACKARD",
        "sourceModelNumber": "868703-B21",
        "sourceIp": "165.126.179.151",
        "sourceRack": "325.57 (Q4 2019) WIRES",
        "sourceRackUnit": "10",
        "sanFabric": "San_fabric",
        "sourceManagedGroup": "DBS-ORACLE-DBINFRASTRUCTURE",
        "sourceTscName": "HPE PROLIANT DL380 G10 SERVER",
        "sourceDatacenter": "WEC",
        "sourceEnvironment": "UAT",
        "sourceRam": "128110",
        "sourceCpu": "12.0",
        "targetHostName": "DANURWA65101",
        "targetEnvironment": "UAT",
        "targetDatacenter": "Silas",
        "targetIp": "165.126.179.151",
        "migrationGroup": "Group 22"
    },
    {
        "id": 14,
        "cio": "CTO",
        "neighborhood": "non-production",
        "migrationMethod": "Lift & Shift",
        "targetDate": "2026-05-30T00:00:00.000+00:00",
        "targetPlatform": "Private-IaaS",
        "sanAttached": "Yes",
        "primaryAppId": "DANIE",
        "primaryAppName": "DATABASE NEIGHBORHOOD - ORACLE",
        "sourceCluster": "DANURWG69000-RU",
        "sourceHostName": "DANURWG69000",
        "sourceModelName": "HPE PROLIANT DL380 G9 SERVER",
        "sourceCiType": "DANURWG69000",
        "sourceSerialNumber": "MXQ64001J6",
        "sourceManufacturer": "HEWLETT-PACKARD",
        "sourceModelNumber": "719064-B21",
        "sourceIp": "162.111.176.238",
        "sourceRack": "305.15 NO PORTS",
        "sourceRackUnit": "2",
        "sanFabric": "San_fabric",
        "sourceManagedGroup": "DBS-ORACLE-DBINFRASTRUCTURE",
        "sourceTscName": "HPE PROLIANT DL380 G9 SERVER",
        "sourceDatacenter": "WEC",
        "sourceEnvironment": "UAT",
        "sourceRam": "257325",
        "sourceCpu": "16.0",
        "targetHostName": "DANURWG69000",
        "targetEnvironment": "UAT",
        "targetDatacenter": "Silas",
        "targetIp": "162.111.176.238",
        "migrationGroup": "Out of Scope"
    },
    {
        "id": 15,
        "cio": "CTO",
        "neighborhood": "non-production",
        "migrationMethod": "Lift & Shift",
        "targetDate": "2026-05-30T00:00:00.000+00:00",
        "targetPlatform": "Private-IaaS",
        "sanAttached": "No",
        "primaryAppId": "DANHP",
        "primaryAppName": "DAN HIGH PERFORMANCE DATABASE SOLUTION FOR ORACLE",
        "sourceHostName": "DANUXW6090CE13",
        "sourceModelName": "ORACLE SERVER",
        "sourceCiType": "DANUXW6090CE13",
        "sourceSerialNumber": "1615NM716C",
        "sourceManufacturer": "ORACLE",
        "sourceModelNumber": "X6-2",
        "sourceRack": "139.70 EXADATA",
        "sourceRackUnit": "37",
        "sanFabric": "San_fabric",
        "sourceManagedGroup": "DBS-EXADATA",
        "sourceTscName": "ORACLE SERVER",
        "sourceDatacenter": "WEC",
        "sourceEnvironment": "UAT",
        "targetHostName": "DANUXW6090CE13",
        "targetEnvironment": "UAT",
        "targetDatacenter": "Silas",
        "migrationGroup": "Out of Scope"
    },
    {
        "id": 16,
        "cio": "CTO",
        "neighborhood": "non-production",
        "migrationMethod": "Lift & Shift",
        "targetDate": "2026-05-30T00:00:00.000+00:00",
        "targetPlatform": "Private-IaaS",
        "sanAttached": "No",
        "primaryAppId": "DANHP",
        "primaryAppName": "DAN HIGH PERFORMANCE DATABASE SOLUTION FOR ORACLE",
        "sourceCluster": "DANUXW609001-XU--4381866",
        "sourceHostName": "DANUXW6090DB01",
        "sourceModelName": "ORACLE SERVER",
        "sourceCiType": "DANUXW6090DB01",
        "sourceSerialNumber": "1615NM10J5",
        "sourceManufacturer": "ORACLE",
        "sourceModelNumber": "X6-2",
        "sourceIp": "10.144.61.77",
        "sourceRack": "139.70 EXADATA",
        "sourceRackUnit": "16",
        "sanFabric": "San_fabric",
        "sourceManagedGroup": "DBS-EXADATA",
        "sourceTscName": "ORACLE SERVER",
        "sourceDatacenter": "WEC",
        "sourceEnvironment": "UAT",
        "sourceRam": "773391",
        "sourceCpu": "44.0",
        "targetHostName": "DANUXW6090DB01",
        "targetEnvironment": "UAT",
        "targetDatacenter": "Silas",
        "targetIp": "10.144.61.77",
        "migrationGroup": "Out of Scope"
    },
    {
        "id": 17,
        "cio": "CTO",
        "neighborhood": "non-production",
        "migrationMethod": "Lift & Shift",
        "targetDate": "2026-05-30T00:00:00.000+00:00",
        "targetPlatform": "Private-IaaS",
        "sanAttached": "No",
        "primaryAppId": "DANHP",
        "primaryAppName": "DAN HIGH PERFORMANCE DATABASE SOLUTION FOR ORACLE",
        "sourceCluster": "DANUXW609001-XU--4381866",
        "sourceHostName": "DANUXW6090DB03",
        "sourceModelName": "ORACLE SERVER",
        "sourceCiType": "DANUXW6090DB03",
        "sourceSerialNumber": "1615NM10LF",
        "sourceManufacturer": "ORACLE",
        "sourceModelNumber": "X6-2",
        "sourceIp": "10.144.61.79",
        "sourceRack": "139.70 EXADATA",
        "sourceRackUnit": "18",
        "sanFabric": "San_fabric",
        "sourceManagedGroup": "DBS-EXADATA",
        "sourceTscName": "ORACLE SERVER",
        "sourceDatacenter": "WEC",
        "sourceEnvironment": "UAT",
        "sourceRam": "773391",
        "sourceCpu": "44.0",
        "targetHostName": "DANUXW6090DB03",
        "targetEnvironment": "UAT",
        "targetDatacenter": "Silas",
        "targetIp": "10.144.61.79",
        "migrationGroup": "Out of Scope"
    },
    {
        "id": 18,
        "cio": "CTO",
        "neighborhood": "non-production",
        "migrationMethod": "Lift & Shift",
        "targetDate": "2026-05-30T00:00:00.000+00:00",
        "targetPlatform": "Private-IaaS",
        "sanAttached": "No",
        "primaryAppId": "DANHP",
        "primaryAppName": "DAN HIGH PERFORMANCE DATABASE SOLUTION FOR ORACLE",
        "sourceCluster": "DANUXW609001-XU--4381866",
        "sourceHostName": "DANUXW6090DB05",
        "sourceModelName": "ORACLE SERVER",
        "sourceCiType": "DANUXW6090DB05",
        "sourceSerialNumber": "1615NM109V",
        "sourceManufacturer": "ORACLE",
        "sourceModelNumber": "X6-2",
        "sourceIp": "10.144.61.81",
        "sourceRack": "139.70 EXADATA",
        "sourceRackUnit": "23",
        "sanFabric": "San_fabric",
        "sourceManagedGroup": "DBS-EXADATA",
        "sourceTscName": "ORACLE SERVER",
        "sourceDatacenter": "WEC",
        "sourceEnvironment": "UAT",
        "sourceRam": "773391",
        "sourceCpu": "44.0",
        "targetHostName": "DANUXW6090DB05",
        "targetEnvironment": "UAT",
        "targetDatacenter": "Silas",
        "targetIp": "10.144.61.81",
        "migrationGroup": "Out of Scope"
    },
    {
        "id": 19,
        "cio": "CTO",
        "neighborhood": "non-production",
        "migrationMethod": "Lift & Shift",
        "targetDate": "2026-05-30T00:00:00.000+00:00",
        "targetPlatform": "Private-IaaS",
        "sanAttached": "No",
        "primaryAppId": "DANHP",
        "primaryAppName": "DAN HIGH PERFORMANCE DATABASE SOLUTION FOR ORACLE",
        "sourceHostName": "DANUXW6210CE02",
        "sourceModelName": "ORACLE SERVER",
        "sourceCiType": "DANUXW6210CE02",
        "sourceSerialNumber": "1718NM782H",
        "sourceManufacturer": "ORACLE",
        "sourceModelNumber": "X6-2",
        "sourceRack": "135.74 EXADATA X6-2",
        "sourceRackUnit": "4",
        "sanFabric": "San_fabric",
        "sourceManagedGroup": "DBS-EXADATA",
        "sourceTscName": "ORACLE SERVER",
        "sourceDatacenter": "WEC",
        "sourceEnvironment": "UAT",
        "targetHostName": "DANUXW6210CE02",
        "targetEnvironment": "UAT",
        "targetDatacenter": "Silas",
        "migrationGroup": "Out of Scope"
    },
    {
        "id": 20,
        "cio": "CTO",
        "neighborhood": "non-production",
        "migrationMethod": "Lift & Shift",
        "targetDate": "2026-05-30T00:00:00.000+00:00",
        "targetPlatform": "Private-IaaS",
        "sanAttached": "No",
        "primaryAppId": "DANHP",
        "primaryAppName": "DAN HIGH PERFORMANCE DATABASE SOLUTION FOR ORACLE",
        "sourceHostName": "DANUXW6210CE05",
        "sourceModelName": "ORACLE SERVER",
        "sourceCiType": "DANUXW6210CE05",
        "sourceSerialNumber": "1718NM7847",
        "sourceManufacturer": "ORACLE",
        "sourceModelNumber": "X6-2",
        "sourceRack": "135.74 EXADATA X6-2",
        "sourceRackUnit": "10",
        "sanFabric": "San_fabric",
        "sourceManagedGroup": "DBS-EXADATA",
        "sourceTscName": "ORACLE SERVER",
        "sourceDatacenter": "WEC",
        "sourceEnvironment": "UAT",
        "targetHostName": "DANUXW6210CE05",
        "targetEnvironment": "UAT",
        "targetDatacenter": "Silas",
        "migrationGroup": "Out of Scope"
    }
    ]}

    // let tableCioData = {};
    // let dateList = {};
    // let datesArray = [];
    // let dataCenterList = {};
    // let dataAppIdList = {};
        let filteredData = {};
        if(chartdata.pspStatusResponseList){
          if(filters.filterBy && filters.filterBy !== 'targetDate'){
            filteredData = chartdata.pspStatusResponseList.reduce((acc: any, item) =>{
              acc[item[filters.filterBy]] = (acc[item[filters.filterBy]] || 0) + 1;
              return acc
            }, {})
          }else if(filters.filterBy == 'targetDate' && filters.startDate && filters.endDate){
            let datesObj = chartdata.pspStatusResponseList.filter(item => new Date(item['targetDate'].indexOf('T')>0? item?.targetDate.split('T')[0] : item?.targetDate) >= new Date(filters.startDate) && new Date(item['targetDate'].indexOf('T')>0? item?.targetDate.split('T')[0] : item?.targetDate) <= new Date(filters.endDate));
            filteredData = datesObj.reduce((acc: any, item) =>{
              let selectedDateFormat = item?.targetDate.indexOf('T')>0? item?.targetDate.split('T')[0] : item?.targetDate;
              acc[selectedDateFormat] = (acc[selectedDateFormat] || 0) + 1;
              return acc
            }, {})
          }else{
            filteredData = chartdata.pspStatusResponseList.reduce((acc: any, item) =>{
              let selectedDateFormat = item?.targetDate.indexOf('T')>0? item?.targetDate.split('T')[0] : item?.targetDate;
              acc[selectedDateFormat] = (acc[selectedDateFormat] || 0) + 1;
              return acc
            }, {})
          }
          console.log(filteredData)

          // chartdata.forEach((td: any) => {
          //   let selectedDateFormat = td?.targetDate.indexOf('T')>0? td?.targetDate.split('T')[0] : td?.targetDate;
          //   datesArray.push(selectedDateFormat)
          //   if(!tableCioData[td?.migrationStatus]){
          //     tableCioData[td?.migrationStatus] = {};
          //     tableCioData[td?.migrationStatus]['data'] = [];
          //   }

          //   if(tableCioData[td?.migrationStatus]){
          //       tableCioData[td?.migrationStatus]['data'].push(td);
          //   }

          //   if(selectedDateFormat && !dateList[selectedDateFormat]){
          //     dateList[selectedDateFormat] = {};
          //     dateList[selectedDateFormat] = {...td};
          //     dateList[selectedDateFormat]['data'] = [];
          //   }
          //   if(dateList[selectedDateFormat]){
          //     dateList[selectedDateFormat]['data'].push(td);
          //   }

          //   // if(!dataAppIdList[td?.appId]){
          //   //   dataAppIdList[td?.appId] = {};
          //   //   dataAppIdList[td?.appId] = {...td};
          //   //   dataAppIdList[td?.appId]['data'] = [];
          //   // }
          //   // if(dataAppIdList[td?.appId]){
          //   //   dataAppIdList[td?.appId]['data'].push(td);
          //   // }
          // })

          let barLabels = [];
          let barData = [];
          barLabels = Object.keys(filteredData);
          barData = Object.values(filteredData);

          // console.log(tableCioData)

          //tabledata
          // Object.values(dateList).forEach((envData: any) => {
          //   envData['total'] = envData.data.length;
          //   tableData.push(envData)
          // })

          //doughnutdata
          // Object.values(tableCioData).forEach((obj: any) => {
          //   doughNutLabels.push(obj.data[0]['migrationStatus'] ? obj.data[0]['migrationStatus'] : 'No Migration Status');
          //   doughNutData.push(obj.data.length);
          // })

          // //bardata
          // const newDatesArray = [...new Set(datesArray)];
          // newDatesArray.sort((a: any,b: any) => new Date(a).valueOf() - new Date(b).valueOf()).forEach((keys: string) => {
          //   barLabels.push(keys);
          //   barData.push(dateList[keys]['data'].length);
          // })

          let outBar = barData.length !== 0 ? {
            labels: barLabels,
            datasets: [
              { data: barData, label: (filters.filterBy ? filters.filterBy.toUpperCase() : 'Dates')+" Info" }
            ]
          } : null;

          let finalResponse = this.templateFlow.split('|').map((key)=>{
            return {
              ...outBar,
              type: key
            }
          })

          console.log(finalResponse)

          // let colors = this.getColors(doughNutData.length)
          return {graphData: finalResponse, tableData: chartdata.pspStatusResponseList, filter: filteredData}
        }
      // return { bar: outBar, toughnut: { labels: doughNutLabels,  datasets: [{ data: doughNutData, backgroundColor: colors, borderColor: colors}]} }
      // return { table: tableData, bar: outBar, toughnut: { labels: doughNutLabels,  datasets: [{ data: doughNutData, backgroundColor: colors, borderColor: colors}]} }
      }),
      catchError((error) => {
        console.error("error while fetching the table chart data ", error);
        return of({ graphData: [], tableData: {}, filter: {} });
      })
    );
  }

  // getV2vDashboardData(req: V2vDashboardChartData): Observable<any> {
  //   return this.v2vDashboardHttpService.getV2vDashboardChartReq(req).pipe(
  //     map((chartdata: any) => {
  //       // let temptabledata = {};
  //       // let tempBarData = {};
  //       let tableCioData = {};
  //       let tableEnvData = {};
  //       let dataCenterList = {};
  //       let dataAppIdList = {};
  //       if(chartdata.v2vStatusResponseList){
  //         chartdata.v2vStatusResponseList.forEach((td: any) => {
  //           if(!tableCioData[td?.migrationStatus]){
  //             tableCioData[td?.migrationStatus] = {};
  //             tableCioData[td?.migrationStatus]['data'] = [];
  //           }

  //           if(tableCioData[td?.migrationStatus]){
  //               tableCioData[td?.migrationStatus]['data'].push(td);
  //           }

  //           if(!tableEnvData[td?.sourceEnvDescription]){
  //             tableEnvData[td?.sourceEnvDescription] = {};
  //             tableEnvData[td?.sourceEnvDescription] = {...td};
  //             tableEnvData[td?.sourceEnvDescription]['data'] = [];
  //           }
  //           if(tableEnvData[td?.sourceEnvDescription]){
  //             tableEnvData[td?.sourceEnvDescription]['data'].push(td);
  //           }

  //           if(!dataAppIdList[td?.appId]){
  //             dataAppIdList[td?.appId] = {};
  //             dataAppIdList[td?.appId] = {...td};
  //             dataAppIdList[td?.appId]['data'] = [];
  //           }
  //           if(dataAppIdList[td?.appId]){
  //             dataAppIdList[td?.appId]['data'].push(td);
  //           }
  //         })

  //         let barLabels = [];
  //         let barData = [];
  //         let tableData = [];
  //         let doughNutLabels = [];
  //         let doughNutData = [];

  //         console.log(tableCioData)

  //         //tabledata
  //         Object.values(tableEnvData).forEach((envData: any) => {
  //           envData['total'] = envData.data.length;
  //           tableData.push(envData)
  //         })

  //         //doughnutdata
  //         Object.values(tableCioData).forEach((cioData: any) => {
  //           doughNutLabels.push(cioData.data[0]['migrationStatus'] ? cioData.data[0]['migrationStatus'] : 'No Migration Status');
  //           doughNutData.push(cioData.data.length);
  //         })

  //         //bardata
  //         Object.keys(tableEnvData).forEach((keyAppid: string) => {
  //           barLabels.push(keyAppid);
  //           barData.push(tableEnvData[keyAppid]['data'].length);
  //         })

  //         let outBar = barData.length !== 0 ? {
  //           labels: barLabels,
  //           datasets: [
  //             { data: barData, label: "Environment Info" }
  //           ]
  //         } : null;

  //         console.log(dataAppIdList)
  //         let colors = this.getColors(doughNutData.length)
  //         return { table: tableData, bar: outBar, toughnut: { labels: doughNutLabels,  datasets: [{ data: doughNutData, backgroundColor: colors, borderColor: colors}]} }
  //       }
  //     }),
  //     catchError((error) => {
  //       console.error("error while fetching the table chart data ", error);
  //       return of({ table: [], bar: {}, toughnut: {} });
  //     })
  //   );
  // }

  getColors(length: any){

    let colorsList = ['#264653','#E76F51','#F4A261','#2A9D8F', '#003F5C', '#BC5090', '#FFA07A', '#CA3C25', '#F6C85F', '#6F4E7C'];
    let colorsArray = [];
    for(let i=0; i < length;i++){
      colorsArray.push(colorsList[i])
    }

    return colorsArray
  }
}
