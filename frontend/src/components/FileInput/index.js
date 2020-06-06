import React, {
    ChangeEvent,
    useRef,
    useEffect,
    useCallback,
    useState,
} from "react";
import { Input, FileContainer, StyledInput } from "./styles";
import { useField } from "@unform/core";

const ImageInput = ({ name, styled, ...rest }) => {
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);
    const [preview, setPreview] = useState(defaultValue);
    const handlePreview = useCallback((e) => {
        const file = e.target.files?.[0];
        if (!file) {
            setPreview(null);
        }
        const previewURL = URL.createObjectURL(file);
        setPreview(previewURL);
    }, []);
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "files",
            clearValue(ref) {
                ref.value = "";
                setPreview(null);
            },
            setValue(value) {
                setPreview(value);
            },
        });
    }, [fieldName, registerField]);
    return (
        <FileContainer>
            {/* {preview && <img src={preview} alt='Preview' width='100' />} */}
            {styled ? (
                <label htmlFor='avatar'>
                    {
                        <img
                            src={
                                preview ||
                                "https://api.adorable.io/avatars/50/abott@adorable.png"
                            }
                            alt='Preview'
                            width='100'
                        />
                    }
                    <StyledInput
                        type='file'
                        id='avatar'
                        ref={inputRef}
                        onChange={handlePreview}
                        {...rest}
                    />
                </label>
            ) : (
                <Input
                    type='file'
                    ref={inputRef}
                    onChange={handlePreview}
                    {...rest}
                />
            )}
        </FileContainer>
    );
};
export default ImageInput;
