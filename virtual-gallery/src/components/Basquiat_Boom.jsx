import * as PANOLENS from "panolens";

let panorama = new PANOLENS.VideoPanorama( 'assets/bb.mp4', { autoplay: false, muted: false } );

let viewer = new PANOLENS.Viewer({
  container: document.querySelector("#bb"),
  output: 'console'
});


function createPoint(x = 0, y = 0, z = 0, hoverText = 'Infospot'){
  let infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);

  infospot.position.set(x, y, z);
  infospot.addHoverText(hoverText);

  panorama.add(infospot);

  return infospot;
}

let infspot1_pic1 = createPoint(4940.04, 720.35, 109.10, 'Picture 1');
    

setInterval(function(){
  let currentTime = panorama.videoElement.currentTime;

  if(!panorama.isVideoPaused()) console.log(currentTime);

  if(currentTime > 31 && currentTime < 47){
    infspot1_pic1.show();
  }
  else{
    infspot1_pic1.hide();
  };
},1000);


viewer.add(panorama);


const BB = () => {
  return (
    <>
      <div id="bb" htmlstyle="height:100%">
        {}
      </div>
    </>
  );
};

export default BB;
