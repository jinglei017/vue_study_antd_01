<template>
  <div>
    <div style="padding: 20px 0">
      <a-button type="primary" @click="visible = true" icon="plus"
        >新增员工</a-button
      >
      <a-modal v-model="visible" title="新增员工" @ok="handleOk">
        <a-form :form="form">
          <a-form-item v-bind="formItemLayout" label="姓名">
            <a-input
              v-decorator="[
                'name',
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入姓名！',
                    },
                  ],
                },
              ]"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="年龄">
            <a-input
              v-decorator="[
                'age',
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入年龄！',
                    },
                  ],
                },
              ]"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="地址">
            <a-radio-group
              v-decorator="[
                'address',
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入年龄！',
                    },
                  ],
                  initialValue: '0',
                },
              ]"
              button-style="solid"
            >
              <a-radio-button value="0"> Hangzhou </a-radio-button>
              <a-radio-button value="1"> Shanghai </a-radio-button>
            </a-radio-group>
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
    <a-table
      rowKey="id"
      :pagination="false"
      :columns="columns"
      :data-source="data"
    >
      <span slot="action" slot-scope="id">
        <a>详情</a>
        <a-divider type="vertical" />
        <a @click="del(id)">删除</a>
      </span>
      <span slot="address" slot-scope="address">
        {{address | fmtEmployeeAddress}}
      </span>
      <span slot="createtime" slot-scope="createtime">
        {{createtime | fmtTime}}
      </span>
    </a-table>
    <ConterContainer>
      <a-pagination v-model="current" :total="count" show-less-items />
    </ConterContainer>
  </div>
</template>
<script>
import { getUserList, delItem, addUser } from "@/api/user";
const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "地址",
    dataIndex: "address",
    key: "address",
    scopedSlots: { customRender: "address" },
  },
  {
    title: "创建时间",
    dataIndex: "createtime",
    key: "createtime",
    scopedSlots: { customRender: "createtime" },
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
export default {
  data() {
    return {
      visible: false,
      data: [],
      formItemLayout,
      count: 0,
      columns,
      current: 1,
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "register" });
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      let res = await getUserList();
      this.data = res.data.userlist;
      this.count = res.data.count;
    },
    del(id) {
      this.$mc("删除后将无法恢复，确定删除？", async () => {
        let res = await delItem(id);
        if (res.data.success) {
          this.$ms("删除成功");
          this.getList();
        } else {
          this.$me("删除失败");
        }
      });
    },
    handleOk() {
      this.form.validateFields(async (err, values) => {
        if (!err) {
          let res = await addUser(values);
          if (res.data.success) {
            this.getList();
            this.$ms("添加成功！");
            this.visible = false;
          }else{
            this.$me("添加失败！");
          }
        }
      });
    },
  },
};
</script>
<style scoped>
.ant-pagination {
  padding: 16px 0;
}
</style>

