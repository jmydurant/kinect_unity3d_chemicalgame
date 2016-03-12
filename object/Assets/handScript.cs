using UnityEngine;
using System.Collections;
using System.Threading;

public class handScript : MonoBehaviour {
	#region 相关变量
	public int cupnum = 5;
	public GameObject[] hands = new GameObject[2];
	public GameObject[] elbows = new GameObject[2];
	public GameObject[] cups = new GameObject[5];
	public GameObject gass;
	public GameObject chemical;
	Vector3 gassPosition;
	Vector3 chemicalPosition;
	Transform[] handTransform = new Transform[2];
	Transform[] elbowTransform = new Transform[2];
	Vector3[] originPosition = new Vector3[5];
	Quaternion[] originRotation = new Quaternion[5];
	Transform[] nowTransform = new Transform[5];
	int[] holdItem = new int[2];      //-1 代表没有物品，其他的用物品的标号表示
	bool PourChemical = false;    //判断是否倾倒了药剂
	bool InResultProc = false;    //判断现在是否正在展示最后试验结果
	int ContinueTime = 0;
	#endregion
	float CalDistance(Vector3 a , Vector3 b)
	{
		return (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) + (a.z - b.z) * (a.z - b.z); 
	}
	// Use this for initialization
	void Start () {

		for(int i = 0;i<cupnum;i++)
		{
			//Debug.Log("fuck" + cups[i].transform.position.x.ToString());
			originPosition[i].Set(cups[i].transform.position.x, cups[i].transform.position.y, cups[i].transform.position.z);
			originRotation[i] = new Quaternion(cups[i].transform.rotation.x, cups[i].transform.rotation.y, cups[i].transform.rotation.z, cups[i].transform.rotation.w);
			nowTransform[i] = cups[i].transform;
		}
		for (int i = 0; i<2; i++) 
		{
			handTransform[i] = hands[i].transform;
			elbowTransform[i] = elbows[i].transform;
			holdItem[i] = -1;
		}
		gassPosition = new Vector3 (gass.transform.position.x, gass.transform.position.y, gass.transform.position.z);
		chemicalPosition = new Vector3 (chemical.transform.position.x, chemical.transform.position.y, chemical.transform.position.z);
	}
	
	// Update is called once per frame
	void Update () {
		for (int i = 0; i<2; i++)
		{
			if(holdItem[i] == -1)
			for(int j = 0;j<cupnum;j++)
			{
				if(CalDistance(cups[j].transform.position , handTransform[i].position) < 20)
				{
					holdItem[i] = j;
					if(holdItem[1 - i] == j) holdItem[1 - i] = -1;  //如果相反的手也拿着那个物体，那么相反的手失去物体
					break;
				}
			}
		}
		for (int i = 0; i<2; i++) 
		{
			if(holdItem[i] != -1)
			{
				int id = holdItem[i];
				nowTransform[id].position = new Vector3(handTransform[i].position.x + 5 - i * 10, handTransform[i].position.y, handTransform[i].position.z);
			}
		}
		for (int i = 0; i<cupnum; i++) 
		{
			if(nowTransform[i].position.y < -5.0)
			{
				for(int id = 0;id<2;id++)
				{
					if(holdItem[id] == i) holdItem[id] = -1;
					nowTransform[i].position = originPosition[i];
					nowTransform[i].rotation = originRotation[i];
				}
			}
		}
		/*******判断倾倒行为******/
		for (int i = 0; i<cupnum; i++) 
		{
			int id = holdItem[i];
			if(PourChemical == false && holdItem[i] != -1 && elbowTransform[i].position.y < handTransform[i].position.y + 0.5 && handTransform[i].position.y > 12)
			{
				Debug.Log("pour!!");
				Quaternion rotation = Quaternion.identity;
				rotation.eulerAngles = new Vector3(10 + 160 * i , 90 , 0);
				nowTransform[id].rotation = rotation;
				PourChemical = true;
				chemical.transform.position = new Vector3(nowTransform[id].position.x-4,nowTransform[id].position.y+12,nowTransform[id].position.z);
			}
			if(holdItem[i] != -1 && elbowTransform[i].position.y >= handTransform[i].position.y + 0.5 && PourChemical == true)
			{
				Debug.Log("Finish");
				Quaternion rotation = Quaternion.identity;
				rotation.eulerAngles = new Vector3(270,90,0);
				nowTransform[id].rotation = rotation;
				PourChemical = false;
				InResultProc = true;
				ContinueTime = 0;
				chemical.transform.position = new Vector3(chemicalPosition.x,chemicalPosition.y,chemicalPosition.z);
				gass.transform.position = new Vector3(nowTransform [id].position.x - 3.5f, nowTransform [id].position.y + 3.5f, nowTransform [id].position.z);
			}
			if(InResultProc == true) //计算持续反应的时间
			{
				ContinueTime ++;
			}
			if(ContinueTime >= 4000)
			{
				ContinueTime = 0;
				InResultProc = false;
				gass.transform.position = new Vector3(gassPosition.x, gassPosition.y, gassPosition.z);
			}
		}
	}
	
}
