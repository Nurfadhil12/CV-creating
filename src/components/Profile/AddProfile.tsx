
import { useState } from "react";
import { DATAPROFILE } from "../../types";

type Props = {
    onBackBtnClickHnd: () => void;
    onSubmitClickHnd: (data: DATAPROFILE) => void;
};

const AddProfile = (props: Props) => {
    const [name, setName] = useState("");
    const [old, setOld] = useState("");
    const [profile, setProfile] = useState("");

    const { onBackBtnClickHnd, onSubmitClickHnd } = props;
    function formSubmit(e: any) {
        e.preventDefault();
        const data: DATAPROFILE = {
            id: new Date().toJSON().toString(),
            name: name,
            old: old,
            profile: profile,
        };
        onSubmitClickHnd(data);
        onBackBtnClickHnd();
    }

    // The Magic all happens here.
    function convertFile(files: FileList | null) {
        if (files) {
            const fileRef = files[0] || ""
            const fileType: string = fileRef.type || ""
            console.log("This file upload is of type:", fileType)
            const reader = new FileReader()
            reader.readAsBinaryString(fileRef)
            reader.onload = (ev: any) => {
                // convert it to base64
                setProfile(`data:${fileType};base64,${btoa(ev.target.result)}`)
            }
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={formSubmit} className="block">
                <div className="mt-4">
                    <p className="self-center text-lg font-semibold">
                        Company
                    </p>
                    <div className="w-full">
                        <input
                            type="text" onChange={(e) => setName(e.target.value)}
                            className="shadow appearance-none bg-gray-600 border-2 border-gray-500 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <p className="self-center text-lg font-semibold">
                        Company Logo
                    </p>
                    <div className="w-full">
                        <input
                            type="file" onChange={(e) => convertFile(e.target.files)}
                            style={{ backgroundColor: "white" }}
                            className="shadow appearance-none bg-gray-600 border-2 border-gray-500 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <p className="self-center text-lg font-semibold">
                        Position
                    </p>
                    <div className="w-full">
                        <input
                            onChange={(e) => setOld(e.target.value)}
                            type="text"
                            className="shadow appearance-none bg-gray-600 border-2 border-gray-500 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
                <button className="mt-5 text-white bg-blak focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 font-semibold border"> Submit</button>
            </form>
        </div>
    );
};

export default AddProfile;
