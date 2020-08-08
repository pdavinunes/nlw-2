import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Lottie from 'react-lottie';
import successAnimatiom from '../../assets/lotties/success-animation.json';

export default function SuccessPage() {

    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push('/')
        }, 1190);
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: successAnimatiom,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height="400"
          width="400"
        />
      </div>
    );
}