import { Button, Card, Form, Input } from "antd";

const LoginCard = () => {
  return (
    <div className="container-small">
      <Card title="Привет карточка авторизации">
        <Form
          onFinish={(values) => {
            console.log(values);
          }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ type: "email", message: "Не правильный email" }]}
          >
            <Input placeholder="Например говно" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Отправить</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginCard;
