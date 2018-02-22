export default {
  data () {
    return {
      projectList: [{
        name: 'bilibili仿站',
        id: '123',
        src: require('./images/1.jpg')
      }, {
        name: 'react项目',
        id: '123',
        src: require('./images/2.jpg')
      }, {
        name: 'css组图',
        id: '2',
        src: require('./images/3.jpg')
      }],
      gameList: [{
        name: '捕鱼达人',
        link: '/game/bydr',
        rank: '??'
      }, {
        name: '2014',
        link: '/game/2014',
        rank: '??'
      }, {
        name: '知识竞赛',
        link: '/game/zsjs',
        rank: '??'
      }, {
        name: '大家一起来找茬',
        link: '/game/dayqlzc',
        rank: '??'
      }],
      degreeGuide: [{
        add: 10,
        list: [{
          label: '每日签到',
          info: '会员中心内完成签到任务随机获得5-10分不等'
        }, {
          label: '单次游戏',
          info: '每次完成游戏中心任意游戏后获取10分'
        }, {
          label: '首次注册',
          info: '首次注册完之后即获得10分'
        }]
      }, {
        add: 15,
        list: [{
          label: '阅读文章',
          info: '阅读一篇新的文章即获得15分'
        }, {
          label: '留言中心',
          info: '在留言板内留取一条信息( 每日至多两次 )'
        }]
      }, {
        add: 20,
        list: [{
          label: '点赞文章',
          info: '点赞一片文章,即获取20分'
        }, {
          label: '收藏文章',
          info: '收藏一片文章,即获取20分'
        }, {
          label: '文章评论',
          info: '文章页留言 ( 每篇1次 / 与文章无关或被扣分 )'
        }]
      }, {
        add: 50,
        list: [{
          label: '完善资料',
          info: '完善个人中心的资料获取50分'
        }, {
          label: '经典评论',
          info: '文章评论经审核后,有见地性,即获取50分'
        }, {
          label: '微信好友',
          info: '添加老牛微信,加50'
        }]
      }, {
        add: 99,
        list: [{
          label: '发现漏洞',
          info: '以任何Bug手段加分( 作弊分扣除后加99 )'
        }, {
          label: '提交作品',
          info: '会员中心内提交自己的网页作品 ( 最多4个 )'
        }, {
          label: '游戏冠军',
          info: '每周每项游戏最高分获得者加50'
        }]
      }, {
        add: '?',
        list: [{
          label: '知识竞赛',
          info: '在游戏大厅内知识竞赛中根据得分获取'
        }, {
          label: '游戏得分',
          info: '在游戏大厅内游戏后根据得分获取'
        }]
      }]
    }
  }
}
