import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { V2vDashboardHttpService } from './v2v-dashboard-http.service';
import { V2vDashboardChartData } from '../model/V2vDashboard.model';

@Injectable({
  providedIn: 'root'
})
export class V2vDashboardService {
  templateFlow: string;
  constructor(private v2vDashboardHttpService: V2vDashboardHttpService) {
    this.templateFlow = "pie|line|bar|doughnut";
   }

  getV2vDashboardData(req: V2vDashboardChartData, filters: any){
    return this.v2vDashboardHttpService.getV2vDashboardChartReq(req).pipe(
      map((data: any) => {
    let chartdata = {"v2vStatusResponseList" :[
      {
          "id": 1,
          "neighborhood": "Pseudo-neighborhood",
          "migrationTool": "some fake tool",
          "targetDate": "2025-06-11T21:18:01.193+00:00",
          "appId": "INFRA-SERVER",
          "sourceCluster": "PFMC",
          "sourceVCenter": "PFWEC101D-VC01",
          "sourceVLan": "pfmc-sds-data2-d2-705",
          "sourceHost": "pfwec101d01m01",
          "sourceIP": "10.83.47.20",
          "sourceVMName": "PFWEC101D01M01-SVM",
          "sourceDatacenter": "WEC",
          "sourceEnvDescription": "PRODUCTION",
          "targetVMName": "PFWEC101D01M01-SVM",
          "targetEnvDescription": "PRODUCTION",
          "targetDatacenter": "Silas",
          "targetIP": "10.83.47.20",
          "targetCluster": "pfsil102d07",
          "targetVCenter": "PFSIL102D-VC02",
          "targetNetworkZone": "PROD-CRT",
          "lastUpdatedOn": "2025-06-05T14:25:07.427+00:00",
          "lastUpdateBy": "Etpp5_Admin",
          "latestComment": "testing ",
          "migrationStatus": "Completed"
      },
      {
          "id": 2,
          "neighborhood": "Pseudo-neighborhood",
          "migrationTool": "some fake tool",
          "targetDate": "2025-07-11T21:18:01.193+00:00",
          "appId": "INFRA-SERVER",
          "sourceCluster": "PFMC",
          "sourceVCenter": "PFWEC101D-VC01",
          "sourceVLan": "pfmc-sds-data1-d1-704",
          "sourceHost": "pfwec101d01m01",
          "sourceIP": "10.83.47.4",
          "sourceVMName": "PFWEC101D01M01-SVM",
          "sourceDatacenter": "WEC",
          "sourceEnvDescription": "PRODUCTION",
          "targetVMName": "PFWEC101D01M01-SVM",
          "targetEnvDescription": "PRODUCTION",
          "targetDatacenter": "Silas",
          "targetIP": "10.83.47.4",
          "targetCluster": "pfsil102d07",
          "targetVCenter": "PFSIL102D-VC02",
          "targetNetworkZone": "PROD-CRT",
          "lastUpdatedOn": "2025-05-02T14:12:13.927+00:00",
          "lastUpdateBy": "Unknown",
          "latestComment": "testing",
          "migrationStatus": "Pending"
      },
      {
          "id": 3,
          "neighborhood": "Pseudo-neighborhood",
          "migrationTool": "some fake tool",
          "targetDate": "2025-08-21T21:18:01.193+00:00",
          "appId": "INFRA-SERVER",
          "sourceCluster": "PFMC",
          "sourceVCenter": "PFWEC101D-VC01",
          "sourceVLan": "pfmc-sds-mgmt-svm-51",
          "sourceHost": "pfwec101d01m01",
          "sourceIP": "10.83.45.227",
          "sourceVMName": "PFWEC101D01M01-SVM",
          "sourceDatacenter": "WEC",
          "sourceEnvDescription": "PRODUCTION",
          "targetVMName": "PFWEC101D01M01-SVM",
          "targetEnvDescription": "PRODUCTION",
          "targetDatacenter": "Lewisville",
          "targetIP": "10.83.45.227",
          "targetCluster": "pflew105d04",
          "targetVCenter": "PFLEW105D-VC04",
          "targetNetworkZone": "PROD-CDE",
          "lastUpdatedOn": "2025-05-09T18:50:08.637+00:00",
          "lastUpdateBy": "K139597",
          "latestComment": "Test",
          "migrationStatus": "Scheduled"
      },
      {
          "id": 4,
          "neighborhood": "Pseudo-neighborhood",
          "migrationTool": "some fake tool",
          "targetDate": "2025-09-11T21:18:01.193+00:00",
          "appId": "INFRA-SERVER",
          "sourceCluster": "PFMC",
          "sourceVCenter": "PFWEC101D-VC01",
          "sourceVLan": "pfmc-sds-mgmt-svm-51",
          "sourceHost": "pfwec101d01m02",
          "sourceIP": "10.83.45.228",
          "sourceVMName": "PFWEC101D01M02-SVM",
          "sourceDatacenter": "WEC",
          "sourceEnvDescription": "PRODUCTION",
          "targetVMName": "PFWEC101D01M02-SVM",
          "targetEnvDescription": "PRODUCTION",
          "targetDatacenter": "Silas",
          "targetIP": "10.83.45.228",
          "migrationStatus": "Pending"
      },
      {
          "id": 5,
          "neighborhood": "Pseudo-neighborhood",
          "migrationTool": "some fake tool",
          "targetDate": "2025-06-11T21:18:01.193+00:00",
          "appId": "INFRA-SERVER",
          "sourceCluster": "PFMC",
          "sourceVCenter": "PFWEC101D-VC01",
          "sourceVLan": "pfmc-sds-data2-d2-705",
          "sourceHost": "pfwec101d01m02",
          "sourceIP": "10.83.47.3",
          "sourceVMName": "PFWEC101D01M02-SVM",
          "sourceDatacenter": "WEC",
          "sourceEnvDescription": "PRODUCTION",
          "targetVMName": "PFWEC101D01M02-SVM",
          "targetEnvDescription": "PRODUCTION",
          "targetDatacenter": "Silas",
          "targetIP": "10.83.47.3",
          "migrationStatus": "Completed"
      },
      {
          "id": 6,
          "neighborhood": "Pseudo-neighborhood",
          "migrationTool": "some fake tool",
          "targetDate": "2025-09-12T21:18:01.193+00:00",
          "appId": "INFRA-SERVER",
          "sourceCluster": "PFMC",
          "sourceVCenter": "PFWEC101D-VC01",
          "sourceVLan": "pfmc-sds-data1-d1-704",
          "sourceHost": "pfwec101d01m02",
          "sourceIP": "10.83.47.5",
          "sourceVMName": "PFWEC101D01M02-SVM",
          "sourceDatacenter": "WEC",
          "sourceEnvDescription": "PRODUCTION",
          "targetVMName": "PFWEC101D01M02-SVM",
          "targetEnvDescription": "PRODUCTION",
          "targetDatacenter": "Silas",
          "targetIP": "10.83.47.5",
          "migrationStatus": "Planned"
      },
      {
          "id": 7,
          "neighborhood": "Pseudo-neighborhood",
          "migrationTool": "some fake tool",
          "targetDate": "2025-08-18T21:18:01.193+00:00",
          "appId": "INFRA-SERVER",
          "sourceCluster": "PFMC",
          "sourceVCenter": "PFWEC101D-VC01",
          "sourceVLan": "pfmc-sds-data2-d2-705",
          "sourceHost": "pfwec101d02m01",
          "sourceIP": "10.83.47.22",
          "sourceVMName": "PFWEC101D02M01-SVM",
          "sourceDatacenter": "WEC",
          "sourceEnvDescription": "PRODUCTION",
          "targetVMName": "PFWEC101D02M01-SVM",
          "targetEnvDescription": "PRODUCTION",
          "targetDatacenter": "Silas",
          "targetIP": "10.83.47.22",
          "migrationStatus": "Completed"
      },
      {
          "id": 8,
          "neighborhood": "Pseudo-neighborhood",
          "migrationTool": "some fake tool",
          "targetDate": "2025-09-11T21:18:01.193+00:00",
          "appId": "INFRA-SERVER",
          "sourceCluster": "PFMC",
          "sourceVCenter": "PFWEC101D-VC01",
          "sourceVLan": "pfmc-sds-data1-d1-704",
          "sourceHost": "pfwec101d02m01",
          "sourceIP": "10.83.47.6",
          "sourceVMName": "PFWEC101D02M01-SVM",
          "sourceDatacenter": "WEC",
          "sourceEnvDescription": "PRODUCTION",
          "targetVMName": "PFWEC101D02M01-SVM",
          "targetEnvDescription": "PRODUCTION",
          "targetDatacenter": "Silas",
          "targetIP": "10.83.47.6",
          "migrationStatus": "Planned"
      },
      {
          "id": 9,
          "neighborhood": "Pseudo-neighborhood",
          "migrationTool": "some fake tool",
          "targetDate": "2025-06-11T21:18:01.193+00:00",
          "appId": "INFRA-SERVER",
          "sourceCluster": "PFMC",
          "sourceVCenter": "PFWEC101D-VC01",
          "sourceVLan": "pfmc-sds-mgmt-svm-51",
          "sourceHost": "pfwec101d02m01",
          "sourceIP": "10.83.45.229",
          "sourceVMName": "PFWEC101D02M01-SVM",
          "sourceDatacenter": "WEC",
          "sourceEnvDescription": "PRODUCTION",
          "targetVMName": "PFWEC101D02M01-SVM",
          "targetEnvDescription": "PRODUCTION",
          "targetDatacenter": "Silas",
          "targetIP": "10.83.45.229",
          "migrationStatus": "Pending"
      },
      {
          "id": 10,
          "neighborhood": "Pseudo-neighborhood",
          "migrationTool": "some fake tool",
          "targetDate": "2025-07-11T21:18:01.193+00:00",
          "appId": "INFRA-SERVER",
          "sourceCluster": "PFMC",
          "sourceVCenter": "PFWEC101D-VC01",
          "sourceVLan": "pfmc-sds-data2-d2-705",
          "sourceHost": "pfwec101d02m02",
          "sourceIP": "10.83.47.23",
          "sourceVMName": "PFWEC101D02M02-SVM",
          "sourceDatacenter": "WEC",
          "sourceEnvDescription": "PRODUCTION",
          "targetVMName": "PFWEC101D02M02-SVM",
          "targetEnvDescription": "PRODUCTION",
          "targetDatacenter": "Silas",
          "targetIP": "10.83.47.23",
          "migrationStatus": "Planned"
      },
      {
          "id": 11,
          "neighborhood": "Pseudo-neighborhood",
          "migrationTool": "some fake tool",
          "targetDate": "2025-08-11T21:18:01.193+00:00",
          "appId": "INFRA-SERVER",
          "sourceCluster": "PFMC",
          "sourceVCenter": "PFWEC101D-VC01",
          "sourceVLan": "pfmc-sds-data1-d1-704",
          "sourceHost": "pfwec101d02m02",
          "sourceIP": "10.83.47.7",
          "sourceVMName": "PFWEC101D02M02-SVM",
          "sourceDatacenter": "WEC",
          "sourceEnvDescription": "PRODUCTION",
          "targetVMName": "PFWEC101D02M02-SVM",
          "targetEnvDescription": "PRODUCTION",
          "targetDatacenter": "Silas",
          "targetIP": "10.83.47.7",
          "migrationStatus": "Planned"
      },
      {
          "id": 12,
          "neighborhood": "Pseudo-neighborhood",
          "migrationTool": "some fake tool",
          "targetDate": "2025-09-12T21:18:01.193+00:00",
          "appId": "INFRA-SERVER",
          "sourceCluster": "PFMC",
          "sourceVCenter": "PFWEC101D-VC01",
          "sourceVLan": "pfmc-sds-mgmt-svm-51",
          "sourceHost": "pfwec101d02m02",
          "sourceIP": "10.83.45.230",
          "sourceVMName": "PFWEC101D02M02-SVM",
          "sourceDatacenter": "WEC",
          "sourceEnvDescription": "PRODUCTION",
          "targetVMName": "PFWEC101D02M02-SVM",
          "targetEnvDescription": "PRODUCTION",
          "targetDatacenter": "Silas",
          "targetIP": "10.83.45.230",
          "migrationStatus": "Completed"
      },
      {
          "id": 13,
          "neighborhood": "Pseudo-neighborhood",
          "cio": "CCIBT",
          "migrationTool": "some fake tool",
          "targetDate": "2025-07-16T21:18:01.193+00:00",
          "appId": "PSGRD",
          "appName": "WFS IBM SYMPHONY GRID",
          "sourceCluster": "pfwec101d01",
          "sourceVCenter": "PFWEC101D-VC02",
          "sourceVLan": "Provider_632",
          "sourceHost": "pfwec101d01c09",
          "sourceIP": "10.54.72.114",
          "sourceVMName": "CUVWA52A0389",
          "sourceDatacenter": "WEC",
          "sourceEnvDescription": "UAT",
          "targetVMName": "CUVWA52A0389",
          "targetEnvDescription": "UAT",
          "targetDatacenter": "Silas",
          "targetIP": "10.54.72.114",
          "migrationStatus": "Scheduled"
      },
      {
        "id": 15,
        "neighborhood": "Pseudo-neighborhood",
        "migrationTool": "some fake tool",
        "targetDate": "2025-08-15T21:18:01.193+00:00",
        "appId": "INFRA-SERVER",
        "sourceCluster": "PFMC",
        "sourceVCenter": "PFWEC101D-VC01",
        "sourceVLan": "pfmc-sds-data2-d2-705",
        "sourceHost": "pfwec101d02m01",
        "sourceIP": "10.83.47.22",
        "sourceVMName": "PFWEC101D02M01-SVM",
        "sourceDatacenter": "WEC",
        "sourceEnvDescription": "PRODUCTION",
        "targetVMName": "PFWEC101D02M01-SVM",
        "targetEnvDescription": "PRODUCTION",
        "targetDatacenter": "Silas",
        "targetIP": "10.83.47.22",
        "migrationStatus": "Completed"
    },
      {
          "id": 14,
          "neighborhood": "Pseudo-neighborhood",
          "cio": "CCIBT",
          "migrationTool": "some fake tool",
          "targetDate": "2025-08-15T21:18:01.193+00:00",
          "appId": "PSGRD",
          "appName": "WFS IBM SYMPHONY GRID",
          "sourceCluster": "pfwec101d01",
          "sourceVCenter": "PFWEC101D-VC02",
          "sourceVLan": "Provider_632",
          "sourceHost": "pfwec101d01c09",
          "sourceIP": "10.54.72.128",
          "sourceVMName": "CUVWA66A0389",
          "sourceDatacenter": "WEC",
          "sourceEnvDescription": "UAT",
          "targetVMName": "CUVWA66A0389",
          "targetEnvDescription": "UAT",
          "targetDatacenter": "Silas",
          "targetIP": "10.54.72.128",
          "migrationStatus": "Completed"
      }
    ]}

    // let tableCioData = {};
    // let dateList = {};
    // let datesArray = [];
    // let dataCenterList = {};
    // let dataAppIdList = {};
        let filteredData = {};
        if(chartdata.v2vStatusResponseList){
          if(filters.filterBy && filters.filterBy !== 'targetDate'){
            filteredData = chartdata.v2vStatusResponseList.reduce((acc: any, item) =>{
              acc[item[filters.filterBy]] = (acc[item[filters.filterBy]] || 0) + 1;
              return acc
            }, {})
          }else if(filters.filterBy == 'targetDate' && filters.startDate && filters.endDate){
            let datesObj = chartdata.v2vStatusResponseList.filter(item => new Date(item['targetDate'].indexOf('T')>0? item?.targetDate.split('T')[0] : item?.targetDate) >= new Date(filters.startDate) && new Date(item['targetDate'].indexOf('T')>0? item?.targetDate.split('T')[0] : item?.targetDate) <= new Date(filters.endDate));
            filteredData = datesObj.reduce((acc: any, item) =>{
              let selectedDateFormat = item?.targetDate.indexOf('T')>0? item?.targetDate.split('T')[0] : item?.targetDate;
              acc[selectedDateFormat] = (acc[selectedDateFormat] || 0) + 1;
              return acc
            }, {})
          }else{
            filteredData = chartdata.v2vStatusResponseList.reduce((acc: any, item) =>{
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
          return {graphData: finalResponse, tableData: chartdata.v2vStatusResponseList, filter: filteredData}
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