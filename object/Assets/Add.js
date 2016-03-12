#pragma strict

function Start () {

}

var CaCO3pos : GameObject;
var got = 0;
var Add = 0;
var Add1 = 0;

function Update () {
	var Nz = GameObject.FindWithTag ("Niezi").transform;
	var Cup = GameObject.FindWithTag ("Cup").transform;
	var Cup1 = GameObject.FindWithTag ("Cup2").transform;
	var CaCO3 = GameObject.FindWithTag ("CaCO3").transform;
	var CaCO3pos = GameObject.FindWithTag ("CaCO3pos").transform;
	if(got==1||(Nz.position.y>CaCO3.position.y&&(Nz.position.x-CaCO3.position.x)*(Nz.position.x-CaCO3.position.x)<40&&
	   (Nz.position.z-CaCO3.position.z)*(Nz.position.z-CaCO3.position.z)<40)){
		got = 1;
		CaCO3.transform.position.x = Nz.position.x;
		CaCO3.transform.position.y = Nz.position.y-5;
		CaCO3.transform.position.z = Nz.position.z;
	}
	if(Add==1||(Cup.position.y<CaCO3.position.y&&(Cup.position.x-CaCO3.position.x)*(Cup.position.x-CaCO3.position.x)<5&&
	   (Cup.position.z-CaCO3.position.z)*(Cup.position.z-CaCO3.position.z)<5)){
	   if(Add == 0){
	    CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	   	CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	   	CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	   	CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	   }
	   else{
	    CaCO3.transform.position.x = Cup.position.x-3;
		CaCO3.transform.position.y = Cup.position.y+3;
		CaCO3.transform.position.z = Cup.position.z;
		CaCO3.transform.position = CaCO3pos.transform.position;
	   }
		Add = 1;
	}
	if(Add1==1||(Cup1.position.y<CaCO3.position.y&&(Cup1.position.x-CaCO3.position.x)*(Cup1.position.x-CaCO3.position.x)<5&&
	   (Cup1.position.z-CaCO3.position.z)*(Cup1.position.z-CaCO3.position.z)<5)){
	   if(Add1 == 0){
	    CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	   	CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	   	CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	   	CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	    CaCO3.transform.Translate(0,-0.2,0);
	   }
	   else{
	    CaCO3.transform.position.x = Cup1.position.x-3;
		CaCO3.transform.position.y = Cup1.position.y+3;
		CaCO3.transform.position.z = Cup1.position.z;
		CaCO3.transform.position = CaCO3pos.transform.position;
	   }
		Add1 = 1;
	}
	//Debug.Log(Nz.position.y);
	//Debug.Log(CaCO3.position.y);
}