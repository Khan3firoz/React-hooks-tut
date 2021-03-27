import React from 'react'

const GihubUsers = ({ users }) => {
    return (
        <>
            <h1>List of GitHum User</h1>
            <div className="container-fluid mt-5">
                <div className="row text-center">

                    {
                        users.map((curUser) => {
                            const { id, login, avatar_url, type } = curUser;
                            return (
                                <div className="col-10 col-md-4 mt-5" key={id}>
                                    <div className="card p-2">
                                        <div className="d-flex align-item-center">
                                            <div className="image"><img src={avatar_url} className="rounded" width="155" /></div>
                                            <div className="ml-3 w-100">
                                                <h4 className="mb-0 mt-0 textleft">{login}</h4><span className="textLeft">{type}</span>
                                                <div className="p-2 mt-2 bg-primary d-flex justify-content-bitween round text-white stats">
                                                    <div className="d-flex flex-column"><span className="articles">Articles</span><span className="number">38</span></div>
                                                    <div className="d-flex flex-column"><span className="follower">Follower</span><span className="number">456</span></div>
                                                    <div className="d-flex flex-column"><span className="rating">Rating</span><span className="number">8.5</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default GihubUsers
