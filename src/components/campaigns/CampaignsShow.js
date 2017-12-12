import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import Auth from '../../lib/Auth';
import LeftSearchPopOut from '../searcher/LeftSearchPopOut';
import RightSidePopOut from '../viewer/RightSidePopOut';

class CampaignsShow extends React.Component {
  state = {
    campaign: {},
    players: [
      {
        name: 'jimmy',
        initiative: 3
      },{
        name: 'dave',
        initiative: 7
      },{
        name: 'bagpuss',
        initiative: 21
      }
    ],
    monsterArr: []
  }

  componentDidMount() {
    Axios
      .get(`/api/campaigns/${this.props.match.params.id}`)
      .then(res => this.setState({ campaign: res.data }))
      .catch(err => console.log(err));
  }

  deleteCampaign = () => {
    Axios
      .delete(`/api/campaigns/${this.props.match.params.id}`, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/campaigns'))
      .catch(err => console.log(err));
  }

  render(){
    return(
      <main>

        <h1>{this.state.campaign.name} </h1>
        { Auth.isAuthenticated() && <button className="delete-button" onClick={this.deleteCampaign}>DELETE</button>}
        { Auth.isAuthenticated() && <Link to={`/campaigns/${this.state.campaign.id}/edit`} className="edit-button"><button>Edit Name</button>
        </Link>}
        <LeftSearchPopOut monsterArr={this.state.monsterArr}/>
        <RightSidePopOut players={this.state.players}/>
      </main>
    );
  }
}


export default CampaignsShow;
