import { useEffect, useRef, useState } from "react";
import "./newPrompt.css"
import Upload from "../upload/Upload";
import { IKImage } from "imagekitio-react";
import model from "../../lib/gemini";
import Markdown from "react-markdown";
// import {model} from "../../lib/gemini"

const NewPrompt = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("")
    const [img, setImg] = useState({
        isLoading: false,
        error:"",
        dbData:{}
    })

    const endRef = useRef(null);
    useEffect(() => {
      endRef.current.scrollIntoView({behavior: "smooth"})
    }, [question, answer, img.dbData]);

    const add = async (text) => {
        setQuestion(text);
        
        try {
            const result = await model.generateContent(text);
            const response = await result.response;
            setAnswer(response.text());
            console.log(result.response.text());
        } catch (error) {
            console.error("Error generating content:", error);
        }
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();

        const text = e.target.text.value;
        if(!text) return;
        add(text);
        
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter"){
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <>
            {img.isLoading && <div className="">Loading...</div>}
            {img.dbData?.filePath && (
                <IKImage
                urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                path={img.dbData?.filePath}
                width="380"
                transformation={[{width: '380'}]}
                />
            )}
            {question && <div className="message user">{question}</div>}
            {answer && <div className="message"><Markdown>{answer}</Markdown></div>}
            {/* <button onClick={add}>TEST AI</button> USED FOR TESTING*/}
            <div className="endChat" ref={endRef}></div>
            <form className="newForm" onSubmit={handleSubmit}>
                <Upload setImg={setImg}/>
                <input type="file" id="file" multiple="false" hidden/>
                <input type="text" name="text" placeholder="Ask me anything..." autoComplete="off" onKeyDown={handleKeyPress} />
                <button>
                    <img src="/arrow.png" alt="arrow icon"/>
                </button>
            </form>
        </>
    )
}

export default NewPrompt
