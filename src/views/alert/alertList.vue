<template>
  <div class="app-container">
    <div class="filter-container">
      <el-select v-model="listQuery.level" :placeholder="$t('table.level')" clearable style="width: 100px" class="filter-item" multiple>
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
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
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
      <el-table-column :label="$t('table.level')" prop="level" sortable min-width="9%" align="center">
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
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { mapState } from 'vuex'

export default {
  name: 'AlertList',
  components: { Pagination },
  directives: { waves },
  data() {
    return {
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
      statusOptions: ['New', 'Active', 'Resolved']
      // alertCount: mapState.alertsCount
    }
  },
  computed: {
    ...mapState({
      alertCount: state => state.app.alertsCount
    })
  },
  created() {
    this.GetAlertList()
  },
  methods: {
    GetAlertList() {
      window.setInterval(this.getList(), 6000 * 5)
    },
    getList() {
      this.listLoading = true
      fetchList().then(response => {
        // console.log(response)
        // console.log(response.data.length)
        // console.log(response.data)
        this.list = response.data
        this.total = response.data.length
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 100)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
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
      this.handleFilter()
    },
    getSortClass(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
    },
    activeColor(row) {
      if (row.status === 'New') {
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
