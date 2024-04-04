<template>
  <div class="app-container">
    <div class="search-container">
      <el-form ref="form" :model="form" label-width="120px">
        <el-col :span="8">
          <el-form-item label="设备名称">
            <el-input v-model="form.name" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Search</el-button>
            <el-button @click="onCancel">Clear</el-button>
            <el-button type="primary" @click="handleClickDeviceStorage">设备入库</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </div>
    <div>
      <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible">
        <el-form :model="addForm">
          <el-form-item label="设备数量" :label-width="formLabelWidth">
            <el-input v-model="addForm.count" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="设备" :label-width="formLabelWidth">
            <el-radio-group v-model="addForm.device">
              <el-radio label="智能灶">智能灶</el-radio>
              <el-radio label="智能锅炉">智能锅炉</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="设备类型" :label-width="formLabelWidth">
            <el-radio-group v-model="addForm.type">
              <el-radio label="true">是</el-radio>
              <el-radio label="false">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="批次" :label-width="formLabelWidth">
            <el-input v-model="addForm.batch" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="描述" :label-width="formLabelWidth">
            <el-input v-model="addForm.description" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addUser">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="table-container">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="userName" label="用户名" width="180">
        </el-table-column>
        <el-table-column
          prop="isLeader"
          label="是否leader"
          width="180"
          :formatter="leaderFormatter"
        >
        </el-table-column>
        <el-table-column prop="nickName" label="真实名称"> </el-table-column>
        <el-table-column prop="email" label="邮箱"> </el-table-column>
        <el-table-column prop="phone" label="电话"> </el-table-column>
        <el-table-column prop="sex" label="性别"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button
              @click="handleClickUpdate(scope.row)"
              type="text"
              size="small"
              >编辑</el-button
            >
            <el-button
              type="text"
              @click="handleClickDelete(scope.row)"
              size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { addUser, updateUser, deleteUser, queryUserPage } from "@/api/user";
import { queryDeptLists } from "@/api/dept";
export default {
  data() {
    return {
      form: {
        name: "",
      },
      addForm: {
        deptName: "",
        userName: "",
        pwWord: "",
        isLeader: "",
        nickName: "",
        email: "",
        phone: "",
        sex: "",
        isUpdate: false,
      },
      tableData: [],
      dialogFormVisible: false,
      formLabelWidth: "120px",
      depts: [],
      dialogTitle: "",
    };
  },
  created() {
    this.queryDepts();
    this.onSubmit();
  },
  methods: {
    onSubmit() {
      queryUserPage({ pageNum: 1, pageSize: 10 })
        .then((res) => {
          this.tableData = res.msg;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    onCancel() {
      this.$message({
        message: "cancel!",
        type: "warning",
      });
    },
    addUser() {
      this.addForm.deptName = "测试机构2";
      if (this.addForm.isUpdate) {
        updateUser(this.addForm).then(res => {
          this.dialogFormVisible = false;
            this.$message({
              message: "编辑成功",
              type: "success",
            });
            this.onSubmit();
        })
      } else {
        addUser(this.addForm)
          .then(() => {
            this.dialogFormVisible = false;
            this.$message({
              message: "新增成功",
              type: "success",
            });
            this.onSubmit();
          })
          .catch(() => {});
      }
    },
    queryDepts() {
      queryDeptLists().then((res) => {
        console.log(res);
      });
    },
    handleClickUpdate(obj) {
      this.dialogTitle = "编辑用户";
      this.dialogFormVisible = true;
      this.addForm = obj;
      this.addForm.isUpdate = true;
    },
    handleClickDelete(obj) {
      deleteUser([{ userName: obj.userName }])
        .then((res) => {
          this.$message({
            message: "删除成功",
            type: "success",
          });
          this.onSubmit();
        })
        .catch((err) => {
          this.$message({
            message: "删除失败",
            type: "error",
          });
        });
    },
    handleClickDeviceStorage() {
      this.dialogTitle = "设备入库";
      this.dialogFormVisible = true;
      this.addForm = {};
      this.addForm.isUpdate = false;
    },
    leaderFormatter(row, column, cellValue) {
      return cellValue ? "是" : "否";
    },
  },
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>
