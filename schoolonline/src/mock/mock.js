import { Random as _Random, mock } from 'mockjs' // 获取mock对象
const Random = _Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const domain = 'http://mockjs.com/api' // 定义默认域名，随便写
const code = 200 // 返回的状态码

// 随机生成文章数据
const postData = req => {
  // console.log(req) // 请求体，用于获取参数

  //  courserecommendList
  let courserecommendList = [] // 用于存放课程数据的数组
  let courserecommendTabList = []

  for (let i = 0; i < 8; i++) {
    let post = {
      title: Random.csentence(8, 16),
      img: Random.dataImage('375x208', '课程封面'),
      schoolico: Random.dataImage('100x100', '学校logo'),
      schoolname: Random.cname(),
      visits: Random.natural(10000, 10000000),
      desc: Random.csentence(10, 25),
      courseUrl: Random.url()
    }

    courserecommendList.push(post)
  }
  for (let j = 0; j < 8; j++) {
    let post = {
      title: Random.csentence(12, 20),
      img: Random.dataImage('375x208', '课程封面'),
      schoolico: Random.dataImage('100x100', '学校logo'),
      schoolname: Random.cname(),
      visits: Random.natural(10000, 10000000),
      desc: Random.sentence(10, 25),
      courseUrl: Random.url()
    }

    courserecommendTabList.push(post)
  }

  // 返回状态码和文章数据posts
  return {
    code,
    courserecommendList,
    courserecommendTabList
  }
}

// 定义请求链接，类型，还有返回数据
mock(`${domain}/gets/course`, 'get', postData)

//  post data
let mycourse = [] // 用于存放文章数据的数组

for (let i = 0; i < 10; i++) {
  let post = {
    title: Random.csentence(10, 25), // 随机生成长度为10-25的标题
    icon: Random.dataImage('300x250', '课程封面'), // 随机生成大小为250x250的图片链接
    author: Random.cname(), // 随机生成名字
    date: Random.date() + ' ' + Random.time(), // 随机生成年月日 + 时间
    courseid: Random.natural(10000, 10000000), // 随机生成一个课程编号，长度在5位数到9位数之间
    courseUrl: Random.url()
  }

  mycourse.push(post)
}
let allcourse = [] // 用于存放文章数据的数组

for (let i = 0; i < 10; i++) {
  let post = {
    title: Random.csentence(10, 25), // 随机生成长度为10-25的标题
    icon: Random.dataImage('300x250', '课程封面'), // 随机生成大小为250x250的图片链接
    author: Random.cname(), // 随机生成名字
    date: Random.date() + ' ' + Random.time(), // 随机生成年月日 + 时间
    courseid: Random.natural(10000, 10000000), // 随机生成一个课程编号，长度在5位数到9位数之间
    courseUrl: Random.url()
  }

  allcourse.push(post)
}
mock(`${domain}/posts/search`, 'post', {// 这里的url地址其实可以换成一个字段，比如msg,下边请求时候对应就可以
  mycourse,
  allcourse
})
