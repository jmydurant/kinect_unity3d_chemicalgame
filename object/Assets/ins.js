#pragma strict
static var instruction :Texture2D;
var instr :Texture2D;
function Start () {
//guiTexture.texture = instr;
instruction = instr;
}

function Update () {
guiTexture.texture = instruction;
}