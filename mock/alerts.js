const Mock = require('mockjs')

const List = []
const count = 50

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    alertId: '@guid',
    level: '@integer(1, 5)',
    duration: '@DATETIME("HH:mm:ss")',
    'status|1': ['New', 'Active', 'Resolved'],
    'assignedTo|1': ['New', 'Nicholas Cook'],
    'inquiryRequests|1': ['0/2', '0/3', 'N/A', '4/4'],
    'ivrEnabled|1': ['True', 'False'],
    'bridgeActive|1': ['True', 'False']
  }))
}
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
  }
]
