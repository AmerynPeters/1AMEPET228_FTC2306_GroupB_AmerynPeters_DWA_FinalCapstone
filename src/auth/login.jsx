import React from 'react';
import { useState } from "react";
import { supabase } from "../superbase/client";
import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

function Login ({ setToken }) {
const [formData, setFormData] = useState({
        email: "",
        password: "",
    });


    let navigate = useNavigate();


    function handleInput(e) {
        e.preventDefault();
        const { name, value } = e.target;


        setFormData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }


    async function handleSubmit(e) {
        e.preventDefault();


        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            });


            if (error) throw error;


            setToken(data);
            navigate("/App");
        } catch (error) {
            alert(error);
            console.log(error);
        }
    }

return (
    return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};


export default Login;


