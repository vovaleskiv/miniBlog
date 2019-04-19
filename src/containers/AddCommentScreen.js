import {connect} from 'react-redux';

import AddCommentScreen from '../components/AddCommentScreen';

import {sendComment} from "../actions";

export default connect(
    state => ({}),
    dispatch => ({
        sendComment: (body) => dispatch(sendComment(body)),
    })
)(AddCommentScreen);