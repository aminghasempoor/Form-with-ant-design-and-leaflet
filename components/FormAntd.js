import React, {useState} from 'react'
import { Steps, Form, Input, Button } from 'antd'
import { LoginOutlined, ProfileOutlined } from "@ant-design/icons"
import Mapantd from './Map/index'
import 'leaflet/dist/leaflet.css'

function PersonalInfo({onFinish}){
  return(
    <Form onFinish={onFinish}>
      <Form.Item label='Email' name={'emailAddress'} rules={[{
        required : true, type : 'email', message : 'Please enter a valid Email'
      }]} >
        <Input/>
      </Form.Item>
      <Form.Item label='Password' name={'password'} rules={[{
        required : true, message : 'Please enter your password'
      }]} >
        <Input.Password/>
      </Form.Item>
      <Button type='primary' htmlType='submit'>Continue</Button>
    </Form>
  )
}

function Finish (){
  return <h1>Congratulation</h1>
}


function FormAntd() {
  const [location, setLocation] = useState({lng : 51.505, lat : -0.09})
  const [current, setCurrent] = useState(0);
  const [loginDetails, setLoginDetails] = useState(null)
  const onFinishLoginForm = (values) => {
    setLoginDetails(values);
    setCurrent(1)
    console.log(values);
  }

  const FormLevel = [
    <PersonalInfo onFinish={onFinishLoginForm}/>,
    <Mapantd center={location} location={location} draggable={true}
    title='sample text' onDragMarker={(e) => {
      console.log('e', e);
      let loc = {lat : e.lng, lng : e.lat}
      setLocation(loc)
    }}/>,
  ]

  return (
    <div>
      <Steps style={{padding : '32px 16px'}} onChange={setCurrent} current={current}>
        <Steps.Step title="Login" icon={<LoginOutlined/>} />
        <Steps.Step title="Profile" icon={<ProfileOutlined/>} />
      </Steps>
      {FormLevel[current]}
    </div>
  )
}

export default FormAntd;