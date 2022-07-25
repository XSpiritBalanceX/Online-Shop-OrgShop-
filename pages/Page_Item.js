import React from 'react';
import {useParams} from "react-router-dom";

import MobileClientInfo from '../components/MobileClientInfo';

import appData from '../appData';

// react-router v6 предоставляет возможности доступа к параметрам из УРЛа только в виде хуков, т.е. для функциональных компонентов
// эта HOF делает возможным использование этого react-router и с классовыми компонентами
const withRouter = Component => props => {
  const params = useParams();
  return <Component {...props} params={params} /> ;
};

class Page_Client extends React.PureComponent {
          
  render() {

    //console.log(this.props);

    // раз написано <Route path="/client/:clid" element={<Page_Client/>} />
    // значит withRouter(Page_Client) получит то что в УРЛе после /client/ под именем props.params.clid в виде строки
    
    let clientId=parseInt(this.props.params.clid);

    let clientData=appData.clientsArr.find( c => c.id==clientId );

    return (
      <MobileClientInfo
        info={clientData}
      />
    );
    
  }

}
    
export default withRouter(Page_Client);
