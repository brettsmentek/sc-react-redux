import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import { ButtonGhost } from '../../components/ButtonGhost';

function TrackActions({ onOpenComments, onAddTrackToPlaylist }) {
  const isSmall = true;
  return (
    <div className="track-actions-list">
      <div className="track-actions-list-item">
        <ButtonGhost isSmall={isSmall} onClick={onAddTrackToPlaylist}>
          <i className="fa fa-th-list" /> Add to Playlist
        </ButtonGhost>
      </div>
      <div className="track-actions-list-item">
        <ButtonGhost isSmall={isSmall} onClick={onOpenComments}>
          <i className="fa fa-comment" /> Comment
        </ButtonGhost>
      </div>
    </div>
  );
}

function mapStateToProps(state, props) {
  return {
    activity: props.activity
  };
}

function mapDispatchToProps(dispatch, props) {
  const { activity } = props;

  return {
    onOpenComments: () => bindActionCreators(actions.openComments, dispatch)(activity.id),
    onAddTrackToPlaylist: () => bindActionCreators(actions.addTrackToPlaylist, dispatch)(activity),
  };
}

TrackActions.propTypes = {
  onOpenComments: React.PropTypes.func,
  onAddTrackToPlaylist: React.PropTypes.func,
};

const TrackActionsContainer = connect(mapStateToProps, mapDispatchToProps)(TrackActions);

export {
  TrackActions,
  TrackActionsContainer
};
