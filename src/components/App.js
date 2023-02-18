import React, { useState, useEffect } from 'react'
import Education from './Education'
import Work from './Work'
import View from './View'
import './styles/App.css'
import { v4 as uuid } from 'uuid'


const App = () => {

  const [profile, setProfile] = useState({
    name: '',
    number:'',
    website: '',
    email: '',
    address: '',
    objective: '',
  })

  const [work, setWork] = useState({
    role: '',
    company: '',
    duration: '',
    location: '',
    description: '',
    id: uuid()
  })

  const [education, setEducation] = useState({
    school: '',
    place: '',
    time: '',
    degree: '',
    achievement: '',
    id: uuid()
  })

  const [educationArray, setEducationArray] = useState([{
    school: '',
    place: '',
    time: '',
    degree: '',
    achievement: '',
    id: ''
  }])

  const [workArray, setWorkArray] = useState([{
    role: '',
    company: '',
    duration: '',
    location: '',
    description: '',
    id: ''
  }])

  const [skill, setSkill] = useState('')

  const [edit, setEdit] = useState(true)

  const addToWork = (e) => {
    e.preventDefault()
    setWorkArray(workArray => [...workArray, {
      role: '',
      company: '',
      duration: '',
      location: '',
      description: '',
      id: uuid()
    }])
  }

  const addToEducation = (e) => {
    e.preventDefault()
    setEducationArray(educationArray => [...educationArray, {
      school: '',
      place: '',
      time: '',
      degree: '',
      achievement: '',
      id: uuid()
    }])
  }

  const removeFromEducation = (e) => {
    const key = e.target.parentNode.id
    setEducationArray(educationArray.filter(work => work.id !== key))
  }

  const removeFromWork = (e) => {
    const key = e.target.parentNode.id
    setWorkArray(workArray.filter(work => work.id !== key))
  }

  const swapToView = (e) => {
    e.preventDefault()
    setEdit(false)
  }

  const swapToEdit = (e) => {
    e.preventDefault()
    setEdit(true)
  }

  const handleChangeWorkDuration = (e) => {
    const input = e.target.parentNode.querySelector('input')
    let newArray = workArray.map((item) => {
      if (item.id === e.target.parentNode.id) {
        item.duration = input.value
      }
      return item
    })
    setWorkArray({
      workArray: newArray
    })
  }

  const handleChangeEducationTime = (e) => {
    const input = e.target.parentNode.querySelector('input')
    let newArray = educationArray.map((item) => {
      if (item.id === e.target.parentNode.id) {
        item.time = input.value
      }
      return item
    })
    setEducationArray({
      educationArray: newArray
    })
  }

  const handleChangeEducationDegree= (e) => {
    const input = e.target.parentNode.querySelectorAll('input')[1]
    let newArray = educationArray.map((item) => {
      if (item.id === e.target.parentNode.id) {
        item.degree = input.value
      }
      return item
    })
    setEducationArray({
      educationArray: newArray
    })
  }


  const handleChangeEducationAchievement = (e) => {
    const input = e.target.parentNode.querySelector('textarea')
    let newArray = educationArray.map((item) => {
      if (item.id === e.target.parentNode.id) {
        item.achievement = input.value
      }
      return item
    })
   setEducationArray({
      educationArray: newArray
    })
  }

  const handleChangeEducationPlace = (e) => {
    const input = e.target.parentNode.querySelectorAll('input')[1]
    let newArray = educationArray.map((item) => {
      if (item.id === e.target.parentNode.id) {
        item.place = input.value
      }
      return item
    })
    setEducationArray({
      educationArray: newArray
    })
  }

  const handleChangeEducationSchool = (e) => {
    const input = e.target.parentNode.querySelector('input')
    let newArray = educationArray.map((item) => {
      if (item.id === e.target.parentNode.id) {
        item.school = input.value
      }
      return item
    })
    setEducationArray({
      educationArray: newArray
    })
  }

  const handleChangeWorkRole = (e) => {
    const input = e.target.parentNode.querySelector('input')
    let newArray = workArray.map((item) => {
      if (item.id === e.target.parentNode.id) {
        item.role = input.value
      }
      return item
    })
    setWorkArray({
      workArray: newArray
    })
  }

  const handleChangeWorkCompany = (e) => {
    const input = e.target.parentNode.querySelectorAll('input')[1]
    let newArray = workArray.map((item) => {
      if (item.id === e.target.parentNode.id) {
        item.company = input.value
      }
      return item
    })
   setWorkArray({
      workArray: newArray
    })
  }

  const handleChangeWorkLocation = (e) => {
    const input = e.target.parentNode.querySelectorAll('input')[1]
    let newArray = workArray.map((item) => {
      if (item.id === e.target.parentNode.id) {
        item.location = input.value
      }
      return item
    })
    setWorkArray({
      workArray: newArray
    })
  }

  const handleChangeWorkDescription = (e) => {
    const input = e.target.parentNode.querySelector('textarea')
    let newArray = workArray.map((item) => {
      if (item.id === e.target.parentNode.id) {
        item.description = input.value
      }
      return item
    })
    setWorkArray({
      workArray: newArray
    })
  }

  useEffect(() => {
    setEducationArray(educationArray.map((education) => ({...education, id: uuid()})))
  }, [])

  useEffect(() => {
    setWorkArray(workArray.map((work) => ({...work, id: uuid()})))
  }, [])


    if (edit) {
      return (
        <div className='template'>
          <div className='header'>
            <span>EZ CV</span>
          </div>
          <form onSubmit={swapToView}>
            <div className='button'>
            <button type="submit" id="submit">View</button>
            </div>
            <div className='information'>
            <h2>Basic Information</h2>
              <div className='row'>
              <div className='columnone'>
              <input type="text" placeholder="Full Name" name="name" defaultValue={profile.name} onChange={(e) => setProfile({...profile, [e.target.name]: e.target.value})}></input>
              <input type="text" placeholder="Phone Number" name="number" defaultValue={profile.number} onChange={(e) => setProfile({...profile, number: e.target.value})}></input>
              </div>
              <div className='columntwo'>
              <input type="text" placeholder="Email" name="email" defaultValue={profile.email} onChange={(e) => setProfile({...profile, [e.target.name]: e.target.value})}></input>
              <input type="text" placeholder="Location" name="address" defaultValue={profile.address} onChange={(e) => setProfile({...profile, [e.target.name]: e.target.value})}></input>
              </div>
              </div>
              <div id="boxes" className='box'>
              <input type="text" placeholder="Website" name="website" maxLength="25" defaultValue={profile.website} onChange={(e) => setProfile({...profile, [e.target.name]: e.target.value})}></input>
              </div>
            </div>
              <div className='information'>
              <h2>Objective</h2>
              <div id="boxes">
              <textarea rows="4" placeholder="Objective statement" name="objective" defaultValue={profile.objective} onChange={(e) => setProfile({...profile, [e.target.name]: e.target.value})}></textarea>
              </div>
              </div>
            <div className='information'>
            <h2>Work Experience</h2>
            <div>
            <button className='add' onClick={addToWork}>+</button>
            </div>
            {workArray.map(work => {
        return (
        <div key={work.id} id={work.id} className="information">
            <div id={work.id}>
                <button className="remove" onClick={removeFromWork}>-</button>
            </div>
            <div className="row">
            <div className="columnone" id={work.id}>
                <input type="text" placeholder="Role" name="role" defaultValue={work.role} onChange={(e) => setWork({...work, [e.target.name]: e.target.value})}></input>
                <input type="text" placeholder="Company" name="company" defaultValue={work.company} onChange={(e) => setWork({...work, [e.target.name]: e.target.value})}></input>
            </div>
            <div className="columntwo" id={work.id}>
                <input type="text" placeholder="Duration" name="duration" defaultValue={work.duration} onChange={(e) => setWork({...work, [e.target.name]: e.target.value})}></input>
                <input type="text" placeholder="Location" name="location" defaultValue={work.location} onChange={(e) => setWork({...work, [e.target.name]: e.target.value})}></input>
            </div>
            </div>
            <div className="box" id={work.id}>
                <textarea rows="5" placeholder="Description: Use enter key to create bullet points on display" name="description" defaultValue={work.description} id="work" onChange={(e) => setWork({...work, [e.target.name]: e.target.value})}></textarea>
        </div>
        </div>
        )
        }
    )}
            </div>
            <div className='information'>
            <h2>Education</h2>
            <div>
            <button className="add" onClick={addToEducation}>+</button>
            </div>
            {educationArray.map((education) => {
        return (
        <div key={education.id} id={education.id} className='information'>
            <div id={education.id}>
                <button className="remove" onClick={removeFromEducation}>-</button>
            </div>
            <div className="row">
            <div className="columnone" id={education.id}>
                <input type="text" placeholder="School" name="school" defaultValue={education.school} onChange={(e) => setEducation({...education, [e.target.name] : e.target.value})}></input>
                <input type="text" placeholder="Location" name="place" defaultValue={education.place} onChange={(e) => setEducation({...education, [e.target.name] : e.target.value})}></input>
            </div>
            <div className="columntwo" id={education.id}>
                <input type="text" placeholder="Duration" name="time" defaultValue={education.time} onChange={(e) => setEducation({...education, [e.target.name] : e.target.value})}></input>
                <input type="text" placeholder="Degree" name="degree" defaultValue={education.degree} onChange={(e) => setEducation({...education, [e.target.name] : e.target.value})}></input>
            </div>
            </div>
            <div id={education.id}>
                <textarea rows="2" placeholder="Achievements" name="achievement" defaultValue={education.achievement} onChange={(e) => setEducation({...education, [e.target.name] : e.target.value})}></textarea>
        </div>
        </div>
        )
    })}
            </div>
            <div className='information'>
            <h2>Skills</h2>
            <div className='box' id="boxes">
              <input type="text" placeholder="Skills" name="skills" defaultValue={skill} onChange={(e) => setSkill(e.target.value)}></input>
            </div>
            </div>
     
            </form>
          </div>
      );
    }
    return (
      <div>
      <View
      profile={profile}
      workArray={workArray}
      educationArray={educationArray}
      skill={skill}
      swapToEdit={swapToEdit}
      />
      </div>
    )
}

/*
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
      id: uuid(),
      },
    work: {
      role: '',
      company: '',
      duration: '',
      location: '',
      description: '',
      id: uuid()
    },
    workArray: [{
      role: '', 
      company: '', 
      duration: '', 
      location: '', 
      description: '', 
      id: uuid()
    }],
    education: {
      school: '',
      place: '',
      time: '',
      degree: '',
      achievement: '',
      id: uuid()
    },
    educationArray: [{
      school: '',
      place: '',
      time: '',
      degree: '',
      achievement: '',
      id: uuid()
    }],
    skill: {
      skills: '',
      id: uuid()
    },
    edit: true,
  }

    this.addToEducation = this.addToEducation.bind(this)
    this.removeFromEducation = this.removeFromEducation.bind(this)
    this.addToWork = this.addToWork.bind(this)
    this.removeFromWork = this.removeFromWork.bind(this)
    this.swapToEdit= this.swapToEdit.bind(this)
    this.swapToView = this.swapToView.bind(this)
    this.handleChangeEducationSchool = this.handleChangeEducationSchool.bind(this)
    this.handleChangeEducationAchievement = this.handleChangeEducationAchievement.bind(this)
    this.handleChangeEducationDegree = this.handleChangeEducationDegree.bind(this)
    this.handleChangeEducationPlace = this.handleChangeEducationPlace.bind(this)
    this.handleChangeEducationTime = this.handleChangeEducationTime.bind(this)
    this.handleChangeWorkRole = this.handleChangeWorkRole.bind(this)
    this.handleChangeWorkCompany = this.handleChangeWorkCompany.bind(this)
    this.handleChangeWorkDuration = this.handleChangeWorkDuration.bind(this)
    this.handleChangeWorkLocation = this.handleChangeWorkLocation.bind(this)
    this.handleChangeWorkDescription = this.handleChangeWorkDescription.bind(this)
  }

  handleChangeProfile = (e) => {
    e.preventDefault()
    this.setState({ profile: {
      ...this.state.profile, [e.target.name]: e.target.value,
    }
    })
  }

  handleChangeEducationTime = (e) => {
    const input = e.target.parentNode.querySelector('input')
    let newArray = this.state.educationArray.map((item) => {
      if (item.id === e.target.parentNode.id) {
        item.time = input.value
      }
      return item
    })
    this.setState({
      educationArray: newArray
    })
  }



  handleChangeEducationDegree= (e) => {
    const input = e.target.parentNode.querySelectorAll('input')[1]
    let newArray = this.state.educationArray.map((item) => {
      if (item.id === e.target.parentNode.id) {
        item.degree = input.value
      }
      return item
    })
    this.setState({
      educationArray: newArray
    })
  }


  handleChangeEducationAchievement = (e) => {
    const input = e.target.parentNode.querySelector('textarea')
    let newArray = this.state.educationArray.map((item) => {
      if (item.id === e.target.parentNode.id) {
        item.achievement = input.value
      }
      return item
    })
    this.setState({
      educationArray: newArray
    })
  }

  handleChangeEducationPlace = (e) => {
    const input = e.target.parentNode.querySelectorAll('input')[1]
    let newArray = this.state.educationArray.map((item) => {
      if (item.id === e.target.parentNode.id) {
        item.place = input.value
      }
      return item
    })
    this.setState({
      educationArray: newArray
    })
  }

  handleChangeEducationSchool = (e) => {
    const input = e.target.parentNode.querySelector('input')
    let newArray = this.state.educationArray.map((item) => {
      if (item.id === e.target.parentNode.id) {
        item.school = input.value
      }
      return item
    })
    this.setState({
      educationArray: newArray
    })
  }

  handleChangeWorkRole = (e) => {
    const input = e.target.parentNode.querySelector('input')
    let newArray = this.state.workArray.map((item) => {
      if (item.id === e.target.parentNode.id) {
        item.role = input.value
      }
      return item
    })
    this.setState({
      workArray: newArray
    })
  }

  handleChangeWorkCompany = (e) => {
    const input = e.target.parentNode.querySelectorAll('input')[1]
    let newArray = this.state.workArray.map((item) => {
      if (item.id === e.target.parentNode.id) {
        item.company = input.value
      }
      return item
    })
    this.setState({
      workArray: newArray
    })
  }

  handleChangeWorkDuration = (e) => {
    const input = e.target.parentNode.querySelector('input')
    let newArray = this.state.workArray.map((item) => {
      if (item.id === e.target.parentNode.id) {
        item.duration = input.value
      }
      return item
    })
    this.setState({
      workArray: newArray
    })
  }

  handleChangeWorkLocation = (e) => {
    const input = e.target.parentNode.querySelectorAll('input')[1]
    let newArray = this.state.workArray.map((item) => {
      if (item.id === e.target.parentNode.id) {
        item.location = input.value
      }
      return item
    })
    this.setState({
      workArray: newArray
    })
  }

  handleChangeWorkDescription = (e) => {
    const input = e.target.parentNode.querySelector('textarea')
    let newArray = this.state.workArray.map((item) => {
      if (item.id === e.target.parentNode.id) {
        item.description = input.value
      }
      return item
    })
    this.setState({
      workArray: newArray
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
      id: uuid()
    }
  })
}

  addToEducation = (e) => {
    e.preventDefault()
    this.setState({
      educationArray: [...this.state.educationArray,
      {
        school: '',
        place: '',
        time: '',
        degree: '',
        achievement: '',
        id: uuid()
      }
    ]
    })
  }

  removeFromWork = (e) => {
    e.preventDefault()
    const key = e.target.parentNode.id
    let filteredArray = this.state.workArray.filter(work => work.id !== key)
    this.setState({
      workArray: filteredArray
    })
  }

  removeFromEducation = (e) => {
    e.preventDefault()
    const key = e.target.parentNode.id
    let filteredArray = this.state.educationArray.filter(education => education.id !== key)
    this.setState({
      educationArray: filteredArray
    })
  }

  swapToEdit = (e) => {
    e.preventDefault()
    this.setState({
      edit: true,
      editEdu: true
    })
  }

  swapToView = (e) => {
    e.preventDefault()
    this.setState({
      edit: false,
    })
  }

  render() {
    const { edit, editEdu, profile, work, skill, educationArray, workArray, } = this.state
    if (edit) {
      return (
        <div className='template'>
          <div className='header'>
            <span>EZ CV</span>
          </div>
          <form ref={this.formRef} onSubmit={this.swapToView}>
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
              <input type="text" placeholder="Website" name="website" maxLength="25" defaultValue={profile.website} onChange={this.handleChangeProfile}></input>
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
            <div>
            <button className='add' onClick={this.addToWork}>+</button>
            </div>
              <Work
              work={work}
              workArray={workArray}
              handleChangeWorkRole={this.handleChangeWorkRole}
              handleChangeWorkCompany={this.handleChangeWorkCompany}
              handleChangeWorkDuration={this.handleChangeWorkDuration}
              handleChangeWorkLocation={this.handleChangeWorkLocation}
              handleChangeWorkDescription={this.handleChangeWorkDescription}
              addToWork={this.addToWork}
              removeFromWork={this.removeFromWork}
              />
            </div>
            <div className='information'>
            <h2>Education</h2>
            <div>
            <button className="add" onClick={this.addToEducation}>+</button>
            </div>
              <Education
              handleChangeEducationSchool={this.handleChangeEducationSchool}
              handleChangeEducationAchievement={this.handleChangeEducationAchievement}
              handleChangeEducationDegree={this.handleChangeEducationDegree}
              handleChangeEducationPlace={this.handleChangeEducationPlace}
              handleChangeEducationTime={this.handleChangeEducationTime}
              editEdu={editEdu}
              educationArray={educationArray}
              addToEducation={this.addToEducation}
              removeFromEducation={this.removeFromEducation}
              />
            </div>
            <div className='information'>
            <h2>Skills</h2>
            <div className='box' id="boxes">
              <input type="text" placeholder="Skills" name="skills" defaultValue={skill.skills} onChange={this.handleChangeSkill}></input>
            </div>
            </div>
     
            </form>
          </div>
      );
    }
    return (
      <div>
      <View
      name={this.state.profile.name}
      address={this.state.profile.address}
      number={this.state.profile.number}
      email={this.state.profile.email}
      website={this.state.profile.website}
      key={this.state.profile.key}
      profile={profile}
      workArray={workArray}
      educationArray={educationArray}
      skill={skill}
      swapToEdit={this.swapToEdit}
      />
      </div>
    )
  }
}
*/

export default App;
