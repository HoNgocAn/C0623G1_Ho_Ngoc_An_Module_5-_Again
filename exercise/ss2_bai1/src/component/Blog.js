import React from "react";

function Blog () {
    const post = [
        {
            id : 1,
            title: "5 Best Crypto Performers During The 2022 Market Flop",
            category: "Crypto News",
            time: "21 hours ago"
        },
        {
            id : 2,
            title: "Top crypto funding stories of 2022",
            category: "New Year Special",
            time: "a day ago"
        },
        {
            id : 3,
            title: "2023 will see the death of play-to-earn gaming",
            category: "Opinion",
            time: "a day ago"
        }
    ]


    return (
        <div className="container">
            <h1>List Post</h1>
            <table className="table">
                <thead className="table-dark">
                <tr>
                    <td scope="col" >ID</td>
                    <td scope="col">TITLE</td>
                    <td scope="col">CATEGORY</td>
                    <td scope="col">TIME</td>
                    <td scope="col">ACTION</td>
                </tr>
                </thead>
                <tbody>
                {post.map(item => (
                <tr key={item.id}>
                    <td scope="col">{item.id}</td>
                    <td className="title" scope="col">{item.title}</td>
                    <td scope="col">{item.category}</td>
                    <td scope="col">{item.time}</td>
                    <td>
                        <button type="button" className="btn btn-secondary btn-sm">Edit</button>
                        <button type="button" className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Blog;