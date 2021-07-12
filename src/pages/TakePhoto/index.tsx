import React, { useEffect } from 'react';
import './index.scss';

const TakePhoto = () => {
  useEffect(() => {
    document.title = '右脚拍摄';
    getMedia();
  }, []);

  const getMedia = () => {  
    if (navigator.mediaDevices === undefined) {
      // @ts-ignore
      navigator.mediaDevices = {};
    }

    if (navigator.mediaDevices.getUserMedia === undefined) {
      navigator.mediaDevices.getUserMedia = function(constraints) {
        // @ts-ignore
        var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        if (!getUserMedia) {
          return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
        }

        return new Promise(function(resolve, reject) {
          getUserMedia.call(navigator, constraints, resolve, reject);
        });
      }
    }

    navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
      var video: any = document.querySelector('video');
      if ("srcObject" in video) {
        video.srcObject = stream;
      } else {
        video.src = window.URL.createObjectURL(stream);
      }
      video.onloadedmetadata = function() {
        video.play();
      };
    })
    .catch(function(err) {
      console.log(err.name + ": " + err.message);
    });
  }
  const takePhoto = () => {  
    var video: any = document.querySelector('video');
    let canvas: any = document.getElementById("canvas");
    canvas.width = video.videoWidth / 2;
    canvas.height = video.videoHeight / 2;
    canvas.style.display = 'block';
    let ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  }

  return (
    <div className="common-page take-phote-page">
      <div className="common-container">
        <div className="common-title" onClick={getMedia}>右脚拍摄</div>

        <div className="camera-box">
          <video id="video" autoPlay src="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"></video>
          <canvas id="canvas" style={{display: 'none'}}></canvas>
        </div>

        <div className="camera-tips">拍摄教程规范，拍摄姿势，将脚对齐按照指示拍摄，拍完点击提交资料。拍摄姿势，拍完点击提交资料。</div>
        <div className="operation-btns">
          <div>重拍</div>
          <div>确认</div>
        </div>
      </div>
    </div>
  );
};

export default TakePhoto;
