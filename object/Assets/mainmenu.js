#pragma strict

function Start () {

}
var beep :AudioClip;
var menuskin :GUISkin;
var menuarea :Rect;
var button1 :Rect;
var button2 :Rect;
var button3 :Rect;
var button4 :Rect;
var button5 :Rect;
var button6 :Rect;
var instr1 :Texture2D;
var instr2 :Texture2D;
var instr3 :Texture2D;
var instr4 :Texture2D;
var instr5 :Texture2D;
var select : String;
function OnGUI()
{
   GUI.skin=menuskin;
   GUI.BeginGroup(menuarea);
   if(GUI.Button(Rect(button1),"碳酸钙和盐酸"))
   {
   	  ins.instruction=instr1;
      audio.PlayOneShot(beep);
   }
   if(GUI.Button(Rect(button2),"酸碱滴定"))
   {
      //audio.PlayOneShot(beep);
      ins.instruction=instr2;
   }
   if(GUI.Button(Rect(button3),"电解水"))
   {
      audio.PlayOneShot(beep);
      ins.instruction=instr3;
   }
   if(GUI.Button(Rect(button4),"硫酸铜和氢氧化钠"))
   {
      audio.PlayOneShot(beep);
      ins.instruction=instr4;
   }
   if(GUI.Button(Rect(button5),"稀释硫酸"))
   {
      audio.PlayOneShot(beep);
      ins.instruction=instr5;
   }
   if(GUI.Button(Rect(button6),"开始"))
   {
      audio.PlayOneShot(beep);
      Application.LoadLevel(select);
   }
   GUI.EndGroup();
}
function Update () {

}
@script RequireComponent(AudioSource)