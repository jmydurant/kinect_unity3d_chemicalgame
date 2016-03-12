#pragma strict

//private var follow : boolean = false;
//private var collideTime : int = 0;
var cup1Move = 0;
var cup2Move = 0;
var tube1Move = 0;
var tube2Move = 0;
var NzMove = 0;
var have = 0; 
var ShowCO2 = 0;
var time = 0;
var Nzpos : GameObject;
var Cup1pos : GameObject;
var Cup2pos : GameObject;
var Tube1pos : GameObject;
var Tube2pos : GameObject;
var Win : GameObject;
var lenth = 0;
var HCltag : GameObject;
var Nzlift;
var Cup1lift;
var Cup2lift;
var Tube1lift;
var Tube2lift;
var flag = 0;
var cnt = 0;
var zhuan = 0;
var ShowHCl = 0;
var canShow = 0;

function Start () {
		Nzpos = GameObject.FindWithTag ("Nzpos");
		Cup1pos = GameObject.FindWithTag ("Cup1pos");
		Cup2pos = GameObject.FindWithTag ("Cup2pos");
		Tube1pos = GameObject.FindWithTag ("Tube1pos");
		Tube2pos = GameObject.FindWithTag ("Tube2pos");
		Win = GameObject.FindWithTag("Success");
		Win.SetActive(false);
		HCltag = GameObject.FindWithTag("HCltag");
		HCltag.SetActive(false);
}

function Update () {
		var Rightpow = GameObject.FindWithTag ("Rightpow").transform;
		var Rightshoulder = GameObject.FindWithTag ("Rightshoulder").transform;
		var RightH = GameObject.FindWithTag ("Righthand").transform;
		var Cup1 = GameObject.FindWithTag ("Cup").transform;
		var Cup2 = GameObject.FindWithTag ("Cup2").transform;
		var Tube1 = GameObject.FindWithTag ("Tube1").transform;
		var Tube2 = GameObject.FindWithTag ("Tube2").transform;
		var HCl = GameObject.FindWithTag ("HCl").transform;
		var CO2 = GameObject.FindWithTag ("CO2").transform;
		var Orign = GameObject.FindWithTag ("Orign").transform;
		var Nz = GameObject.FindWithTag ("Niezi").transform;
		var Wrist = GameObject.FindWithTag ("Rightwrist").transform;
		var Elbow = GameObject.FindWithTag ("Rightelbow").transform;
		/*var rls = GameObject.FindWithTag ("rls").transform;
		var rle = GameObject.FindWithTag ("rle").transform;
		var rlw = GameObject.FindWithTag ("rlw").transform;
		var rlp = GameObject.FindWithTag ("rlp").transform;
		var rlh = GameObject.FindWithTag ("rlh").transform;
		rls.position = Rightshoulder.position;
		rle.position = Elbow.position;
		rlw.position = Wrist.position;
		rlp.position = RightH.position;*/
		//rlh.position = RightH.position;
		if(have==0&&((Cup1.position.x-RightH.position.x)*(Cup1.position.x-RightH.position.x)+
		   (Cup1.position.y-RightH.position.y)*(Cup1.position.y-RightH.position.y)+
		   (Cup1.position.z-RightH.position.z)*(Cup1.position.z-RightH.position.z)<15)){
			cup1Move++;
		}
		if(have==0&&((Cup2.position.x-RightH.position.x)*(Cup2.position.x-RightH.position.x)+
		   (Cup2.position.y-RightH.position.y)*(Cup2.position.y-RightH.position.y)+
		   (Cup2.position.z-RightH.position.z)*(Cup2.position.z-RightH.position.z)<15)){
			cup2Move++;
		}
		if(have==0&&((Tube1.position.x-RightH.position.x)*(Tube1.position.x-RightH.position.x)+
		   (Tube1.position.y-RightH.position.y)*(Tube1.position.y-RightH.position.y)+
		   (Tube1.position.z-RightH.position.z)*(Tube1.position.z-RightH.position.z)<15)){
			tube1Move++;
		}
		if(have==0&&((Tube2.position.x-RightH.position.x)*(Tube2.position.x-RightH.position.x)+
		   (Tube2.position.y-RightH.position.y)*(Tube2.position.y-RightH.position.y)+
		   (Tube2.position.z-RightH.position.z)*(Tube2.position.z-RightH.position.z)<15)){
			tube2Move++;
		}
		if(have==0&&((Nz.position.x-RightH.position.x)*(Nz.position.x-RightH.position.x)+
		   (Nz.position.y-RightH.position.y)*(Nz.position.y-RightH.position.y)+
		   (Nz.position.z-RightH.position.z)*(Nz.position.z-RightH.position.z)<15)){
			NzMove++;
		}
		/*if(cntLeft<=3&&cntRight<=3&&((Cup.position.x-RightH.position.x)*(Cup.position.x-RightH.position.x)+
		   (Cup.position.y-RightH.position.y)*(Cup.position.y-RightH.position.y)+
		   (Cup.position.z-RightH.position.z)*(Cup.position.z-RightH.position.z)<15)){
			cup1Move++;
		}*/
		if((have==0||have==1)&&cup1Move>=1){
			have = 1;
			Cup1.transform.position.x = RightH.position.x;
			Cup1.transform.position.y = RightH.position.y;
			Cup1.transform.position.z = RightH.position.z;
		}
		if((have==0||have==2)&&cup2Move>=1){
			have = 2;
			Cup2.transform.position.x = RightH.position.x;
			Cup2.transform.position.y = RightH.position.y;
			Cup2.transform.position.z = RightH.position.z;
		}
		if((have==0||have==3)&&tube1Move>=1){
			have = 3;
			HCltag.SetActive(true);
			lenth++;
			if(lenth>12)
				HCltag.SetActive(false);
			Tube1.transform.position.x = RightH.position.x;
			Tube1.transform.position.y = RightH.position.y;
			Tube1.transform.position.z = RightH.position.z;
		}
		if((have==0||have==4)&&tube2Move>=1){
			have = 4;
			Tube2.transform.position.x = RightH.position.x;
			Tube2.transform.position.y = RightH.position.y;
			Tube2.transform.position.z = RightH.position.z;
		}
		if((have==0||have==5)&&NzMove>=1){
			var angle  = new Vector3(0,0,259);
			Nz.transform.rotation.eulerAngles = angle;
			have = 5;
			Nz.transform.position.x = RightH.position.x;
			Nz.transform.position.y = RightH.position.y;
			Nz.transform.position.z = RightH.position.z;
		}
		if(Nz.position.y>5){
			Nzlift = 1;
		}
		if(Cup1.position.y>5){
			Cup1lift = 1;
		}
		if(Cup2.position.y>5){
			Cup2lift = 1;
		}
		if(Tube1.position.y>8){
			Tube1lift = 1;
		}
		if(Tube2.position.y>8){
			Tube2lift = 1;
		}
		if(Nzlift==1&&Nz.position.y<=0.5){
			Nzlift = 0;
			NzMove = 0;
			have = 0;
			var angle1  = new Vector3(0,0,0);
			Nz.transform.rotation.eulerAngles = angle1;
			Nz.position = Nzpos.transform.position;
		}
		if(Cup1lift==1&&Cup1.position.y<=-2){
			Cup1lift = 0;
			cup1Move = 0;
			have = 0;
			Cup1.position = Cup1pos.transform.position;
			Cup1.transform.rotation.eulerAngles =  Vector3(270,0,0);
		}
		if(Cup2lift==1&&Cup2.position.y<=-2){
			Cup2lift = 0;
			cup2Move = 0;
			have = 0;
			Cup2.position = Cup2pos.transform.position;
			Cup2.transform.rotation.eulerAngles =  Vector3(270,0,0);
		}		
		if(Tube1lift==1&&Tube1.position.y<=0){
			Tube1lift = 0;
			tube1Move = 0;
			have = 0;
			Tube1.position = Tube1pos.transform.position;
			Tube1.transform.rotation.eulerAngles =  Vector3(270,0,0);
		}		
		if(Tube2lift==1&&Tube2.position.y<=-2){
			Tube2lift = 0;
			tube2Move = 0;
			have = 0;
			Tube2.position = Tube2pos.transform.position;
			Tube2.transform.rotation.eulerAngles =  Vector3(270,0,0);
		}
		if(zhuan==1)
			ShowHCl++;
		if(ShowHCl>12)
			HCl.position = Orign.position;
		if(have!=0){
			if(Elbow.position.y>Wrist.position.y&&Wrist.position.y>15&&zhuan==0){
				zhuan = 1;
				if(have == 3){
					Tube1.transform.rotation.eulerAngles = Vector3(190,90,90);
					if(ShowHCl<12){
						HCl.position.x = Cup1.position.x-4;
						HCl.position.y = Cup1.position.y+12;
						HCl.position.z = Cup1.position.z;
					}
					ShowCO2 = 1;
				}				
				if(have == 4){
					Tube2.transform.rotation.eulerAngles = Vector3(190,90,90);
					if(ShowHCl<12){
						HCl.position.x = Cup1.position.x-4;
						HCl.position.y = Cup1.position.y+12;
						HCl.position.z = Cup1.position.z;
					}
					ShowCO2 = 1;
				}				
				if(have == 1){
					//Cup1.transform.rotation.eulerAngles = Vector3(300,90,0);
				}				
				if(have == 2){
					//Cup2.transform.rotation.eulerAngles = Vector3(300,90,0);
				}
			}
			if(Elbow.position.y<Wrist.position.y&&zhuan==1){
				zhuan = 0;
				ShowHCl = 0;
				if(have == 3){
					Tube1.transform.rotation.eulerAngles = Vector3(270,0,0);
					HCl.position = Orign.position;
					ShowHCl = 0;
				}				
				if(have == 4){
					Tube2.transform.rotation.eulerAngles = Vector3(270,0,0);
					HCl.position = Orign.position;
					ShowHCl = 0;
				}				
				if(have == 1){
					//Cup1.transform.rotation.eulerAngles = Vector3(270,0,0);
				}				
				if(have == 2){
					//Cup2.transform.rotation.eulerAngles = Vector3(270,0,0);
				}
			}
		}
		if(ShowCO2 == 1){
			if(time>50&&time<100){
				CO2.position.x = Cup1.position.x-3.5;
				CO2.position.y = Cup1.position.y+3.5;
				CO2.position.z = Cup1.position.z;
			}
			if(time>=100){
				Win.SetActive(true);
				CO2.position = Orign.position;
				ShowCO2 = 0;
				time = 0;
			}
			time++;
		}
}

/*function Follow(){
	follow = true;
	var Cupp = GameObject.FindWithTag ("Cup").transform;
	var LeftH = GameObject.FindWithTag ("Lefthand").transform;
	Cupp.transform.position.x = LeftH.position.x;
	Cupp.transform.position.y = LeftH.position.z;
	Cupp.transform.position.z = LeftH.position.y;
}*/