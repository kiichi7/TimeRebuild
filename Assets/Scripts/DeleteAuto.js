#pragma strict

function Start () {

}

function Update () {

	if (transform.position.y < -10) Destroy(gameObject);

}