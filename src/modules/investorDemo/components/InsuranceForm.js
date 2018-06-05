import React, {Component} from 'react';
import {Input, Row, Col, Dropdown, Menu, Button} from 'antd';

const deductibles = [1, 2, 3, 4, 5];

class InsuranceForm extends Component {
  state = {
    zipCode: '',
    carYear: '',
    carMake: '',
    carModel: '',
    deductible: 1,
    licenseTenure: '',
    incidents: '',
    coverage: 1,
  };

  handleInputChange = (field, event) => {
    console.log (event);
    const value = event.target.value;
    this.setState ({
      [field]: value,
    });
  };

  render () {
    // onClick={e => this.handleInputChange ('coverage', e)}
    const DeductiblesMenu = (
      <Menu>
        {deductibles.map (d => <Menu.Item key={d}>{d}</Menu.Item>)}
      </Menu>
    );

    const CoverageMenu = (
      <Menu>
        {deductibles.map (d => <Menu.Item key={d}>{d}</Menu.Item>)}
      </Menu>
    );

    const {
      zipCode,
      carYear,
      carMake,
      carModel,
      deductible,
      licenseTenure,
      incidents,
      coverage,
    } = this.state;
    return (
      <div>

        {/** Zip code and Deductibles */}
        <Row gutter={16}>
          <Col span={12}>
            <Input
              placeholder="Zip Code"
              value={zipCode}
              type="number"
              onChange={e => this.handleInputChange ('zipCode', e)}
            />
          </Col>
          <Col span={12}>
            <Dropdown placement="bottomCenter" overlay={DeductiblesMenu}>
              <Button>Deductibles</Button>
            </Dropdown>
          </Col>
        </Row>

        {/** Car and No of Incidents */}
        <Row gutter={16}>
          <Col span={12}>
            <Row>
              <Col span={8}>
                <Input
                  placeholder="Car Year"
                  value={carYear}
                  type="number"
                  onChange={e => this.handleInputChange ('carYear', e)}
                />
              </Col>
              <Col span={8}>
                <Input
                  placeholder="Car Make"
                  value={carMake}
                  type="text"
                  onChange={e => this.handleInputChange ('carMake', e)}
                />
              </Col>
              <Col span={8}>
                <Input
                  placeholder="Car Model"
                  value={carModel}
                  type="number"
                  onChange={e => this.handleInputChange ('carModel', e)}
                />
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Input
              placeholder="No. of Incidents"
              value={incidents}
              type="number"
              onChange={e => this.handleInputChange ('incidents', e)}
            />
          </Col>
        </Row>

        {/** License Tenure and Coverage */}
        <Row gutter={16}>
          <Col span={12}>
            <Input
              placeholder="Driver License Tenure"
              value={licenseTenure}
              type="number"
              onChange={e => this.handleInputChange ('licenseTenure', e)}
            />
          </Col>
          <Col span={12}>
            <Dropdown placement="bottomCenter" overlay={CoverageMenu}>
              <Button>Coverage</Button>
            </Dropdown>
          </Col>
        </Row>

      </div>
    );
  }
}

export default InsuranceForm;
