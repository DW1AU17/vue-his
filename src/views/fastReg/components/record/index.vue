<template>
  <div>
    <el-form ref="form" :model="person" label-width="80px">
      <CInput label="主诉" v-model="person.recount" type="textarea" autosize placeholder="主诉必填" />
      <CInput label="现病史" v-model="person.disease" type="textarea" autosize placeholder="现病史必填" />
      <CInput label="体格检查" v-model="person.physical" placeholder="请输入体格检查" />
    </el-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
    CInput: () => import('@/components/c-input')
  },
  data() {
    return {
      
    }
  },
  created() {},
  methods: {},
  computed: {
    ...mapState({
      person: state => state.prescribInfo.person
    })
  }
}
</script>

<style scoped lang="scss">

</style>
