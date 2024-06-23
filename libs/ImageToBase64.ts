type TImageToBase64 = {
    file: File | undefined
    callback: Function
}


export const imageToBase64 = ({ file, callback }: TImageToBase64) => {

    let result
    let err

    const reader = new FileReader()

    if (file) {
        reader.readAsDataURL(file);

        reader.onload = () => {
            const img = {
                file: reader.result,
                image_url: URL.createObjectURL(file)
            }

            return result = img
        };

        reader.onerror = (error) => {
            return err = error
        };
    }

    callback(result, err)

}