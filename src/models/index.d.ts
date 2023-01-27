import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerOrdenPrueba = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrdenPrueba, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cantidad?: number | null;
  readonly ordenesID: string;
  readonly Pruebas?: Pruebas | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ordenPruebaPruebasId?: string | null;
}

type LazyOrdenPrueba = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrdenPrueba, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cantidad?: number | null;
  readonly ordenesID: string;
  readonly Pruebas: AsyncItem<Pruebas | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ordenPruebaPruebasId?: string | null;
}

export declare type OrdenPrueba = LazyLoading extends LazyLoadingDisabled ? EagerOrdenPrueba : LazyOrdenPrueba

export declare const OrdenPrueba: (new (init: ModelInit<OrdenPrueba>) => OrdenPrueba) & {
  copyOf(source: OrdenPrueba, mutator: (draft: MutableModel<OrdenPrueba>) => MutableModel<OrdenPrueba> | void): OrdenPrueba;
}

type EagerPruebas = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pruebas, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly precio?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPruebas = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pruebas, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly precio?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Pruebas = LazyLoading extends LazyLoadingDisabled ? EagerPruebas : LazyPruebas

export declare const Pruebas: (new (init: ModelInit<Pruebas>) => Pruebas) & {
  copyOf(source: Pruebas, mutator: (draft: MutableModel<Pruebas>) => MutableModel<Pruebas> | void): Pruebas;
}

type EagerDoctor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Doctor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDoctor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Doctor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Doctor = LazyLoading extends LazyLoadingDisabled ? EagerDoctor : LazyDoctor

export declare const Doctor: (new (init: ModelInit<Doctor>) => Doctor) & {
  copyOf(source: Doctor, mutator: (draft: MutableModel<Doctor>) => MutableModel<Doctor> | void): Doctor;
}

type EagerOrdenes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ordenes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly usuarioID: string;
  readonly Doctor?: Doctor | null;
  readonly OrdenPruebas?: (OrdenPrueba | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ordenesDoctorId?: string | null;
}

type LazyOrdenes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ordenes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly usuarioID: string;
  readonly Doctor: AsyncItem<Doctor | undefined>;
  readonly OrdenPruebas: AsyncCollection<OrdenPrueba>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ordenesDoctorId?: string | null;
}

export declare type Ordenes = LazyLoading extends LazyLoadingDisabled ? EagerOrdenes : LazyOrdenes

export declare const Ordenes: (new (init: ModelInit<Ordenes>) => Ordenes) & {
  copyOf(source: Ordenes, mutator: (draft: MutableModel<Ordenes>) => MutableModel<Ordenes> | void): Ordenes;
}

type EagerUsuario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly Ordenes?: (Ordenes | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsuario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly Ordenes: AsyncCollection<Ordenes>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Usuario = LazyLoading extends LazyLoadingDisabled ? EagerUsuario : LazyUsuario

export declare const Usuario: (new (init: ModelInit<Usuario>) => Usuario) & {
  copyOf(source: Usuario, mutator: (draft: MutableModel<Usuario>) => MutableModel<Usuario> | void): Usuario;
}