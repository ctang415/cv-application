import React from 'react'
import Education from './Education'
import Work from './Work'
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
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({...this.state, [e.target.name]: e.target.value, edit: false})
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

  swapToEdit = () => {
    this.setState({
      edit: true
    })
  }

  render() {
    const { education, edit, work, } = this.state
    if(edit) {
      return (
        <div>
          <h1>CV Generator</h1>
          <form onSubmit={this.handleChange}>
            <button type="submit">View</button>
            <div>
              <h2>Basic Information</h2>
              <input type="text" placeholder="Full Name" name="name" onChange={this.handleChange}></input>
              <input type="text" placeholder="Phone Number" name="number" onChange={this.handleChange}></input>
              <input type="text" placeholder="Website" name="website" onChange={this.handleChange}></input>
              <input type="text" placeholder="Email" name="email" onChange={this.handleChange}></input>
              <input type="text" placeholder="Location" name="address" onChange={this.handleChange}></input>
            </div>
            <div>
              <input type="text" placeholder="Objective" name="objective" onChange={this.handleChange}></input>
            </div>
            <div>
              <h2>Work Experience</h2>
              <Work
              work={work}
              handleChange={this.handleChange}
              addToWork={this.addToWork}
              removeFromWork={this.removeFromWork}
              />
            </div>
            <div>
              <h2>Education</h2>
              <Education
              education={education}
              handleChange={this.handleChange}
              addToEducation={this.addToEducation}
              removeFromEducation={this.removeFromEducation}
              />
            </div>
            <div>
              <h2>Skills</h2>
              <input type="text" placeholder="Skills" name="skills" onChange={this.handleChange}></input>
            </div>
          </form>
        </div>
      );
    }
    return (
      <div>
        <h1>CV Generator</h1>
        <button onClick={this.swapToEdit}>Return</button>
      </div>
    )
  }
}

export default App;
