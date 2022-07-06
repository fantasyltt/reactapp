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
      title:"网页"
    },
    {
      id:2,
      title:"H5"
    },
    {
      id:3,
      title:"APP"
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



  const caseList = [
    {
    id:0,
    rank:0,
    title:'GTrader APP',
    type:'APP',
    year:2021
    },
    {
      id:1,
      rank:1,
      title:'金桔汇 APP',
      type:'APP',
      year:2021
    },
    {
      id:2,
      rank:2,
      title:'分享行动运营落地页',
      type:'网页/H5',
      year:2021
    },
    {
      id:3,
      rank:3,
      title:'SovFx 日文圣诞活动',
      type:'网页/H5',
      year:2021
    },
    {
      id:4,
      rank:4,
      title:'Interpret CMS',
      type:'网页',
      year:2021
    },
    {
      id:5,
      rank:5,
      title:'Lottie 动画 icon',
      type:'视频动画',
      year:2021
    },
    {
      id:6,
      rank:6,
      title:'感恩老用户运营活动',
      type:'网页',
      year:2021
    },
    {
      id:7,
      rank:17,
      title:'GM 代理联盟计划',
      type:'网页',
      year:2021
    },
    {
      id:8,
      rank:3.1,
      title:'SovFx 日文新年活动',
      type:'网页/H5',
      year:2021
    },
    {
      id:9,
      rank:19,
      title:'ForFX 官网',
      type:'网页',
      year:2021
    },
    {
      id:10,
      rank:10,
      title:'LinkWits 官网',
      type:'网页',
      year:2021
    },
    {
      id:11,
      rank:11,
      title:'SmartFX 官网',
      type:'网页',
      year:2021
    },
    {
      id:12,
      rank:12,
      title:'GM 新年200%赠金运营活动',
      type:'网页/H5',
      year:2021
    },
    {
      id:13,
      rank:6.1,
      title:'GM APP 抽奖运营活动',
      type:'H5',
      year:2021
    },
    {
      id:14,
      rank:14,
      title:'88交易联赛',
      type:'网页/H5',
      year:2021
    },
    {
      id:15,
      rank:7.1,
      title:'行情速递落地页',
      type:'网页/H5',
      year:2021
    },
    {
      id:16,
      rank:16,
      title:'0佣金活动',
      type:'H5',
      year:2021
    },
    {
      id:17,
      rank:5.1,
      title:'盈汇黄金推广运营落地页',
      type:'H5',
      year:2021
    },
    {
      id:18,
      rank:18,
      title:'FXNavi 训练营',
      type:'网页',
      year:2021
    },
    {
      id:19,
      rank:19,
      title:'FXNavi 落地页',
      type:'网页',
      year:2021
    },
    {
      id:20,
      rank:20,
      title:'FXNavi 日文落地页',
      type:'网页',
      year:2021
    },
    {
      id:21,
      rank:10.1,
      title:'各类广告banner设计',
      type:'广告',
      year:2021
    },
    {
      id:22,
      rank:8.1,
      title:'金桔汇 App Store 上架图',
      type:'其他',
      year:2021
    },
    {
      id:23,
      rank:23,
      title:'金桔汇 App 引导页',
      type:'网页/H5',
      year:2021
    },
    {
      id:24,
      rank:8.2,
      title:'APP启动页',
      type:'广告',
      year:2021
    },
    {
      id:25,
      rank:25,
      title:'优势介绍落地页',
      type:'H5',
      year:2021
    },
    {
      id:26,
      rank:26,
      title:'新客活动',
      type:'网页/H5',
      year:2021
    },
    {
      id:27,
      rank:27,
      title:'介绍外汇落地页',
      type:'H5',
      year:2021
    },
    {
      id:28,
      rank:28,
      title:'200%赠金运营活动',
      type:'网页/H5',
      year:2021
    },
    {
      id:29,
      rank:18.1,
      title:'LinkWits App 引导页',
      type:'其他',
      year:2021
    },
    {
      id:30,
      rank:25.1,
      title:'App 引导页',
      type:'其他',
      year:2021
    },
    {
      id:31,
      rank:16.1,
      title:'新年氛围 icon',
      type:'其他',
      year:2021
    },
    {
      id:56,
      rank:10.2,
      title:'Gold Mandarin 越南市场广告推广视频',
      type:'视频动画',
      year:2021
    },
    {
      id:57,
      rank:16.2,
      title:'Gold Mandarin 广告推广视频',
      type:'视频动画',
      year:2021
    },
    {
      id:58,
      rank:13,
      title:'Gold Mandarin 广告推广视频',
      type:'视频动画',
      year:2021
    },
    {
      id:59,
      rank:32.1,
      title:'Gold Mandarin 广告推广视频',
      type:'视频动画',
      year:2021
    },
    {
      id:60,
      rank:32.3,
      title:'Gold Mandarin 广告推广视频',
      type:'视频动画',
      year:2021
    },
    {
      id:61,
      rank:17.1,
      title:'Gold Mandarin 广告推广视频',
      type:'视频动画',
      year:2021
    },
    {
      id:62,
      rank:17.2,
      title:'Gold Mandarin 广告推广视频',
      type:'视频动画',
      year:2021
    },
    {
      id:63,
      rank:32.4,
      title:'Gold Mandarin 广告推广视频',
      type:'视频动画',
      year:2021
    },
    {
      id:64,
      rank:17.3,
      title:'Gold Mandarin 新手教程',
      type:'视频动画',
      year:2021
    },
    {
      id:32,
      rank:16.2,
      title:'圣诞氛围 icon',
      type:'其他',
      year:2021
    },
    {
      id:33,
      rank:33,
      title:'广告（2019前）',
      type:'广告',
      year:2019
    },
    {
      id:34,
      rank:34,
      title:'QTC App（2019前）',
      type:'APP',
      year:2019
    },
    {
      id:35,
      rank:35,
      title:'速易网络合作方后台管理系统（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:36,
      rank:36,
      title:'车保宝官方网站（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:37,
      rank:37,
      title:'帮帮优贷（2019前）',
      type:'APP',
      year:2019
    },
    {
      id:38,
      rank:38,
      title:'H5推广页面（2019前）',
      type:'H5',
      year:2019
    },
    {
      id:39,
      rank:39,
      title:'H5推广页面（2019前）',
      type:'H5',
      year:2019
    },
    {
      id:40,
      rank:40,
      title:'广告集合（2019前）',
      type:'广告',
      year:2019
    },
    {
      id:41,
      rank:41,
      title:'信息流广告集合（2019前）',
      type:'广告',
      year:2019
    },
    {
      id:42,
      rank:42,
      title:'生物源官方网站（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:43,
      rank:43,
      title:'OVONIC官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:44,
      rank:44,
      title:'MAGPOC官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:45,
      rank:45,
      title:'洲安集团官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:46,
      rank:46,
      title:'校园微电影大赛落地页（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:47,
      rank:47,
      title:'正祺集团官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:48,
      rank:48,
      title:'中原地产海外房产（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:49,
      rank:49,
      title:'CBP国际教育（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:50,
      rank:50,
      title:'深圳市南山区南风社工服务社官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:51,
      rank:51,
      title:'MAGPOC官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:52,
      rank:52,
      title:'HV品牌官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:53,
      rank:53,
      title:'华夏星光官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:54,
      rank:54,
      title:'星翼创想官网（2019前）',
      type:'网页',
      year:2019
    },
    {
      id:55,
      rank:55,
      title:'富涞财富官网（2019前）',
      type:'网页',
      year:2019
    }
  ]

  const [active,setTab]  = useState(0)
  function switchTab(index) {
    setTab(index)    
  }


  const [hide,hideDetail]  = useState(false)
  const [showDetail,setDetail]  = useState()
  const [showtitle,setTitle]  = useState("")
  const [showType,setType]  = useState("")
  function switchDetail(e,t,p) {
    setDetail(e)
    setType(p)
    setTitle(t)
    hideDetail(true)
  }
  let inner;
  if(showDetail==undefined){
    inner=
      <div className="detailImg"></div>

  }else if (showDetail==5||showDetail==56||showDetail==57||showDetail==58||showDetail==59||showDetail==60||showDetail==61||showDetail==62||showDetail==63||showDetail==64) {
    inner=
      <div className={showDetail==64?"detailImg widthVideo":"detailImg"}>
        <video width="100%" autoPlay="autoPlay" loop="loop" controls src={require("./assets/detail/detail-"+showDetail+".mp4")}>
          您的浏览器不支持Video标签。
        </video>
      </div>
  }else{
    inner=
      <div className="detailImg"><img src={require("./assets/detail/detail-"+showDetail+".jpg")} alt="" /></div>
  }
  const showImg =(
    <div>
      { inner }
    </div>
  )
  function hideBtn() {
    hideDetail(false)
    setDetail()
  }

const SelectList = [
  {
    id:0,
    title:"默认",
    sort:(a,b) => a.rank - b.rank
  },
  {
    id:1,
    title:"最新",
    sort:(a,b) => a
  }
]
const [selected,setSelect]  = useState(0)
const [selectHover,setSelectHover] = useState(true)
const [selectedText,setSelectText] = useState("默认")
function openSelect() {
  setSelectHover(!selectHover)
}
function switchSelect(e) {
    console.log(e);
    setSelect(e)
    setSelectText(SelectList[e].title)
    setSelectHover(true)
}

  return (
    <div className={props.show==0?"List Acitve":"List"} >

      <div className="listSelect" >
        <div className={selectHover==false?"selector hover":"selector"} onClick={openSelect.bind(this)}>{selectedText}<span></span>
          <div className="selectList">
            <ul>
              {SelectList.map((item) => {
                return (
                    <li key={item.id} className={selected==item.id?'active':''} onClick={switchSelect.bind(this,item.id)}>{item.title}</li>
                  )
              })}
            </ul>
          </div>
          
        </div>

        

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
            caseList.sort(SelectList[selected].sort).map((item,index) => {
              const _html = (
                  <li key={index} onClick={switchDetail.bind(this,item.id,item.title,item.type)}>
                    <img src={require("./assets/cover/c-"+item.id+".jpg")} alt="" />
                    <div className="title">{item.title}<span>{item.type}</span></div>
                  </li>
              )
              if (active==0) {
                 return(
                  _html
                )
              }else if(active==1){
                if (item.type=="网页" || item.type=="网页/H5") {
                  return(
                    _html
                  )
                }
              }else if(active==2){
                if (item.type=="H5" || item.type=="网页/H5") {
                  return(
                    _html
                  )
                }
              }else if(active==3){
                if (item.type=="APP") {
                  return(
                    _html
                  )
                }
              }else if(active==4){
                if (item.type=="广告") {
                  return(
                    _html
                  )
                }
              }else if(active==5){
                if (item.type=="视频动画") {
                  return(
                    _html
                  )
                }
              }else if(active==6){
                if (item.type=="其他") {
                  return(
                    _html
                  )
                }
              }
               
          })
          }
        </ul>
        <div className="listEnd">You’ve reached the end of the list</div>
      </div>
      <div className={hide==true?"detailBox active":"detailBox"}>
        <div className="close" onClick={hideBtn.bind(this)}></div>
        <div className="detailBg">
          <div className="detailTitle">{showtitle}<span>{showType}</span></div>
          {showImg}          
          <div className="closeBtn"><span onClick={hideBtn.bind(this)}>关闭</span></div>
        </div>
      </div>
      <div className={hide==true?"detailShadow active":"detailShadow"} onClick={hideBtn.bind(this)}></div>

    </div>
  );
}


export default List;
