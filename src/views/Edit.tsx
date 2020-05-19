import React, { Component } from 'react';
import { Form, Input, Button, Radio } from 'antd';

import { findById } from '../plugins/ToDos'

class Content extends Component {
  constructor(props) {
    super(props)
    this.id = parseInt(props.match.params.id) || 0
    if (this.id) {
      this.todo = findById(this.id)
    }
    console.log(this.todo, this.id)
  }

  public id = 0

  public todo: {
    title: string, done: boolean, key: string
  }

  public layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };
  public tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };


  onFinish = (vals) => {
    if (this.id) {
      console.log(vals)
      let list = JSON.parse(window.localStorage.getItem('todolist')) || []
      list.map(todo => {
        if (todo.key === this.id) {
          todo.title = vals.title
          todo.done = vals.done
        }
        return todo
      })
      window.localStorage.setItem('todolist', JSON.stringify(list))
    } else { 
      let list = JSON.parse(window.localStorage.getItem('todolist')) || []
      vals.key = list.length ? parseInt(list[list.length - 1].key) + 1 : 1
      list.push(vals)
      window.localStorage.setItem('todolist', JSON.stringify(list))
    }
    
    window.location.hash = '/'
  };

  render() {
    return (
      <div>
        <div>{this.id ? '编辑' : '新建'}todo</div>
        <Form
          {...this.layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please input your doto-title!' }]}
          >
            <Input placeholder={this.todo? this.todo.title: ''} />
          </Form.Item>
          <Form.Item
            label="done"
            name="done"
            rules={[{ required: true, message: 'Please select your doto-state!' }]}
          >
            <Radio.Group value={false}>
              <Radio value={false}>not done</Radio>
              <Radio value={true}>done</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item {...this.tailLayout}>
            <Button type="primary" htmlType="submit">
              {this.id? 'Save': 'Add'}
          </Button>
          </Form.Item>
        </Form>
      </div>

    );
  }
}

export default Content;