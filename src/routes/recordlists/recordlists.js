import React from 'react';
import { connect } from 'dva';
import styles from './css/recordlists.css';
import { Table } from 'antd';
import { node } from 'prop-types';
import axios from 'axios'
import { recordlists} from "../../services/recordlists/recordlists";

let handleBtn = async () => {
    const result = await recordlists({cid:'00001'});
    console.log(result);
  return result
};
console.log(handleBtn())

const columns = [
  {
    title: '序号',
    dataIndex: 'key',
    defaultSortOrder: 'descend',
  },
  {
    title: '日期',
    dataIndex: 'record_date',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '理论',
    dataIndex: 'skill_score',
    defaultSortOrder: 'descend',
  
  },
  {
    title: '技能',
    dataIndex: 'theory_score',
    defaultSortOrder: 'descend',
  
  },
  {
    title: '分析和解决',
    dataIndex: 'assistant_person',
    defaultSortOrder: 'descend',
  
  },
  {
    title: '是否周考',
    dataIndex: 'week_record',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
        title:'11'
      },
      {
        text: 'Jim',
        value: 'Jim',
        title:'11'
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: '操作',
    dataIndex: 'address',
    filters: [
      {
        text: '编辑',
        value: '编辑',
      },
      {
        text: '删除',
        value: '删除',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
  
];

const data = [
  {
    key: '1',
    record_date:"2019-9-20",
    skill_score: 32,
    theory_score: 'fvghtyj',
    assistant_person:'New York No. 1 Lake Park',
    week_record:"是",
    address:['编辑','删除']
  },
  {
    key: '2',
    record_date:"2019-9-20",
    skill_score: 42,
    theory_score: 'asdfgasd',
    assistant_person:'New York No. 1 Lake Park',
    week_record:"是",
    address:['编辑','删除']
  },
  {
    key: '3',
    record_date:"2019-9-20",
    skill_score: 32,
    theory_score: 'London No. 1 Lake Park',
    assistant_person:'New York No. 1 Lake Park',
    week_record:"是",
    address:['编辑','删除']
  },
  {
    key: '4',
    record_date:"2019-9-20",
    skill_score: 32,
    theory_score: 'London No. 2 Lake Park',
    assistant_person:'New York No. 1 Lake Park',
    week_record:"是",
    address:['编辑','删除']
  },
];

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

handleBtn()
function IndexPage() {
  return (
    <div className={styles.content}>
    
      <div className={styles.nav}>
      <p>
        <span>重点学生日周考成绩录入管理系统</span>
      </p>
      </div>
      <div className={styles.tab}>
        <div className={styles.tabNav}>
          <p>讲师 :<span>xx</span></p>
          <p>学生 :<span>xx</span></p>
          <div className={styles.inputs}>
          <input text="text" placeholder="快捷选择其他学生"/>
          <span>x</span>
          </div>
        </div>
        <div className={styles.tabBody}>
        <Table columns={columns} dataSource={data} onChange={onChange} pagination={false} />
        </div>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};


// axios.get('http://127.0.0.1:9001/emstu/student/recordlists',{
 
// }).then((res)=>{
//   console.log(res)
  
// })

export default connect()(IndexPage);
