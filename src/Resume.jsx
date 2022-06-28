import './Resume.less';

const Resume = (props) =>{
  return (
    <div className={props.show==1?"resume active":"resume"}>
      <div className="left">
        <div className="resumeInfo">
          <img src={require("./assets/images/photo.png")} alt="" />
          <div className="resumeName"><strong>雷涛涛</strong><span>UI设计师</span></div>
          <p>男 | 1986-05-02 | 广西</p> 
          <p>电话：18620300502</p>
          <p>微信：Asdflaoliao</p>
          <p>邮箱：8631142@qq.com</p>
          <p>作品集：fantasyltt.lofter.com</p>
        </div>
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
      <div className="right">
        <div className="work">
          <div className="reTitle titleWork">工/作/经/历</div>
          <ul>
            <li>
              <div className="workTitle"><span>2019.07-至今</span><strong>置尚软件（深圳）有限公司</strong><span>UI设计师 / 网页设计师<p>技术部</p></span></div>
              
              <div className="workText">1.配合市场部推广设计相关广告和推广页。2. 制定UI设计界面规范，更改原型图交互效果产品初期挖掘用户需求，协助产品经理捋顺产品逻辑。3. 产品初期挖掘用户需求，协助产品经理捋顺产品逻辑。4. 负责产品视觉设计及交互效果，提升产品品质与用户体验。5.配合开发人员实现产品，并对产品进行测试。6.制作app广告视频。7.少量前端开发。</div>
            </li>
            <li>
              <div className="workTitle"><span>2018.03-2019.06</span><strong>深圳市速易网络科技有限公司</strong><span>UI设计师 / 网页设计师<p>产品部</p></span></div>
              
              <div className="workText">1.负责金融类移动端网站页面的整体美工创意、设计和页面的重构；2.根据产品方案，完善网站页面和手机APP产品界面。3.配合产品经理对公司线上活动广告宣传进行创意策划、排版、美工设计。4.负责跟踪产品效果及用户体验，提出设计优化方案。5.分析当下流行趋势，定义并迭代符合金融行业的运营视觉设计方案。</div>
            </li>
            <li>
              <div className="workTitle"><span>2010.07-2018.01</span><strong>深圳市星翼创想网络科技有限公司</strong><span>UI设计师 / 网页设计师<p>技术部</p></span></div>
              
              <div className="workText">1.负责PC端和移动端界面设计，跟踪产品效果，提出设计改善方案，把控设计周期和效果图设计。2.html、css3以及bootstrap对页面原型进行布局搭建。3.根据产品方案，完善网站页面和手机APP产品界面。4.负责各类专题页面、活动页面、图标制作、banner广告设计。5.项目改版、维护版本迭代、产品设计项目推广。</div>
            </li>
          </ul>
        </div>
        <div className="project">
          <div className="reTitle titleProject">项/目/经/验</div>
          <ul>
            <li>
              <div className="proTitle"><span>2019.07-至今</span><strong>金桔汇外汇交易平台</strong><span>UI设计 / 视觉设计</span></div>
              
              <div className="proText">项目描述：优化官网设计，迭代app视觉设计提升视觉效果，优化用户体验。</div>
            </li>
            <li>
              <div className="proTitle"><span>2018.11-2018.12</span><strong>速易网络合作方后台管理系统</strong><span>UI设计 / 前端</span></div>
              
              <div className="proText">项目描述：速易网络合作方后台管理系统改版，提升视觉效果，优化用户体验。负责产品的UI设计、页面交互、切图及重构。</div>
            </li>
            <li>
              <div className="proTitle"><span>2018.09-2018.10</span><strong>车保宝官方网站</strong><span>UI设计 / 前端</span></div>
              
              <div className="proText">项目描述：公司新产品的官网设计，负责产品的UI设计、banner图片设计、页面交互、切图及重构。</div>
            </li>
            <li>
              <div className="proTitle"><span>2018.07-2018.09</span><strong>汽修窝小程序2.0改版</strong><span>UI设计 / 前端</span></div>
              
              <div className="proText">项目描述：在1.0的基础上优化视觉效果、提升用户体验。负责产品的UI设计、小程序的切图及前端开发、优化产品细节。</div>
            </li>
          </ul>
        </div>
        <div className="edu">
          <div className="reTitle titleEdu">教/育/经/历</div>
          <ul>
            <li>
              <span>2019.01-2021.06</span><strong>桂林理工大学</strong><p>本科·广告学</p>
            </li>
            <li>
              <span>2015.01-2017.07</span><strong>桂林电子科技大学</strong><p>大专·电子信息工程</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
