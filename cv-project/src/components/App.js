import React from 'react'

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
      work: {
        role: '',
        company: '',
        duration: '',
        location: '',
        description: '',
      },
      education: {
        school: '',
        place: '',
        time: '',
        degree: '',
        achievement: '',
      },
      skills: '',
      edit: true,
      workArr: [],
      educationArr: [],
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({...this.state, [e.target.name]: e.target.value, edit: false})
  }

  addToWork = (e) => {
    let newArray = this.state.workArr.concat()
    this.setState({
      workArr: newArray
    })
  }

  addToEducation = (e) => {
    let newArray = this.state.educationArr.concat()
    this.setState({
      educationArr: newArray
    })
  }

  swapToEdit = () => {
    this.setState({
      edit: true
    })
  }

  render() {
    const { profile, objective, work, education, skills, edit } = this.state
    if(edit) {
      return (
        <div>
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
              <input type="text" placeholder="Role" name="role" onChange={this.handleChange}></input>
              <input type="text" placeholder="Company" name="company" onChange={this.handleChange}></input>
              <input type="text" placeholder="Duration" name="duration" onChange={this.handleChange}></input>
              <input type="text" placeholder="Location" name="location" onChange={this.handleChange}></input>
              <input type="text" placeholder="Description" name="description" onChange={this.handleChange}></input>
            </div>
            <div>
              <h2>Education</h2>
              <input type="text" placeholder="School" name="school" onChange={this.handleChange}></input>
              <input type="text" placeholder="Location" name="place" onChange={this.handleChange}></input>
              <input type="text" placeholder="Duration" name="time" onChange={this.handleChange}></input>
              <input type="text" placeholder="Degree" name="degree" onChange={this.handleChange}></input>
              <input type="text" placeholder="Achievements" name="achievement" onChange={this.handleChange}></input>
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
        <button onClick={this.swapToEdit}>Return</button>
      </div>
    )
  }
}

export default App;
