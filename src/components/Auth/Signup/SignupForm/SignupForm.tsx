import React from "react";
import { Form, Input, Button } from "antd";
import { useFormik } from "formik";
import styles from "../../Auth.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../../../store/reducers/authReducer";

const SignupForm: React.FC<{}> = ( props ) => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: values => {
            dispatch(register(
                values.email,
                values.password,
                values.firstname,
                values.lastname
            ));
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
                label="Firstname"
                name="firstname"
            >
                <Input
                    className={styles.authInput}
                    name="firstname"
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                />
            </Form.Item>

            <Form.Item
                className={styles.formText}
                label="Lastname"
                name="lastname"
            >
                <Input
                    className={styles.authInput}
                    name="lastname"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                />
            </Form.Item>

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

            <Form.Item
                className={styles.formText}
                label="Confirm password"
                name="confirmPassword"
                rules={[{ required: true, message: 'Please confirm your password!' }]}
            >
                <Input.Password
                    className={styles.authInput}
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                />
            </Form.Item>

            <Button className={styles.submitButton + " " + styles.textButton} type="primary" htmlType="submit">
                Create an account
            </Button>
        </Form>
    )
}

export default SignupForm;