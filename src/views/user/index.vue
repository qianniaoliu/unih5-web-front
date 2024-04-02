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
            <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
          </el-form-item>
        </el-col>
    </el-form>
    </div>
    <div>
      <el-dialog title="新增用户" :visible.sync="dialogFormVisible">
        <el-form :model="addForm">
          <el-form-item label="机构名称" :label-width="formLabelWidth">
            <el-input v-model="addForm.deptName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="addForm.userName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="addForm.pwWord" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="是否Leader" :label-width="formLabelWidth">
            <el-radio-group v-model="addForm.isLeader">
              <el-radio label="1">是</el-radio>
              <el-radio label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="中文名" :label-width="formLabelWidth">
            <el-input v-model="addForm.nickName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱地址" :label-width="formLabelWidth">
            <el-input v-model="addForm.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号" :label-width="formLabelWidth">
            <el-input v-model="addForm.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
            <el-radio-group v-model="addForm.sex">
              <el-radio label="1">男</el-radio>
              <el-radio label="2">女</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addUser">确 定</el-button>
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
import { addUser } from '@/api/user'
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
        desc: '',
      },
      addForm: {
          deptName: '',
          userName: '',
          pwWord: '',
          isLeader: '',
          nickName: '',
          email: '',
          phone: '',
          sex: ''
        },
        dialogFormVisible: false,
        formLabelWidth: '120px'
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
      addUser({'username':'cereb'}).then(() => {
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
    addUser(){
      addUser(this.addForm).then(() => {
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

