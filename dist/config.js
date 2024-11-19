window.blconfig = {
  /**
   * 基础配置
   */
  SYS: {
    // 修改该值可以改变网页左上角名称, 你可以改为你的名称
    NAME: '二月',
    // 公网安备号
    GONG_WANG_AN_BEI: '',
    // ICP 备案号
    ICP_BEI_AN_HAO: '',
    // 邮箱
    EMAIL: '',
    // 将该值填写你开放为博客的用户ID
    USER_ID: 1
  },

  /**
   * 博客样式，当前可设置样式如下：
   * 1. 左上角 LOGO 样式
   * 2. 专题文件夹的特殊样式显示
   */
  THEME: {
    LOGO_STYLE: {
      // 左上角 LOGO 的圆角设置
      'border-radius': '50%'
    },
    // 是否以特殊样式显示专题文件夹
    SUBJECT_TITLE: true
  },

  /**
   * 不同env环境下的特殊配置
   */
  ENVS: {
    DEV: {
      WEBSITE_API_BASE_URI: "http://192.168.192.66:8081/website-api/",
      BLOSSOM_API_BASE_URI: "http://192.168.192.66/blossom-api/"
    },
    TEST: {
      WEBSITE_API_BASE_URI: "http://192.168.192.66:8081/website-api/",
      BLOSSOM_API_BASE_URI: "http://192.168.192.66/blossom-api/"
    },
    PROD: {
      WEBSITE_API_BASE_URI: "https://graython.us.kg/website-api/",
      BLOSSOM_API_BASE_URI: "https://graython.us.kg/blossom-api/"
    }
  }
}
