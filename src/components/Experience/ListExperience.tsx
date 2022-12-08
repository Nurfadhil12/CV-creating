import { DATAEXPERIENCE } from "../../types";

type Props = {
    list: DATAEXPERIENCE[];
    onDeleteClickHnd: (data: DATAEXPERIENCE) => void;
    onEdit: (data: DATAEXPERIENCE) => void;
};

const ListExperience = (props: Props) => {
    const { list, onDeleteClickHnd, onEdit } = props;
    console.log(list, "haha")
    // const viewEmployee = (data: DATAEXPERIENCE) => {
    //     setDataToShow(data);
    //     setShowModal(true);
    // };

    return (
        <div>
            <div className="flex flex-col gap-6 mt-6">
                {list.map((experience) => (
                    <div
                        key={experience.id}
                        className="p-6 flex bg-whites gap-6 bg-gray-700 rounded-xl border-2 border-gray-600 hover:translate-x-1 hover:translate-y-1 transition-all"
                    >
                        <div className="self- min-w-fit">
                            {experience.images ? (
                                <img
                                    className="h-28 w-28 rounded-md border-blue-500"
                                    src={experience.images}
                                    alt=""
                                />
                            ) : (
                                <img
                                    className="h-28 w-28 rounded-md border-blue-500"
                                    src="/vercel.svg"
                                    alt=""
                                />
                            )}
                        </div>
                        <div className="w-full">
                            <p className="text-xl font-bold ">
                                {experience.company}
                            </p>
                            <p className="text-xl font-medium">
                                {experience.position}
                            </p>
                            <p className="text-md text-gray-400">
                                {experience.startDate} -
                                {experience.endDate === "" ? (
                                    "present"
                                ) : experience.endDate
                                }
                            </p>
                            <p className="text-md">
                                {experience.jobDescription}
                            </p>
                            <div className="flex justify-end">
                                <div
                                    onClick={() => onEdit(experience)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 mr-4 cursor-pointer "
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        />
                                    </svg>
                                </div>
                                <div
                                    onClick={() => onDeleteClickHnd(experience)}

                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 cursor-pointer"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListExperience;
