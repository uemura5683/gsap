const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = 300;

const canvasW = canvas.width;
const canvasH = canvas.height;
const canvasPosY = canvas.getBoundingClientRect().top;
const canvasPosX = canvas.getBoundingClientRect().left;
const startX = 0;//線開始位置の座標
const endX = canvasW;//線終了位置の座標
const baseY = canvasH / 2;//線の基準Y座標
const controlBaseX = canvasW / 2;//制御点の基準X座標
const controlBaseY = canvasH / 2;//制御点の基準Y座標
//GSAPで制御できるように、制御点をオブジェクトで定義
let controlPoint = { controlX: canvasW / 2, controlY: canvasH / 2 };
let mouseX, mouseY;

//初期状態の線を描画
ctx.beginPath();
ctx.moveTo(startX,baseY);//曲線の始点座標
ctx.quadraticCurveTo(controlPoint.controlX,controlPoint.controlY,endX,baseY);
ctx.stroke();

//canvasの範囲内にカーソルが入った時
canvas.addEventListener('mousemove', function (e) {
  mouseX = e.clientX - canvasPosX;//canvas内のX座標を取得
  mouseY = e.clientY - canvasPosY;//canvas内のX座標を取得
  controlPoint.controlX = mouseX;//カーソル座標を制御点とする
  controlPoint.controlY = mouseY;//カーソル座標を制御点とする

  gsap.to(controlPoint, {
    controlX:mouseX,
    controlY: mouseY,
    duration: 0.2,
    ease:"Power0.easeNone",
    onUpdate: () => {
      //値が更新された後に実行される処理
      ctx.clearRect(0,0,canvasW,canvasH);
      ctx.beginPath();
      ctx.moveTo(startX, baseY);//曲線の始点座標
      //制御点の位置をカーソル座標に連動
      ctx.quadraticCurveTo(controlPoint.controlX,controlPoint.controlY,endX,baseY);
      ctx.stroke();
    }
  });
});

//canvas範囲からカーソルが出たら
canvas.addEventListener('mouseout', function () {
  gsap.fromTo(controlPoint, {
    controlX: mouseX,
    controlY:mouseY,
  }, {
    controlX:controlBaseX,
    controlY: controlBaseY,
    ease:"bounce.inOut",
    onUpdate: () => {
      ctx.clearRect(0,0,canvasW,canvasH);
      ctx.beginPath();
      ctx.moveTo(startX,baseY);//曲線の始点座標
      ctx.quadraticCurveTo(controlPoint.controlX,controlPoint.controlY,endX,baseY);
      ctx.stroke();
    }
  });
})
