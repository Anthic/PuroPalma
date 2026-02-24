import BigGallery from "../components/BigGallery";
import GalleryHeader from "../components/GalleryHeader";
import GallerySub from "../components/GallerySub";
import NavBar from "../components/NavBar";

export default function Gallery() {
  return (
    <div>
      <NavBar />
      <GalleryHeader />
      <BigGallery />
    </div>
  );
}
