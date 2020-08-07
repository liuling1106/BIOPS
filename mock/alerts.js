// const Mock = require('mockjs')

const List = []

List.push({ 'alertId': '07042020-1002', 'level': '3', 'duration': '00:12:12', 'status': 'New', 'assignedTo': 'NIcholas Cook', 'inquiryRequests': '0/3', 'ivrEnabled': 'No', 'bridgeActive': 'No' })
List.push({ 'alertId': '07042020-1003', 'level': '1', 'duration': '00:00:10', 'status': 'New', 'assignedTo': 'New', 'inquiryRequests': '0/2', 'ivrEnabled': 'No', 'bridgeActive': 'Yes' })
List.push({ 'alertId': '07042020-1004', 'level': '2', 'duration': '00:50:02', 'status': 'Active', 'assignedTo': 'NIcholas Cook', 'inquiryRequests': 'N/A', 'ivrEnabled': 'Yes', 'bridgeActive': 'No' })
List.push({ 'alertId': '07042020-1005', 'level': '1', 'duration': '00:01:03', 'status': 'Active', 'assignedTo': 'NIcholas Cook', 'inquiryRequests': 'N/A', 'ivrEnabled': 'Yes', 'bridgeActive': 'Yes' })
List.push({ 'alertId': '07042020-1006', 'level': '4', 'duration': '01:00:12', 'status': 'Resolved', 'assignedTo': 'New', 'inquiryRequests': '4/3', 'ivrEnabled': 'No', 'bridgeActive': 'Yes' })
List.push({ 'alertId': '07042020-1007', 'level': '1', 'duration': '02:12:12', 'status': 'Resolved', 'assignedTo': 'NIcholas Cook', 'inquiryRequests': 'N/A', 'ivrEnabled': 'Yes', 'bridgeActive': 'No' })

const detailsLIst = []
detailsLIst.push({ 'alertId': '07042020-1002', 'level': '3', 'assignedTo': 'NIcholas Cook', 'ivrEnabled': 'No', 'bridgeActive': 'No', 'startTime': '2020-07-05', 'upgradeTime': '2020-07-08', 'endTime': '2020-07-10', 'triggerCriteria': '(Metric1 > 10 & Metric2 > 5) OR (Metric 8 < 50%)', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'O365/Office', 'queueDetails': 'UR Office', 'region': 'NA', 'modality': 'Phone Inbound', 'language': 'English', 'sites': [{ 'siteName': 'CNX Bangalore', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }] })
detailsLIst.push({ 'alertId': '07042020-1003', 'level': '1', 'assignedTo': 'New', 'ivrEnabled': 'No', 'bridgeActive': 'Yes', 'startTime': '2020-07-06', 'upgradeTime': '2020-07-08', 'endTime': '2020-07-12', 'triggerCriteria': '[LongesQueueTime]>=15', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'O365/Office', 'queueDetails': 'TS Windows', 'region': 'Xbox', 'modality': 'Phone Inbound', 'language': 'English', 'sites': [{ 'siteName': 'NTC Sapporo', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' },{ 'siteName': 'NTC tokyo', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }] })
detailsLIst.push({ 'alertId': '07042020-1004', 'level': '2', 'assignedTo': 'NIcholas Cook', 'ivrEnabled': 'Yes', 'bridgeActive': 'No', 'startTime': '2020-07-06', 'upgradeTime': '2020-07-09', 'endTime': '2020-07-13', 'triggerCriteria': '[LongesQueueTime]>=15 and [CallsInQueue]>=5', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'O365/Office', 'queueDetails': 'Xbox All', 'region': 'EMEA: Latarn', 'modality': 'Click 2 Call', 'language': 'Japan', 'sites': [{ 'siteName': 'NTC tokyo', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }] })
detailsLIst.push({ 'alertId': '07042020-1005', 'level': '1', 'assignedTo': 'NIcholas Cook', 'ivrEnabled': 'Yes', 'bridgeActive': 'Yes', 'startTime': '2020-07-06', 'upgradeTime': '2020-07-09', 'endTime': '2020-07-13', 'triggerCriteria': '[LongesQueueTime]>=6 and [CallsInQueue]>=15', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'O365/Office', 'queueDetails': 'UR Office', 'region': 'Global', 'modality': 'Phone Inbound', 'language': 'French', 'sites': [{ 'siteName': 'Relia Yokohama', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }] })
detailsLIst.push({ 'alertId': '07042020-1006', 'level': '4', 'assignedTo': 'NIcholas Cook', 'ivrEnabled': 'No', 'bridgeActive': 'Yes', 'startTime': '2020-07-07', 'upgradeTime': '2020-07-10', 'endTime': '2020-07-15', 'triggerCriteria': '[LongesQueueTime]>=15', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'Windows', 'queueDetails': 'Surface consumer Tech Support', 'region': 'NA', 'modality': 'Phone Inbound', 'language': 'English', 'sites': [{ 'siteName': 'CNX kuala Lumpur', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' },{ 'siteName': 'Avanade Taguig', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }] })
detailsLIst.push({ 'alertId': '07042020-1007', 'level': '1', 'assignedTo': 'New', 'ivrEnabled': 'Yes', 'bridgeActive': 'No', 'startTime': '2020-07-07', 'upgradeTime': '2020-07-10', 'endTime': '2020-07-15', 'triggerCriteria': '[CallsINQueue]>=50', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'Xbox', 'queueDetails': 'UR Office', 'region': 'Japan', 'modality': 'Phone Inbound', 'language': 'Spanish', 'sites': [{ 'siteName': 'Avanade Taguig', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' },{ 'siteName': 'NTC tokyo', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }] })

// for (let i = 0; i < count; i++) {
//   List.push(Mock.mock({
//     alertId: '@guid',
//     level: '@integer(1, 4)',
//     duration: '@DATETIME("HH:mm:ss")',
//     'status|1': ['New', 'Active', 'Resolved'],
//     'assignedTo|1': ['New', 'Nicholas Cook'],
//     'inquiryRequests|1': ['0/2', '0/3', 'N/A', '4/4'],
//     'ivrEnabled|1': ['True', 'False'],
//     'bridgeActive|1': ['True', 'False']
//   }))
// }
module.exports = [
  {
    url: '/vue-element-admin/alerts/list',
    type: 'get',
    response: config => {
      const { page = 1, limit = 20, sort } = config.query
      let mockList = List
      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },
  {
    url: '/vue-element-admin/alerts/detail',
    type: 'get',
    response: config => {
      console.log(config)
      const { id } = config.query
      for (const alert of List) {
        debugger
        if (alert.alertId === +id) {
          return {
            code: 20000,
            data: alert
          }
        }
      }
    }
  }
]
