<template>
  <div class="page-view">
    <div class="backgroundImg">
      <img src="/static/index/首页_02.png" alt height="100%" width="100%" />
    </div>
    <HeadTop textColor="#fff"></HeadTop>
    <!-- <div class="scrollContainer cover">
    </div> -->
    <div class="row-view padding-border cover">
      <div class="left-view">
        <div id='time-view'>
          <div class="big-font">
            乙亥年 七月初十
          </div>
          <div class="big-font">
            2019.9.10 11:35
          </div>
        </div>
        <div id='lable-view' class="big-top-margin">
          <div class="sm-font">
            来源：刘方磊工作室
            <div class="sep-line sm-top-margin">
            </div>
          </div>
          <div class="sm-font sm-top-margin">
            标签：理念 | 文章
            <div class="sep-line sm-top-margin">
            </div>
          </div>
          <div class="sm-top-margin">
            A B
          </div>
        </div>
        <div id='related-view' class="big-top-margin">
          <div class="sm-font-black">
            相关链接
          </div>
          <div class="ssm-font-blue ssm-top-margin">
            为了梦圆安居，创造幸福生活——习近平总书记牵挂的民生事
          </div>
          <div class="ssm-font-blue ssm-top-margin">
            为了梦圆安居，创造幸福生活——习近平总书记牵挂的民生事
          </div>
        </div>
      </div>
      <div class="main-view big-left-margin">
        <div class="title-font">
          论汉唐飞扬的前世今生
        </div>
        <div style="width:594px;height:305px; background-color: #42B983;" class="big-top-margin">
          <img src="/static/main/美学理念.png" alt="" width="100%" height="100%">
        </div>
        <div class="sm-font-black sm-top-margin content-font">
          <div class="big-top-margin">
            “一带一路”,中国与世界各国共同绘制的一幅恢宏画卷正徐徐展开——
          </div>
          <div class="big-top-margin">
            国家主席习近平首次提出“丝绸之路经济带”是在2013年9月访问哈萨克斯坦时的演讲中,他指出,横贯东西、连接欧亚的丝绸之路,完全可以成为不同种族、不同信仰、不同文化背景的国家共享和平、共同发展的新的丝绸之路。
            时隔一个月后,他又在访问印度尼西亚时提出了共同建设“21世纪海上丝绸之路”。
          </div>
          <div class="big-top-margin">
                   推进“丝绸之路经济带”和“21世纪海上丝绸之路”建设,是习近平主席统筹国内国际两个大局,顺应地区和全球合作潮流,契合沿线国家和地区发展需要,立足当前、着眼长远提出的重大倡议和构想。
          </div>
          <div class="big-top-margin">
            “‘一带一路’追求的是百花齐放的大利,不是一枝独秀的小利。”习近平主席在今年首访中东期间在当地媒体发表署名文章说。在一系列实际举措中,一个个合作
            项目开花结果,叠加起丰富的丝路“风光”,在时光的度量尺上,镌刻下“一带一路”建设全面推进的坚实步伐。
          </div>
          <div class="big-top-margin">
            2016年既是中国“十三五”规划开局之年,也是中国与沿线国家全力推进“一带一路”建设的年份。时间将进一步认证:“一带一路”成为沿线国家和地区的协奏曲,在内外联动、海陆统筹的对外开放新布局中,使古老的“丝绸之路”延伸成为现代版“国际大合唱”。
          </div>
        </div>
      </div>
    </div>
    <div >
      <el-backtop  :bottom="100" :visibility-height="100">
        <div
          style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
        >UP</div>
      </el-backtop>
    </div>
  </div>
</template>

<script>
  import HeadTop from '@/components/HeadTop'

  export default {
    name: 'ArticleDetail',
    components: {
      HeadTop,
    },
    beforeMount() {
      window.scrollTo(0, 0);
    }
  }
</script>

<style lang="less" scoped>
  @import "../appStyle";

  .row-view {
    z-index: 300;
    display: flex;
    flex-direction: row;
  }

  .padding-border {
    box-sizing: border-box;
    padding: 80px 120px;
  }

  .page-view {
    width: 100%;
    height: 100%;
  }

  .left-view {
    width: 150px;
  }


  .big-top-margin {
    margin-top: 40px;
  }

  .sm-top-margin {
    margin-top: 20px;
  }

  .sep-line {
    width: 150px;
    height: 1px;
    background-color: #979797;
  }

  .scrollContainer {
    position: absolute;
    width: 1440px;
    height: 840px;
    top: 102px;
    box-sizing: border-box;
    padding: 80px 120px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  .big-left-margin {
    margin-left: 150px;
  }

  .big-font {
    font-size: 20px;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    color: rgba(102, 102, 102, 1);
    line-height: 28px;
  }

  .content-font {
    font-size: 16px;
    font-family: STSongti-SC-Bold;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    line-height: 28px;
    letter-spacing: 1px;
  }

  .sm-font {
    font-size: 16px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 24px;
  }

  .main-view {
    width: 594px;
  }

  .sm-font-black {
    font-size: 16px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
    line-height: 24px;
  }

  .ssm-top-margin {
    margin-top: 7px;
  }

  .ssm-font-blue {
    font-size: 12px;
    font-family: STSongti-SC-Regular;
    font-weight: 400;
    color: rgba(0, 46, 205, 1);
    line-height: 16px;
  }

  .title-font {
    font-size: 30px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 42px;
  }
</style>
