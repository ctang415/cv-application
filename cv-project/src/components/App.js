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
      },
      objective: '',
      work: [{
        role: '',
        company: '',
        duration: '',
        location: '',
        description: '',
        key: uuid()
      }],
      education: [{
        school: '',
        place: '',
        time: '',
        degree: '',
        achievement: '',
        key: uuid()
      }],
      skills: '',
      edit: true,
    }
    this.handleChange = this.handleChange.bind(this)
    this.addToEducation = this.addToEducation.bind(this)
    this.removeFromEducation = this.removeFromEducation.bind(this)
    this.addToWork = this.addToWork.bind(this)
    this.removeFromWork = this.removeFromWork.bind(this)
    this.swapToEdit= this.swapToEdit.bind(this)
    this.swapToView = this.swapToView.bind(this)
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({...this.state, [e.target.name]: e.target.value})
  }

  addToWork = (e) => {
    e.preventDefault()
    this.setState({
      work: [...this.state.work, {
        role: '', company: '', duration: '', location: '', description: '', key: uuid()
      }]
    })
  }

  addToEducation = (e) => {
    e.preventDefault()
    this.setState({
      education: [...this.state.education, {
        school: '', place: '', time: '', degree: '', achievement: '', key: uuid()
      }
    ]
    })
  }

  removeFromWork = (e) => {
    e.preventDefault()
    const key = e.target.parentNode.id
    let filteredArray = this.state.work.filter(work => work.key !== key)
    this.setState({
      work: filteredArray
    })
  }

  removeFromEducation = (e) => {
    e.preventDefault()
    const key = e.target.parentNode.id
    let filteredArray = this.state.education.filter(education => education.key !== key)
    this.setState({
      education: filteredArray
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
      edit: false
    })
  }

  render() {
    const { education, edit, work } = this.state
    if (edit) {
      return (
        <div className='template'>
          <div className='header'>
            EZ CV
          </div>
          <form onSubmit={this.swapToView}>
            <div className='button'>
            <button type="submit" id="submit">View</button>
            </div>
            <div className='information'>
            <h2>Basic Information</h2>
              <div className='row'>
              <div className='columnone'>
              <input type="text" placeholder="Full Name" name="name" onChange={this.handleChange}></input>
              <input type="text" placeholder="Phone Number" name="number" onChange={this.handleChange}></input>
              </div>
              <div className='columntwo'>
              <input type="text" placeholder="Email" name="email" onChange={this.handleChange}></input>
              <input type="text" placeholder="Location" name="address" onChange={this.handleChange}></input>
              </div>
              </div>
              <div className='box'>
              <input type="text" placeholder="Website" name="website" onChange={this.handleChange}></input>
              </div>
            </div>
              <div className='information'>
              <h2>Objective</h2>
              <div>
              <textarea rows="4" placeholder="Objective statement" name="objective" onChange={this.handleChange}></textarea>
              </div>
              </div>
            <div className='information'>
            <h2>Work Experience</h2>
              <Work
              work={work}
              handleChange={this.handleChange}
              addToWork={this.addToWork}
              removeFromWork={this.removeFromWork}
              />
            </div>
            <div className='information'>
            <h2>Education</h2>
              <Education
              education={education}
              handleChange={this.handleChange}
              addToEducation={this.addToEducation}
              removeFromEducation={this.removeFromEducation}
              />
            </div>
            <div className='information'>
            <h2>Skills</h2>
            <div className='box'>
              <input type="text" placeholder="Skills" name="skills" onChange={this.handleChange}></input>
            </div>
            </div>
     
            </form>
          </div>
      );
    }
    return (
      <View
      swapToEdit={this.swapToEdit}
      />
    )
  }
}

export default App;
