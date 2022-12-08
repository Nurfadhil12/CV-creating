
import { useState } from "react";
import { DATAEXPERIENCE } from "../../types";

type Props = {
    onBackBtnClickHnd: () => void;
    onSubmitClickHnd: (data: DATAEXPERIENCE) => void;
};

const AddExperience = (props: Props) => {
    const [position, setPosition] = useState("");
    const [company, setCompany] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [images, setImages] = useState("");
    const [ceklis, setCeklis] = useState(false);

    const { onBackBtnClickHnd, onSubmitClickHnd } = props;
    function formSubmit(e: any) {
        e.preventDefault();
        const data: DATAEXPERIENCE = {
            id: new Date().toJSON().toString(),
            position: position,
            company: company,
            jobDescription: jobDescription,
            startDate: startDate,
            endDate: endDate,
            images: images,
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
                setImages(`data:${fileType};base64,${btoa(ev.target.result)}`)
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
                            required
                            type="text" onChange={(e) => setCompany(e.target.value)}
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
                            required
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
                            required
                            onChange={(e) => setPosition(e.target.value)}
                            type="text"
                            className="shadow appearance-none bg-gray-600 border-2 border-gray-500 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <p className="self-center text-lg font-semibold">
                        Start Date
                    </p>
                    <div className="w-full">
                        <input
                            required
                            type="date" onChange={(e) => setStartDate(e.target.value)}
                            className="shadow appearance-none bg-gray-600 border-2 border-gray-500 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <p className="self-center text-lg font-semibold">
                        End Date
                    </p>
                    <div className="w-full">
                        {ceklis === true ? (
                            <input
                                disabled
                                type="date" onChange={(e) => setEndDate(e.target.value)}
                                className="shadow appearance-none bg-gray-600 border-2 border-gray-500 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            />
                        ) : ceklis === false ? (
                            <input
                                required
                                type="date" onChange={(e) => setEndDate(e.target.value)}
                                className="shadow appearance-none bg-gray-600 border-2 border-gray-500 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            />
                        ) : null}
                        <input
                            type="checkbox"
                            // value={props.highlight}
                            onChange={() => setCeklis(!ceklis)}
                            className="bg-white mr-4 w-[28px] h-[28px] border border-gray-300 rounded-lg px-2"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <p className="self-center text-lg font-semibold">
                        Deskripsi
                    </p>
                    <div className="w-full">
                        <input
                            required
                            type="text" onChange={(e) => setJobDescription(e.target.value)}
                            className="shadow appearance-none bg-gray-600 border-2 border-gray-500 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
                <button className="mt-5 cursor-pointer text-white bg-blak focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 font-semibold border"> Submit</button>
            </form>
        </div>
    );
};

export default AddExperience;
