
<template>
    
    <div class="container">
        <div class="leftView">
            <div>
                美学理念
            </div>
            <div>
                <img src="/static/works/项目_001.jpg" alt="">
            </div>
            <div>                
                汉唐飞扬，以道营器
            </div>
            <div>
                汉唐飞扬，以道营器汉唐飞扬，以道营器
            </div>
            <div>
                汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐
                飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐
                飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐
                飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐
                飞扬汉唐飞扬汉唐飞扬。汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞
                扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬。
            </div>
        </div>
        <div class="rightView">
            <div>
                新闻
            </div>
            <div v-for="item in items" :key="item">
                <div>
                    五月 2019  |人民网
                </div>
                <div>
                    <div class="pic">

                    </div>
                    <div class="topDown">
                        <div>
                            {{}}
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'MainContentView',
    data(){
        return {
            articles:[
                {
                    timeTitle: '五月 2019  |人民网',
                    picUrl:'',
                    title:'汉唐飞扬设计师刘方磊开奖了：用建筑讲述中国故事',
                    summary:'二〇一五年，“一带一路”国际合作高峰论坛在 北京雁栖湖成功举办，在此让世界见识了dfsdfsdfsdfsdfsdfsd',
                },
            ]
        }
    }
}
</script>


<style lang="less" scoped>
    .container{
        width: 100%;
        height: 800px;
        display: flex;
        flex-direction: row;
        padding: 80px 120px;
        background-color: antiquewhite;

        .leftView{
            width: 730px;            
            background-color: aliceblue;
        }
        .rightView{
            width: 123px;
            background-color: aliceblue;
        }
    }
</style>