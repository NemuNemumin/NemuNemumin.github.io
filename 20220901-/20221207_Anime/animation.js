
function startAnimation(){
  anime({
    targets: '#animation-box',
    keyframes: [
      {translateX: 580},
      {translateY: 280},
      {translateX: 0},
      {translateY: 0}
    ],
    easing:'linear',
  });
}