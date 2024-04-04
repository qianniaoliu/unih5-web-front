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
            <el-button type="primary" @click="handleClickAdd">新增</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </div>
    <div>
      <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible">
        <el-form :model="addForm">
          <el-form-item label="机构名称" :label-width="formLabelWidth">
            <el-input v-model="addForm.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="国标地址省级代码" :label-width="formLabelWidth">
            <el-select
              v-model="addForm.provAddrCode"
              clearable
              placeholder="请选择"
              @change="provChange"
            >
              <el-option
                v-for="item in provAddrCodes"
                :key="item.provinceCode"
                :label="item.provinceName"
                :value="item.provinceCode"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="国标市级地址" :label-width="formLabelWidth">
            <el-select
              v-model="addForm.cityAddrCode"
              clearable
              placeholder="请选择"
              @change="cityChange"
            >
              <el-option
                v-for="item in cityAddrCodes"
                :key="item.cityCode"
                :label="item.cityName"
                :value="item.cityCode"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="国标县级地址" :label-width="formLabelWidth">
            <el-select
              v-model="addForm.countyAddrCode"
              clearable
              placeholder="请选择"
              @change="countyChange"
            >
              <el-option
                v-for="item in countyAddrCodes"
                :key="item.districtCode"
                :label="item.districtName"
                :value="item.districtCode"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="国标镇级地址" :label-width="formLabelWidth">
            <el-select
              v-model="addForm.townAddrCode"
              clearable
              placeholder="请选择"
            >
              <el-option
                v-for="item in townAddrCodes"
                :key="item.townCode"
                :label="item.townName"
                :value="item.townCode"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="用户自定义门牌号等地址"
            :label-width="formLabelWidth"
          >
            <el-input
              v-model="addForm.userDetailAddr"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="地址名全称" :label-width="formLabelWidth">
            <el-input v-model="addForm.fullAddr" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="机构法人" :label-width="formLabelWidth">
            <el-input
              v-model="addForm.legalPerson"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="机构联系电话" :label-width="formLabelWidth">
            <el-input v-model="addForm.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="类型" :label-width="formLabelWidth">
            <el-radio-group v-model="addForm.type">
              <el-radio label="控制器厂商">控制器厂商</el-radio>
              <el-radio label="设备厂商">设备厂商</el-radio>
              <el-radio label="总经销商">总经销商</el-radio>
              <el-radio label="经销商">经销商</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="机构帮助信息" :label-width="formLabelWidth">
            <el-input v-model="addForm.helpInfo" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="机构自我介绍" :label-width="formLabelWidth">
            <el-input v-model="addForm.aboutUs" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="机构企业资质" :label-width="formLabelWidth">
            <el-input
              v-model="addForm.qualifications"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addDept">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="table-container">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="name" label="机构名称" width="180" />
        <el-table-column prop="fullAddr" label="地址名全称" width="180" />
        <el-table-column prop="legalPerson" label="机构法人" width="180" />
        <el-table-column prop="phone" label="机构联系电话" width="180" />
        <el-table-column prop="type" label="机构类型" width="180" />
        <el-table-column prop="helpInfo" label="机构帮助信息" width="180" />
        <el-table-column prop="aboutUs" label="机构自我介绍" width="180" />
        <el-table-column
          prop="qualifications"
          label="机构企业资质"
          width="180"
        />
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
    <div class="pagination-container">
      <el-pagination
        :page-sizes="[10, 20, 50, 100]"
        :current-page.sync="currentPage2"
        :page-size="100"
        layout="sizes, prev, pager, next"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import {
  getQuantity,
  add,
  queryDeptPage,
  update,
  deleteData,
} from "@/api/dept";
import {
  queryProvinceAddr,
  queryCityAddr,
  queryDistrictAddr,
  queryTownAddr,
} from "@/api/address";
export default {
  data() {
    return {
      searchForm: {
        name: "",
        status: "",
      },
      addForm: {
        name: "",
        provAddrCode: "",
        cityAddrCode: "",
        countyAddrCode: "",
        townAddrCode: "",
        userDetailAddr: "",
        fullAddr: "",
        legalPerson: "",
        phone: "",
        type: "",
        helpInfo: "",
        aboutUs: "",
        qualifications: "",
        isUpdate: false,
      },
      dialogTitle: "新增加机构",
      dialogFormVisible: false,
      formLabelWidth: "130px",
      currentPage2: 2,
      tableData: [],
      total: 0,
      provAddrCodes: [],
      cityAddrCodes: [],
      countyAddrCodes: [],
      townAddrCodes: [],
    };
  },
  created() {
    this.queryProvAddr();
    this.queryTableData();
  },
  methods: {
    onSubmit() {
      this.$message("submit!");
      getQuantity({ username: "cereb" })
        .then(() => {
          alert(111);
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
    addDept() {
      if (this.addForm.isUpdate) {
        this.addForm.type= null
        update(this.addForm)
          .then(() => {
            this.$message({
              message: "编辑成功",
              type: "success",
            });
            this.dialogFormVisible = false;
            this.queryTableData();
          })
          .catch(() => {});
      } else {
        add(this.addForm)
          .then(() => {
            this.$message({
              message: "新增成功",
              type: "success",
            });
            this.dialogFormVisible = false;
            this.queryTableData();
          })
          .catch(() => {});
      }
    },
    queryProvAddr() {
      queryProvinceAddr()
        .then((res) => {
          console.log("query province address result", res);
          this.provAddrCodes = res.data;
        })
        .catch((err) => {
          console.log("failed to query province address", err);
        });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    queryTableData() {
      queryDeptPage({ pageNum: 1, pageSize: 10 })
        .then((res) => {
          console.log("success to query dept data", res);
          this.tableData = res.msg;
          this.total = res.total;
        })
        .catch((err) => {
          console.log("failed to query dept data", err);
        });
    },
    provChange(e) {
      queryCityAddr({ provinceCode: e })
        .then((res) => {
          this.cityAddrCodes = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    cityChange(e) {
      queryDistrictAddr({ cityCode: e }).then((res) => {
        this.countyAddrCodes = res.data;
      });
    },
    countyChange(e) {
      queryTownAddr({ districtCode: e }).then((res) => {
        this.townAddrCodes = res.data;
      });
    },
    handleClickAdd() {
      this.addForm = {};
      this.dialogTitle = "新增机构";
      this.addForm.isUpdate = false;
      this.dialogFormVisible = true;
    },
    handleClickUpdate(obj) {
      this.dialogTitle = "编辑机构";
      this.addForm = obj;
      this.addForm.isUpdate = true;
      this.dialogFormVisible = true;
      console.log(obj);
    },
    handleClickDelete(obj) {
      deleteData({ name: obj.name }).then((res) => {
        this.$message({
              message: '删除成功',
              type: 'success'
            });
      })
    },
  },
};
</script>

<style scoped>
.line {
  text-align: center;
}
.pagination-container {
  text-align: right;
}
</style>
