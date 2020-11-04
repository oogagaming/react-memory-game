import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core';
import { MenuItem, Select } from '@material-ui/core';
import './Header.css'
import { BrowserView, MobileView } from 'react-device-detect';

export function Header(props) {

    return (
        <AppBar position="fixed" className="AppBar">
        
        <MobileView>
            <Toolbar>
                <div id="container">
                    <h1 className="flips">Flips: {props.clicks}</h1>
                    <div className="cardswin">
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.cardsNum}
                        onChange={props.handleChange}
                        >
                            <MenuItem value={3}>3 Pairs</MenuItem>
                            <MenuItem value={6}>6 Pairs</MenuItem>
                            <MenuItem value={9}>9 Pairs</MenuItem>
                            <MenuItem value={12}>12 Pairs</MenuItem>
                    </Select>
                    {props.won ? <h1 className="win">You Win</h1> : null} 
                    </div>
                    <h1>Time: {props.seconds}s</h1>
                </div>
            </Toolbar>
        </MobileView>
        <BrowserView>
            <Toolbar>
                <div id="container">
                
                    <h1 className="game">Memeory Game</h1>
                    <div className="cardswin">
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.cardsNum}
                        onChange={props.handleChange}
                        >
                            <MenuItem value={3}>3 Pairs</MenuItem>
                            <MenuItem value={6}>6 Pairs</MenuItem>
                            <MenuItem value={9}>9 Pairs</MenuItem>
                            <MenuItem value={12}>12 Pairs</MenuItem>
                    </Select>
                    {props.won ? <h1 className="win">You Win</h1> : null} 
                    </div>
                    
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
