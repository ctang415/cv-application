import React from 'react'
import Education from './Education'
import Work from './Work'
import View from './View'
import './styles/App.css'
import { v4 as uuid } from 'uuid'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      profile: {
      name: '',
      number: '',
      website: '',
      email: '',
      address: '',
      objective: '',
      key: uuid(),
      },
    work: {
      role: '',
      company: '',
      duration: '',
      location: '',
      description: '',
      key: uuid()
    },
    workArray: [{
      role: '', 
      company: '', 
      duration: '', 
      location: '', 
      description: '', 
      key: uuid()
    }],
    education: {
      school: '',
      place: '',
      time: '',
      degree: '',
      achievement: '',
      key: uuid()
    },
    educationArray: [{
      school: '',
      place: '',
      time: '',
      degree: '',
      achievement: '',
      key: uuid()
    }],
    skill: {
      skills: '',
    },
    edit: true,
  }

    this.addToEducation = this.addToEducation.bind(this)
    this.removeFromEducation = this.removeFromEducation.bind(this)
    this.addToWork = this.addToWork.bind(this)
    this.removeFromWork = this.removeFromWork.bind(this)
    this.swapToEdit= this.swapToEdit.bind(this)
    this.swapToView = this.swapToView.bind(this)
    this.handleChangeEducation = this.handleChangeEducation.bind(this)
    this.handleChangeWork = this.handleChangeWork.bind(this)
  }


  handleChange = (e) => {
    e.preventDefault()
    this.setState({...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleChangeProfile = (e) => {
    e.preventDefault()
    this.setState({ profile: {
      ...this.state.profile, [e.target.name]: e.target.value
    }
    })
  }

  handleChangeEducation = (e) => {
    e.preventDefault()
    this.setState({ education: {
      ...this.state.education, [e.target.name]: e.target.value
    }
    })
  }

  handleChangeWork = (e) => {
    e.preventDefault()
    this.setState({ work: {
      ...this.state.work, [e.target.name]: e.target.value
    }
    })
  }

  handleChangeSkill = (e) => {
    e.preventDefault()
    this.setState({ skill: {
      ...this.state.skill, [e.target.name]: e.target.value
    }
    })
  }

addToWork = (e) => {
  e.preventDefault()
  this.setState({
    workArray: this.state.workArray.concat(this.state.work), 
    work: {
      role: '', 
      company: '', 
      duration: '', 
      location: '', 
      description: '', 
      key: uuid()
    }
  })
}

  addToEducation = (e) => {
    e.preventDefault()
    this.setState({
      educationArray: this.state.educationArray.concat(this.state.education),
      education: {
        school: '',
        place: '',
        time: '',
        degree: '',
        achievement: '',
        key: uuid()
      }
    })
  }

  removeFromWork = (e) => {
    e.preventDefault()
    const key = e.target.parentNode.id
    let filteredArray = this.state.workArray.filter(work => work.key !== key)
    this.setState({
      workArray: filteredArray
    })
  }

  removeFromEducation = (e) => {
    e.preventDefault()
    const key = e.target.parentNode.id
    let filteredArray = this.state.educationArray.filter(education => education.key !== key)
    this.setState({
      educationArray: filteredArray
    })
  }

  swapToEdit = (e) => {
    e.preventDefault()
    this.setState({
      edit: true
    })
  }

  swapToView = (e) => {
    e.preventDefault()
    this.setState({ 
      edit: false,
    })
  }

  render() {
    const { education, edit, work, profile, skill, educationArray, workArray, } = this.state
    if (edit) {
      return (
        <div className='template'>
          <div className='header'>
            <span>EZ CV</span>
          </div>
          <form onSubmit={this.swapToView}>
            <div className='button'>
            <button type="submit" id="submit">View</button>
            </div>
            <div className='information'>
            <h2>Basic Information</h2>
              <div className='row'>
              <div className='columnone'>
              <input type="text" placeholder="Full Name" name="name" defaultValue={profile.name} onChange={this.handleChangeProfile}></input>
              <input type="text" placeholder="Phone Number" name="number" defaultValue={profile.number} onChange={this.handleChangeProfile}></input>
              </div>
              <div className='columntwo'>
              <input type="text" placeholder="Email" name="email" defaultValue={profile.email} onChange={this.handleChangeProfile}></input>
              <input type="text" placeholder="Location" name="address" defaultValue={profile.address} onChange={this.handleChangeProfile}></input>
              </div>
              </div>
              <div id="boxes" className='box'>
              <input type="text" placeholder="Website" name="website" defaultValue={profile.website} onChange={this.handleChangeProfile}></input>
              </div>
            </div>
              <div className='information'>
              <h2>Objective</h2>
              <div id="boxes">
              <textarea rows="4" placeholder="Objective statement" name="objective" defaultValue={profile.objective} onChange={this.handleChangeProfile}></textarea>
              </div>
              </div>
            <div className='information'>
            <h2>Work Experience</h2>
              <Work
              work={work}
              workArray={workArray}
              handleChangeWork={this.handleChangeWork}
              addToWork={this.addToWork}
              removeFromWork={this.removeFromWork}
              />
            </div>
            <div className='information'>
            <h2>Education</h2>
              <Education
              education={education}
              educationArray={educationArray}
              handleChangeEducation={this.handleChangeEducation}
              addToEducation={this.addToEducation}
              removeFromEducation={this.removeFromEducation}
              />
            </div>
            <div className='information'>
            <h2>Skills</h2>
            <div className='box' id="boxes">
              <input type="text" placeholder="Skills" name="skills" onChange={this.handleChangeSkill}></input>
            </div>
            </div>
     
            </form>
          </div>
      );
    }
    return (
      <View
      name={this.state.profile.name}
      address={this.state.profile.address}
      number={this.state.profile.number}
      email={this.state.profile.email}
      website={this.state.profile.website}
      key={this.state.profile.key}
      profile={profile}
      education={education}
      work={work}
      workArray={workArray}
      educationArray={educationArray}
      skill={skill}
      swapToEdit={this.swapToEdit}
      />
    )
  }
}

export default App;
