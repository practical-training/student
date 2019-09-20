import React, { useState } from "react";
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

  let onChange = checked => {
    console.log(`switch to ${checked}`);
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
            <Switch defaultChecked onChange={onChange} />
            <span style={{ marginLeft: "5px" }}>柱形图/线形图</span>
          </div>
        </div>
      </div>
      {/* <div id="main" style={{ width: "100%", height: 613 }}></div> */}
    </div>
  );
}

Login.propTypes = {};

export default connect()(Login);
