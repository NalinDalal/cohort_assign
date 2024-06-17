import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John Doe',
      age: 30,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      profilePicUrl: 'https://via.placeholder.com/150',
    };
  }

  render() {
    return (
      <div className="profile">
        <img src={this.state.profilePicUrl} alt="Profile" />
        <h2>{this.state.name}</h2>
        <p>Age: {this.state.age}</p>
        <p>{this.state.bio}</p>
      </div>
    );
  }
}

export default Profile;

