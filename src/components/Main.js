import React,{useRef,useEffect} from 'react';
import useWebAnimations  from "@wellyshen/use-web-animations";

export const Main = () => {

    var background1 = useWebAnimations({
        keyframes: [
            { transform: 'translateX(100%)' },
            { transform: 'translateX(-100%)' }   
          ],
          timing:{
            duration: 36000,
            iterations: Infinity
          }
    });
    var background2 = useWebAnimations({
        keyframes: [
            { transform: 'translateX(100%)' },
            { transform: 'translateX(-100%)' }   
          ],
          timing: {
            duration: 36000,
            iterations: Infinity
          }
    });
    var foreground1 = useWebAnimations({
        keyframes:[
            { transform: 'translateX(100%)' },
	      { transform: 'translateX(-100%)' }
        ],
        timing:{
            duration: 12000,
            iterations: Infinity
        }
    });
    var foreground2 = useWebAnimations({
        keyframes:[
            { transform: 'translateX(100%)' },
	      { transform: 'translateX(-100%)' }
        ],
        timing:{
            duration: 12000,
            iterations: Infinity
        }
    });
      const bg = useRef();
    var redQueen_alice = useWebAnimations({bg,
        keyframes:[
            { transform: 'translateY(0)' },
	      { transform: 'translateY(-100%)' } 
        ],
        timing:{
            easing: 'steps(7, end)',
	        direction: "reverse",
	        duration: 600,
	        playbackRate: 1,
	        iterations: Infinity
        }
    });

    function goFaster(){
        background1.getAnimation().updatePlaybackRate(background1.getAnimation().playbackRate*1.15);
        console.log(background1);
        background2.getAnimation().updatePlaybackRate(background2.getAnimation().playbackRate*1.15);
        foreground1.getAnimation().updatePlaybackRate(foreground1.getAnimation().playbackRate*1.15);
        foreground2.getAnimation().updatePlaybackRate(foreground2.getAnimation().playbackRate*1.15);
        redQueen_alice.getAnimation().updatePlaybackRate(redQueen_alice.getAnimation().playbackRate*1.15);
      }
    
      useEffect(()=>{
        setInterval(()=>{
          if(redQueen_alice.getAnimation().playbackRate > 1)
          {
            background1.getAnimation().updatePlaybackRate(background1.getAnimation().playbackRate*0.9);
            background2.getAnimation().updatePlaybackRate(background2.getAnimation().playbackRate*0.9);
            foreground1.getAnimation().updatePlaybackRate(foreground1.getAnimation().playbackRate*0.9);
            foreground2.getAnimation().updatePlaybackRate(foreground2.getAnimation().playbackRate*0.9);
            redQueen_alice.getAnimation().updatePlaybackRate(redQueen_alice.getAnimation().playbackRate*0.9);
          }
        },2000)
      },[])

    
      
        document.addEventListener("click", goFaster);

    return (
        <div className="wrapper">
            <div className="sky"></div>
            <div className="earth">
                <div id="red-queen_and_alice"  >
                    <img  ref={redQueen_alice.ref} id="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place." />
                </div>
            </div>
            <div className="scenery" id="foreground1" ref= {foreground1.ref}>
                <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
            </div>
            <div className="scenery" id="foreground2" ref={foreground2.ref}>    
                <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" "/>
                <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
            </div>
            <div className="scenery" id="background1" ref={background1.ref}>
                <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" "/>
                <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" "/>
                <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" "/>
            </div>
            <div className="scenery" id="background2" ref={background2.ref}>
                <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" "/>
        
                <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" "/>
                <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" "/>
            </div>
        </div>

      
    )
}
