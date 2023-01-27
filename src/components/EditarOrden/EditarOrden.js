import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Ordenes, OrdenPrueba, Pruebas } from '../../models';
import { Card, Col, Row } from 'antd';

function EditarOrden() {
  const [pruebas, setPruebas] = useState([]);
  const [orderTest, setOrderTest] = useState(null);

  const [ordenesPruebaFinal, setOrdenesPruebaFinal] = useState([])
  const [pruebaPromise, setPruebaPromise] = useState([]);
  const [pruebasUsadas, setPruebasUsadas] = useState([]);


  const { id } = useParams();

  const fetchOrdenesPrueba = async () => {
    const pruebasOrdenFetched = await DataStore.query(OrdenPrueba, od =>
      od.ordenesID.eq(id)
    );
    setOrdenesPruebaFinal(pruebasOrdenFetched);
  };

  useEffect(() => {    
    if (!id) {
      return
    }
    fetchOrdenesPrueba();
  }, [id]);

  useEffect(() => {
    if (ordenesPruebaFinal.filter(cp => !cp.prueba).length === 0) {
      return;
    }

    const fetchPruebas = async () => {
      const pruebas = await Promise.all(
        ordenesPruebaFinal.map(ordenPrueba =>
          DataStore.query(Pruebas, ordenPrueba.ordenPruebaPruebasId)
        )
      );
      // console.log(pruebas);

      setOrdenesPruebaFinal(currentCartProducts =>
        currentCartProducts.map(ordenPrueba => ({
          ...ordenPrueba,
          prueba: pruebas.find(p => p.id === ordenPrueba.ordenPruebaPruebasId),
        }))
      );
    };

    fetchPruebas();
  }, [ordenesPruebaFinal]);

    // useEffect(() => {
    //   const subscription = DataStore.observe(OrdenPrueba).subscribe(msg =>
    //     fetchOrdenesPrueba(),
    //   );
    //   return subscription.unsubscribe;
    // }, []);

  console.log(ordenesPruebaFinal);




  return (
    <Card>
      <Row>
        <Col span={8}>Orden</Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
      </Row>
    </Card>
  );
}

export default EditarOrden