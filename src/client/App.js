import React from 'react';
import {renderRoutes} from 'react-router-config';
import Header from "./components/Header";
import {fetchCurrentUser} from "./actions";
import {Helmet} from "react-helmet";
import Footer from "./components/Footer";


const App = ({route}) => {
    return (
        <div className='application'>
            <Helmet>
                <meta name={'viewport'} content={'width=device-width, initial-scale=1'}/>
                <link rel={'stylesheet'} type={'text/css'} href={'styles/main.css'}/>
                <script async src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.38/js/uikit.min.js"></script>
                <script async src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.38/js/uikit-icons.min.js"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.38/css/uikit.min.css"/>
                <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="192x192" href="favicon/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
                <link rel="manifest" href="favicon/manifest.json"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#ffffff"/>
            </Helmet>
            <Header/>
            <div className='content'>
                {renderRoutes(route.routes)}
            </div>
            <Footer/>
        </div>
    );
};

export default {
    component: App,
    loadData:  ({dispatch}) => dispatch(fetchCurrentUser())
};
