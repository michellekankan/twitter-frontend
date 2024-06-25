import { Button, Input, Form, Dialog } from "antd-mobile";
import "./index.css";

const initialValues = {
  username: "哈哈哈",
  password: "12345",
};

const Login = () => {
  const [form] = Form.useForm();
  const onSubmit = () => {
    const values = form.getFieldsValue();
    Dialog.alert({
      content: <pre>{JSON.stringify(values, null, 2)}</pre>,
    });
  };

  return (
    <div className="login">
      <Form
        form={form}
        layout="horizontal"
        mode="card"
        initialValues={initialValues}
        footer={
          <Button block color="primary" onClick={onSubmit} size="large">
            Login
          </Button>
        }
      >
        <Form.Item label="Username" name="username">
          <Input placeholder="Enter username" clearable />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input placeholder="Enter password" clearable type="password" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;

/*
initialValues 是一個對象，用於設定表單每個字段的初始值。可有可無。
3. 表單和按鈕
表單使用 Form 組件建立，並通過 useForm() 鉤子獲得 form 實例。這個實例讓你可以在其他地方控制表單行為（如獲取值、設置值等）。
按鈕被設計為表單的腳部（footer 屬性），當按鈕被點擊時觸發 onSubmit 函數。
4. 提交表單
onSubmit 函數首先通過 form.getFieldsValue() 獲取表單當前的值。(獲取各個input裡name裡的值)這個方法回傳一個對象，其中包含了所有表單項的當前值。
5. 顯示提交的值
獲取到的值會以 JSON 格式顯示在一個對話框中。這是通過 Dialog.alert 實現的，其中 content 屬性用一個 <pre> 標籤包裹著 JSON.stringify(values, null, 2) 的結果，這樣可以格式化 JSON 字串，使其易於閱讀。
*/
