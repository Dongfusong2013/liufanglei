const state = {
  commentContent: '',
  activePicIndex: 0,
  userList: [{
      userName: '光速兔子',
      picName: '小牛在故宫',
      picDescription: '小牛在大雄宝殿，跟皇帝的龙椅来了一张合照。咋样？有没有点太子样子？有点逗，哈哈哈哈哈！',
      picIcon: '/static/icon/头像.png',
      activePic: {
        url: '/static/picShare/1.png',
        praiseCount: 13,
      },
      tagArray: ['儿子', '一家人', '故宫探秘之旅', '会议'],
      picAlumn: '一家三口游故宫',
      commentList: [{
          userName: '朱哥',
          iconUrl: '/static/icon/default-user.png',
          comment: '牛哥儿子威武，已经长这么帅了呀~~',
          time: '1个小时前'
        },
        {
          userName: '游客',
          iconUrl: '/static/icon/头像.png',
          comment: '牛哥儿子威武，已经长这么帅了呀~~',
          time: '2个小时前'
        },
        {
          userName: '朱哥',
          iconUrl: '/static/icon/头像.png',
          comment: '牛哥儿子威武，已经长这么帅了呀~~',
          time: '12个小时前'
        },
      ]
    },
    {
      userName: '董甫耸',
      picName: '雕像',
      picIcon: '/static/icon/头像1.png',
      picDescription: '这么歪的雕像会不会倒下来砸到人呀？有没有点太子样子？有点逗，哈哈哈哈哈！',
      activePic: {
        url: '/static/picShare/2.png',
        praiseCount: 278,
      },
      tagArray: ['儿子', '一家人', '故宫探秘之旅', '会议'],
      picAlumn: '巨石雕像',
      commentList: [{
        userName: '老李',
        iconUrl: '/static/icon/头像.png',
        comment: '董甫耸，你这是去哪里了？',
        time: '1个小时前'
      }, ]
    },
    {
      userName: '光速兔子',
      picName: '小牛在故宫',
      picIcon: '/static/icon/default-user.png',
      picDescription: '小牛在大雄宝殿，跟皇帝的龙椅来了一张合照。咋样？有没有点太子样子？有点逗，哈哈哈哈哈！',
      activePic: {
        url: '/static/picShare/1.png',
        praiseCount: 278,
      },
      tagArray: ['儿子', '一家人', '故宫探秘之旅', '会议'],
      picAlumn: '一家三口游故宫',
      commentList: [{
          userName: '朱哥',
          iconUrl: '/static/icon/头像.png',
          comment: '牛哥儿子威武，已经长这么帅了呀~~',
          time: '1个小时前'
        },
        {
          userName: '游客',
          iconUrl: '/static/icon/头像.png',
          comment: '牛哥儿子威武，已经长这么帅了呀~~',
          time: '2个小时前'
        },
        {
          userName: '朱哥',
          iconUrl: '/static/icon/头像.png',
          comment: '牛哥儿子威武，已经长这么帅了呀~~',
          time: '12个小时前'
        },
      ]
    },
  ],
}

const mutations = {
}

export default {
  namespaced: true,
  mutations,
  state,
}
