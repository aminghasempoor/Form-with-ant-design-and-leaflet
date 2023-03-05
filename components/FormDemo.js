import React, { useState } from 'react';
import Link from 'next/link';
import {
  Form,
  Input,
  Select,
  DatePicker,
  TreeSelect,
  Steps
} from 'antd';
import { useForm } from 'react-hook-form'
const { TextArea } = Input;

const FormDemo = () => {
  const {register, handleSubmit, formState : {errors, isValid}} = useForm({mode : 'all'})
  const[name, setName] = useState()
  const[country, setCountry] = useState()
  const[city, setCity] = useState()
  const[region, setRegion] = useState()
  const[birth, setBirth] = useState()
  const[text, setText] = useState()

  const onSubmit = data => console.log(data);

  const Input = ({label, required, type, placeholder}) => (
    <div>
      <legend>{label}</legend>
      <input 
        {...register(label, { required })} 
        type={type} placeholder={placeholder}
      />
      {errors[label] && <span>mandatory</span>}
    </div>
  )
  
  const PersonFields = () => {
    <Form.Item label="Country">
      <Select onChange={(e)=> setCountry(e)}>
        <Select.Option value="Iran">Iran</Select.Option>
        <Select.Option value="Iraq">Iraq</Select.Option>
        <Select.Option value="US">US</Select.Option>
      </Select>
    </Form.Item>
  }

  return (
    <div>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        className='form'
      >
        <PersonFields/>
        <Form.Item label="Country">
          <Select onChange={(e)=> setCountry(e)}>
            <Select.Option value="Iran">Iran</Select.Option>
            <Select.Option value="Iraq">Iraq</Select.Option>
            <Select.Option value="US">US</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="City">
          <Select onChange={(e)=> setCity(e)}>
            <Select.Option value="Tehran">Tehran</Select.Option>
            <Select.Option value="Shiraz">Shiraz</Select.Option>
            <Select.Option value="Mashhad">Mashhad</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Region">
          <TreeSelect onChange={(e)=> setRegion(e)}
            treeData={[
              { title: 'Tehran', value: 'tehran', children: [{ title: 'motahary', value: 'motahary' }] },
              {title : 'Shiraz', value: 'shiraz', children: [{title: 'velenjak', value: 'velenjak'}]}
            ]}
          />
        </Form.Item>
        <Form.Item label="Date Of Birth">
          <DatePicker onChange={(e)=> setBirth(e)}/>
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea onChange={(e)=> setText(e)} rows={4} />
        </Form.Item>
        <Form.Item label="Submit">
          <Link href='/' disabled={!name || !country || !city || !region} onClick={handleSubmit}>Send Form</Link>
        </Form.Item>
        <Steps
          current={1}
          items={[
            {
              title: 'In Progress',
            },
            {
              title: 'Waiting',
            },
          ]}
        />
      </Form>
    </div>
  );
};

export default FormDemo;