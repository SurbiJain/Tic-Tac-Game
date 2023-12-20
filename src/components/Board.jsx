import React from 'react'
import Block from './Block'


export default function Board(props) {
  const squares = props.squares;
  const xIsNext = props.xIsNext
  const onPlay = props.onPlay
  function checkWinner(){
    const winnerLogic = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for(let logic of winnerLogic){
      const [a, b, c] = logic
      if(squares[a]&& squares[a]===squares[b]&& squares[a]===squares[c]){
        return squares[a];
      }
    }
    return false; 
  }

  let isWinner = checkWinner()
   
  function eventHandler(i){
    if(checkWinner() || squares[i]){return;
    }
    const nextSquares = [...squares];
    nextSquares[i] = xIsNext ?  "X" : "0" 
    onPlay(nextSquares);
  }
  
  return (
    
    <div className="board-container">
     {isWinner ? <div className='Result' style={{fontSize: 70, width: 500, height: 200 }}>{isWinner} won the game </div> : 
     <>
     
     <div className="board-row">
        <Block value = {squares[0]} onClick = {()=>{eventHandler(0)}}/>
        <Block value = {squares[1]} onClick ={()=>{eventHandler(1)}}/>
        <Block value = {squares[2]} onClick = {()=>{eventHandler(2)}}/>
        
      </div>
      <div className="board-row">
        <Block value = {squares[3]} onClick = {()=>{eventHandler(3)}}/>
        <Block value = {squares[4]} onClick = {()=>{eventHandler(4)}}/>
        <Block value = {squares[5]} onClick = {()=>{eventHandler(5)}}/>
      </div>
      <div className="board-row">
        <Block value ={squares[6]} onClick = {()=>{eventHandler(6)}}/>
        <Block value = {squares[7]} onClick = {()=>{eventHandler(7)}}/>
        <Block value = {squares[8]} onClick = {()=>{eventHandler(8)}}/>
      </div>
      </>
      }
    </div>
  )
}
