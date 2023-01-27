// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { OrdenPrueba, Pruebas, Doctor, Ordenes, Usuario } = initSchema(schema);

export {
  OrdenPrueba,
  Pruebas,
  Doctor,
  Ordenes,
  Usuario
};