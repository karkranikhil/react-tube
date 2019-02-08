import React, {useState, useEffect} from 'react'

import {ThemeProvider} from 'styled-components'
import Video from '../Video'
import Playlist from '../containers/Playlist'
import logo from './logo.svg';
import {StyledPlayer, Header, Logo} from '../styles/StyledPlayer'

import {videosList} from '../../db/video'

const theme={
    bgcolor:'#353535',
    bgcolorItem:'#414141',
    bgcolorItemActive:"#405c63",
    bgcolorPlayed:"#526d4e",
    border:"none",
    borderPlayed:"none",
    color:"#fff"
}
const themeLight={
    bgcolor:'#fff',
    bgcolorItem:'#fff',
    bgcolorItemActive:"#80a7b1",
    bgcolorPlayed:"#7d9979",
    border:"1px solid #353535",
    borderPlayed:"none",
    color:"#353535"
}


const Player = props =>{
    const [state, setState] = useState({
        videos:videosList.playlist,
        activeVideo:videosList.playlist[0],
        nightMode:true,
        playlistId:videosList.playlistId,
        autoplay:false
    })

    useEffect(()=>{
        const videoId = props.match.params.activeVideo
        if(videoId !== undefined){
            const newActiveVideo = state.videos.findIndex(
                video=>video.id === videoId
            )
            setState({
                ...state,
                activeVideo:state.videos[newActiveVideo],
                autoplay:props.location.autoplay
            })
        } else {
            props.history.push({
                pathname:`/${state.activeVideo.id}`,
                autoplay:false
            })
        }
    },
        [props.match.params.activeVideo]
    )

    const nightModeCallback=()=>{
        setState({...state, nightMode: !state.nightMode})
    }
    const endCallback=()=>{
        const videoId = props.match.params.activeVideo
        const currentVideoIndex = state.videos.findIndex(
            video=>video.id === videoId
        )
        const nextVideo = currentVideoIndex === state.videos.length-1 ? 0 : currentVideoIndex +1
        props.history.push({
            pathname:`${state.videos[nextVideo].id}`,
            autoplay:false
        })
    }
    const progressCallback = e => {
        console.log(e)
        let duration = state.activeVideo.duration
        let splitTime = duration.split(':');
        let totalSeconds = (+splitTime[0]) * 60 * 60 + (+splitTime[1]) * 60 + (+splitTime[2]); 
        if(e.playedSeconds > (totalSeconds-60)){
        // if(e.playedSeconds > 10 && e.playedSeconds < 11) {
          const videos = [...state.videos];
          const playedVideo = videos.find(
            video => video.id === state.activeVideo.id
          )
          playedVideo.played = true;
    
          setState({ ...state, videos })
    
          // setState({
          //   ...state,
          //   videos: state.videos.map( element => {
          //     return element.id === state.activeVideo.id
          //     ? { ...element, played: true }
          //     : element;
          //   })
          // });
        }
      };

    return (<ThemeProvider theme={state.nightMode ? theme:themeLight}>
    
        {state.videos !== null ? (
            <>
            <Header nightMode={state.nightMode}><Logo src={logo} alt="logo" />React Tube</Header>
            <StyledPlayer>
            <Video active={state.activeVideo}
            autoplay={state.autoplay}
            endCallback={endCallback}
            progressCallback={progressCallback}/>
            <Playlist 
            videos={state.videos}
            active={state.activeVideo}
            nightModeCallback={nightModeCallback}
            nightMode={state.nightMode}/>
        </StyledPlayer>
        </>
        ):null}
        
    </ThemeProvider>)
        
        }
export default Player