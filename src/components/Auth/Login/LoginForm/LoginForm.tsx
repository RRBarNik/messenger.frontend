import React from "react";
import { Form, Input, Button } from "antd";
import { withFormik, FormikProps } from "formik";
import styles from "../../Auth.module.css";

interface Props {
    submit: (values: LoginFormValuesType) => void;
}

type LoginFormValuesType = {
    login: string,
    password: string
}

const LoginForm: React.FC<FormikProps<LoginFormValuesType> & Props> = ({ handleSubmit, handleChange, values, handleBlur, ...props }) => {
    return (
        <Form
            className={styles.authForm}
            name='login'
            layout="vertical"
            onFinish={handleSubmit}
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
                    name="login"
                    value={values.login}
                    onChange={handleChange}
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
                    value={values.password}
                    onChange={handleChange}
                />
            </Form.Item>

            <Button className={styles.submitButton + " " + styles.textButton} type="primary" htmlType="submit">
                Submit
            </Button>
        </Form >
    )
}

export default withFormik<Props, LoginFormValuesType>({
    mapPropsToValues: () => ({ login: "", password: "" }),
    handleSubmit: (values, { props }) => {
        props.submit(values);
    }
})(LoginForm)