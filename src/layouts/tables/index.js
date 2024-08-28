// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import Navbar from "layouts/tables/data/components/navbar.js";
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import ProductTableData from "layouts/tables/data/productTableData";

// FlatFile
import { useFlatfile, FlatfileProvider, Sheet } from "@flatfile/react";
import { blueprints } from "blueprints";
import { useEffect } from "react";

const FlatfilePortal = () => {
  const { openPortal } = useFlatfile();

  useEffect(() => {
    openPortal();
  }, [openPortal]);

  return (
    <div>
      {blueprints.map((blueprint) => (
        <Sheet key={blueprint.slug} config={blueprint} />
      ))}
    </div>
  )
};

function Tables() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <FlatfileProvider publishableKey="pk_f0a1f46b01814c0183c8a1f1405fcb91">
        <FlatfilePortal />
      </FlatfileProvider>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
