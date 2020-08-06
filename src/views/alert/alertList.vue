<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :header-cell-style="{background:'#A5C2E6',color:'#606266'}"
      :data="list"
      fit
      stripe
      style="width: 100%;"
    >
      <el-table-column :label="$t('table.alertId')" prop="alertId" align="center" min-width="15%">
        <template slot-scope="{row}">
          <router-link :to="'/alert/detail/'+row.alertId" class="link-type">
            <span>{{ row.alertId }}</span>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.level')" min-width="10%" align="center">
        <template slot-scope="{row}">
          <span>{{ row.level }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.duration')" min-width="10%" align="center">
        <template slot-scope="{row}">
          <span>{{ row.duration }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.status')" min-width="10%">
        <template slot-scope="{row}">
          <span>{{ row.status }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.assignedTo')" align="center" min-width="13%">
        <template slot-scope="{row}">
          <span>{{ row.assignedTo }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.inquiryRequests')" class-name="status-col" min-width="12%">
        <template slot-scope="{row}">
          <span>{{ row.inquiryRequests }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.ivrEnabled')" align="center" min-width="15%" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <span>{{ row.ivrEnabled }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.bridgeActive')" align="center" min-width="15%" class-name="small-padding fixed-width">
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
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

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
        limit: 20
      },
      temp: {
        startTime: undefined,
        assginedTo: 1,
        upgradeTime: '',
        ivrStatus: new Date(),
        endTime: '',
        bridgeStatus: '',
        status: 'published'
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 0) {
        return 'table_header'
      }
      return ''
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleUpdate(row) {

    },
    formatJson(filterVal) {
      return this.list.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>
<style>
.app-container{
  padding: 2px;
}
</style>
