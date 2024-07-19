import { cloudinary_upload_preset } from "../../config";
import {openUploadWidget} from "../../utils/cloudinaryService";


const CloudinaryUpload = ({setUrl, setName}) => {
    const uploadImageWidget = () => {
        let myUploadWidget = openUploadWidget(
            {
                cloudName: cloudinary_upload_preset,
                uploadPreset: "a5isd8dw",
                sources: ["local"],
            },
            function (error, result) {
                if (!error && result.event === "success") {
                    console.log(result.info)
                    setUrl(result.info.secure_url);
                    setName(result.info.original_filename)
                } else {
                    if (error) {
                        console.log(error);
                    }
                }
            }
        );
        myUploadWidget.open();
    };

    return (
        <button
            className="bg-white text-black  rounded-full p-3 font-semibold ml-6"
            onClick={uploadImageWidget}
        >
            Select Track
        </button>
    );
};

export default CloudinaryUpload;