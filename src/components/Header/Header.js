import React from 'react';
import { Link } from 'gatsby';
import './Header.css'

const Header = (props) => {
    // ナビゲーションバーに表示するリンク
    const NavMenuItem = ["Home", "About", "Skills", "Hobby", "Articles"];

    // 普段のリンクはこのスタイル
    const LinkStyles = {
        background: 'limegreen',
        color: 'white',
        fontWeight: "normal",
        textShadow: '2px 2px 3px black',

    }

    // アクティブになったリンクは色を反転させる
    const ActiveStyles = {
        background: 'white',
        color: 'limegreen',
        fontWeight: "bold",
        textShadow: "none",
    }

    // ナビゲーションリンクの作成
    const NavMenuLiTag = NavMenuItem.map((item) => {
        let page_link = "";
        if (item === "Home") {
            page_link = "/";
        }
        else page_link = "/" + item.toLowerCase() + "/";

        return (
            <li key={page_link}>
                <Link to={page_link} style={LinkStyles}
                    activeStyle={ActiveStyles}
                    className="page-link"
                >
                    {item}
                </Link>
            </li>
        )
    });

    return (
        <header className="App-header">
            <nav className="App-navbar">
                <p className="App-logo"><Link to="/" >Kameblo</Link></p>
                <div className="App-navbar-item">
                    <ul>
                        {NavMenuLiTag}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
