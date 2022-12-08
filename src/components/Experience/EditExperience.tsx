import { useState } from "react";
import { DATAEXPERIENCE } from "../../types";

type Props = {
    data: DATAEXPERIENCE;
    onBackBtnClickHnd: () => void;
    onUpdateClickHnd: (data: DATAEXPERIENCE) => void;
};

const EditExperience = (props: Props) => {
    const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

    const [position, setPosition] = useState(data.position);
    const [company, setCompany] = useState(data.company);
    const [jobDescription, setJobDescription] = useState(data.jobDescription);
    const [startDate, setStartDate] = useState(data.startDate);
    const [endDate, setEndDate] = useState(data.endDate);
    const [images, setImages] = useState(data.images);

    const [ceklis, setCeklis] = useState(false);

    const onPositionChange = (e: any) => {
        setPosition(e.target.value);
    };
    const onCompanyChange = (e: any) => {
        setCompany(e.target.value);
    };
    const onJobDescriptionChange = (e: any) => {
        setJobDescription(e.target.value);
    };
    const onStartDateChange = (e: any) => {
        setStartDate(e.target.value);
    };
    const onEndDateChange = (e: any) => {
        setEndDate(e.target.value);
    };
    const onImageChange = (e: any) => {
        convertFile(e.target.files);
    };

    const onSubmitBtnClickHnd = (e: any) => {
        e.preventDefault();
        const updatedData: DATAEXPERIENCE = {
            id: data.id,
            position: position,
            company: company,
            jobDescription: jobDescription,
            startDate: startDate,
            endDate: endDate,
            images: images,
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
                setImages(`data:${fileType};base64,${btoa(ev.target.result)}`)
            }
        }
    }
    return (
        <div className="form-container">
            <form onSubmit={onSubmitBtnClickHnd} className="block">
                <div className="mt-4">
                    <p className="self-center text-lg font-semibold">
                        Company
                    </p>
                    <div className="w-full">
                        <input
                            type="text"
                            value={company}
                            onChange={onCompanyChange}
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
                            type="file"
                            onChange={onImageChange}
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
                            onChange={onPositionChange}
                            value={position}
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
                            type="date"
                            value={startDate}
                            onChange={onStartDateChange}
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
                                type="text"
                                disabled
                                value="0"
                                onChange={onEndDateChange}
                                className="shadow appearance-none bg-gray-600 border-2 border-gray-500 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            />
                        ) : ceklis === false ? (
                            <input
                                type="date"
                                required
                                value={endDate}
                                onChange={onEndDateChange}
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
                            type="text"
                            value={jobDescription}
                            onChange={onJobDescriptionChange}
                            className="shadow appearance-none bg-gray-600 border-2 border-gray-500 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
                <button className="mt-5 cursor-pointer text-white bg-blak focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 font-semibold border"> Submit</button>
            </form>
        </div>
    );
};

export default EditExperience;
