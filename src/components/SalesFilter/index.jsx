import React, { useState } from "react";
import { Productflex } from "../Productflex";
import { EditTime } from "../EditTime";
import { ProductTable } from "../ProductTable";
import { SalesTable } from "../SalesTable";
import { TableNav } from "../Helpers/TableNav";
import { SalesModal } from "../modals";
import { ConfigureTable } from "../ConfigureTable";
import { FilterModal } from "../modals/FilterModal";
import { Filter } from "../Filter";
import { borderRadius } from "@mui/system";
import { GeneralProduct } from "../GeneralProduct";

export const SalesFilter = () => {
  const [isExpanded, setExpanded] = React.useState(true);
  const [isSales, setIsSales] = useState(true);

  const [editIsOpen, setEditIsOpen] = useState(false);
  const [salesModalIsOpen, setSalesModalIsOpen] = useState(false);
  const [filterModalIsOpen, setFilterModalIsOpen] = useState(false);

  const changeEditState = () => {
    setEditIsOpen(!editIsOpen);
  };
  return (
    <main>
      <SalesModal isOpen={salesModalIsOpen} />
      <FilterModal isOpen={filterModalIsOpen} />
      <section className="vertical">
        <section className="productholdSales">
          <div className="productholdSalesdiv">
            <h3>Register</h3>

            <div className="searchItems">
              <img src="./images/searchicon.svg" />
              <input
                type="search"
                placeholder={
                  "Search for items by name, category, manufacturer, "
                }
              ></input>
            </div>
            <section className="sectionfilter">
              <div className="filterdate">
                <label>Filter date:</label>
                <div className="to-fro">
                  <input type="date" placeholder="From" />
                  <input type="date" placeholder="To" />
                </div>
              </div>
              <div className="printbutts">
                <button className="reportbutt">Print Report</button>
                <div>
                  {editIsOpen && (
                    <ConfigureTable changeModalState={setSalesModalIsOpen} />
                  )}

                  {editIsOpen && (
                    <Filter changeModalState={setSalesModalIsOpen} />
                  )}
                  <button className="dotbutts" onClick={changeEditState}>
                    <img src="./images/3dots.svg"></img>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="producthead">
          <SalesTable />
        </section>

        <TableNav />
      </section>

      <GeneralProduct />
      {/* <section className="mode">jk/assm</section> */}
      <SalesModal isOpen={salesModalIsOpen} closeModal={setSalesModalIsOpen} />
      <FilterModal
        isOpen={filterModalIsOpen}
        closeModal={setFilterModalIsOpen}
      />
    </main>
  );
};
