<template>
  <div>
    <div style="margin-bottom: 10px;">
      <el-button size="small" @click="addTab('中药开方', 'Ch')">中药开方</el-button>
    </div>
    <el-tabs v-model="activeTabNum" type="card" @tab-remove="removeTab">
      <el-tab-pane
        v-for="(item, index) in tabList"
        :key="item.name"
        :label="item.title"
        :name="item.name"
        :closable="index > 1"
        lazy
      >
        <component :is="item.content"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  components: {
    Record: () => import('./components/record'),
    West: () => import('./components/west'),
    Ch: () => import('./components/ch'),
    History: () => import('./components/history')
  },
  data() {
    return {
      activeTabNum: '2', // 当前活动 tab 序号
      tabList: [
        {
          title: '历史记录',
          name: '1',
          content: 'History'
        },
        {
          title: '门诊病例',
          name: '2',
          content: 'Record'
        }
      ],
      tabIndex: 2 // tab 的数量
    }
  },
  methods: {
    /**
     * 新增tab
     * @param {String} tabName tab名字
     * @param {String} compName 对应加载的组件名字
     */
    addTab(tabName, compName) {
      let newTabName = ++this.tabIndex + ''
      this.tabList.push({
        title: tabName,
        name: newTabName,
        content: compName
      })
      this.activeTabNum = newTabName
    },
    /**
     * 关闭tab
     * @param {String} tabName tab
     */
    removeTab(tabName) {
      let tabs = this.tabList
      let activeName = this.activeTabNum
      // 当删除的是当前选择项 tab
      if (activeName === tabName) {
        this.activeTabNum = tabs[tabs.length - 2].name
      }
      this.tabIndex--
      this.tabList = tabs.filter(tab => tab.name !== tabName)
    }
  },
  computed: {}
}
</script>

<style>
</style>
