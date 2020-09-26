import React from 'react';

import './sectionHeading.scss';

const SectionHeading = ({ title }) => (
  <div className="sectionHeading">
    <div>{title}</div>
    <div className="blackLine" />
  </div>
);

export default SectionHeading;
