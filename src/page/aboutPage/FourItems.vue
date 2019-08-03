<template>
 <div class="aboutItem1">
          <div class="leftArrow">
            <img
              src="/static/works/left_arrow.jpg"
              width="28px"
              height="56px"
              v-if="!isFirst()"
              @click="prePic()"
            />
          </div>

          <div class="rightArrow">
            <img
              src="/static/works/right_arrow.jpg"
              width="28px"
              height="56px"
              v-if="!isLast()"
              @click="nextPic()"
            />
          </div>

          <div class="item">
            <div class="innerItem">
              <div class="topDown">
                <div class="lr_item">
                  <div class="pic">
                    <div class="innerPic">
                      <img src="/static/about/21.png" height="100%" width="100%" alt />
                    </div>
                  </div>
                  <div class="contentView">
                    <div class="title">北京香港马会会所</div>
                    <div class="subtitle">项目获奖</div>
                    <div class="descContent">◆ 2018年 北京市第十五届优秀工程设计三等奖</div>
                  </div>
                </div>
                <div class="lr_item">
                  <div class="pic">
                    <div class="innerPic">
                      <img src="/static/about/22.png" height="100%" width="100%" alt />
                    </div>
                  </div>
                  <div class="contentView">
                    <div class="title">淄博市齐盛国际大酒店 (淄博国宾馆)</div>
                    <div class="subtitle">项目获奖</div>
                    <div class="descContent">◆ 2013年 北京市第十七届优秀工程设计 三等奖</div>
                  </div>
                </div>
              </div>

              <div class="topDown">
                <div class="lr_item">
                  <div class="pic">
                    <div class="innerPic">
                      <img src="/static/about/23.png" height="100%" width="100%" alt />
                    </div>
                  </div>
                  <div class="contentView">
                    <div class="title">首都师范大学国际文化学院大厦</div>
                    <div class="subtitle">项目获奖</div>
                    <div class="descContent">◆ 2013年 北京市第十三届优秀工程设计三等奖</div>
                  </div>
                </div>
                <div class="lr_item">
                  <div class="pic">
                    <div class="innerPic">
                      <img src="/static/about/24.png" height="100%" width="100%" alt />
                    </div>
                  </div>
                  <div class="contentView">
                    <div class="title">北航科技大厦</div>
                    <div class="subtitle">项目获奖</div>
                    <div class="descContent">◆ 2013年 北京市第十二届优秀工程设计三等奖</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>
