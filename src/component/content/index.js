import React from 'react';
import {connect} from 'react-redux';
import LowFareForm from '../lowfare-form/index';
import FlightItem from '../flight-item/index';
import * as lowFareActions from '../../action/lowfare-actions';
import * as inspirationAction from '../../action/inspiration-actions';
import * as profileActions from '../../action/profile-actions';
import InspirationForm from '../inspiration-form/index';
import InspirationItem from '../inspiration-item/index';
import './content.scss';
const images = {
  AGP: require('../../assets/airport-img/AGP.jpg'),
  ALC: require('../../assets/airport-img/ALC.jpg'),
  ALL: require('../../assets/airport-img/ALL.jpg'),
  AMS: require('../../assets/airport-img/AMS.jpg'),
  ARN: require('../../assets/airport-img/ARN.jpg'),
  ASIA: require('../../assets/airport-img/ASIA.jpg'),
  ATH: require('../../assets/airport-img/ATH.jpg'),
  ATL: require('../../assets/airport-img/ATL.jpg'),
  AUH: require('../../assets/airport-img/AUH.jpg'),
  BCN: require('../../assets/airport-img/BCN.jpg'),
  BFS: require('../../assets/airport-img/BFS.jpg'),
  BHX: require('../../assets/airport-img/BHX.jpg'),
  BKK: require('../../assets/airport-img/BKK.jpg'),
  BOM: require('../../assets/airport-img/BOM.jpg'),
  BOS: require('../../assets/airport-img/BOS.jpg'),
  BRU: require('../../assets/airport-img/BRU.jpg'),
  BSL: require('../../assets/airport-img/BSL.jpg'),
  BUD: require('../../assets/airport-img/BUD.jpg'),
  BWI: require('../../assets/airport-img/BWI.jpg'),
  CAN: require('../../assets/airport-img/CAN.jpg'),
  CDG: require('../../assets/airport-img/CDG.jpg'),
  CGK: require('../../assets/airport-img/CGK.jpg'),
  CGN: require('../../assets/airport-img/CGN.jpg'),
  CJU: require('../../assets/airport-img/CJU.jpg'),
  CKG: require('../../assets/airport-img/CKG.jpg'),
  CLT: require('../../assets/airport-img/CLT.jpg'),
  CPH: require('../../assets/airport-img/CPH.jpg'),
  CRK: require('../../assets/airport-img/CRK.jpg'),
  CTA: require('../../assets/airport-img/CTA.jpg'),
  CTU: require('../../assets/airport-img/CTU.jpg'),
  DAC: require('../../assets/airport-img/DAC.jpg'),
  DCA: require('../../assets/airport-img/DCA.jpg'),
  DEL: require('../../assets/airport-img/DEL.jpg'),
  DEN: require('../../assets/airport-img/DEN.jpg'),
  DFW: require('../../assets/airport-img/DFW.jpg'),
  DMK: require('../../assets/airport-img/DMK.jpg'),
  DOH: require('../../assets/airport-img/DOH.jpg'),
  DPS: require('../../assets/airport-img/DPS.jpg'),
  DTW: require('../../assets/airport-img/DTW.jpg'),
  DUB: require('../../assets/airport-img/DUB.jpg'),
  DUS: require('../../assets/airport-img/DUS.jpg'),
  DVO: require('../../assets/airport-img/DVO.jpg'),
  DXB: require('../../assets/airport-img/DXB.jpg'),
  EDI: require('../../assets/airport-img/EDI.jpg'),
  EU: require('../../assets/airport-img/EU.jpg'),
  EWR: require('../../assets/airport-img/EWR.jpg'),
  FCO: require('../../assets/airport-img/FCO.jpg'),
  FLL: require('../../assets/airport-img/FLL.jpg'),
  FRA: require('../../assets/airport-img/FRA.jpg'),
  GENERIC: require('../../assets/airport-img/GENERIC.jpg'),
  GIB: require('../../assets/airport-img/GIB.jpg'),
  GLA: require('../../assets/airport-img/GLA.jpg'),
  GMP: require('../../assets/airport-img/GMP.jpg'),
  GVA: require('../../assets/airport-img/GVA.jpg'),
  HAM: require('../../assets/airport-img/HAM.jpg'),
  HAN: require('../../assets/airport-img/HAN.jpg'),
  HEL: require('../../assets/airport-img/HEL.jpg'),
  HKG: require('../../assets/airport-img/HKG.jpg'),
  HND: require('../../assets/airport-img/HND.jpg'),
  HNL: require('../../assets/airport-img/HNL.jpg'),
  HYD: require('../../assets/airport-img/HYD.jpg'),
  IAD: require('../../assets/airport-img/IAD.jpg'),
  IAH: require('../../assets/airport-img/IAH.jpg'),
  ICN: require('../../assets/airport-img/ICN.jpg'),
  IST: require('../../assets/airport-img/IST.jpg'),
  JED: require('../../assets/airport-img/JED.jpg'),
  JER: require('../../assets/airport-img/JER.jpg'),
  JHB: require('../../assets/airport-img/JHB.jpg'),
  KEF: require('../../assets/airport-img/KEF.jpg'),
  KHH: require('../../assets/airport-img/KHH.jpg'),
  KHI: require('../../assets/airport-img/KHI.jpg'),
  KIX: require('../../assets/airport-img/KIX.jpg'),
  KTM: require('../../assets/airport-img/KTM.jpg'),
  KUL: require('../../assets/airport-img/KUL.jpg'),
  LAS: require('../../assets/airport-img/LAS.jpg'),
  LAX: require('../../assets/airport-img/LAX.jpg'),
  LCY: require('../../assets/airport-img/LCY.jpg'),
  LGA: require('../../assets/airport-img/LGA.jpg'),
  LGW: require('../../assets/airport-img/LGW.jpg'),
  LHE: require('../../assets/airport-img/LHE.jpg'),
  LHR: require('../../assets/airport-img/LHR.jpg'),
  LIS: require('../../assets/airport-img/LIS.jpg'),
  LTN: require('../../assets/airport-img/LTN.jpg'),
  LYS: require('../../assets/airport-img/LYS.jpg'),
  MAA: require('../../assets/airport-img/MAA.jpg'),
  MAD: require('../../assets/airport-img/MAD.jpg'),
  MAN: require('../../assets/airport-img/MAN.jpg'),
  MCO: require('../../assets/airport-img/MCO.jpg'),
  MDW: require('../../assets/airport-img/MDW.jpg'),
  MIA: require('../../assets/airport-img/MIA.jpg'),
  MNK: require('../../assets/airport-img/MNK.jpg'),
  MSP: require('../../assets/airport-img/MSP.jpg'),
  MUC: require('../../assets/airport-img/MUC.jpg'),
  MXP: require('../../assets/airport-img/MXP.jpg'),
  NCE: require('../../assets/airport-img/NCE.jpg'),
  NKG: require('../../assets/airport-img/NKG.jpg'),
  NRT: require('../../assets/airport-img/NRT.jpg'),
  NYC: require('../../assets/airport-img/NYC.jpg'),
  ORD: require('../../assets/airport-img/ORD.jpg'),
  ORY: require('../../assets/airport-img/ORY.jpg'),
  OSL: require('../../assets/airport-img/OSL.jpg'),
  PDX: require('../../assets/airport-img/PDX.jpg'),
  PEK: require('../../assets/airport-img/PEK.jpg'),
  PHL: require('../../assets/airport-img/PHL.jpg'),
  PHX: require('../../assets/airport-img/PHX.jpg'),
  PRG: require('../../assets/airport-img/PRG.jpg'),
  PVG: require('../../assets/airport-img/PVG.jpg'),
  SAN: require('../../assets/airport-img/SAN.jpg'),
  SEA: require('../../assets/airport-img/SEA.jpg'),
  SFO: require('../../assets/airport-img/SFO.jpg'),
  SGN: require('../../assets/airport-img/SGN.jpg'),
  SHA: require('../../assets/airport-img/SHA.jpg'),
  SIN: require('../../assets/airport-img/SIN.jpg'),
  SLC: require('../../assets/airport-img/SLC.jpg'),
  STN: require('../../assets/airport-img/STN.jpg'),
  STR: require('../../assets/airport-img/STR.jpg'),
  SUB: require('../../assets/airport-img/SUB.jpg'),
  SVO: require('../../assets/airport-img/SVO.jpg'),
  SXF: require('../../assets/airport-img/SXF.jpg'),
  SZX: require('../../assets/airport-img/SZX.jpg'),
  TLS: require('../../assets/airport-img/TLS.jpg'),
  TPA: require('../../assets/airport-img/TPA.jpg'),
  TPE: require('../../assets/airport-img/TPE.jpg'),
  TXL: require('../../assets/airport-img/TXL.jpg'),
  USA: require('../../assets/airport-img/USA.jpg'),
  VIE: require('../../assets/airport-img/VIE.jpg'),
  WAW: require('../../assets/airport-img/WAW.jpg'),
  XIY: require('../../assets/airport-img/XIY.jpg'),
  ZRH: require('../../assets/airport-img/ZRH.jpg'),
};

class Content extends React.Component {
  componentWillMount() {
    console.log('componentWillMount: Attempting to get profile: token: ',
      JSON.parse(this.props.token));
    this.props.getMyProfile(this.props.token);
  }

  render() {
    return (
      <div id="content-div" className="content-div">
        <div className="lowfareform-wrapper">
          <LowFareForm
            onComplete={this.props.lowSearch}
            history={this.props.history}
          />
        </div>
        <h3 id="discover-destinations" className="discover-destinations">Discover Destinations</h3>
        <InspirationForm
          onComplete={this.props.inpSearch}
          profile={this.props.profile}/>

        <div className="image-holder">
          {this.props.inspirationSearch ?
            this.props.inspirationSearch.map((flight, idx) =>
              <div className="flight-obj" key={'inspire_'.concat(idx)}>
                <InspirationItem
                  images={images}
                  inspirationSearch={flight}/>
              </div>)
            :
            undefined
          }
        </div>

        <div className="image-holder">
          {this.props.lowFareSearch ?
            this.props.lowFareSearch.map((flight, idx) =>
              <div className="flight-obj" key={'lowfare_'.concat(idx)}>
                <FlightItem images={images} lowFareSearch={flight}/>
              </div>)
            :
            undefined
          }
        </div>
      </div>
    );
  }
}

let mapSetToProps = state => ({
  lowFareSearch: state.lowFareSearch,
  profile: state.profile,
  inspirationSearch: state.inspirationSearch,
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  lowSearch : search => dispatch(lowFareActions.lowFareSearchAction(search)),
  inpSearch : search => dispatch(inspirationAction.inspirationAction(search)),
  getMyProfile : token => dispatch(profileActions.getMyProfileRequest(token)),
});

export default connect(mapSetToProps, mapDispatchToProps)(Content);
