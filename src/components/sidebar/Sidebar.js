import React from 'react'

export default function Sidebar() {

  return (
    <aside>
        <div className="toggle">
            <div className="logo">
                <span className="material-icons-sharp">
                phishing
                </span>
                <h2>Phishing<span className="danger">App</span></h2>
            </div>
            <div className="close" id="close-btn">
                <span className="material-icons-sharp">
                    close
                </span>
            </div>
        </div>
        <div className='sidebar'>
            <a  className="active">
                <span className="material-icons-sharp">
                    dashboard
                </span>
                <h3>Dashboard</h3>
            </a>
            <a >
                <span className="material-icons-sharp">
                    insights
                </span>
                <h3>Campaigns</h3>
            </a>
            <a >
                <span className="material-icons-sharp">
                    person_outline
                </span>
                <h3>Users and Groups</h3>
            </a>
            <a >
                <span className="material-icons-sharp">
                    report_gmailerrorred
                </span>
                <h3>Reports</h3>
                <span className="message-count">27</span>
            </a>
            <a >
                <span className="material-icons-sharp">
                    settings
                </span>
                <h3>Settings</h3>
            </a>
            <a >
                <span className="material-icons-sharp">
                    logout
                </span>
                <h3>Logout</h3>
            </a>
        </div>  
    </aside>
  )
}
