<template>
  <div class="app-container">
    <div class="filter-container">
      <el-select v-model="listQuery.level" :placeholder="$t('table.priority')" clearable style="width: 100px" class="filter-item" multiple>
        <el-option v-for="item in levelOptions" :key="item" :label="item" :value="item" />
      </el-select>
      <el-select v-model="listQuery.status" :placeholder="$t('table.status')" clearable style="width：80px" class="filter-item" multiple>
        <el-option v-for="item in statusOptions" :key="item" :label="item" :value="item" />
      </el-select>
      <el-select v-model="listQuery.assignedTo" :placeholder="$t('table.assignedTo')" clearable style="width：100px" class="filter-item" multiple>
        <el-option v-for="item in assignedToOptions" :key="item" :label="item" :value="item" />
      </el-select>
      <el-select v-model="listQuery.ivrEnabled" :placeholder="$t('table.ivrEnabled')" clearable style="width：60px" class="filter-item" multiple>
        <el-option v-for="item in truefalseOptions" :key="item" :label="item" :value="item" />
      </el-select>
      <el-select v-model="listQuery.bridgeActive" :placeholder="$t('table.bridgeActive')" clearable style="width：60px" class="filter-item" multiple>
        <el-option v-for="item in truefalseOptions" :key="item" :label="item" :value="item" />
      </el-select>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter(listQuery)">
        {{ $t('table.search') }}
      </el-button>
    </div>
    <el-table
      v-loading="listLoading"
      :header-cell-style="{background:'#A5C2E6',color:'#606266'}"
      :data="list"
      fit
      stripe
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <el-table-column :label="$t('table.alertId')" prop="alertId" sortable align="center" min-width="15%">
        <template slot-scope="{row}">
          <router-link :to="'/alert/detail/'+row.alertId" class="link-type">
            <span>{{ row.alertId }}</span>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.priority')" prop="level" sortable min-width="9%" align="center">
        <template slot-scope="{row}">
          <span>{{ row.level }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.duration')" prop="duration" sortable min-width="10%" align="center">
        <template slot-scope="{row}">
          <span>{{ row.duration }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.status')" prop="status" sortable min-width="9%">
        <template slot-scope="{row}">
          <span :style="{ 'color': activeColor(row)}">{{ row.status }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.assignedTo')" prop="assignedTo" sortable align="center" min-width="13%">
        <template slot-scope="{row}">
          <span>{{ row.assignedTo }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.inquiryRequests')" prop="inquiryRequests" class-name="status-col" sortable min-width="15%">
        <template slot-scope="{row}">
          <span>{{ row.inquiryRequests }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.ivrEnabled')" align="center" prop="ivrEnabled" sortable min-width="14%" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <span>{{ row.ivrEnabled }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.bridgeActive')" align="center" prop="bridgeActive" sortable min-width="15%" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <span>{{ row.bridgeActive }}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
import { fetchList } from '@/api/alerts'
import waves from '@/directive/waves'
import Pagination from '@/components/Pagination'

export default {
  name: 'AlertList',
  components: { Pagination },
  directives: { waves },
  props: ['alertId'],
  data() {
    return {
      pageList: null,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        sort: '+id',
        level: [],
        assignedTo: [],
        status: [],
        ivrEnabled: [],
        bridgeActive: []
      },
      levelOptions: [1, 2, 3, 4],
      truefalseOptions: ['Yes', 'No'],
      assignedToOptions: ['New', 'NIcholas Cook', 'Admin'],
      statusOptions: ['New', 'Active', 'Resolved', 'Upgraded'],
      alertsCount: 0
    }
  },
  created() {
    this.getList(this.listQuery)
    this.GetAlertList(this.listQuery)
  },
  methods: {
    GetAlertList(query) {
      window.setInterval(() => {
        setTimeout(() => { this.getList(query) }, 0)
      }, 60000 * 5)
    },
    getList(query) {
      this.listLoading = true
      fetchList().then(response => {
        this.listLoading = false
        this.pageList = response.data
        this.total = response.data.length
        this.list = this.handleFilter(query)
        // the first load, the alertsCount is 0, for cookies have no alertsCount record
        if (this.alertsCount === 0) {
          // update alertCount in right corner pannel
          this.$root.Bus.$emit('send', response.data.length)
          this.alertsCount = response.data.length
        } else if (response.data.length > this.alertsCount && this.alertsCount !== 0) {
          this.$root.Bus.$emit('send', response.data.length)
          this.alertsCount = response.data.length
          // send notificatioin
          this.$emit('pop', '07042020-1002')
        }
      })
    },
    handleFilter(query) {
      const { level, assignedTo, status, ivrEnabled, bridgeActive, page = 1, limit = 20, sort } = query
      let mockList = this.pageList.filter(item => {
        if (level.length > 0 && level.indexOf(item.level) < 0) {
          return false
        }
        if (assignedTo.length > 0 && assignedTo.indexOf(item.assignedTo) < 0) {
          return false
        }
        if (status.length > 0 && status.indexOf(item.status) < 0) {
          return false
        }
        if (ivrEnabled.length > 0 && ivrEnabled.indexOf(item.ivrEnabled) < 0) {
          return false
        }
        if (bridgeActive.length > 0 && bridgeActive.indexOf(item.bridgeActive) < 0) {
          return false
        }

        return true
      })
      if (sort === '-id') {
        mockList = mockList.reverse()
      }
      this.list = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
      return this.list
    },
    sortChange(data) {
      console.log(data)
      // const { prop, order } = data
      // if (prop === 'alertId') {
      //    this.sortByID(order)
      // }
    },
    sortByID(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter(order)
    },
    getSortClass(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
    },
    activeColor(row) {
      if (row.status === 'New' || row.status === 'Upgraded') {
        return 'red'
      } else if (row.status === 'Active') {
        return '#F0AD4E'
      } else if (row.status === 'Resolved') {
        return 'green'
      }
    }
  }
}
</script>
<style>
.app-container{
  padding: 2px;
  padding-top: 20px;
}
</style>
