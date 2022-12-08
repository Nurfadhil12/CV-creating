import { useState } from "react";
import { DATAPROFILE } from "../../types";

type Props = {
    data: DATAPROFILE;
    onBackBtnClickHnd: () => void;
    onUpdateClickHnd: (data: DATAPROFILE) => void;
};

const EditProfile = (props: Props) => {
    const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

    const [name, setName] = useState(data.name);
    const [old, setOld] = useState(data.old);
    const [profile, setProfile] = useState(data.profile);

    const onNameChange = (e: any) => {
        setName(e.target.value);
    };
    const onOldChange = (e: any) => {
        setOld(e.target.value);
    };
    const onProfileChange = (e: any) => {
        convertFile(e.target.files);
    };

    const onSubmitBtnClickHnd = (e: any) => {
        e.preventDefault();
        const updatedData: DATAPROFILE = {
            id: data.id,
            name: name,
            old: old,
            profile: profile,
        };
        onUpdateClickHnd(updatedData);
        onBackBtnClickHnd();
    };

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
            <form onSubmit={onSubmitBtnClickHnd} className="block">
                <div className="mt-4">
                    <p className="self-center text-lg font-semibold">
                        Nama
                    </p>
                    <div className="w-full">
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={onNameChange}
                            className="shadow appearance-none bg-gray-600 border-2 border-gray-500 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <p className="self-center text-lg font-semibold">
                        Foto Profile
                    </p>
                    <div className="w-full">
                        <input
                            type="file"
                            required
                            onChange={onProfileChange}
                            style={{ backgroundColor: "white" }}
                            className="shadow appearance-none bg-gray-600 border-2 border-gray-500 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <p className="self-center text-lg font-semibold">
                        Umur
                    </p>
                    <div className="w-full">
                        <input
                            onChange={onOldChange}
                            value={old}
                            required
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

export default EditProfile;
