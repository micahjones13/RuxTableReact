import logo from "./logo.svg";
import "./App.css";
import "@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css";
import {
  RuxTable,
  RuxTableHeader,
  RuxTableCell,
  RuxTableBody,
  RuxTableHeaderCell,
  RuxTableHeaderRow,
  RuxTableRow,
} from "@astrouxds/react";

function App() {
  return (
    <div className="App">
      <RuxTable data-testid="table">
        <RuxTableHeader>
          <RuxTableHeaderRow>
            <RuxTableHeaderCell>Header</RuxTableHeaderCell>
            <RuxTableHeaderCell>Header 2</RuxTableHeaderCell>
          </RuxTableHeaderRow>
        </RuxTableHeader>
        <RuxTableBody>
          <RuxTableRow>
            <RuxTableCell>Cell 1</RuxTableCell>
            <RuxTableCell>Cell 2</RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>Cell 1</RuxTableCell>
            <RuxTableCell>Cell 2</RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>Cell 1</RuxTableCell>
            <RuxTableCell>Cell 2</RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>Cell 1</RuxTableCell>
            <RuxTableCell>Cell 2</RuxTableCell>
          </RuxTableRow>
        </RuxTableBody>
      </RuxTable>
    </div>
  );
}

export default App;
