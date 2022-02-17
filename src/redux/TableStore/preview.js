
//tiredy simple action creator
export function addWithoutChecked(text){
  return {
    type:'ADD_TODO',
    text,
  }
};

export function addTodo(text){

  return function(dispatch, getState)=>{
      if(getState().todos.length === 3){
           return
      };

      dispatch(addWithoutchecked(text));
  }
}

/*generates an action creator*/

function makeActionCrator(type, ...argName){
  return function (...args){
    const action = { type }
    argName.forEach((arg, index)=>{
      action[argName[index]] = args[index]
    });
    return action
  }
};

const ADD_TODO = 'ADD_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const DELETE_TODO = 'DELETE_TODO';

export const addTodo = makeActionCreator(ADD_TODO,'text');
export const updateTodo = makeActionCreator(UPDATE_TODO,'id','text');
export const deleteTodo = makeActionCreator(DELETE_TODO,'id');

/*async action creator*/

export function loadPostsSuccess(userId, response) {
  return {
    type: 'LOAD_POSTS_SUCCESS',
    userId,
    response
  }
}

export function loadPostsFailure(userId, error) {
  return {
    type: 'LOAD_POSTS_FAILURE',
    userId,
    error
  }
}

export function loadPostsRequest(userId) {
  return {
    type: 'LOAD_POSTS_REQUEST',
    userId
  }
}

import { Component } from 'react'
import { connect } from 'react-redux'
import {
  loadPostsRequest,
  loadPostsSuccess,
  loadPostsFailure
} from './actionCreators'

class Posts extends Component {
  loadData(userId) {
    // Injected into props by React Redux `connect()` call:
    const { dispatch, posts } = this.props

    if (posts[userId]) {
      // There is cached data! Don't do anything.
      return
    }

    // Reducer can react to this action by setting
    // `isFetching` and thus letting us show a spinner.
    dispatch(loadPostsRequest(userId))

    // Reducer can react to these actions by filling the `users`.
    fetch(`http://myapi.com/users/${userId}/posts`).then(
      response => dispatch(loadPostsSuccess(userId, response)),
      error => dispatch(loadPostsFailure(userId, error))
    )
  }

  componentDidMount() {
    this.loadData(this.props.userId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.loadData(this.props.userId)
    }
  }

  render() {
    if (this.props.isFetching) {
      return <p>Loading...</p>
    }

    const posts = this.props.posts.map(post => (
      <Post post={post} key={post.id} />
    ))

    return <div>{posts}</div>
  }
}

export default connect(state => ({
  posts: state.posts,
  isFetching: state.isFetching
}))(Posts)

/*
 * However, this quickly gets repetitive because different components request data from the same API endpoints. Moreover, 
 * we want to reuse some of this logic (e.g., early exit when there is cached data available) from many components.
 * Middleware lets us write more expressive, potentially async action creators.
 * It lets us dispatch something other than plain objects, and interprets the values. For example,
 * middleware can “catch” dispatched Promises and turn them into a pair of request and success/failure actions.
 * The simplest example of middleware is redux-thunk. “Thunk” middleware lets you write action creators as “thunks”,
 * that is, functions returning functions. This inverts the control: you will get dispatch as an argument,
 * so you can write an action creator that dispatches many times.
*/

/* Note#
 * Thunk middleware is just one example of middleware. Middleware is not about “letting you dispatch functions”.
 * It's about letting you dispatch anything that the particular middleware you use knows how to handle. 
 * Thunk middleware adds a specific behavior when you dispatch functions, but it really depends on the middleware you use.
 */

/*REDUX-THUNK*/

export function loadPosts(userId){

   return function(dispatch,getState){
     const { posts } = getState();

         if(posts[userId]){
             /*early exit*/
             return
         };

     dispatch({
      type:'LOAD_POST_REQUEST',
      userId,
     });

     fetch(`http://myapp.cm/users/${userId}/posts`).then(response=>dispacth({
                                                                      type:'LOAD_POST_SUCCESS',
                                                                      userId,
                                                                      response,
                                                                     }),
                                                            error=>dispatch({
                                                                      type:'LOAD_POSTS_FAILURE',
                                                                      userId,
                                                                      error,
                                                                    })   

                                                         )
   }
}

import { Component } from 'react'
import { connect } from 'react-redux'
import { loadPosts } from './actionCreators'

class Posts extends Component {
  componentDidMount() {
    this.props.dispatch(loadPosts(this.props.userId))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.props.dispatch(loadPosts(this.props.userId))
    }
  }

  render() {
    if (this.props.isFetching) {
      return <p>Loading...</p>
    }

    const posts = this.props.posts.map(post => (
      <Post post={post} key={post.id} />
    ))

    return <div>{posts}</div>
  }
}

export default connect(state => ({
  posts: state.posts,
  isFetching: state.isFetching
}))(Posts)

/*generalise the code pattern above*/

function loadPost(userId){
  return {
      types:['LOAD_POST_REQUEST','LOAD_POSTS_FAILURE','LOAD_POST_SUCCESS'],
      shouldCallAPI:state=>!state.posts[userId],
      callAPI:()=>fetch(`http://myapi.com/users/${userId}/posts`),
      payload:{ userId },
  }
};

/*this middleware will interpret the code above*/


function callAPIMiddleWare({dispatch, getState}){
    return next => action => {
      const { types, callAPI, shouldCallAPI = () => true, payload = {} } = action;

      if(!types){
        return next(action)
      }

      if(!Array.isArray(types) || types.length !== 3 || !types.every(type =>typeof type === 'string')){
        throw new Error('Expected an array of three  string stypes.')
      }

      if(typeof callAPI !== 'function'){
        throw new Error('Expected callAPI to be a function')
      }

      if(!shouldCallAPI(getState())){
        return 
      }

      const [requestType, successType, failureType] = types;

        dispatch(
          Object.assign({},payload, {
               type:requestType,
          })
        )

        return callAPI().then( response => dispatch(
                                             Object.assign({},payload, {
                                                  response,
                                                  type:successType,
                                             }),
                                  error => dispatch(
                                             Object.assign({},payload, {
                                                  error,
                                                  type:failureType,
                                             }),
                                           )              
                                          )
                             )
    }
}
   /*the same signature approach above*/

function callAPIMiddleWare({dispatch, getState}){
    return function (next){
          return function (action){
              const { types, callAPI, shouldCallAPI = () => true, payload = {} } = action;
          }
    }
}
/* After passing it once to applyMiddleware(...middlewares),
 * you can write all your API-calling action creators the same way:
 */

export function loadPosts(userId) {
  return {
    types: ['LOAD_POSTS_REQUEST', 'LOAD_POSTS_SUCCESS', 'LOAD_POSTS_FAILURE'],
    shouldCallAPI: state => !state.posts[userId],
    callAPI: () => fetch(`http://myapi.com/users/${userId}/posts`),
    payload: { userId }
  }
}

export function loadComments(postId) {
  return {
    types: [
      'LOAD_COMMENTS_REQUEST',
      'LOAD_COMMENTS_SUCCESS',
      'LOAD_COMMENTS_FAILURE'
    ],
    shouldCallAPI: state => !state.comments[postId],
    callAPI: () => fetch(`http://myapi.com/posts/${postId}/comments`),
    payload: { postId }
  }
}

export function addComment(postId, message) {
  return {
    types: [
      'ADD_COMMENT_REQUEST',
      'ADD_COMMENT_SUCCESS',
      'ADD_COMMENT_FAILURE'
    ],

    callAPI: () =>

      fetch(`http://myapi.com/posts/${postId}/comments`, {
          method: 'post',
         headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
            body: JSON.stringify({ message });
      }),
         payload: { postId, message };
  }
}

function createReducer(initialState, handlers){
    return function reducer(state = initialState, action){
         if(handlers.hasOwnProperty(action.type)){
                return handlers[action.type](state, action)
         }else{
          return state;
         }
    }
}

function middleWare({dispatch, getState}){
    return next => action => {
        const { types, callAPI, shouldCallAPI = () => true, payload = {} } = action;