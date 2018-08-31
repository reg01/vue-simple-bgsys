<template>
  <div>
    <mytable :data="tableData" :col-configs="colConfigs" id="form1">
      <!-- slot="opt" 不能省略，需要与下面配置项中的对应 -->
      <el-table-column label="操作" fixed="right" slot="opt" width="180">
        <template slot-scope="row" id="follow">
          <el-button size="small" @click="editVisiable">编辑</el-button>
          <el-button size="small" type="danger" @click="delVisiable=true">删除</el-button>
        </template>
      </el-table-column>
    </mytable>
  </div>
</template>

<script>
  import mytable from "@/components/MyTable.vue";
  export default {
    components: {
      mytable
    },
    data() {
      return {
        editVisiable: false,
        delVisiable: false,
        tableData: [{
            date: '2018-08-29',
            name: '阿狗',
            id: 996,
            jb: 50,
            fans: '阿猫',
          },
          {
            date: '2018-08-30',
            name: '阿猫',
            id: 1123,
            jb: 0,
            fans: '',
          }
        ],
        colConfigs: [{
            prop: 'date',
            label: '创建日期',
            width: 200
          },
          {
            prop: 'name',
            label: '用户',
            width: 120
          },
          {
            prop: 'id',
            label: '会员id',
            width: 120
          },
          {
            prop: 'jb',
            label: '金币',
            width: 120
          },
          {
            prop: 'fans',
            label: '一级粉丝',
            width: 120
          },
          // 模版中的元素需要对应的有 slot="opt" 属性
          {
            slot: 'opt'
          }
        ]
      }
    }
  }
</script>


<style>

</style>

