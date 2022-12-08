import { useEffect, useState } from "react";
import AddProfile from "../components/Profile/AddProfile";
import EditProfile from "../components/Profile/EditProfile";
import ListProfile from "../components/Profile/ListProfile";
import { DATAPROFILE, PageEnum1 } from "../types";

const Profile = () => {
    const [profileList, setProfileList] = useState([] as DATAPROFILE[]);
    const [shownPage, setShownPage] = useState(PageEnum1.list);
    const [dataToEdit, setDataToEdit] = useState({} as DATAPROFILE);

    useEffect(() => {
        const listInString = window.localStorage.getItem("ExperienceList");
        if (listInString) {
            _setExperienceList(JSON.parse(listInString));
        }
    }, []);

    // const onAddEmployeeClickHnd = () => {
    //     setShownPage(PageEnum1.add);
    // };

    const showListPage = () => {
        setShownPage(PageEnum1.list);
    };

    const _setExperienceList = (list: DATAPROFILE[]) => {
        setProfileList(list);
        window.localStorage.setItem("ExperienceList", JSON.stringify(list));
    };

    const addEmployee = (data: DATAPROFILE) => {
        _setExperienceList([...profileList, data]);
    };

    const deleteEmployee = (data: DATAPROFILE) => {
        const indexToDelete = profileList.indexOf(data);
        const tempList = [...profileList];

        tempList.splice(indexToDelete, 1);
        _setExperienceList(tempList);
    };

    const editEmployeeData = (data: DATAPROFILE) => {
        setShownPage(PageEnum1.edit);
        setDataToEdit(data);
    };

    const updateData = (data: DATAPROFILE) => {
        const filteredData = profileList.filter((x) => x.id === data.id)[0];
        const indexOfRecord = profileList.indexOf(filteredData);
        const tempData = [...profileList];
        tempData[indexOfRecord] = data;
        _setExperienceList(tempData);
    };

    return (
        <>
            <section className="section-content">
                {shownPage === PageEnum1.list && (
                    <div className="justify-end">
                        {/* <input
                            type="button"
                            value="Add Experience"
                            onClick={onAddEmployeeClickHnd}
                            className="mt-5 cursor-pointer text-white bg-blak focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 font-semibold border"

                        /> */}
                        <ListProfile
                            list={profileList}
                            onDeleteClickHnd={deleteEmployee}
                            onEdit={editEmployeeData}
                        />
                    </div>
                )}

                {shownPage === PageEnum1.add && (
                    <AddProfile
                        onBackBtnClickHnd={showListPage}
                        onSubmitClickHnd={addEmployee}
                    />
                )}

                {shownPage === PageEnum1.edit && (
                    <EditProfile
                        data={dataToEdit}
                        onBackBtnClickHnd={showListPage}
                        onUpdateClickHnd={updateData}
                    />
                )}
            </section>
        </>
    );
};

export default Profile;
