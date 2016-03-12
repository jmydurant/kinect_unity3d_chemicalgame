#pragma strict

function Start () {

}
var beep :AudioClip;
var menuskin :GUISkin;
var menuarea :Rect;
var button1 :Rect;
var button2 :Rect;
var select : String;
function OnGUI()
{
   GUI.skin=menuskin;
   GUI.BeginGroup(menuarea);
   if(GUI.Button(Rect(button1),"实验成功!\nCaCO3 + 2HCl = CaCl2 + CO2 +H2O"))
   {
         audio.PlayOneShot(beep);
         Application.LoadLevel(select);
   }
   if(GUI.Button(Rect(button2),"返回主菜单"))
   {
         audio.PlayOneShot(beep);
         Application.LoadLevel(select);
   }
   GUI.EndGroup();
}
function Update () {

}
@script RequireComponent(AudioSource)