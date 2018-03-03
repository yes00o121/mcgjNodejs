//主页组建
<template>
  <div class="home-core">
      <div v-if="isFollowConversation" >
          <div >
              <span v-for="data,index in datas" >
                <router-link :to="{path:'/conversationChild',query : {conversationId:data.conversationId,start:1}}" target="_blank">
                    <el-button  icon="el-icon-star-on" size="mini" type="primary" class="home-followButton" >
                      {{data.conversationName}}
                    </el-button>
                </router-link>
              </span>
          </div>
      </div>
      <div v-else = "isFollowConversation">
          <h1 class="home-noFollow">
            你还没有关注的贴吧哦
          </h1>
      </div>
  </div>
</template>
<script>
import baseConfig from '../../../../config/baseConfig'
export default {
    data(){
        return {
            isFollowConversation : false,//用户是否关注了贴吧,默认没有
            url : baseConfig.localhost + "/conversation/selectConversationFollow",//查询用户关注的贴吧
            datas : []//用户关注的贴吧数据
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
            this.selectFollow();
        },
        selectFollow(){//查询用户关注的贴吧
            $.ajax({
              url : this.url,
              data : {
                userId : this.getUser().id
              },
              success : (result)=>{
                  if(result.success){
                      console.log(result)
                      result = result.result;
                      if(result.length>0){//用户关注的贴吧大于0
                        this.datas = result;
                        this.isFollowConversation = true;//用户有关注的贴吧
                      }
                  }else{
                      this.$alert(result.message,'提示');
                  }
              },
              error : ()=>{
                  throw "查询失败";
              }
            })
        }
    }
}
</script>
<style>
.home-core{
  height :  300px;
}
.home-noFollow{
  text-align: center;
}
.home-followButton{
  margin-bottom:20px;
  margin-left:70px;
  width:100px;
  text-align: center;
  overflow: hidden;
  text-overflow:ellipsis;
}
</style>
