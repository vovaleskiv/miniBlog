import NavigationService from '../navigators/action';
import {get, catchError, getItem, mergeComment} from "../helpers/index";
import {setLoading} from "../reducers/loading";
import {setPosts, setComments, setCurrentPost} from "../reducers/posts";
import {goPostDetail} from "./navigation";
import {USER_INFO} from "../constants";

export const fetchPosts = () => dispatch => {
    dispatch(setLoading(true));
    return get('/posts')
        .then(data => {
            return data.map(({id, title, body, userId}) => ({
                id,
                title,
                body: body.replace(/\n/g, ' '),
                userId
            }))
        })
        .then(posts => {
            dispatch(setPosts(posts));
            dispatch(setLoading(false));
        })
        .catch(catchError(dispatch))
};

export const searchPosts = (text) => (dispatch, getState) => {
    let state = getState();
    let posts = state.posts.list;
    let reg = new RegExp(`.*${text}.*`, 'ig');
    dispatch(setPosts(posts.filter(item => item.title.match(reg) || item.body.match(reg))))
};

export const postDetail = (item) => dispatch => {
    dispatch(setLoading(true));
    let localComment = [];
    return getItem()
        .then(data => {
            if (data[item.id])
                localComment = Object.values(data[item.id]);
            return Promise.all([
                get(`/comments?postId=${item.id}`),
                get(`/users?id=${item.userId}`)
            ])
        })
        .then(data => {
            let [comments, user] = data;
            dispatch(setComments([...comments, ...localComment]));
            dispatch(setCurrentPost({...item, user: user && user[0]}))
        })
        .then(() => {
            dispatch(setLoading(false));
            goPostDetail();
        })
        .catch(catchError(dispatch))
};

export const sendComment = (body) => (dispatch, getState) => {
    dispatch(setLoading(true));
    let state = getState();
    let postId = state.posts.currentPost.id;
    let comments = state.posts.comments;
    let newComment = {...USER_INFO, postId, body, id: comments.length + 1};
    return mergeComment(postId, newComment)
        .then(() => {
            dispatch(setComments([...comments, newComment]));
            dispatch(setLoading(false));
            return NavigationService.back();
        })
        .catch(catchError(dispatch))
};