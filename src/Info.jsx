import './Info.less';

const Info = (props) =>{
  return (
    <div>
      
      <div className="skill">
          <div className="reTitle titleSkill">技/能/熟/练</div>
          <ul>
            <li>Sketch / Figma / Xd<div><span></span></div></li>
            <li>Photoshop<div><span></span></div></li>
            <li>C4D<div><span></span></div></li>
            <li>AE<div><span></span></div></li>
            <li>CSS / HTML<div><span></span></div></li>
            <li>Javascript<div><span></span></div></li>
          </ul>
        </div>
        <div className="edu">
          <div className="reTitle titleEdu">教/育/经/历</div>
          <ul>
            <li>
              <img src={require("./assets/images/gut.png")} alt="桂林理工大学" />
              <div>
                <span>2019.01-2021.06</span><strong>桂林理工大学</strong><p>本科·广告学</p>
              </div>
            </li>
            <li>
              <img src={require("./assets/images/guet.png")} alt="桂林电子科技大学" />
              <div>
              <span>2015.01-2017.07</span><strong>桂林电子科技大学</strong><p>大专·电子信息工程</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="self">
          <div className="reTitle titleSelf">自/我/评/价</div>
          <div className="slefText">
          精通 PS、Sketch、C4D、AI、AE  等设计工具；10年以上互联网工作经验，主导过网页、APP 、小程序的B端/C端等类多种类型项目；带领过3-5人的团队；具备多个行业领域设计经验；拥有深厚的设计理论与娴熟的设计技巧了解并关注行业流行趋势；有成熟的设计作品、良好的创意构思能力；懂前端；具备良好的合作态度与团队精神，并富有工作激情、创造力和责任感；
          </div>
        </div>
    </div>
  );
}

export default Info;
