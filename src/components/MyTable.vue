// my-table.vue
<template>
  <div>
    <el-table :data="data" border fit highlight-current-row>
      <template v-for="colConfig in colConfigs">
        <slot v-if="colConfig.slot" :name="colConfig.slot"></slot>
        <el-table-column v-bind="colConfig" :key="colConfig.id"></el-table-column>
  </template>
        <el-table-column :formatter="formatter"></el-table-column>
  </el-table>
  </div>
</template>

<script>
  export default {
    props: ["colConfigs", "data"],
    data() {
      return {};
    },
    methods: {
      // 切换页码
      pageChange(val) {
        this.pagination = pagination;
      },
      formatter(val){
        return ''
      }
    }
  };
</script>

<style scoped>

</style>

