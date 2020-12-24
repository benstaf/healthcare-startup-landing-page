import React from 'react';
import { FiArrowDown } from 'react-icons/fi';

export default () => (
  <section className="contents" id="contents">
    <article className="providers">
      <div className="providers__draw">
        <img
          src="./assets/illustration-2.svg"
          alt="illustration"
        />
      </div>
      <div className="providers__text-box">
        <h1>招募病人</h1>
        <div className="border" />
        <p>
         在精密医学中，狭窄的患者资格标准通常是瓶颈。 我们的全球网络为快速完成临床试验注册提供了规模。
        </p>
      
      </div>
    </article>
    <div className="providers">
      <div className="providers__text-box">
        <h1>
数据与人工智能
        </h1>
        <div className="border" />
        <p>
          我们加快了临床和临床前数据的共享，并通过相关的机器学习算法加深了对它们的分析。 提供数据时，将邀请您参与相应的项目。
        </p>

      </div>
      <div className="providers__draw">
        <img
          src="./assets/aiml.png"
          alt="illustration"
        />
      </div>
    </div>

    <article className="providers">
      <div className="providers__draw">
        <img
          src="./assets/investor.jpg"
          alt="illustration"
        />
      </div>
      <div className="providers__text-box">
        <h1>资金</h1>
        <div className="border" />
        <p>
        我们得到了私人投资者（风投，家族办公室，天使投资者）的支持，他们希望为现有和新的启动项目提供资金，并有特权使用我们的专有交易流程。
        </p>

      </div>
    </article>


  </section>
);
