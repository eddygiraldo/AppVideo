import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NotFound from '../containers/NotFound';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';

const Player = (props) => {

  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source scr={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : <NotFound />;
};

const MapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const MapDispatchToProps = {
  getVideoSource,
};

export default connect(MapStateToProps, MapDispatchToProps)(Player);
