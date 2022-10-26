import React,{Fragment} from 'react';

import php from '../asset/image/php.png'
import TensorFlow from '../asset/image/TensorFlow_logo.svg.png'
import sqlserver from '../asset/image/sql-server.webp'
import react from '../asset/image/react.png'
import r from '../asset/image/r.jpg'

import oracle from '../asset/image/oracle-database.png'
import spring from '../asset/image/OG-Spring.png'
import mySql from '../asset/image/my_sql.png'
import mongoDb from '../asset/image/MongoDB_Logo.svg.png'

import cpp from '../asset/image/ISO_C++_Logo.svg.png'
import java from '../asset/image/java.png'
import pytorch from '../asset/image/pytorch.png'
import laravel from '../asset/image/laravel.png'
import django from '../asset/image/django.png'
import cSharp from '../asset/image/C-Sharp.webp'
import c from '../asset/image/c.png'
import aspDoNnet from '../asset/image/ASP.Net.png'
import angular from '../asset/image/Angular_full_color_logo.svg.png'
import python from '../asset/image/python.png'


import Slide from 'react-reveal/Slide';


const Technology = () => {
    return (
        <Fragment>
            <section className='technology-section'>
                <div className='row'>
                    <div className='technology-content'>
                        <h2>Technology We Use</h2>
                        <div className='technology-grid'>
                            <div className='col'>
                                <Slide left>
                                <div className='technology-left'>
                                    <img className="tech-image" src={php} />
                                </div>
                                </Slide>
                                <Slide right>
                                <div className='technology-right'>
                                    <h3>PHP</h3>
                                    <p>Php is basically used for developing web based software applications. It is a programming language stands for Hypertext Preprocessor. Using php we can create dynamic content that interacts with databases.</p>
                                </div>
                                </Slide>   
                            </div>
                            <div className='col'>
                                <Slide left>
                                <div className='technology-left'>
                                    <img className="tech-image" src={TensorFlow } />
                                </div>
                                </Slide>
                                <Slide right>
                                <div className='technology-right'>
                                    <h3>TensorFlow</h3>
                                    <p>Create production-grade machine learning models on any device with TensorFlow by Google. TensorFlow is an E2E platform that makes it easy for you to build and deploy ML models. Flexibility and control. Easy model building. Robust deployment tools.</p>
                                </div>
                                </Slide>
                            </div>
                            <div className='col'>
                                <Slide left>
                                <div className='technology-left'>
                                    <img className="tech-image" src={sqlserver } />
                                </div>
                                </Slide>
                                <Slide right>
                                <div className='technology-right'>
                                    <h3>MS sql server</h3>
                                    <p>Microsoft SQL Server is a relational database management system developed by Microsoft. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications—which may run either on the same computer or on another computer across a network (including the Internet).</p>
                                </div>
                                </Slide>
                            </div>
                            <div className='col'>
                                <Slide left>
                                <div className='technology-left'>
                                    <img className="tech-image" src={react } />
                                </div>
                                </Slide>
                                <Slide right>
                                <div className='technology-right'>
                                    <h3>React JS</h3>
                                    <p>React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.</p>
                                </div>
                                </Slide>
                            </div>
                            <div className='col'>
                                <Slide left>
                                <div className='technology-left'>
                                    <img className="tech-image" src={r} />
                                </div>
                                </Slide>
                                <Slide right>
                                <div className='technology-right'>
                                    <h3>R</h3>
                                    <p>R is a programming language for statistical computing and graphics supported by the R Core Team and the R Foundation for Statistical Computing. Created by statisticians Ross Ihaka and Robert Gentleman, R is used among data miners, bioinformaticians and statisticians for data analysis and developing statistical software</p>
                                </div>
                                </Slide>
                            </div>
                            <div className='col'>
                                <Slide left>
                                <div className='technology-left'>
                                    <img className="tech-image" src={oracle } />
                                </div>
                                </Slide>
                                <Slide right>
                                <div className='technology-right'>
                                    <h3>Oracle Database</h3>
                                    <p>It is a database commonly used for running online transaction processing (OLTP), data warehousing (DW) and mixed (OLTP & DW) database workloads. Oracle Database is available by several service providers on-prem, on-cloud, or as hybrid cloud installation.</p>
                                </div>
                                </Slide>
                            </div>
                            <div className='col'>
                                <Slide left>
                                <div className='technology-left'>
                                    <img className="tech-image" src={spring } />
                                </div>
                                </Slide>
                                <Slide right>
                                <div className='technology-right'>
                                    <h3>Spring</h3>
                                    <p>The Spring Framework is an application framework and inversion of control container for the Java platform. The framework's core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE platform.</p>
                                </div>
                                </Slide>
                            </div>
                            <div className='col'>
                                <Slide left>
                                <div className='technology-left'>
                                    <img className="tech-image" src={mySql } />
                                </div>
                                </Slide>
                                <Slide right>
                                <div className='technology-right'>
                                    <h3>my sql</h3>
                                    <p>MySQL is a database management system.It may be anything from a simple shopping list to a picture gallery or the vast amounts of information in a corporate network. To add, access, and process data stored in a computer database, you need a database management system such as MySQL Server.</p>
                                </div>
                                </Slide>
                            </div>
                            <div className='col'>
                                <Slide left>
                                <div className='technology-left'>
                                    <img className="tech-image" src={mongoDb} />
                                </div>
                                </Slide>
                                <Slide right>
                                <div className='technology-right'>
                                    <h3>Mongo DB</h3>
                                    <p>MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL) which is deemed non-free by several distributions.</p>
                                </div>
                                </Slide>
                            </div>
                            <div className='col'>
                                <Slide left>
                                <div className='technology-left'>
                                    <img className="tech-image" src={cpp} />
                                </div>
                                </Slide>
                                <Slide right>
                                <div className='technology-right'>
                                    <h3>C++</h3>
                                    <p>C++ is a general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".</p>
                                </div>
                                </Slide>
                            </div>
                            <div className='col'>
                                <Slide left>
                                <div className='technology-left'>
                                    <img className="tech-image" src={java } />
                                </div>
                                </Slide>
                                <Slide right>
                                <div className='technology-right'>
                                    <h3>Java</h3>
                                    <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile.</p>
                                </div>
                                </Slide>
                            </div>
                            <div className='col'>
                                <Slide left>
                                <div className='technology-left'>
                                    <img className="tech-image" src={pytorch } />
                                </div>
                                </Slide>
                                <Slide right>
                                <div className='technology-right'>
                                    <h3>PyTorch</h3>
                                    <p>An open source machine learning framework that accelerates the path from research prototyping to production deployment.</p>
                                </div>
                                </Slide>
                            </div>
                            <div className='col'>
                                <Slide left>
                                <div className='technology-left'>
                                    <img className="tech-image" src={laravel } />
                                </div>
                                </Slide>
                                <Slide right>
                                <div className='technology-right'>
                                    <h3>Laravel</h3>
                                    <p>Laravel is a free and open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern and based on Symfony.</p>
                                </div>
                                </Slide>
                            </div>
                            <div className='col'>
                                <Slide left>
                                <div className='technology-left'>
                                    <img className="tech-image" src={django } />
                                </div>
                                </Slide>
                                <Slide right>
                                <div className='technology-right'>
                                    <h3>django</h3>
                                    <p>Django is an open source web framework that runs in Python. The majority of its use is related to MVC monolithic programming, the ORM, migration capabilities and its support for modules.</p>
                                </div>
                                </Slide>
                            </div>
                            <div className='col'>
                                <Slide left>
                                <div className='technology-left'>
                                    <img className="tech-image" src={cSharp } />
                                </div>
                                </Slide>
                                <Slide right>
                                <div className='technology-right'>
                                    <h3>c#</h3>
                                    <p>C#  is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.</p>
                                </div>
                                </Slide>
                            </div>
                            <div className='col'>
                                <Slide left>
                                <div className='technology-left'>
                                    <img className="tech-image" src={c} />
                                </div>
                                </Slide>
                                <Slide right>
                                <div className='technology-right'>
                                    <h3>C</h3>
                                    <p>C is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie, and remains very widely used and influential. By design, C's features cleanly reflect the capabilities of the targeted CPUs.</p>
                                </div>
                                </Slide>
                            </div>
                            <div className='col'>
                                <Slide left>
                                <div className='technology-left'>
                                    <img className="tech-image" src={aspDoNnet } />
                                </div>
                                </Slide>
                                <Slide right>
                                <div className='technology-right'>
                                    <h3>ASP.Net</h3>
                                    <p>ASP.NET is an open-source, server-side web-application framework designed for web development to produce dynamic web pages. It was developed by Microsoft to allow programmers to build dynamic web sites, applications and services. The name stands for Active Server Pages Network Enabled Technologies.</p>
                                </div>
                                </Slide>
                            </div>
                            <div className='col'>
                                <Slide left>
                                <div className='technology-left'>
                                    <img className="tech-image" src={angular } />
                                </div>
                                </Slide>
                                <Slide right>
                                <div className='technology-right'>
                                    <h3>Angular</h3>
                                    <p>Angular  is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS..</p>
                                </div>
                                </Slide>
                            </div>
                            <div className='col'>
                                <Slide left>
                                <div className='technology-left'>
                                    <img className="tech-image" src={python } />
                                </div>
                                </Slide>
                                <Slide right>
                                <div className='technology-right'>
                                    <h3>Python</h3>
                                    <p>Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.</p>
                                </div>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Technology;