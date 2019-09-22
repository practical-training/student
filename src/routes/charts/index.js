import React, { useState, useEffect } from "react";
import { connect } from "dva";
import { Switch } from "antd";
import style from "./index.css";
import Header from "../../components/header";
import "antd/dist/antd.css";
import echarts from "echarts";
function Login(props) {
  let [list] = useState([
    "1703D",
    "1704A",
    "1704A",
    "1704A",
    "1704A",
    "1704A",
    "1704A",
    "1704A",
    "1704A",
    "1704A",
    "1704A",
    "1704A",
    "1704A",
    "1704A",
    "1704A",
    "1704A",
    "1704A"
  ]);
  let [pro] = useState(["张三", "张立", "王强"]);
  let [current, setCurrent] = useState(0);
  let [echartsType, setechartsType] = useState("line");
  // 基于准备好的dom，初始化echarts实例
  useEffect(() => {
    var myChart = echarts.init(document.getElementById("president"));
    myChart.setOption({
      title: {
        text: "XX同学的日周考成绩统计图",
        subtext: "仅供参考",
        lineHeight:10,
        textStyle: {
          fontSize: "70%"
        }
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        itemWidth: 10,
        itemHeight: 10,
        data: ["技能", "理论"],
        textStyle: {
          fontSize: "70%"
        }
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
        },
        itemSize: 8
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "08-01",
          "08-02",
          "08-03",
          "08-04",
          "08-05",
          "08-06",
          "08-07",
          "08-09",
          "08-10",
          "08-11",
          "08-12",
          "08-13"
        ]
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value}"
        }
      },
      series: [
        {
          name: "技能",
          type: echartsType,
          data: [30, 50, 70, 22, 25, 76.7, 36.05, 60, 32, 20, 8, 23],
          markPoint: {},
          markLine: {
            data: [{ type: "average", name: "平均值" }]
          }
        },
        {
          name: "理论",
          type: echartsType,
          data: [30, 60, 90, 30, 24, 25, 70, 76, 82.2, 49, 20, 60, 19],
          markPoint: {
            data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
          },
          markLine: {
            data: [
              { type: "average", name: "平均值" },
              [
                {},
                {
                  symbol: "circle",
                  label: {},
                  type: "max",
                  name: "最高点"
                }
              ]
            ]
          }
        }
      ]
    });
  });
  
 
  let onChange = checked => {
    if (checked) {
      setechartsType("line");
    } else {
      setechartsType("bar");
    }
  };
  return (
    <div className={style.wrap}>
      <Header title="重点关注学生考成绩录入统计图" />
      <div className={style.nav}>
        <div className={style.tabclass}>
          <div className={style.choose}>选择班级 ：</div>
          <div className={style.list}>
            {list.map((item, index) => (
              <span
                key={index}
                className={current === index ? style.active : ""}
                onClick={() => setCurrent(index)}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className={style.bot}>
          <div className={style.choose}>名单 ：</div>
          <div className={style.botPro}>
            {pro.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
            <span>{pro.length}/人</span>
          </div>
          <div className={style.switch}>
            <Switch defaultChecked onChange={onChange} size="small" />
            <span style={{ marginLeft: "5px" }}>柱形图/线形图</span>
          </div>
        </div>
      </div>
      <div id="president" style={{ width: "100%", height: "613px" }}></div>
    </div>
  );
}

Login.propTypes = {};

export default connect()(Login);
