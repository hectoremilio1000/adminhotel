import {
  UserOutlined,
  MedicineBoxOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UnorderedListOutlined,
  ContactsOutlined,
  ReadOutlined,
  BranchesOutlined,
  ContainerOutlined,
  HighlightOutlined,
  AppstoreOutlined,
  FolderAddOutlined,
  PlusCircleOutlined,
  SmileOutlined,
  TeamOutlined,
  FilePdfOutlined,
  FileSearchOutlined,
  FileDoneOutlined,
  HddOutlined,
  GroupOutlined,
  LaptopOutlined,
  MonitorOutlined,
  ReconciliationOutlined,
  ScheduleOutlined,
  CaretRightOutlined,
  ExportOutlined,
  VerticalRightOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const ItemsRoutes = [
  getItem("Orden", "sub1", <AppstoreOutlined />, [
    getItem("Lista Órdenes", "1", <HighlightOutlined />),
    getItem("Crear Orden", "2", <UnorderedListOutlined />),
  ]),
];

export default ItemsRoutes;