import React from 'react'
import {  Form, Input, Button, Radio, DatePicker } from 'antd'
import 'leaflet/dist/leaflet.css'
import {globalInfo} from './test'


function FormAntd({onFinishLoginForm}) {

  // const onFinishLoginForm = (values) => {
  //   globalInfo.name = values.name
  //   globalInfo.age = values.age
  //   globalInfo.gender = values.gender
  //   console.log(values);
  // }

  return (
    <Form onFinish={onFinishLoginForm}>
      <Form.Item label='Name' name={'name'} rules={[{
        required : true, type : 'name', message : 'Please enter a name'
      }]} >
        <Input/>
      </Form.Item>
      <Form.Item label='Age' name={'age'} rules={[{
        required : true, message : 'Please enter your age'
      }]} >
        <DatePicker/>
      </Form.Item>
      <Form.Item label='Gender' name={'gender'} rules={[{
        required : true, message : 'choose your gender'
      }]} >
        <Radio.Group>
          <Radio value="male"> Male </Radio>
          <Radio value="female"> Female </Radio>
        </Radio.Group>
      </Form.Item>
      <Button type='primary' htmlType='submit'>Continue</Button>
    </Form>
  )
}

export default FormAntd;