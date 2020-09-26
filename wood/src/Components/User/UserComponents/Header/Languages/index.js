import React from 'react';
import { Col } from 'react-bootstrap';
import ReactFlagsSelect from 'react-flags-select';

import 'react-flags-select/scss/react-flags-select.scss';

const Languages = () => {
  return (
    <Col 
      xs={4}
      className="d-flex justify-content-end"
    >
      <ReactFlagsSelect
        defaultCountry="US"
        placeholder="Select Language"
        countries={["US", "RU", "AM"]}
        showSelectedLabel={false}
        customLabels={{
          "US": "English",
          "RU": "Russian",
          "AM": "Armenian",
        }}
        selectedSize={18}
      />
    </Col>
  );
};

export default Languages;
