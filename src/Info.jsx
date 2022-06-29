import './Info.less';

const Info = (props) =>{
  return (
    <div>
      <div className="skill">
          <div className="reTitle titleSkill">技/能/熟/练</div>
          <ul>
            <li>Sketch/Figma/Xd<div><span></span></div></li>
            <li>Photoshop<div><span></span></div></li>
            <li>C4D<div><span></span></div></li>
            <li>AE<div><span></span></div></li>
            <li>CSS<div><span></span></div></li>
            <li>Javascript<div><span></span></div></li>
          </ul>
        </div>
        <div className="self">
          <div className="reTitle titleSelf">自/我/评/价</div>
          <div className="slefText">
          精通软件：Photoshop、Sketch、C4D、AI、AE等；10年以上网站、移动端设计经验，拥有深厚的设计理论与娴熟的设计技巧了解并关注行业流行趋势；有成熟的设计作品、良好的创意构思能力；懂前端；具备良好的合作态度与团队精神，并富有工作激情、创造力和责任感；
          </div>
        </div>
    </div>
  );
}

export default Info;
