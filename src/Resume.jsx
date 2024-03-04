import './Resume.less';
import Info from './Info';

const Resume = (props) =>{
  return (
    <div className={props.show==1?"resume active":"resume"}>
      <div className="resumeLeft">
        <div className="resumeInfo">
          <img src={require("./assets/images/photo.png")} alt="" />
          <div className="resumeName"><strong>雷涛涛</strong><span>UI设计师</span></div>
          <p>男 | 1986-05-02 | 广西</p>
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
              <div className="workTitle"><span>2022.12-2024.03</span><strong>深圳市星辰瀚科技有限公司</strong><span>高级UI运营设计师<p>运营部</p></span></div>
              
              <div className="workText">
                <p><strong>评审分析: </strong>确定项目的整体需求，理解产品或项目的目标和用户需求。 与产品经理、业务分析师等合作，参与需求讨论和分析，提出对设计的理解。</p>
                <p><strong>视觉设计: </strong>1. 负责设计硬件部门 APP的 UI  设计和执行用户界面，确保产品视觉和交互设计符合用户体验最佳实践。<br />2. 设计并执行海外游戏品牌推广活动，包括社交媒体图像、广告和在线宣传物料;<br />3. 通过数据分析和反馈，优化广告和宣传活动，提高转化率;<br />4. 使用 AI 辅助设计提高质量和效率</p>
                <p><strong>视频制作: </strong>海外游戏营销短视频剪辑、修剪和添加特效以提高用户转化。</p>
                <p><strong>前端开发: </strong> 海外游戏类和旅游类投放落地页的部分前端开发，使用 WordPress  开发部分网站;</p>
                <p><strong>后期跟进: </strong>与开发团队保持密切沟通，解释设计细节和交付设计资源，确保设计能够准确地转化为可用的产品界面。协助或参与用户测试，收集用户反馈，根据用户测试结果，提供有针对性的设计调整，以优化用户界面和用户体验。</p>
                <p><strong>工作成果: </strong>在职期间工作受到领导与同事的高度认可，通过深入了解用户需求和行为，提出并实施 UI  改进，使产品的用户体验得到显著提升。设计并优化各类营销物料，包括海报、传单、广告横幅等，与投放团队紧密协作成功将点击率提高了15%，促销活动参与度提高了30%</p>
              </div>
            </li>
            <li>
              <div className="workTitle"><span>2019.07-2022.11</span><strong>置尚软件（深圳）有限公司</strong><span>高级UI设计师<p>技术部</p></span></div>
              
              <div className="workText">
                <p><strong>评审分析: </strong>制定UI设计界面规范，更改原型图交互效果产品初期挖掘用户需求，协助产品经理捋顺产品逻辑;</p>
                <p><strong>视觉设计: </strong>1. 配合市场部推广运营设计相关广告和推广页<br />2. 负责APP产品视觉设计及交互效果，提升产品品质与用户体验;<br />3. 配合产品经理对公司线上活动广告宣传进行创意策划、排版、视觉设计;</p>
                <p><strong>视频制作: </strong>设计制作lottie动画，制作app广告DM视频;</p>
                <p><strong>前端开发: </strong>协助前端工程师少量落地页的部分前端开发;</p>
                <p><strong>后期跟进: </strong>配合开发人员还原产品设计完善产品细节，并对产品交互进行改进;</p>
                <p><strong>工作成果: </strong>在职期间工作受到市场部同事的高度认可，大幅提升了市场部相关需求的运营设计满意度，APP用户留存率上升14%，推广页客户转化率提高20%。</p>
              </div>
            </li>
            <li>
              <div className="workTitle"><span>2018.03-2019.06</span><strong>深圳市速易网络科技有限公司</strong><span>UI设计师 / 运营设计师<p>产品部</p></span></div>
              
              <div className="workText">
                <p><strong>评审分析: </strong>分析当下流行趋势，定义并迭代符合金融行业的运营视觉设计方案;</p>
                <p><strong>视觉设计: </strong>1. 负责金融类移动端网站页面的整体美工创意、设计<br />2. 根据产品方案，完善网站页面和手机APP产品界面;<br />3. 对产品部投放的信息流广告进行设计;</p>
                <p><strong>前端开发: </strong>落地页H5页面和微信小程序的部分前端开发;</p>
                <p><strong>后期跟进: </strong>负责跟踪产品效果及用户体验，提出设计优化方案;</p>
                <p><strong>工作成果: </strong>在职期间工作获得产品经理的好评，多次获得季度考核S评级。</p>
              </div>
            </li>
            <li>
              <div className="workTitle"><span>2010.07-2018.01</span><strong>深圳市星翼创想网络科技有限公司</strong><span>网页设计师<p>技术部</p></span></div>
              
              <div className="workText">
                <p><strong>界面设计: </strong>
                  1. 负责PC端和移动端界面设计，跟踪产品效果，提出设计改善方案，把控设计周期和效果图设计;<br />2. 根据客户需求，设计手机网站页面和小程序产品界面;<br />

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
              <div className="proTitle"><span>2023.07-2023.10</span><strong>SVOFX B端项目改版</strong><span>UI设计<p>星辰翰科技</p></span></div>
              
              <div className="proText"><strong>项目描述：</strong>随着海外外汇市场的不断发展，和用户对产品的更高要求决定重新改版专注于机构投资者的SVOFX B端平台。SVOFX 旨在提供高效、安全、以及全方位的外汇交易服务，满足机构客户对于交易、风险管理、数据分析等方面的专业需求。提高专业的外汇交易工具和界面，满足机构投资者对高效交易的需求。制定平台的整体外观和交互流程，确保用户能够便捷地进行外汇交易。成功打造一个安全、合规的外汇交易平台，取得用户的信任。</div>
              
              <div className="proText"><strong>项目业绩：</strong>通过深入了解机构用户的交易需求，设计了专业且直观的外汇交易界面，提高了用户交易的效率。设计了个性化的风险管理界面，帮助机构客户更好地监控和管理外汇交易风险，增强了平台的专业性。在界面设计中充分考虑了安全性和合规性要求，通过视觉设计强调平台的安全性和符合监管标准，增强用户信任感。</div>
            </li>
            <li>
              <div className="proTitle"><span>2022.01-2022.11</span><strong>Gtrader APP</strong><span>UI设计<p>置尚软件</p></span></div>
              
              <div className="proText"><strong>项目描述：</strong>公司投资交易平台 APP 项目改版。主导完成新版本的交互和视觉输出，参与用户模型、设计分析、风格定义、设计规范等环节。基于国外用户使用习惯对产品的整天结构进行体验优化，并对多个页面进行设计升级。负责设计新的用户界面，确保页面布局和元素的视觉吸引力。制作用户界面的高保真设计，包括图标、按钮、表单等，以提升整体用户体验。设计新的交互流程，以确保用户在进行投资交易时能够轻松而直观地完成操作。</div>
              
              <div className="proText"><strong>项目业绩：</strong>通过重新设计用户界面和优化交互流程，成功提高了用户体验指数，用户满意度增长10%。制定并实施设计规范，确保设计一致性，为整个项目提供了统一的视觉风格和品牌形象。</div>
            </li>
            <li>
              <div className="proTitle"><span>2020.08-2021.12</span><strong>FXnavi APP</strong><span>UI设计 / 视觉设计<p>置尚软件</p></span></div>
              
              <div className="proText"><strong>项目描述：</strong>负责 APP 的视觉设计，根据产品需求完成 UI 效果图设计。负责推广网页设计、APP 视觉效果的维护以及界面视觉效果的输出。</div>
              <div className="proText"><strong>项目业绩：</strong>设计了用户培训的图文材料，简化了机构用户学习和使用平台的过程，提高了用户快速上手的能力。</div>
            </li>
            <li>
              <div className="proTitle"><span>2019.07-2021.12</span><strong>金桔汇外汇交易平台</strong><span>UI设计 / 运营设计<p>置尚软件</p></span></div>
              
              <div className="proText"><strong>项目描述：</strong>优化官网设计，迭代app视觉设计提升视觉效果，协助开发调试app还原设计图以及改善app交互，动效设计优化用户体验。负责推广落地页设计、banner广告设计。</div>
              <div className="proText"><strong>项目业绩：</strong>与开发团队保持紧密的沟通，确保设计方向与技术实现的协同，有效减少了设计到开发的返工率。参与项目上线推广活动的视觉设计，提供了吸引机构客户的设计元素，助力项目成功上线和推广。</div>
            </li>
            <li>
              <div className="proTitle"><span>2018.11-2019.02</span><strong>速易网络合作方后台管理系统</strong><span>UI设计 / 前端<p>速易网络</p></span></div>
              
              <div className="proText"><strong>项目描述：</strong>速易网络合作方后台管理系统改版，提升视觉效果，优化用户体验。负责产品的UI设计、页面交互、前端代码。</div>
              <div className="proText"><strong>项目业绩：</strong>成功为该B端项目打造了专业、安全、以及用户友好的界面，取得了用户的认可，并在项目上线后实现了预期的市场推广效果。</div>
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
