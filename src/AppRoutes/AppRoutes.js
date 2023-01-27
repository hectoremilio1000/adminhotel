import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FormularioPrueba from '../Modules/FormularioPrueba/FormularioPrueba';
import ListaOrdenes from '../Modules/ListaOrdenes/ListaOrdenes';
import EditarOrden from '../components/EditarOrden/EditarOrden';
import ContentLayoutAdmin from '../components/ContentLayoutAdmin/ContentLayoutAdmin';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<ContentLayoutAdmin />} />
      <Route path='/orden/:id' element={<EditarOrden/> } />
    </Routes>
  );
}

export default AppRoutes