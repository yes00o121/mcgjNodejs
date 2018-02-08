//贴子组建
<template>
<div class="post-core">
  <div v-if="isPost">
      <el-table
      :data="datas"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="标题"
        width="500">
        <template slot-scope="scope">
            <router-link style="color:#2d64b3;text-decoration:none;" :to="{path:'/conversationChildChild',query : {id:scope.row.id}}" target="_blank">
              {{scope.row.title}}
            </router-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="createDate"
        label="发布时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="replyNumber"
        label="回复">
      </el-table-column>
      <el-table-column
        prop="flow"
        label="点击">
      </el-table-column>
    </el-table>
  </div>
  <div v-else="isPost">
    没有创建的帖子数据
  </div>
</div>
</template>
<script>
import baseConfig from '../../../../config/baseConfig'
export default {
    data(){
        return {
            isPost : true,//默认用户没有创建过贴子
            datas : [],
            url : baseConfig.localhost + '/conversationChild/selectUserPublishConversationChild'
        }
    },
    mounted(){
      this.init();
    },
    methods:{
        init(){//初始化方法
            this.selectUserPublishConversationChild();
        },
        selectUserPublishConversationChild(){//查询用户所发表的所有帖子数据
            $.ajax({
                url : this.url,
                data : {
                    userId : this.getUser().id,
                    token : this.getToken()
                },
                success : (result)=>{
                    if(result.success){
                        //时间进行转换
                        for(let i=0;i<result.result.length;i++){
                            let date = new Date(result.result[i].createDate);
                            result.result[i].createDate = date.getYear()+1900 +"-"+(date.getMonth()+1) + "-" + date.getDate()
                            //result.result[i].createDate = this.handlerDate(result.result[i].createDate)
                        }
                        this.datas = result.result;
                    }else{
                        this.$alert(result.message,'提示')
                    }
                },
                error : ()=>{
                  throw "查询失败"
                }
            })
        }
    }
}
</script>
<style>
.post-core{

}
</style>
