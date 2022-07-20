import './Resume.less';
import Info from './Info';

const Resume = (props) =>{
  return (
    <div className={props.show==1?"resume active":"resume"}>
      <div className="resumeLeft">
        <div className="resumeInfo">
          <img src={require("./assets/images/photo.png")} alt="" />
          <div className="resumeName"><strong>雷涛涛</strong><span>UI设计师</span></div>
          <p>男 | 1986-05-02</p> 
          <p>电话：18620300502</p>
          <p>微信：Asdflaoliao</p>
          <p>邮箱：8631142@qq.com</p>
          <p>作品集：fantasyltt.github.io</p>
        </div>
        <div className="pcInfo">
          <Info  />
        </div>
      </div>
      <div className="resumeRight">
        <div className="work">
          <div className="reTitle titleWork">工/作/经/历</div>
          <ul>
            <li>
              <div className="workTitle"><span>2019.07-至 今</span><strong>置尚软件（深圳）有限公司</strong><span>UI设计师<p>技术部</p></span></div>
              
              <div className="workText">
                <p><strong>评审分析: </strong>制定UI设计界面规范，更改原型图交互效果产品初期挖掘用户需求，协助产品经理捋顺产品逻辑;</p>
                <p><strong>视觉设计: </strong>1. 配合市场部推广设计相关广告和推广页<br />2. 负责产品视觉设计及交互效果，提升产品品质与用户体验;<br />3. 配合产品经理对公司线上活动广告宣传进行创意策划、排版、视觉设计;</p>
                <p><strong>视频制作: </strong>设计制作lottie动画，制作app广告DM视频;</p>
                <p><strong>前端开发: </strong>协助前端工程师少量落地页前端开发;</p>
                <p><strong>后期跟进: </strong>配合开发人员实现产品，并对产品进行测试;</p>
                <p><strong>工作成果: </strong>在职期间工作获得市场部同事的好评。</p>
              </div>
            </li>
            <li>
              <div className="workTitle"><span>2018.03-2019.06</span><strong>深圳市速易网络科技有限公司</strong><span>UI设计师 / 网页设计师<p>产品部</p></span></div>
              
              <div className="workText">
                <p><strong>评审分析: </strong>分析当下流行趋势，定义并迭代符合金融行业的运营视觉设计方案;</p>
                <p><strong>视觉设计: </strong>1. 负责金融类移动端网站页面的整体美工创意、设计<br />2. 根据产品方案，完善网站页面和手机APP产品界面;<br />3. 配合产品经理对公司线上活动广告宣传进行创意策划、排版、视觉设计;</p>
                <p><strong>前端开发: </strong>落地页H5页面和微信小程序的部分前端开发;</p>
                <p><strong>后期跟进: </strong>负责跟踪产品效果及用户体验，提出设计优化方案;</p>
                <p><strong>工作成果: </strong>在职期间工作获得产品经理的好评，多次获得季度考核S评级。</p>
              </div>
            </li>
            <li>
              <div className="workTitle"><span>2010.07-2018.01</span><strong>深圳市星翼创想网络科技有限公司</strong><span>网页设计师<p>技术部</p></span></div>
              
              <div className="workText">
                <p><strong>界面设计: </strong>
                  1. 负责PC端和移动端界面设计，跟踪产品效果，提出设计改善方案，把控设计周期和效果图设计;<br />2. 根据产品方案，完善网站页面和手机APP产品界面;<br />

                  </p>
                <p><strong>视觉设计: </strong>负责各类专题页面、活动页面、图标制作、banner广告设计;</p>
                <p><strong>页面重构: </strong>html、css3以及bootstrap对页面原型进行布局搭建;</p>
                <p><strong>后期跟进: </strong>项目改版、维护版本迭代、产品设计项目推广;</p>
                <p><strong>工作成果: </strong>在职期间完成200+各行业企业网站和视觉设计，深受客户好评。</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="project">
          <div className="reTitle titleProject">项/目/经/验</div>
          <ul>
            <li>
              <div className="proTitle"><span>2022.01-至 今</span><strong>Gtrader APP</strong><span>UI设计</span></div>
              
              <div className="proText">项目描述：优化官网设计，迭代app视觉设计提升视觉效果，优化用户体验。</div>
            </li>
            <li>
              <div className="proTitle"><span>2019.08-2021.12</span><strong>FXnavi APP</strong><span>UI设计</span></div>
              
              <div className="proText">项目描述：优化官网设计，迭代app视觉设计提升视觉效果，优化用户体验。</div>
            </li>
            <li>
              <div className="proTitle"><span>2019.07-2021.8</span><strong>金桔汇外汇交易平台</strong><span>UI设计 / 视觉设计</span></div>
              
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
      <div className="mobileInfo">
        <Info  />
      </div>
      
    </div>
  );
}

export default Resume;
