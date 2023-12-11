import React, { useState, useRef, ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
import imgEvent from "@/assets/Foto-Evento.svg"



const ImageComponent: React.FC<{
    img?: string,
}> = ({ img }) => {
    const methods = useFormContext()
    const [selectedImage, setSelectedImage] = useState<string>(img ? img : imgEvent);
    const [error, setError] = useState<string>('')

    const inputFileRef = useRef<HTMLInputElement>(null);

    const onBtnClick = () => {
        if (inputFileRef.current) {
            inputFileRef.current.click();
        }

    }

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            // Puedes realizar validaciones adicionales aquí, por ejemplo, verificar el tipo de archivo.

            // Convertir la imagen a una URL de datos para mostrarla.
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
            };
            reader.readAsDataURL(file);
            if (file.size > 1007406) {
                setError('El tamaño del archivo es mayor a 1MB')
            }
            methods.setValue('file', file)
        }
    };
    return <div className='flex flex-col'>
        <input name="file" ref={inputFileRef} className='hidden' type="file" onChange={handleImageChange}>
        </input>
        <img onClick={onBtnClick} className='flex lg:ml-8 w-full lg:w-[24rem] h-[28rem]' src={selectedImage} />
        {error ? <span className='text-red-500 text-sm'>{error}</span> : null}
    </div>
}

export default ImageComponent;