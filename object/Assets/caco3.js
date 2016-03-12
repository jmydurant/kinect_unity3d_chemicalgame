#pragma strict

function Start () {

}
var select : String;
var caco3 : Texture2D;
var caco3_2 : Texture2D;
function Update () {

}
function OnMouseEnter(){
    guiTexture.texture=caco3_2;
}
function OnMouseExit(){
    guiTexture.texture=caco3;
}
function OnMouseUp()
{
    yield new WaitForSeconds(0.35);
    Application.LoadLevel(select);
}
@script RequireComponent(AudioSource)