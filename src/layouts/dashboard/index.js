/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import MonitorKPIs from "layouts/dashboard/components/MonitorKPIs";
import PerformanceAnalysis from "layouts/dashboard/components/PerformanceAnalysis";
import SalesPlanning from "layouts/dashboard/components/SalesPlanning";
import ProcurementPlanning from "layouts/dashboard/components/ProcurementPlanning";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";

function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <MonitorKPIs />
            </Grid>
            <Grid item xs={12} lg={6}>
              <PerformanceAnalysis />
            </Grid>
            <Grid item xs={12} lg={6}>
              <SalesPlanning />
            </Grid>
            <Grid item xs={12} lg={6}>
              <ProcurementPlanning />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
