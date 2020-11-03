import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core';
import './Header.css'
import { BrowserView, MobileView } from 'react-device-detect';

export function Header(props) {

    return (
        <AppBar position="fixed" className="AppBar">
        
        <MobileView>
            <Toolbar>
                <div id="container">
                    <h1 className="flips">Flips: {props.clicks}</h1>
                    {props.won ? <h1 className="win">You Win</h1> : null} 
                    <h1>Time: {props.seconds}s</h1>
                </div>
            </Toolbar>
        </MobileView>
        <BrowserView>
            <Toolbar>
                <div id="container">
                    <h1 className="game">Memeory Game</h1>
                    {props.won ? <h1 className="win">You Win</h1> : null} 
                    <div className="TimeFlipPC">
                        <h1 className="flips">Flips: {props.clicks}</h1>
                        <h1>Time: {props.seconds}s</h1>
                    </div>
                </div>
            </Toolbar>
        </BrowserView>
        
      </AppBar>
    )
}
