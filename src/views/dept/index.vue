<template>
  <div class="app-container">
    <div class="search-container">
      <el-form ref="form" :model="form" label-width="120px">
        <el-col :span="8">
          <el-form-item label="机构名称">
            <el-input v-model="form.name" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="机构状态">
            <el-input v-model="form.name" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Search</el-button>
            <el-button @click="onCancel">Clear</el-button>
          </el-form-item>
        </el-col>
    </el-form>
    </div>
    <div class="table-container">
      <el-table
      :data="tableData"
      border
      style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getQuantity } from '@/api/dept'
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
      getQuantity({'username':'cereb'}).then(() => {
            alert(111)
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

