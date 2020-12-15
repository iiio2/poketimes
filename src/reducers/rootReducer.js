const initState = {
    posts:[
        {id:1, title:'qui est esse', body:'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque'}, 

        {id:2, title:'nesciunt quas odio', body:'repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem'}, 

        {id:3, title:'magnam facilis autem',body:'dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe'}
    ],
};

const rootReducer = (state=initState,action) => {
    if(action.type === 'DELETE_POST'){
        const newPost = state.posts.filter(post=> post.id !== action.id); 
        return {
            ...state, 
            posts: newPost,
        }
    }
    return state; 
};


export default rootReducer;
