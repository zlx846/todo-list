import React, { Component } from 'react'
import { Popconfirm, message, Space, Table } from 'antd';



// const data: [{
//   title: string,
//   done: boolean
// }] = JSON.parse(window.localStorage.getItem('todolist')) || []

export class MyList extends Component<any, any> {
  constructor(props) { 
    super(props)
    this.state = {
      dataSource: JSON.parse(window.localStorage.getItem('todolist'))
    }
  }

  public data: [{
    title: string,
    done: boolean,
    key: number
  }] = JSON.parse(window.localStorage.getItem('todolist'))

  // 删除一行
  public deleteClick(id: number) {
    this.state.dataSource.map((todo, i:number) => { 
      if (todo.key === id) { 
        this.state.dataSource.splice(i, 1)
      }
      return this.state.dataSource
    })
    window.localStorage.setItem('todolist', JSON.stringify(this.state.dataSource))
    this.setState({dataSource: JSON.parse(window.localStorage.getItem('todolist'))})
    message.success('删除成功')
    
  }

  public cancel() {
    message.error('Click on No');
  }

  render() {
    
    const columns = [
      {
        title: 'Content',
        dataIndex: 'title',
        key: 'title',
        render: text => <div>{text}</div>,
      },
      {
        title: 'Done',
        dataIndex: 'done',
        key: 'done',
        render: text => <div>{text.toString()}</div>
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a href={`#/edit/${record.key}`}>Edit</a>
            <Popconfirm
              title="Are you sure delete this task?"
              onConfirm={() => {
                this.deleteClick(record.key)
              }}
              onCancel={this.cancel}
              okText="Yes"
              cancelText="No"
            >
              <a href="/">Delete</a>
            </Popconfirm>
          </Space>
        ),
      },
    ];
    return (
      <Table columns={columns} dataSource={this.state.dataSource} />
    )
  }
}

export default MyList
