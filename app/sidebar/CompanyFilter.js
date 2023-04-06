//app/sidebar/CompanyFilter.js

import React from "react";

function CompanyFilter({ onCompanySelect }) {
  const companies = ["All", "Ikea", "Liddy", "Caressa", "Marcos", "sa"];

  return (
    <div>
      <h5>Company</h5>
      <ul>
        {companies.map((company) => (
          <li key={company} onClick={() => onCompanySelect(company)}>
            {company}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyFilter;
