<template>
  <div class="app-container">
    <div class="search-container">
      <el-form ref="form" :model="searchForm" label-width="120px">
        <el-col :span="8">
          <el-form-item label="机构名称">
            <el-input v-model="searchForm.name" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="机构状态">
            <el-input v-model="searchForm.status" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Search</el-button>
            <el-button @click="onCancel">Clear</el-button>
            <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
          </el-form-item>
        </el-col>
    </el-form>
    </div>
    <div>
      <el-dialog title="新增机构" :visible.sync="dialogFormVisible">
        <el-form :model="addForm">
          <el-form-item label="机构名称" :label-width="formLabelWidth">
            <el-input v-model="addForm.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="国标地址省级代码" :label-width="formLabelWidth">
            <el-input v-model="addForm.provAddrCode" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="国标市级地址" :label-width="formLabelWidth">
            <el-input v-model="addForm.cityAddrCode" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="国标县级地址" :label-width="formLabelWidth">
            <el-input v-model="addForm.countyAddrCode" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="国标镇级地址" :label-width="formLabelWidth">
            <el-input v-model="addForm.townAddrCode" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户自定义门牌号等地址" :label-width="formLabelWidth">
            <el-input v-model="addForm.userDetailAddr" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="地址名全称" :label-width="formLabelWidth">
            <el-input v-model="addForm.fullAddr" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="机构法人" :label-width="formLabelWidth">
            <el-input v-model="addForm.legalPerson" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="机构联系电话" :label-width="formLabelWidth">
            <el-input v-model="addForm.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="类型" :label-width="formLabelWidth">
            <el-radio-group v-model="addForm.type">
              <el-radio label="1">控制器厂商</el-radio>
              <el-radio label="2">设备厂商</el-radio>
              <el-radio label="3">总经销商</el-radio>
              <el-radio label="4">经销商</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="机构帮助信息" :label-width="formLabelWidth">
            <el-input v-model="addForm.helpInfo" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="机构自我介绍" :label-width="formLabelWidth">
            <el-input v-model="addForm.aboutUs" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="机构企业资质" :label-width="formLabelWidth">
            <el-input v-model="addForm.qualifications" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addDept">确 定</el-button>
        </div>
      </el-dialog>
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
import { getQuantity, add } from '@/api/dept'
export default {
  data() {
    return {
      searchForm: {
        name:'',
        status:''
      },
      addForm: {
          name: '',
          provAddrCode: '',
          cityAddrCode: '',
          countyAddrCode: '',
          townAddrCode: '',
          userDetailAddr: '',
          fullAddr: '',
          legalPerson: '',
          phone: '',
          type: '',
          helpInfo: '',
          aboutUs: '',
          qualifications: ''
        },
        dialogFormVisible: false,
        formLabelWidth: '120px'
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
    },
    addDept(){
      add(this.addForm).then(() => {
            alert(111)
          }).catch(() => {
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

