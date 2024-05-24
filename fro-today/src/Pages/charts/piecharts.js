import AdminSidebar from "../../components/admin/AdminSidebar";
import { DoughnutChart, PieChart } from "../../components/admin/Charts";
import data from "../../assets/data.json";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCounts } from "../../components/redux/action/countAction";

const PieCharts = () => {
  const dispatch = useDispatch();
  const { countData } = useSelector((state) => state.countData);
  console.log(countData);
  useEffect(() => {
    dispatch(getCounts());
  }, [dispatch]);

  const categories = [
    {
      value: countData?.countData?.imageCountForProject,
      heading: "Images",
    },

    {
      value: 0,
      heading: "Videos",
    },
  ];

  const categoriesForPortfolio = [
    {
      value:
        countData?.countData?.portFolioImageVideoCount?.imageCountForPortFolio,
      heading: "Images",
    },

    {
      value:
        countData?.countData?.portFolioImageVideoCount?.videoCountForPortFolio,
      heading: "Videos",
    },
  ];

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Pie & Doughnut Charts</h1>

        <section>
          <div>
            <PieChart
              labels={["User Visited"]}
              data={[countData?.countData?.countVisitor?.length]}
              backgroundColor={[`hsl(110,40%, 50%)`]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Visited User</h2>
        </section>

        <section>
          <div>
            <PieChart
              labels={["Projects", "PortFolio"]}
              data={[
                countData?.countData?.ProjectCount,
                countData?.countData?.PortfolioCount,
              ]}
              backgroundColor={[`hsl(110,80%, 80%)`, `hsl(110,40%, 50%)`]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>PortFolio and Project Ratio</h2>
        </section>

        <section>
          <div>
            <DoughnutChart
              labels={categories.map((i) => i.heading)}
              data={categories.map((i) => i.value)}
              backgroundColor={categories.map(
                (i) => `hsl(${i.value * 4}, ${i.value}%, 50%)`
              )}
              legends={false}
              offset={[0, 0, 0, 80]}
            />
          </div>
          <h2>Project Image and Video Ratio</h2>
        </section>

        <section>
          <div>
            <DoughnutChart
              labels={categoriesForPortfolio.map((i) => i.heading)}
              data={categoriesForPortfolio.map((i) => i.value)}
              backgroundColor={[`hsl(110,80%, 80%)`, `hsl(120,40%, 50%)`]}
              legends={false}
              offset={[0, 0, 0, 80]}
            />
          </div>
          <h2>PortFolio Image and Video Ratio</h2>
        </section>

        <section>
          <div>
            <DoughnutChart
              labels={["Company", "Client"]}
              data={[
                countData?.countData?.CompanyCount,
                countData?.countData?.ClientCount,
              ]}
              backgroundColor={["hsl(269,80%,40%)", "rgb(53, 162, 255)"]}
              legends={false}
              offset={[0, 80]}
              cutout={"70%"}
            />
          </div>
          <h2> Testimonial Company and Client Ratio</h2>
        </section>

        <section>
          <div>
            <DoughnutChart
              labels={["Images", "Videos"]}
              data={[
                countData?.countData?.companyImageVideoCount
                  ?.imageCountForCompany,
                countData?.countData?.companyImageVideoCount
                  ?.videoCountForCompany,
              ]}
              backgroundColor={["hsl(29,200%,40%)", "rgb(53, 162, 25)"]}
              legends={false}
              offset={[0, 80]}
              cutout={"50%"}
            />
          </div>
          <h2>Company Image and Video Ratio</h2>
        </section>

        <section>
          <div>
            <PieChart
              labels={["Images", "Videos"]}
              data={[
                countData?.countData?.clientImageVideoCount
                  ?.imageCountForClientSchema,
                countData?.countData?.clientImageVideoCount
                  ?.videoCountForClientSchema,
              ]}
              backgroundColor={[`hsl(10,80%, 20%)`, `hsl(110,40%, 50%)`]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Client Image and Video Ratio</h2>
        </section>

        {/* <section>
          <div>
            <DoughnutChart
              labels={[
                "Marketing Cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin",
              ]}
              data={[32, 18, 5, 20, 25]}
              backgroundColor={[
                "hsl(110,80%,40%)",
                "hsl(19,80%,40%)",
                "hsl(69,80%,40%)",
                "hsl(300,80%,40%)",
                "rgb(53, 162, 255)",
              ]}
              legends={false}
              offset={[20, 30, 20, 30, 80]}
            />
          </div>
          <h2>Revenue Distribution</h2>
        </section> */}

        {/* <section>
          <div>
            <PieChart
              labels={[
                "Teenager(Below 20)",
                "Adult (20-40)",
                "Older (above 40)",
              ]}
              data={[30, 250, 70]}
              backgroundColor={[
                `hsl(10, ${80}%, 80%)`,
                `hsl(10, ${80}%, 50%)`,
                `hsl(10, ${40}%, 50%)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Users Age Group</h2>
        </section> */}

        {/* <section>
          <div>
            <DoughnutChart
              labels={["Admin", "Customers"]}
              data={[40, 250]}
              backgroundColor={[`hsl(335, 100%, 38%)`, "hsl(44, 98%, 50%)"]}
              offset={[0, 50]}
            />
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default PieCharts;
