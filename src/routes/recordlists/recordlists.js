import React from 'react';
import { connect } from 'dva';
import styles from '../recordlists.css';

import { Table } from 'antd';
import { node } from 'prop-types';
import axios from 'axios'

// {
//   "record_id": "00001",
//   "record_date": "2019-08-23",
//   "stuid": 5,
//   "skill_score": 88,
//   "theory_score": null,
//   "analysis": null,
//   "assistant_way": null,
//   "assistant_person": null,
//   "week_record": null,
//   "status": 1
// }
const columns = [
  {
    title: '序号',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '日期',
    dataIndex: 'record_date',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '理论',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '技能',
    dataIndex: 'theory_score',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '分析和解决',
    dataIndex: 'assistant_person',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
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
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
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
    name: 'John Brown',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    name: 'John Brown',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    name: 'John Brown',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
     name: 'John Brown',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}


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
          <p>11 :<span>11</span></p>
          <p>22 :<span>22</span></p>
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

axios.get('http://127.0.0.1:9001/emstu/student/recordlists',{
  params: {
    'cid': '000000000005'
  }
}).then((res)=>{
  console.log(res)
})

export default connect()(IndexPage);
