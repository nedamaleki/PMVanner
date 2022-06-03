import CarouselScale from "./../components/CarouselScale";
import './StartPage.css'
import Button from "../../shared/components/FormElements/Button";
import { useNavigate } from "react-router-dom";
const SelectedKitchen = () => {
    const navigate= useNavigate()
    return (
        <>
            <div className="startpage">
            <h2>SCALES</h2>
                <CarouselScale />
                <Button inverse onClick={()=>{navigate('/StartPage')}}>BACK TO KITCHENS</Button>
    
            </div>
        </>
      );
}
 
export default SelectedKitchen;