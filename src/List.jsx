import './List.less';

const List = (props) =>{
  return (
    <div className="List">
      <div className="listSelect">
        <div className="selector">所有<span></span></div>
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

    </div>
  );
}


export default List;
