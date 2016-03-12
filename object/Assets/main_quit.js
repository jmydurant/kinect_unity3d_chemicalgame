#pragma strict

function Start () {

}
var select : String;
var QUIT1 : Texture2D;
var quit2 : Texture2D;
var quitbutton : boolean=false;
function Update () {

}
function OnMouseEnter(){
    guiTexture.texture=quit2;
}
function OnMouseExit(){
    guiTexture.texture=QUIT1;
}
function OnMouseUp()
{
    yield new WaitForSeconds(0.35);
    /*if(quitbutton)
    {*/
       Application.Quit();/*
    }*/
   /* else
    {
    Application.LoadLevel(select);
    }*/
}
@script RequireComponent(AudioSource)