import {connect} from 'react-redux';

import PostScreen from '../components/PostScreen';

import {goAddComment} from "../actions/navigation";

export default connect(
    state => ({
        comments: state.posts.comments,
        post: state.posts.currentPost,
    }),
    dispatch => ({
        goAddComment: () => goAddComment()
    })
)(PostScreen);