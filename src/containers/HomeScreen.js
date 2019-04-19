import {connect} from 'react-redux';

import HomeScreen from '../components/HomeScreen';

import {fetchPosts, searchPosts, postDetail} from "../actions/index";

export default connect(
    state => ({
        posts: state.posts.list,
    }),
    dispatch => ({
        fetchPosts: () => dispatch(fetchPosts()),
        searchPosts: (searchText) => dispatch(searchPosts(searchText)),
        postDetail: (item) => dispatch(postDetail(item)),
    })
)(HomeScreen);