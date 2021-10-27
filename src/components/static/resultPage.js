import React ,{useState,useEffect}from "react"
import Appbar from "../dynamic/appBar"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import axios from "axios"
import "./main.css"
import { useLocation } from "react-router-dom";

export default function Result(props){
    
    const [imageData,setImageData] = useState("")
    const [data,setData] = useState(null)

    const location = useLocation();

    useEffect(() => {
        console.log(location.state.response)
        setData(location.state.response)
        
        setImageData( location.state.imageData)
    }, [location]);
    if(data!==null){
        console.log(data.song)
    }
    
    return (
    <div class="background">
        <Appbar/>
        <div class="centered">
            <div class="wrapper">
                <div class="image"><img src={imageData} class={"image"}/></div>
                <div class="caption">
                    <i class="fas fa-heart IGbutton" style={{"color":"#FF0000"}}></i>
                    <i class="fas fa-comment IGbutton" style={{"color":"#FFF6CD"}}></i>
                    <h3 class="tag">@your.user.name</h3>
                    <p class="lyrics">{data!==null ? data.song.lyrics[0] : ""}</p>
                    <p class="lyrics">{data!==null ? data.song.lyrics[1] : ""}</p>
                    <h4 class="tag">Artist: {data!==null ? data.song.group : ""}</h4>
                    <h4 class="tag">Song Name: {data!==null ? data.song.title : ""}</h4>
                </div>
            </div>
        </div>
    </div>
    )

}