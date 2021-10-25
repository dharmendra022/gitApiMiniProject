import React, { useEffect, useState } from 'react'

const Api = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users');

        // const data=
        setUsers(await response.json());
        // console.log(data);

    }
    useEffect(() => {
        getUsers();
    }, [])


    return (
        <>
            <h2>List of Users </h2>
            <div className="container-fluid mt-5" >
                <div className="row text-centre">
                    {
                        users.map((curElem) => {
                            return (
                                <div>
                                    <div className="col-10 col-md-4 mt-5">
                        <div className="card p-2">
                            <div className="d-flex align-items-centre">
                                <div className="images"><img src="" alt="" className="rounded" width="155" /></div>
                                <div className="ml-3 w-100">
                                    <h4 className="mb-0 mt-0 textLeft">{curElem.login}</h4><span className="textLeft">{curElem.node_id}</span>
                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white status">
                                        <div className="d-flex felx-column"><span className="arcticels">Articles</span><span className="number1">38</span></div>
                                        <div className="d-flex felx-column"><span className="followers">Followers</span><span className="number2">980</span></div>
                                        <div className="d-flex felx-column"><span className="rating">Rating</span><span className="number3">8.9</span></div>

                                    </div>

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

export default Api;
