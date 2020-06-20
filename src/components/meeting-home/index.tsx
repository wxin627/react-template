import * as React from 'react';
import './styles.scss';

// const { useState, useCallback, useRef } = React

export const MeetingHome: React.FunctionComponent = () => {
  

  return (
      <div className="app--meeting-home-top">
        <ul className="app--meeting-home-top-operate">
          <li
            className="app--meeting-home-top-operate-quick-meeting"
            // onClick={handleCreateQuickMeeting}
          >
            <p className="app--meeting-home-top-operate-text">Quick Meiii</p>
          </li>
          <li
            className="app--meeting-home-top-operate-join-meeting"
            // onClick={toggleJoinDialogVisible}
          >
            <p className="app--meeting-home-top-operate-text">Join a Meeting</p>
          </li>
          <li
            className="app--meeting-home-top-operate-schedule-meeting"
            // onClick={toggleScheduleDialogVisible}
          >
            <p className="app--meeting-home-top-operate-text">Schedule a Meeting</p>
          </li>
        </ul>
        
      </div>
    )
};

