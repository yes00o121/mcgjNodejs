<!-- 中间放置动态数据 -->
<template>
  <div class= "body-center-width">
      <ul v-for="data in datas" class="body-cneter-alignment-ul">
          <li class="body-cneter-alignment-li">
          <router-link :to="{path:'/conversationChild',query : {conversationId:data.id}}">
            {{data.conversationName}}吧
          </router-link>
          </li></br>
          <li class="body-cneter-alignment-li">
            <!-- 页面跳转,参数为帖子的id -->
            <router-link :to="{path:'/conversationChildChild',query : {id:data.childId}}">
              <a href="#">{{data.title}}</a>
            </router-link><el-tag class="body-cneter-tag" size="mini" type="success" >11</el-tag></li></br>
          <li v-bind:id="'post_content_home_'+data.id" class="body-cneter-content">
              <!-- 内容为追加显示 -->
          </li></br>
          <li class="body-cneter-font-size">{{data.userName}}<i class="el-icon-time body-cneter-spacing"></i>
          <span class="body-cneter-font-size">{{handlerDate(data.lastTime)}}</span></li>
      </ul>
  </div>
</template>
<script>
import baseConfig from '../../../config/baseConfig'//获取配置
export default {
  data(){
    return {
        newestUrl : baseConfig.localhost+'/conversation/selectNewestConversation',//最新数据
        datas:[]//最新动态数据源
    };
  },
  mounted : function(){
    this.findNewestConversation();//初始化时获取最新帖子动态数据源
  },
  updated(){
      console.log(this.datas)
      return;
      console.log(this.datas)
      for(var i=0;i<this.datas.length;i++){
          //console.log($('post_content_home_'+this.datas[i].id))
          console.log(document.getElementById('post_content_home_'+this.datas[i].id))
          console.log('post_content_home_'+this.datas[i].id)
          $('#post_content_home_'+this.datas[i].id).append(this.datas[i].content);
      }
  },
  methods : {
      findNewestConversation : function(){//获取最新的动态数据源
          var _this = this;
          $.ajax({
              url : _this.newestUrl,
              type : 'post',
              success(result){
                if(result.success){
                    _this.datas = result.result;
                }else{
                  throw "获取动态数据失败";
                }
              }
          })
      },
      jump(){
          this.$router.push({
              path : '/conversationChildChild'
          })
      }
  }
}
</script>
<style>
.body-center-width {
  border : 1px solid #DCDCDC;
  margin-top : 10px;
  display:inline;
  float : left;
  width : 67%;
  margin-left : 14px;
  font-family : Microsoft YaHei;
}
.body-cneter-alignment-ul{
  text-align:left;
  margin:20px 20px 20px 20px;
}
.body-cneter-alignment-li{
  text-align:left;
  margin-top:5px;
  width: 245px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.body-cneter-tag{
  margin-left:10px;
}
.body-cneter-content{
  margin-bottom:10px;
  width: 95%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size:14px;
}
.body-cneter-spacing{
  margin-left:10px;
}
.body-cneter-font-size{
  font-size:14px;
}
</style>
