<template>
  <div>
    <div style="margin-bottom: 10px;">
      <el-button size="small" @click="addTab(editableTabsValue)">add tab</el-button>
    </div>
    <el-tabs v-model="editableTabsValue" type="card" @tab-remove="removeTab">
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
        :closable="item.name > 2"
      >{{item.content}}</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editableTabsValue: "1",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "record"
        },
        {
          title: "Tab 2",
          name: "2",
          content: "history"
        }
      ],
      tabIndex: 2
    };
  },
  methods: {
    addTab(targetName) {
      console.log(targetName)
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content"
      });
      this.editableTabsValue = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    }
  }
};
</script>

<style>
</style>
