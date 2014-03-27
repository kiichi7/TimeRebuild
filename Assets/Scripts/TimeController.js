#pragma strict
//事件控制器
var theEventController : GameObject;
var thePersonController : GameObject;
//时间序列储存时间运行方式, 需要时偶数个
var timeSeries1 : float[];
var timeSeries2 : float[];
var timeSeries3 : float[];
//正在运行的时间序列
var choosenTimeSeries : float[];
//选择的序列的编号
//private var timeChooser : int;
//是否已经开始时间运行
private var ifStarted : boolean = false;
//时间序列当前的点
private var timePoint : int;
//事件发生时间点
var eventPointTime : float[];
//当前事件发生点(一直循环,确定了就输入触发事件)
var nowEventPoint : int;
//上一刻的时间
private var lastTimer : float;
//现在的时间
var timer : float;

function Start () {

}

function Update () {

	timer += Time.deltaTime;
	if (ifStarted) {

		for (nowEventPoint = 0; nowEventPoint < eventPointTime.length; nowEventPoint++) {
			if ((eventPointTime[nowEventPoint] > lastTimer)&&(eventPointTime[nowEventPoint] < timer)) {		
				theEventController.GetComponent(EventController).SetEventTrue(nowEventPoint);
			}
		}
		
		if (timer > choosenTimeSeries[timePoint + 1]) {
			timePoint ++;
			if (timePoint == (choosenTimeSeries.Length-1)) {
				ifStarted = false;
			}
			else {	
				timer = choosenTimeSeries[timePoint + 1];
				timePoint ++;
			}
		}
		
		lastTimer = timer;
		
	}

}

function StartTime (theValue : int) {

	switch (theValue) {
		case 0: choosenTimeSeries = timeSeries1;
		break;
		case 1: choosenTimeSeries = timeSeries2;
		break;
		case 2: choosenTimeSeries = timeSeries3;
		break;
	}
	timePoint = 0;
	timer = choosenTimeSeries[timePoint];
	thePersonController.GetComponent(PersonHistoryRecord).theTimer = choosenTimeSeries[timePoint];
	ifStarted = true;

}
