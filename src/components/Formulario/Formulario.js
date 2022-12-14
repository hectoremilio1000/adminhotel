import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
  message,
  Typography,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


function Formulario() {
  
    const onFinish = () => {
        
    }


  return (
    <>
      <Typography.Title level={4} style={{ textAlign: "center" }}>
        Agregar Nueva Persona al sistema
      </Typography.Title>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        onFinish={onFinish}
      >
        <Form.Item label="Sexo">
          <Radio.Group>
            <Radio value="apple"> Hombre </Radio>
            <Radio value="pear"> Mujer </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Celular">
          <Input />
        </Form.Item>
        <Form.Item label="Fecha Ingreso">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Día pago">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Monto">
          <InputNumber />
        </Form.Item>

        <Form.Item label="Lugar arrendamiento">
          <Input />
        </Form.Item>

        <Form.Item label="Cargar IDENTIFICACION" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item label="Status">
          <Select>
            <Select.Option value="VENCIDO">VENCIDO</Select.Option>
            <Select.Option value="PROXIMO A VENCER">
              PROXIMO A VENCER
            </Select.Option>
            <Select.Option value="PAGADO">PAGADO</Select.Option>
          </Select>
        </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        
          <Button type="primary">Agregar</Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Formulario;
