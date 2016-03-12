#pragma strict

var cntLeft = 0;
var cntRight = 0;

function Start () {

}

function Update () {
		var LeftH = GameObject.FindWithTag ("Lefthand").transform;
		var RightH = GameObject.FindWithTag ("Righthand").transform;
		//var mainCamera = GameObject.FindWithTag ("Main Camera").transform;
		var Cup = GameObject.FindWithTag ("Tube1").transform;
		if(cntLeft<=3&&cntRight<=3&&((Cup.position.x-LeftH.position.x)*(Cup.position.x-LeftH.position.x)+
		   (Cup.position.y-LeftH.position.y)*(Cup.position.y-LeftH.position.y)+
		   (Cup.position.z-LeftH.position.z)*(Cup.position.z-LeftH.position.z)<15)){
			cntLeft++;
		}
		if(cntLeft<=3&&cntRight<=3&&((Cup.position.x-RightH.position.x)*(Cup.position.x-RightH.position.x)+
		   (Cup.position.y-RightH.position.y)*(Cup.position.y-RightH.position.y)+
		   (Cup.position.z-RightH.position.z)*(Cup.position.z-RightH.position.z)<15)){
			cntRight++;
		}
		if(cntLeft>=1){
			transform.position.x = LeftH.position.x+5;
			transform.position.y = LeftH.position.y;
			transform.position.z = LeftH.position.z;
		}
		if(cntRight>=1){
			transform.position.x = RightH.position.x;
			transform.position.y = RightH.position.y;
			transform.position.z = RightH.position.z;
		}
}