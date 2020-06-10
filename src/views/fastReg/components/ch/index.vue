<template>
  <div>中药页面
    <el-form ref="form" :model="person" label-width="80px">
      <CInput label="主诉" v-model="person.recount" type="textarea" autosize placeholder="主诉必填" />
      <CInput label="现病史" v-model="person.disease" type="textarea" autosize placeholder="现病史必填" />
    </el-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
    CInput: () => import('@/components/c-input')
  },
  computed: {
    ...mapState({
      person: ({ prescribInfo: { person } }) => person
    })
  }
}
</script>

<style>
</style>
