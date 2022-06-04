import React from "react";
import { Form, Input, Button } from "antd";
import styles from "../../Auth.module.css";
import { login } from "../../../../store/reducers/authReducer";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

const LoginForm: React.FC<{}> = ( props ) => { 
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values =>{
            dispatch(login(values.email, values.password));
        },
    });

    return (
        <Form
            className={styles.authForm}
            name='login'
            layout="vertical"
            onFinish={formik.handleSubmit}
            requiredMark={false}
            autoComplete="off"
        >
            <Form.Item
                className={styles.formText}
                label="Username or e-mail address"
                name="login"
                rules={[{ required: true, message: 'Please input your e-mail!' }]}
            >
                <Input
                    className={styles.authInput}
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
            </Form.Item>

            <Form.Item
                className={styles.formText}
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password
                    className={styles.authInput}
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
            </Form.Item>

            <Button 
                className={styles.submitButton + " " + styles.textButton} 
                type="primary" htmlType="submit"
            >
                Submit
            </Button>
        </Form >
    )
}

export default LoginForm;