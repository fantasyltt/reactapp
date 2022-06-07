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
      img:require("./assets/cover/c-2.jpg"),
      title:'分享行动落地页',
      type:'网页/H5',
      year:2021
    },
    {
      id:2,
      img:require("./assets/cover/c-3.jpg"),
      title:'SovFx 日文圣诞活动',
      type:'网页/H5',
      year:2021
    },
    {
      id:3,
      img:require("./assets/cover/c-4.jpg"),
      title:'Interpret CMS',
      type:'网页',
      year:2021
    }
  ]
  return (
    <div className="List">
      <div className="listSelect">
        <div className="selector">最新<span></span></div>
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
