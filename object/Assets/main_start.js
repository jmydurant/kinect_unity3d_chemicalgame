#pragma strict

function Start () {

}
var select : String;
var start1 : Texture2D;
var START2 : Texture2D;
function Update () {

}
function OnMouseEnter(){
    guiTexture.texture=START2;
}
function OnMouseExit(){
    guiTexture.texture=start1;
}
function OnMouseUp()
{
    yield new WaitForSeconds(0.35);
    Application.LoadLevel(select);
}
@script RequireComponent(AudioSource)