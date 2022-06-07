import './List.less';

const List = (props) =>{
  const caseList = [
    {
    id:0,
    img:require("./assets/cover/c-1.jpg"),
    title:'金桔汇 APP 最新改版',
    type:'APP',
    year:2021
    },
    {
      id:1,
      img:require("./assets/cover/c-1.jpg"),
      title:'金桔汇 APP 最新改版',
      type:'APP',
      year:2021
    },
    {
      id:2,
      img:require("./assets/cover/c-2.jpg"),
      title:'分享行动落地页',
      type:'网页/H5',
      year:2021
    },
    {
      id:3,
      img:require("./assets/cover/c-3.jpg"),
      title:'SovFx 日文圣诞活动',
      type:'网页/H5',
      year:2021
    },
    {
      id:4,
      img:require("./assets/cover/c-4.jpg"),
      title:'Interpret CMS',
      type:'网页',
      year:2021
    },
    {
      id:5,
      img:require("./assets/cover/c-5.jpg"),
      title:'Lottie 动画 icon',
      type:'视频动画',
      year:2021
    },
    {
      id:6,
      img:require("./assets/cover/c-6.jpg"),
      title:'感恩老用户活动',
      type:'网页',
      year:2021
    },
    {
      id:7,
      img:require("./assets/cover/c-7.jpg"),
      title:'GM 代理联盟计划',
      type:'网页',
      year:2021
    },
    {
      id:8,
      img:require("./assets/cover/c-8.jpg"),
      title:'SovFx 日文新年活动',
      type:'网页/H5',
      year:2021
    },
    {
      id:9,
      img:require("./assets/cover/c-9.jpg"),
      title:'ForFX 官网',
      type:'网页',
      year:2021
    },
    {
      id:10,
      img:require("./assets/cover/c-10.jpg"),
      title:'LinkWits 官网',
      type:'网页',
      year:2021
    },
    {
      id:11,
      img:require("./assets/cover/c-11.jpg"),
      title:'SmartFX 官网',
      type:'网页',
      year:2021
    },
    {
      id:12,
      img:require("./assets/cover/c-12.jpg"),
      title:'GM 新年200%赠金活动',
      type:'网页/H5',
      year:2021
    },
    {
      id:13,
      img:require("./assets/cover/c-13.jpg"),
      title:'GM APP 抽奖活动',
      type:'H5',
      year:2021
    },
    {
      id:15,
      img:require("./assets/cover/c-15.jpg"),
      title:'行情速递落地页',
      type:'网页/H5',
      year:2021
    },
    {
      id:16,
      img:require("./assets/cover/c-16.jpg"),
      title:'0佣金活动',
      type:'H5',
      year:2021
    },
    {
      id:17,
      img:require("./assets/cover/c-17.jpg"),
      title:'盈汇黄金推广落地页',
      type:'H5',
      year:2021
    },
    {
      id:18,
      img:require("./assets/cover/c-18.jpg"),
      title:'FXNavi 训练营',
      type:'网页',
      year:2021
    },
    {
      id:19,
      img:require("./assets/cover/c-19.jpg"),
      title:'FXNavi 落地页',
      type:'网页',
      year:2021
    },
    {
      id:20,
      img:require("./assets/cover/c-20.jpg"),
      title:'FXNavi 日文落地页',
      type:'网页',
      year:2021
    },
    {
      id:21,
      img:require("./assets/cover/c-21.jpg"),
      title:'各类广告banner设计',
      type:'广告',
      year:2021
    },
    {
      id:22,
      img:require("./assets/cover/c-22.jpg"),
      title:'金桔汇 App Store 上架图',
      type:'其他',
      year:2021
    },
    {
      id:23,
      img:require("./assets/cover/c-23.jpg"),
      title:'金桔汇 App 引导页',
      type:'网页/H5',
      year:2021
    },
    {
      id:24,
      img:require("./assets/cover/c-24.jpg"),
      title:'APP启动页',
      type:'广告',
      year:2021
    },
    {
      id:25,
      img:require("./assets/cover/c-25.jpg"),
      title:'优势介绍落地页',
      type:'H5',
      year:2021
    },
    {
      id:26,
      img:require("./assets/cover/c-26.jpg"),
      title:'新客活动',
      type:'网页/H5',
      year:2021
    },
    {
      id:27,
      img:require("./assets/cover/c-27.jpg"),
      title:'介绍外汇落地页',
      type:'H5',
      year:2021
    },
    {
      id:28,
      img:require("./assets/cover/c-28.jpg"),
      title:'200%赠金活动',
      type:'网页/H5',
      year:2021
    },
    {
      id:29,
      img:require("./assets/cover/c-29.jpg"),
      title:'LinkWits App 引导页',
      type:'其他',
      year:2021
    },
    {
      id:30,
      img:require("./assets/cover/c-30.jpg"),
      title:'App 引导页',
      type:'其他',
      year:2021
    },
    {
      id:31,
      img:require("./assets/cover/c-31.jpg"),
      title:'新年氛围 icon',
      type:'其他',
      year:2021
    },
    {
      id:32,
      img:require("./assets/cover/c-32.jpg"),
      title:'圣诞氛围 icon',
      type:'其他',
      year:2021
    },
    {
      id:33,
      img:require("./assets/cover/c-33.jpg"),
      title:'广告（2019前）',
      type:'广告',
      year:2019
    },
    {
      id:34,
      img:require("./assets/cover/c-34.jpg"),
      title:'QTC App（2019前）',
      type:'APP',
      year:2019
    },
    {
      id:35,
      img:require("./assets/cover/c-35.jpg"),
      title:'速易网络合作方后台管理系统（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:36,
      img:require("./assets/cover/c-36.jpg"),
      title:'车保宝官方网站（2019前）',
      type:'广告',
      year:2019
    },
    {
      id:37,
      img:require("./assets/cover/c-37.jpg"),
      title:'帮帮优贷（2019前）',
      type:'APP',
      year:2019
    },
    {
      id:38,
      img:require("./assets/cover/c-38.jpg"),
      title:'H5推广页面（2019前）',
      type:'H5',
      year:2019
    },
    {
      id:39,
      img:require("./assets/cover/c-39.jpg"),
      title:'H5推广页面（2019前）',
      type:'H5',
      year:2019
    },
    {
      id:40,
      img:require("./assets/cover/c-40.jpg"),
      title:'广告集合（2019前）',
      type:'广告',
      year:2019
    },
    {
      id:41,
      img:require("./assets/cover/c-41.jpg"),
      title:'信息流广告集合（2019前）',
      type:'广告',
      year:2019
    },
    {
      id:42,
      img:require("./assets/cover/c-42.jpg"),
      title:'生物源官方网站（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:43,
      img:require("./assets/cover/c-43.jpg"),
      title:'OVONIC官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:44,
      img:require("./assets/cover/c-44.jpg"),
      title:'MAGPOC官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:45,
      img:require("./assets/cover/c-45.jpg"),
      title:'洲安集团官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:46,
      img:require("./assets/cover/c-46.jpg"),
      title:'校园微电影大赛落地页（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:47,
      img:require("./assets/cover/c-47.jpg"),
      title:'正祺集团官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:48,
      img:require("./assets/cover/c-48.jpg"),
      title:'中原地产海外房产（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:49,
      img:require("./assets/cover/c-49.jpg"),
      title:'CBP国际教育（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:50,
      img:require("./assets/cover/c-50.jpg"),
      title:'深圳市南山区南风社工服务社官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:51,
      img:require("./assets/cover/c-51.jpg"),
      title:'MAGPOC官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:52,
      img:require("./assets/cover/c-52.jpg"),
      title:'HV品牌官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:53,
      img:require("./assets/cover/c-53.jpg"),
      title:'华夏星光官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:54,
      img:require("./assets/cover/c-54.jpg"),
      title:'星翼创想官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:55,
      img:require("./assets/cover/c-55.jpg"),
      title:'富涞财富官网（2019前）',
      type:'网页',
      year:2019
    }
  ]
  return (
    <div className="List">
      <div className="listSelect">
        <div className="selector">默认<span></span></div>
        <div className="selectNav">
          <ul>
            <li className='active'>全部</li>
            <li>APP</li>
            <li>网页</li>
            <li>H5</li>
            <li>广告</li>
            <li>视频动画</li>
            <li>其他</li>
          </ul>
        </div>
      </div>
      <div className="caseList">
        <ul>
          {
            caseList.map((item,index) => (
                <li key={index}>
                <img src={item.img} alt="" />
                <div className="title">{item.title}<span>{item.type}</span></div>
              </li>
            ))
          }
        </ul>
        <div className="listEnd">You’ve reached the end of the list</div>
      </div>

    </div>
  );
}


export default List;
