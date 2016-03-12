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
   if(GUI.Button(Rect(button1),"盐酸(HCl)"))
   {
   }
   GUI.EndGroup();
}
function Update () {

}
@script RequireComponent(AudioSource)