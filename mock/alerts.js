// const Mock = require('mockjs')

const List = []

List.push({ 'alertId': '07042020-1002', 'level': '3', 'duration': '00:12:12', 'status': 'New', 'assignedTo': 'NIcholas Cook', 'inquiryRequests': '0/3', 'ivrEnabled': 'No', 'bridgeActive': 'No' })
List.push({ 'alertId': '07042020-1003', 'level': '1', 'duration': '00:00:10', 'status': 'New', 'assignedTo': 'New', 'inquiryRequests': '0/2', 'ivrEnabled': 'No', 'bridgeActive': 'Yes' })
List.push({ 'alertId': '07042020-1004', 'level': '2', 'duration': '00:50:02', 'status': 'Active', 'assignedTo': 'NIcholas Cook', 'inquiryRequests': 'N/A', 'ivrEnabled': 'Yes', 'bridgeActive': 'No' })
List.push({ 'alertId': '07042020-1005', 'level': '1', 'duration': '00:01:03', 'status': 'Active', 'assignedTo': 'NIcholas Cook', 'inquiryRequests': 'N/A', 'ivrEnabled': 'Yes', 'bridgeActive': 'Yes' })
List.push({ 'alertId': '07042020-1006', 'level': '4', 'duration': '01:00:12', 'status': 'Resolved', 'assignedTo': 'New', 'inquiryRequests': '4/3', 'ivrEnabled': 'No', 'bridgeActive': 'Yes' })
List.push({ 'alertId': '07042020-1007', 'level': '1', 'duration': '02:12:12', 'status': 'Resolved', 'assignedTo': 'NIcholas Cook', 'inquiryRequests': 'N/A', 'ivrEnabled': 'Yes', 'bridgeActive': 'No' })

const detailsLIst = []
detailsLIst.push({ 'alertId': '07042020-1002', 'level': '3', 'assignedTo': 'NIcholas', 'ivrEnabled': 'No', 'bridgeActive': 'No', 'startTime': '2020-07-05', 'upgradeTime': '2020-07-08', 'endTime': '2020-07-10', 'triggerCriteria': '(Metric1 > 10 & Metric2 > 5) OR (Metric 8 < 50%)', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'O365/Office', 'queueDetails': 'UR Office', 'region': 'NA', 'modality': 'Phone Inbound', 'language': 'English', 'sites': [{ 'siteName': 'CNX Bangalore', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }] })
detailsLIst.push({ 'alertId': '07042020-1003', 'level': '1', 'assignedTo': 'New', 'ivrEnabled': 'No', 'bridgeActive': 'Yes', 'startTime': '2020-07-06', 'upgradeTime': '2020-07-08', 'endTime': '2020-07-12', 'triggerCriteria': '[LongesQueueTime]>=15', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'O365/Office', 'queueDetails': 'TS Windows', 'region': 'Xbox', 'modality': 'Phone Inbound', 'language': 'English', 'sites': [{ 'siteName': 'NTC Sapporo', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }, { 'siteName': 'NTC tokyo', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }] })
detailsLIst.push({ 'alertId': '07042020-1004', 'level': '2', 'assignedTo': 'NIcholas Cook', 'ivrEnabled': 'Yes', 'bridgeActive': 'No', 'startTime': '2020-07-06', 'upgradeTime': '2020-07-09', 'endTime': '2020-07-13', 'triggerCriteria': '[LongesQueueTime]>=15 and [CallsInQueue]>=5', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'O365/Office', 'queueDetails': 'Xbox All', 'region': 'EMEA: Latarn', 'modality': 'Click 2 Call', 'language': 'Japan', 'sites': [{ 'siteName': 'NTC tokyo', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }] })
detailsLIst.push({ 'alertId': '07042020-1005', 'level': '1', 'assignedTo': 'NIcholas Cook', 'ivrEnabled': 'Yes', 'bridgeActive': 'Yes', 'startTime': '2020-07-06', 'upgradeTime': '2020-07-09', 'endTime': '2020-07-13', 'triggerCriteria': '[LongesQueueTime]>=6 and [CallsInQueue]>=15', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'O365/Office', 'queueDetails': 'UR Office', 'region': 'Global', 'modality': 'Phone Inbound', 'language': 'French', 'sites': [{ 'siteName': 'Relia Yokohama', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }] })
detailsLIst.push({ 'alertId': '07042020-1006', 'level': '4', 'assignedTo': 'NIcholas Cook', 'ivrEnabled': 'No', 'bridgeActive': 'Yes', 'startTime': '2020-07-07', 'upgradeTime': '2020-07-10', 'endTime': '2020-07-15', 'triggerCriteria': '[LongesQueueTime]>=15', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'Windows', 'queueDetails': 'Surface consumer Tech Support', 'region': 'NA', 'modality': 'Phone Inbound', 'language': 'English', 'sites': [{ 'siteName': 'CNX kuala Lumpur', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }, { 'siteName': 'Avanade Taguig', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }] })
detailsLIst.push({ 'alertId': '07042020-1007', 'level': '1', 'assignedTo': 'New', 'ivrEnabled': 'Yes', 'bridgeActive': 'No', 'startTime': '2020-07-07', 'upgradeTime': '2020-07-10', 'endTime': '2020-07-15', 'triggerCriteria': '[CallsINQueue]>=50', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'Xbox', 'queueDetails': 'UR Office', 'region': 'Japan', 'modality': 'Phone Inbound', 'language': 'Spanish', 'sites': [{ 'siteName': 'Avanade Taguig', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }, { 'siteName': 'NTC tokyo', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }] })

const detailsLog = []
detailsLog.push({ 'alertId': '07042020-1002', 'Logs': ['07-27-2020 10:23 AM PST | System | Level 2 Alert Identified', '07-27-2020 10:24 AM PST | Nicholas Cook | Assigned to Nicholas Cook.', '07-27-2020 10:24 AM PST | Nicholas Cook | IVR Enabled', '07-27-2020 10:25 AM PST | Nicholas Cook | Custom Log Entry.'] })
detailsLog.push({ 'alertId': '07042020-1003', 'Logs': ['07-27-2020 10:23 AM PST | System | Level 1 Alert Identified', '07-28-2020 11:03 AM PST | Nicholas Cook | Assigned to Admin.', '07-27-2020 10:24 AM PST | Nicholas Cook |all sites notified', '07-27-2020 10:25 AM PST | Nicholas Cook | Custom Log Entry.'] })
detailsLog.push({ 'alertId': '07042020-1004', 'Logs': ['07-27-2020 10:23 AM PST | System | Level 3 Alert Identified', '07-28-2020 03:15 AM PST | Nicholas Cook | Assigned to Nicholas Cook.', '07-27-2020 10:24 AM PST | Nicholas Cook | IVR Enabled and all sites notified', '07-27-2020 10:25 AM PST | Nicholas Cook | Custom Log Entry.'] })
detailsLog.push({ 'alertId': '07042020-1005', 'Logs': ['07-27-2020 10:23 AM PST | System | Level 3 Alert Identified', '07-27-2020 09:56 AM PST | Nicholas Cook | Assigned to Admin.'] })
detailsLog.push({ 'alertId': '07042020-1006', 'Logs': ['07-27-2020 10:23 AM PST | System | Level 4 Alert Identified', '07-27-2020 23:24 AM PST | Nicholas Cook | Assigned to Nicholas Cook.', '07-27-2020 10:24 AM PST | Nicholas Cook | IVR Enabled ', '07-27-2020 10:25 AM PST | Nicholas Cook | Custom Log Entry.'] })
detailsLog.push({ 'alertId': '07042020-1007', 'Logs': ['07-27-2020 10:23 AM PST | System | Level 2 Alert Identified', '07-27-2020 20:46 AM PST | Nicholas Cook | Assigned to Nicholas Cook.'] })
// for (let i = 0; i < count; i++) {

const detailsSite = []
detailsSite.push({ 'alertId': '07042020-1003', 'siteattr': { 'sitePhone': '(023) 266-1488', 'distributionList': 'XXXXXXXX@vendor.com, YYYYYYYY@vendor.org, ZZZZZZZZZ@vendor.com', 'primarySDM': 'Name | Phone | Email', 'SecondarySDM': 'Name | Phone | Email' }, 'siteRequest': { 'status': 'Not Sent', 'lastContactTime': 'N/A', 'timeElapsed': 'N/A' }, 'siteHour': { 'Monday': 'XX:XX AM to XX:XX PM', 'Tuesday': 'XX:XX AM to XX:XX PM', 'Wednesday': 'XX:XX AM to XX:XX PM', 'Thursday': 'XX:XX AM to XX:XX PM', 'Friday': 'XX:XX AM to XX:XX PM', 'Saturday': 'XX:XX AM to XX:XX PM', 'Sunday': 'XX:XX AM to XX:XX PM' }})
detailsSite.push({ 'alertId': '07042020-1004', 'siteattr': { 'sitePhone': '(023) 266-1488', 'distributionList': 'XXXXXXXX@vendor.com, YYYYYYYY@vendor.org, ZZZZZZZZZ@vendor.com', 'primarySDM': 'Name | Phone | Email', 'SecondarySDM': 'Name | Phone | Email' }, 'siteRequest': { 'status': 'Not Sent', 'lastContactTime': 'N/A', 'timeElapsed': 'N/A' }, 'siteHour': { 'Monday': 'XX:XX AM to XX:XX PM', 'Tuesday': 'XX:XX AM to XX:XX PM', 'Wednesday': 'XX:XX AM to XX:XX PM', 'Thursday': 'XX:XX AM to XX:XX PM', 'Friday': 'XX:XX AM to XX:XX PM', 'Saturday': 'XX:XX AM to XX:XX PM', 'Sunday': 'XX:XX AM to XX:XX PM' }})
detailsSite.push({ 'alertId': '07042020-1005', 'siteattr': { 'sitePhone': '(023) 266-1488', 'distributionList': 'XXXXXXXX@vendor.com, YYYYYYYY@vendor.org, ZZZZZZZZZ@vendor.com', 'primarySDM': 'Name | Phone | Email', 'SecondarySDM': 'Name | Phone | Email' }, 'siteRequest': { 'status': 'Not Sent', 'lastContactTime': 'N/A', 'timeElapsed': 'N/A' }, 'siteHour': { 'Monday': 'XX:XX AM to XX:XX PM', 'Tuesday': 'XX:XX AM to XX:XX PM', 'Wednesday': 'XX:XX AM to XX:XX PM', 'Thursday': 'XX:XX AM to XX:XX PM', 'Friday': 'XX:XX AM to XX:XX PM', 'Saturday': 'XX:XX AM to XX:XX PM', 'Sunday': 'XX:XX AM to XX:XX PM' }})
detailsSite.push({ 'alertId': '07042020-1006', 'siteattr': { 'sitePhone': '(023) 266-1488', 'distributionList': 'XXXXXXXX@vendor.com, YYYYYYYY@vendor.org, ZZZZZZZZZ@vendor.com', 'primarySDM': 'Name | Phone | Email', 'SecondarySDM': 'Name | Phone | Email' }, 'siteRequest': { 'status': 'Not Sent', 'lastContactTime': 'N/A', 'timeElapsed': 'N/A' }, 'siteHour': { 'Monday': 'XX:XX AM to XX:XX PM', 'Tuesday': 'XX:XX AM to XX:XX PM', 'Wednesday': 'XX:XX AM to XX:XX PM', 'Thursday': 'XX:XX AM to XX:XX PM', 'Friday': 'XX:XX AM to XX:XX PM', 'Saturday': 'XX:XX AM to XX:XX PM', 'Sunday': 'XX:XX AM to XX:XX PM' }})
detailsSite.push({ 'alertId': '07042020-1007', 'siteattr': { 'sitePhone': '(023) 266-1488', 'distributionList': 'XXXXXXXX@vendor.com, YYYYYYYY@vendor.org, ZZZZZZZZZ@vendor.com', 'primarySDM': 'Name | Phone | Email', 'SecondarySDM': 'Name | Phone | Email' }, 'siteRequest': { 'status': 'Not Sent', 'lastContactTime': 'N/A', 'timeElapsed': 'N/A' }, 'siteHour': { 'Monday': 'XX:XX AM to XX:XX PM', 'Tuesday': 'XX:XX AM to XX:XX PM', 'Wednesday': 'XX:XX AM to XX:XX PM', 'Thursday': 'XX:XX AM to XX:XX PM', 'Friday': 'XX:XX AM to XX:XX PM', 'Saturday': 'XX:XX AM to XX:XX PM', 'Sunday': 'XX:XX AM to XX:XX PM' }})

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
      const id = config.query
      console.log(id.id)
      return {
        code: 20000,
        data: 'alert'
      }
    }
  },
  {
    url: '/vue-element-admin/alerts/log',
    type: 'get',
    response: config => {
      const id = config.query
      console.log(id.id)
      // const id = this.$route.params && this.$route.params.alertId
      // console.log(id)

      const listlog = detailsLog.filter(item => item.alertId === id.id)[0]
      return {
        code: 20000,
        loglists: listlog
      }
    }
  },
  {
    url: '/vue-element-admin/alerts/saveLog',
    type: 'post',
    response: config => {
      const log = JSON.stringify(config.body)
      const userlog = JSON.parse(log)
      // console.log(userlog)
      // console.log(userlog.logsText)
      const alertid = userlog.alertId
      const currentEntry = detailsLog.filter(item => item.alertId === alertid)[0]
      var myDate = new Date()
      currentEntry.Logs.push(myDate.toLocaleString() + ' | ' + userlog.currentUser + ' | ' + userlog.logsText)
      // console.log(detailsLog.filter(item => item.alertId === alertid)[0])
      console.log(detailsLog)
      return {
        code: 20000,
        data: 'success'
      }
    }
  },
  {
    url: '/vue-element-admin/alerts/sendRequest',
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
