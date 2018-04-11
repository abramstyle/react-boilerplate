import React from 'react';
// import Loadable from 'react-loadable';
import universal from 'react-universal-component';

// const LoadablePosts = Loadable({
//   loader: () => import('./Posts'),
//   loading() {
//     return <div className="loading">Loading</div>;
//   },
// });
const Posts = universal(() => import('./Posts'));

const PostsPage = props => <Posts />;

export default PostsPage;
