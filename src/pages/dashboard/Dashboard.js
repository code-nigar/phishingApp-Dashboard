import React from 'react'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TheTable from '../../components/table/TheTable';

const { emailSent, emailOpened, clickedLink, submitData, emailReported } = {
    emailSent: 6500,
    emailOpened: 4500, 
    clickedLink: 3500,
    submitData: 1200,
    emailReported: 600
};

const calculatePercentage = (val) => {
    return ((val/emailSent)*100).toFixed(2);
}

export default function Dashboard() {
    const [month, setMonth] = React.useState('');
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  return (
    <main>
        <div className='dashboard-top'>
        <h1>Dashboard</h1>
        <div className='filter'>
            <div className='filter-form'>           
                <FormControl sx={{ m:1,mt:2, minWidth:150, border: 'none', borderRadius: 'var(--card-border-radius)' }}>
                    <InputLabel id="demo-simple-select-helper-label">Campaign</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Age"
                    onChange={handleAge}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m:1, mt:2, minWidth:150, borderRadius: 'var(--card-border-radius)' }}>
                    <InputLabel id="demo-simple-select-helper-label">ID</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Age"
                    onChange={handleAge}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
        </div>
        <div className="analyse">
            <div className="sales">
                <div className="status">
                    <div className="info">
                        <h3>Email Sent</h3>
                        <h1>{emailSent}</h1>
                    </div>
                    <CircularProgressbar 
                        value={calculatePercentage(emailSent)} 
                        text={`${100}%`} 
                        styles={buildStyles({
                            // Colors
                            pathColor: `rgb(69,178,117)`,
                            textColor: '#279457',
                            trailColor: 'rgba(69,178,117,0.3)',
                            backgroundColor: '#ffffff',
                            })
                        } 
                    />
                </div>
            </div>
            <div className="visits">
                <div className="status">
                    <div className="info">
                        <h3>Email Opened</h3>
                        <h1>{emailOpened}</h1>
                    </div>
                    <CircularProgressbar 
                        value={calculatePercentage(emailOpened)} 
                        text={`${calculatePercentage(emailOpened)}%`} 
                        styles={buildStyles({
                            // Colors
                            pathColor: `rgb(255,179,91)`,
                            textColor: '#d78b33',
                            trailColor: 'rgba(255,179,91,0.3)',
                            backgroundColor: '#ffffff',
                            })
                        } 
                    />
                </div>
            </div>
            <div className="searches">
                <div className="status">
                    <div className="info">
                        <h3>Clicked Link</h3>
                        <h1>{clickedLink}</h1>
                    </div>
                    <CircularProgressbar 
                        value={calculatePercentage(clickedLink)} 
                        text={`${calculatePercentage(clickedLink)}%`} 
                        styles={buildStyles({
                            // Colors
                            pathColor: `rgb(255,135,72)`,
                            textColor: '#dc6425',
                            trailColor: 'rgba(255,135,72,0.3)',
                            backgroundColor: '#ffffff',
                            })
                        } 
                    />
                </div>
            </div>
            <div className="visits">
                <div className="status">
                    <div className="info">
                        <h3>Submitted Data</h3>
                        <h1>{submitData}</h1>
                    </div>
                    <CircularProgressbar 
                        value={calculatePercentage(submitData)} 
                        text={`${calculatePercentage(submitData)}%`} 
                        styles={buildStyles({
                            // Colors
                            pathColor: `rgb(255,91,53)`,
                            textColor: '#e13d17',
                            trailColor: 'rgba(255,91,53,0.3)',
                            backgroundColor: '#ffffff',
                            })
                        } 
                    />
                </div>
            </div>
            <div className="searches">
                <div className="status">
                    <div className="info">
                        <h3>Email Reported</h3>
                        <h1>{emailReported}</h1>
                    </div>
                    <CircularProgressbar 
                        value={calculatePercentage(emailReported)} 
                        text={`${calculatePercentage(emailReported)}%`} 
                        styles={buildStyles({
                            // Colors
                            pathColor: `rgb(255,91,53)`,
                            textColor: '#e13d17',
                            trailColor: 'rgba(255,91,53,0.3)',
                            backgroundColor: '#ffffff',
                            })
                        } 
                    />
                </div>
            </div>
        </div>
        <div className="recent-orders">
            <h2>Recent Campaigns</h2>
            <TheTable/>
        </div>
    </main>
  )
}
