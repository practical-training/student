import React, { useState, useEffect } from "react";
import "./css/index.css";
import echarts from "echarts";
import { Switch } from "antd";
import "antd/dist/antd.css";
function Principal() {
  let [option] = useState([]);
  let [showgrade, setShowgrade] = useState(false);
  let [echartsType, setechartsType] = useState("line");
  useEffect(() => {
    console.log(echartsType);
    var myChart = echarts.init(document.getElementById("main"));
    myChart.setOption({
      title: {
        padding: 5,
        text: "未来一周气温变化",
        subtext: "纯属虚构"
      },
      legend: {
        data: ["最高气温", "最低气温"]
      },
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: "none"
          },
          dataView: { readOnly: false },
          magicType: { type: ["line", "bar"] },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: "#999"
          }
        }
      },
      series: [
        {
          name: "最高气温",
          type: echartsType,
          data: [11, 11, 15, 13, 12, 13, 10],
          markPoint: {
            data: [
              { type: "max", name: "最大值" },
              { type: "min", name: "最小值" }
            ]
          },
          markLine: {
            data: [{ type: "average", name: "平均值" }]
          }
        },
        {
          name: "最低气温",
          type: echartsType,
          data: [1, -2, 2, 5, 3, 2, 0],
          markPoint: {
            data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
          },
          markLine: {
            data: [
              { type: "average", name: "平均值" },
              [
                {
                  symbol: "none",
                  x: "90%",
                  yAxis: "max"
                },
                {
                  symbol: "circle",
                  label: {
                    normal: {
                      position: "start",
                      formatter: "最大值"
                    }
                  },
                  type: "max",
                  name: "最高点"
                }
              ]
            ]
          }
        }
      ]
    });
  }, [option, echartsType]);
  let onChange = checked => {
    if (checked) {
      setechartsType("line");
    } else {
      setechartsType("bar");
    }
  };
  return (
      <div className="warper">
        <header>重点关注学生考试成绩统计图</header>
        <div className="content">
          <div className="tabclass">
            <span>切换班级</span>
            <span className="class">1703c</span>
            <span className="class">1703E</span>
            <span>
              <Switch defaultChecked onChange={onChange} />
            </span>
          </div>
          <div className="add">
            <span>添加学生</span>
            <input type="text" placeholder="输入姓名" className="useript" />
            <input type="text" placeholder="末位次数" className="countipt" />
            <input
              type="text"
              placeholder="结对子，帮扶对象"
              className="helpipt"
            />
            <button className="addbtn">添加</button>
          </div>
          <div className="wire">
            <div id="main"></div>
          </div>
          <div className="grade">
            <span
              onClick={() => {
                setShowgrade(true);
              }}
            >
              添加成绩+
            </span>
            <span>解决方案+</span>
            <span>查看和编辑该生所有成绩</span>
          </div>
        </div>
        {showgrade ? (
        <div className="dialog">
          <div className="addstudent">
            <p className="tit">新添成绩--xx同学</p>
            <div className="iptbox">
              <p>
                <input type="text" />
                <span>昨天</span>
              </p>
              <p>
                <span>技能</span> <input type="text" placeholder="数字" />
              </p>
              <p>
                <span>理论</span>
                <input type="text" placeholder="0-100之间数字" />
              </p>
            </div>
            <p className="btnbox">
              <button
                className="clearbtn"
                onClick={() => {
                  setShowgrade(false);
                }}
              >
                取消
              </button>
              <button className="surebtn">确定</button>
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
      </div>
     
  );
}
export default Principal;
