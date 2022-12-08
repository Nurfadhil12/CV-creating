import { DATAPROFILE } from "../../types";

type Props = {
    list: DATAPROFILE[];
    onDeleteClickHnd: (data: DATAPROFILE) => void;
    onEdit: (data: DATAPROFILE) => void;
};

const ListProfile = (props: Props) => {
    const { list, onEdit } = props;
    console.log(list, "haha")
    // const [showModal, setShowModal] = useState(false);
    // const [dataToShow, setDataToShow] = useState(null as DATAPROFILE | null);

    // const viewEmployee = (data: DATAPROFILE) => {
    //     setDataToShow(data);
    //     setShowModal(true);
    // };

    // const onCloseModal = () => setShowModal(false);

    return (
        <div>
            {/* {showModal && dataToShow !== null && (
                <ModalExperience onClose={onCloseModal} data={dataToShow} />
            )} */}
            <div className="flex gap-6 mt-6">
                {list.map((profile) => (
                    <>
                        <div>
                            <img
                                className="h-52 w-52 rounded-full border-8 border-gray-600 drop-shadow-2xl cursor-pointer hover:scale-105 transition-all"
                                src={profile.profile}
                                alt=""
                            />
                        </div>
                        <div className="self-center text-center">
                            <div className="flex">
                                <p
                                    className="text-5xl font-bold mb-3"
                                >
                                    {profile.name}
                                </p>
                            </div>
                            <div className="flex">

                                <p
                                    className="text-lg font-semibold"
                                >
                                    {profile.old}
                                </p>
                            </div>
                            <div className="flex ">
                                <div
                                    onClick={() => onEdit(profile)}
                                    className="mt-5 cursor-pointer text-white bg-blak focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 font-semibold border"
                                >
                                    <p>Edit Profile</p>
                                </div>
                            </div>
                            {/* <div className="flex ">
                                <div
                                    onClick={() => onDeleteClickHnd(profile)}
                                    className="mt-5 cursor-pointer text-white bg-blak focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 font-semibold border"
                                >
                                    <p>delete Profile</p>
                                </div>
                            </div> */}
                        </div>

                    </>
                ))}
            </div>
        </div>
    );
};

export default ListProfile;
