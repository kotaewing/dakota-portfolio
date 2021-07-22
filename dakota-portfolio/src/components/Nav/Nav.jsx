import React, {useEffect} from 'react';
import './Nav.css';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {
        document.title = currentCategory.name
    }, [currentCategory]);

    const titles = ['About Me', 'Portfolio', 'Resume']
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Dakota Ewing</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {titles.map((title, i) => {
                        return (
                        <li className='nav-item nav-link' key={title + i}>
                            {title}
                        </li>
                        )
                    })}
                    <li>
                        Contact
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;