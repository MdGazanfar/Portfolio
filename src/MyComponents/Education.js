import React from 'react';

export const Education = () => {
    return (
        <div className='main'>
            <div className="edu">Edu<span>cation</span></div>
            <div className="container">
                <div className="row">
                    <div className="card">
                        <div className="card-header">
                            <h1>2017</h1>
                        </div>
                        <div className="card-body">
                            <p>
                                Secondary School Certificate
                            </p>
                            <p className="grade">Distinction</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h1>2019</h1>
                        </div>
                        <div className="card-body">
                            <p>
                                Higher Secondary Certificate
                            </p>
                            <p className="grade">A Grade</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h1>2022</h1>
                        </div>
                        <div className="card-body">
                            <p>
                                Bachelor's in Information Technology
                            </p>
                            <p className="grade">A+ Grade</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
