import {useState} from 'react';
import './List.less';

const List = (props) =>{
  const caseType = [
    {
      id:0,
      title:"全部"
    },
    {
      id:1,
      title:"APP"
    },
    {
      id:2,
      title:"网页"
    },
    {
      id:3,
      title:"H5"
    },
    {
      id:4,
      title:"广告"
    },
    {
      id:5,
      title:"视频动画"
    },
    {
      id:6,
      title:"其他"
    }
  ]

  const [active,setTab]  = useState(0)
  function switchTab(index) {
    setTab(index)
  }

  const caseList = [
    {
    id:0,
    title:'金桔汇 APP 最新改版',
    type:'APP',
    year:2021
    },
    {
      id:1,
      title:'金桔汇 APP 最新改版',
      type:'APP',
      year:2021
    },
    {
      id:2,
      title:'分享行动落地页',
      type:'网页/H5',
      year:2021
    },
    {
      id:3,
      title:'SovFx 日文圣诞活动',
      type:'网页/H5',
      year:2021
    },
    {
      id:4,
      title:'Interpret CMS',
      type:'网页',
      year:2021
    },
    {
      id:5,
      title:'Lottie 动画 icon',
      type:'视频动画',
      year:2021
    },
    {
      id:6,
      title:'感恩老用户活动',
      type:'网页',
      year:2021
    },
    {
      id:7,
      title:'GM 代理联盟计划',
      type:'网页',
      year:2021
    },
    {
      id:8,
      title:'SovFx 日文新年活动',
      type:'网页/H5',
      year:2021
    },
    {
      id:9,
      title:'ForFX 官网',
      type:'网页',
      year:2021
    },
    {
      id:10,
      title:'LinkWits 官网',
      type:'网页',
      year:2021
    },
    {
      id:11,
      title:'SmartFX 官网',
      type:'网页',
      year:2021
    },
    {
      id:12,
      title:'GM 新年200%赠金活动',
      type:'网页/H5',
      year:2021
    },
    {
      id:13,
      title:'GM APP 抽奖活动',
      type:'H5',
      year:2021
    },
    {
      id:15,
      title:'行情速递落地页',
      type:'网页/H5',
      year:2021
    },
    {
      id:16,
      title:'0佣金活动',
      type:'H5',
      year:2021
    },
    {
      id:17,
      title:'盈汇黄金推广落地页',
      type:'H5',
      year:2021
    },
    {
      id:18,
      title:'FXNavi 训练营',
      type:'网页',
      year:2021
    },
    {
      id:19,
      title:'FXNavi 落地页',
      type:'网页',
      year:2021
    },
    {
      id:20,
      title:'FXNavi 日文落地页',
      type:'网页',
      year:2021
    },
    {
      id:21,
      title:'各类广告banner设计',
      type:'广告',
      year:2021
    },
    {
      id:22,
      title:'金桔汇 App Store 上架图',
      type:'其他',
      year:2021
    },
    {
      id:23,
      title:'金桔汇 App 引导页',
      type:'网页/H5',
      year:2021
    },
    {
      id:24,
      title:'APP启动页',
      type:'广告',
      year:2021
    },
    {
      id:25,
      title:'优势介绍落地页',
      type:'H5',
      year:2021
    },
    {
      id:26,
      title:'新客活动',
      type:'网页/H5',
      year:2021
    },
    {
      id:27,
      title:'介绍外汇落地页',
      type:'H5',
      year:2021
    },
    {
      id:28,
      title:'200%赠金活动',
      type:'网页/H5',
      year:2021
    },
    {
      id:29,
      title:'LinkWits App 引导页',
      type:'其他',
      year:2021
    },
    {
      id:30,
      title:'App 引导页',
      type:'其他',
      year:2021
    },
    {
      id:31,
      title:'新年氛围 icon',
      type:'其他',
      year:2021
    },
    {
      id:32,
      title:'圣诞氛围 icon',
      type:'其他',
      year:2021
    },
    {
      id:33,
      title:'广告（2019前）',
      type:'广告',
      year:2019
    },
    {
      id:34,
      title:'QTC App（2019前）',
      type:'APP',
      year:2019
    },
    {
      id:35,
      title:'速易网络合作方后台管理系统（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:36,
      title:'车保宝官方网站（2019前）',
      type:'广告',
      year:2019
    },
    {
      id:37,
      title:'帮帮优贷（2019前）',
      type:'APP',
      year:2019
    },
    {
      id:38,
      title:'H5推广页面（2019前）',
      type:'H5',
      year:2019
    },
    {
      id:39,
      title:'H5推广页面（2019前）',
      type:'H5',
      year:2019
    },
    {
      id:40,
      title:'广告集合（2019前）',
      type:'广告',
      year:2019
    },
    {
      id:41,
      title:'信息流广告集合（2019前）',
      type:'广告',
      year:2019
    },
    {
      id:42,
      title:'生物源官方网站（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:43,
      title:'OVONIC官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:44,
      title:'MAGPOC官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:45,
      title:'洲安集团官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:46,
      title:'校园微电影大赛落地页（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:47,
      title:'正祺集团官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:48,
      title:'中原地产海外房产（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:49,
      title:'CBP国际教育（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:50,
      title:'深圳市南山区南风社工服务社官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:51,
      title:'MAGPOC官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:52,
      title:'HV品牌官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:53,
      title:'华夏星光官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:54,
      title:'星翼创想官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:55,
      title:'富涞财富官网（2019前）',
      type:'网页',
      year:2019
    }
  ]
  
  return (
    <div className={props.show==0?"List Acitve":"List"}>
      <div className="listSelect">
        <div className="selector">默认<span></span></div>
        <div className="selectNav">
          <ul>
            {caseType.map((item) => {
                return (
                    <li 
                    key={item.id}
                    className={item.id==active? "active" : ""}
                    onClick={switchTab.bind(this,item.id)}
                    >
                      {item.title}
                    </li>
                  )
              })}
          </ul>
        </div>
      </div>
      <div className="caseList">
        <ul>
          {
            caseList.map((item,index) => (
                <li key={index}>
                <img src={require("./assets/cover/c-"+item.id+".jpg")} alt="" />
                <div className="title">{item.title}<span>{item.type}</span></div>
              </li>
            ))
          }
        </ul>
        <div className="listEnd">You’ve reached the end of the list</div>
      </div>
      <div className="detailBox">
        <div className="close"></div>
        <div className="detailBg">
          <div className="detailTitle">分享行动落地页<span>网页/H5</span></div>
          <div className="detailImg"><img src={require("./assets/detail/detail-2.jpg")} alt="" /></div>
          <div className="closeBtn"><span>关闭</span></div>
        </div>
      </div>
      <div className="detailShadow"></div>

    </div>
  );
}


export default List;
