import img1 from "../../assets/ToGal1.jpg"
import img2 from "../../assets/ToGal2.jpg"
import img3 from "../../assets/ToGal3.jpg"
import img4 from "../../assets/ToGal4.jpg"
import img5 from "../../assets/ToGal5.jpg"
function GalleryPage(){
    return <div>
        <h1 className="text-center" >Gallery</h1>
        <div class="gallery" >        
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
            </div>
    </div>

    
}
export default GalleryPage