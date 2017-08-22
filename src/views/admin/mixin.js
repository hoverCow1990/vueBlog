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
        rank: '12'
      }, {
        name: '2014',
        link: '/game/2014',
        rank: '01'
      }, {
        name: '知识竞赛',
        link: '/game/zsjs',
        rank: '04'
      }, {
        name: '大家一起来找茬',
        link: '/game/dayqlzc',
        rank: '02'
      }],
      collectionList: [{
        name: '[node-04]Express构架web相册',
        link: '/article/12'
      }, {
        name: '百度地图二次封装',
        link: '/article/12'
      }, {
        name: '3D 螺旋体翻转',
        link: '/article/12'
      }, {
        name: '寰宇利人易拉宝设计',
        link: '/article/12'
      }, {
        name: '常用工具类的网站',
        link: '/article/12'
      }, {
        name: 'Backbone构架老牛外卖',
        link: '/article/12'
      }, {
        name: 'Java练习[单例模式]',
        link: '/article/12'
      }],
      loveList: [{
        name: '萝卜特甜仿站[boots与less初体验]',
        link: '/article/12'
      }, {
        name: 'Less的安装,编译以及高亮',
        link: '/article/12'
      }, {
        name: 'HTML与XML的区别',
        link: '/article/12'
      }, {
        name: '第一个手写网页',
        link: '/article/12'
      }, {
        name: 'WebPack进阶[开发与生产模式]',
        link: '/article/12'
      }, {
        name: '英豪传单设计',
        link: '/article/12'
      }, {
        name: 'Java练习[单例模式]',
        link: '/article/12'
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
          label: '收藏主页',
          info: '首次将老牛的博客页收藏'
        }, {
          label: '留言中心',
          info: '在留言板内留取一条信息( 每日至多一次 )'
        }]
      }, {
        add: 20,
        list: [{
          label: '完善资料',
          info: '完善个人中心的资料获取20分'
        }, {
          label: '文章评论',
          info: '文章页留言 ( 每篇1次 / 与文章无关或被扣分 )'
        }, {
          label: '点赞文章',
          info: '点赞一片文章,即获取20分'
        }]
      }, {
        add: 50,
        list: [{
          label: '收藏文章',
          info: '收藏一片文章,即获取50分'
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
