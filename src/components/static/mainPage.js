import React ,{useState}from "react"
import Appbar from "../dynamic/appBar"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import "./main.css"
import { useHistory } from "react-router-dom";


const Input = styled('input')({
  display: 'none',
});
export default function Main(){
 

    let history = useHistory();
    const [image,setImage] = useState(null)
    const [response,setResponse] = useState(null)
    const [loading,setLoading] = useState(false)
    const [imageData,setImageData] = useState("")
    
    function change(imageData,response){
      setLoading(false)
      history.push({
        pathname: '/result',
        state: { imageData,response }
    });
    }
      
      async function handleUplaod  (e) {
        setLoading(true)

        let imageStr;
        if (e.target.files[0]) {
          setImage(e.target.files[0])
          const reader = new FileReader();
          let formData = new FormData();
          formData.append('file', e.target.files[0]);
          reader.onloadend = () => {
            setImageData(reader.result);  
            imageStr = reader.result

          }; 
          reader.readAsDataURL(e.target.files[0])
          axios.post('https://hugeduckai.herokuapp.com/predict',formData)
          .then(res => {
            setResponse(res)

            setLoading(false)
            change(imageStr,res.data)
          }).catch(e=>console.log(e))
        } else {
          setImageData(null);
        }
      }

      if(loading){
        return (<div>
           <Appbar/>
           <div class="action">
           <CircularProgress  size={250} style={{marginTop:"30px", color:"#FF5151"}} />
           <Typography variant="h4" component="div" style={{marginTop:"20px"}} >
                 Please wait.
              </Typography>
              <Typography variant="h4" class ="loading" style={{marginTop:"20px"}} >
              (Our AI is giving a break to his operation of taking over the world and finding the perfect caption for your picture.)
              </Typography>
           </div>
          
        </div>
          
        )
      }
        return (
          <div class="background">
              <Appbar/>
              
              <div class="action">
              <Typography variant="h6" component="div"   class ="superduperAds">
                  Isn’t it hard to find the perfect caption for Instagram? 
              </Typography>
              <Typography variant="h4" component="div" class ="superduperAds" >
                  NOT ANYMORE!!!
              </Typography>
              <Typography variant="h6" component="div" class ="superduperAds" >
      Just upload the picture you wanna share and leave the rest to our half-witted AI to suggest you a two liner that goes with your mood in the picture!
              </Typography>
              <label htmlFor="image-input">
              <Input accept="image/*" id="image-input" multiple type="file" onChange={handleUplaod}/>
              <Button variant="contained" component="span" >
                Upload
              </Button>
            </label>
                  </div>
      
              </div>
              
      )
      


}