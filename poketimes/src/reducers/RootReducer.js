const initState = {
    posts: [
        {id: "1", title: "Lay An Egg", body: "est rerum tempore vitae↵sequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla"},
        {id: "2", title: "Eat Something", body: "et iusto sed quo iure↵voluptatem occaecati omnis e…↵molestiae porro eius odio et labore et velit aut"},
        {id: "3", title: "Go To Pee", body: "ullam et saepe reiciendis voluptatem adipisci↵sit … ipsam iure↵quis sunt voluptatem rerum illo velit"}
    ]
}

const RootReducer = (state = initState, action) => {
    return state;
}

export default RootReducer;