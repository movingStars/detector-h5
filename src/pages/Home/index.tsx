import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';

const Home = () => {
  const history = useHistory();

  useEffect(() => {
    document.title = '拇外翻检测';
  }, []);

  const jumpTo = () => {
    history.push('/example');
  };

  return (
    <div className="home-page">
      <div className="home-logo" />
      <div className="home-title">拇外翻检测工具</div>
      <div className="home-title-sec">此系统为用户提供的检测数据仅供参考。</div>
      
      <div className="foot-compare">
        <div className="compare-text">
          <div>正常</div>
          <div>外翻</div>
        </div>
        <div className="compare-img" />
      </div>

      <div className="start-detector" onClick={jumpTo} />

      <div className="home-tips"><b>拇外翻</b>不仅会造成足部变形，影响美观，<b>还会出现疼痛和一系列并发症</b>（如拇囊炎、爪形趾、鸡眼等），并且在步态中造成错误的受力，<b>影响足踝、椎骨及全身骨骼的健康</b>。所以我们应该清楚如何来预防、矫治拇外翻。及早发现，及时矫正正是应对这一问题的最好方法，避免以后带来的种种烦恼。</div>
    </div>
  );
};

export default Home;
