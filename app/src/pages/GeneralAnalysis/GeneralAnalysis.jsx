import React from 'react';
import {
  Header, OperationsOverview, AddRobot, RobotsDashboard,
} from '../../containers';
import { SideBar } from '../../components';
// import PropTypes from 'prop-types';
import './GeneralAnalysis.scss';

const GeneralAnalysis = () => (
  <section className="generalAnalysisPage">
    <SideBar />
    <div className="rightAligned">
      <Header />
      <OperationsOverview />
      <AddRobot />
      <RobotsDashboard />
    </div>
  </section>
);

export default GeneralAnalysis;
