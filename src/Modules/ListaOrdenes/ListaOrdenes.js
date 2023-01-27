import { Button, Card, Col, Row } from 'antd';
import { DataStore } from 'aws-amplify';
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { OrdenPrueba, Pruebas, Ordenes } from '../../models';


function ListaOrdenes() {
  const [ordenPrueba, setOrdenPrueba] = useState([]);
  const [ordenes, setOrdenes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    DataStore.query(OrdenPrueba).then(setOrdenPrueba);
  }, []);

  useEffect(() => {
    DataStore.query(Ordenes).then(setOrdenes)
  }, [])
  

 

  // const cantidadPruebas = ordenPrueba.reduce(
  //   (sum, cantidad) => sum + cantidad?.cantidad,
  //   initialValue
  // )

   let initialValue = 0;

  // const totalPrice = ordenPrueba?.reduce(
  //   (sum, cantidad) =>
   
  
  // )

  // console.log(cantidadPruebas);
  // console.log(totalPrice);

  // console.log(ordenPrueba);
  
  const GoOrden = (id) => {
  navigate(`/orden/${id}`)
}
  return (
    <Card>
      <Row>
        <Col span={8}>ID</Col>
        <Col span={8}>orden</Col>
        <Col span={8}>Editar</Col>
      </Row>
      {ordenes?.map(orden => (
        <Row key={orden.id}>
          <Col span={8}> {orden?.id}</Col>
          <Col span={8}> {orden?.nombre}</Col>
          <Col span={8}> <Button onClick={()=> GoOrden(orden?.id)} type="primary">Editar</Button></Col>
        </Row>
      ))}
    </Card>
  );
}

export default ListaOrdenes