import React, { useState } from "react";
import { connect } from "dva";
import style from "./index.css";
import Header from "../../components/header";
import { login, register } from "../../services/login";
import { message } from "antd";
import "antd/dist/antd.css";

function Login(props) {
  //下标
  let [current, setCurrent] = useState(0);
  //btn内容
  let [con, setCon] = useState("登入");
  //用户
  let [username, setUsername] = useState("lisi");
  //密码
  let [password, setPassword] = useState("123456");
  //手机号
  let [phone, setPhone] = useState("");
  //选择
  let [choose, setchoose] = useState(false);
  let [validlength, setValidlength] = useState();
  let arr = ["登入", "注册"];

  //登录
  let handleBtn = async () => {
    if (con === "登入") {
      if (choose === true) {
        setValidlength(24 * 14);
        const result = await login({ username, password, validlength });
        if (result.code === 1) {
          message.info(result.msg);
          props.history.push("/principal");
        } else {
          message.info(result.msg);
        }
      } else {
        const result = await login({ username, password });
        message.info(result.msg);
        props.history.push("/principal");
      }
    }
    if (con === "注册") {
      const result = await register({ username, password, phone });
      message.info(result.msg);
    }
  };
  return (
    <div className={style.wrap}>
      <Header title="重点学生日周考成绩录入管理品台" />
      <div className={style.main}>
        <div className={style.content}>
          <div className={style.title}>网站工程</div>
          <div className={style.nav}>
            {arr.map((item, index) => (
              <span
                key={index}
                className={index === current ? style.active : ""}
                onClick={() => {
                  setCurrent(index);
                  setCon(item);
                }}
              >
                {item}
              </span>
            ))}
          </div>
          <div className={style.username}>
            <input
              type="text"
              placeholder="牛牛号/电话"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className={style.password}>
            <input
              type="password"
              placeholder="请输入密码"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          {con === "注册" ? (
            <div className={style.phone}>
              <input
                type="text"
                placeholder="请输入手机号"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
          ) : (
            <div className={style.rember}>
              <input
                type="checkbox"
                id="rember"
                checked={choose}
                onChange={e => setchoose(e.target.checked)}
              />
              <label htmlFor="rember">两周内自动登录</label>
            </div>
          )}
          <div className={style.btn}>
            <button onClick={handleBtn}>{con}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {};

export default connect()(Login);
