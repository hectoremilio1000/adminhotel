import { Button, Card, Form, Input, Select, Typography } from 'antd'
import { DataStore } from 'aws-amplify';
import React, { useState, useEffect } from 'react'

import { Doctor, Ordenes, Usuario } from '../../models'

const {Item} = Form

function FormularioPrueba() {
  const [ordenes,setOrdenes] = useState([])
  const [nombre, setNombre] = useState("");
    const [ordenSelected, setOrdenSelected] = useState("");
    const [usuarios, setUsuarios] = useState([])
    const [doctores, setDoctores] = useState([])
  const [usuarioSelected, setUsuarioSelected] = useState([]);
  const [doctorSelected, setDoctorSelected] = useState([]);
  const [doctorOrden, setDoctorOrden] = useState(null);

  const [ordenDoctorFinal, setOrdenDoctorFinal] = useState("")

    useEffect(() => {
        DataStore.query(Usuario).then(setUsuarios);
    }, [])

     useEffect(() => {
       DataStore.query(Doctor).then(setDoctores);
     }, []);

  useEffect(() => {
    if (!doctorSelected) {
      return
    }
    DataStore.query(Doctor, doctorSelected).then(setDoctorOrden);
   
  }, [doctorSelected])


  useEffect(() => {
    DataStore.query(Ordenes).then(setOrdenes);
  }, [])
  


    const Selected = (value) => {
        setUsuarioSelected(value);
    }
    

  const SelectedDoctor = (value) => {
    setDoctorSelected(value);
  }
  
  const SaveOrder = async () => {
    await DataStore.save(
      new Ordenes({
        nombre: nombre,
        usuarioID: usuarioSelected,
        Doctor: doctorOrden,
      })
    );
  }

  



  return (
    <Card>
      <Item label="Nombre de la orden">
        <Input placeholder="escribe el nombre completo" value={nombre} onChange={ e=>setNombre(e.target.value)} />      
        </Item>
      <Item label="nombre Usuario">
        <Select onChange={Selected}>
          {usuarios?.map(usuario => {
            return (
              <Select.Option value={usuario?.id} key={usuario?.id}>
                {usuario?.nombre}
              </Select.Option>
            );
          })}
        </Select>
      </Item>
      <Item label="Doctor">
        <Select onChange={SelectedDoctor}>
          {doctores?.map(doctor => (
            <Select.Option value={doctor?.id} key={doctor?.id}>{doctor?.nombre}</Select.Option>
          ))}
        </Select>

        <Item style={{marginTop:15}}>
          <Button onClick={SaveOrder} type="primary">Guardar Orden</Button>
        </Item>
      </Item>
      <Card>
        {ordenes.map(orden => {


          return <div>
            {/* <Typography.Text>{ ordenDoctorFinal}</Typography.Text> */}
          </div>;
        })}
      </Card>
    </Card>
  );
}

export default FormularioPrueba