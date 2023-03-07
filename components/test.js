import { Steps, Form, Input, Button, Radio } from 'antd'
import { LoginOutlined, ProfileOutlined } from "@ant-design/icons"
import React, {useState} from 'react'
import Mapantd from './Map/index'
import FormAntd from './FormAntd'

export const globalInfo = {}

const Finish = () => {
  return <Button onClick={() => console.log(globalInfo)}>Finish</Button>
}

const FormDisabledDemo= () => {
  const [position, setPosition] = useState({lat:0,lng:0})
  const [current, setCurrent] = useState(0);
  const [loginDetails, setLoginDetails] = useState()

  // const onFinishLoginForm = (values) => {
  //   setLoginDetails(values);
  //   setCurrent(current + 1)
  //   console.log(values);
  // }

  const onFinishLoginForm = (values) => {
    globalInfo.name = values.name
    globalInfo.age = values.age
    globalInfo.gender = values.gender
    setCurrent(1)
    console.log(values);
  }

  function onFinishMap(values){
    globalInfo.city = values.city
    globalInfo.country = values.country
    globalInfo.LatLng = position
    setCurrent(2)
    console.log(position);
  }

  const FormLevel = [
    <FormAntd onFinishLoginForm={onFinishLoginForm}/>,
    <Mapantd position={position} setPosition={setPosition} onFinishMap={onFinishMap}/>,
    <Finish/>,
  ]
  
  return (
    <div>
      <Steps style={{padding : '32px 16px'}} onChange={setCurrent} current={current}
        items={[
        {
          title: 'Login',
          status: 'finish',
          icon: <LoginOutlined />,
        },
        {
          title: 'Verification',
          status: 'finish',
          icon: <ProfileOutlined />,
        },
        {
          title: 'Finish',
          status: 'finish',
          icon: <ProfileOutlined />,
        }
      ]}
      />
      {FormLevel[current]}
    </div>
  );
};

export default FormDisabledDemo;