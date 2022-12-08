import { useEffect, useState } from "react";
import AddExperience from "../components/Experience/AddExperience";
import EditExperience from "../components/Experience/EditExperience";
// import EditExperience from "../components/Experience/EditExperience";
import ListExperience from "../components/Experience/ListExperience";
import { DATAEXPERIENCE, PageEnum } from "../types";

const Experience = () => {
    const [ExperienceList, setExperienceList] = useState([] as DATAEXPERIENCE[]);
    const [shownPage, setShownPage] = useState(PageEnum.list);
    const [dataToEdit, setDataToEdit] = useState({} as DATAEXPERIENCE);

    useEffect(() => {
        const listInString = window.localStorage.getItem("ExperienceList");
        if (listInString) {
            _setExperienceList(JSON.parse(listInString));
        }
    }, []);

    const onAddEmployeeClickHnd = () => {
        setShownPage(PageEnum.add);
    };

    const showListPage = () => {
        setShownPage(PageEnum.list);
    };

    const _setExperienceList = (list: DATAEXPERIENCE[]) => {
        setExperienceList(list);
        window.localStorage.setItem("ExperienceList", JSON.stringify(list));
    };

    const addEmployee = (data: DATAEXPERIENCE) => {
        _setExperienceList([...ExperienceList, data]);
    };

    const deleteEmployee = (data: DATAEXPERIENCE) => {
        // To Index from array i,e ExperienceList
        // Splice that
        // Update new record

        const indexToDelete = ExperienceList.indexOf(data);
        const tempList = [...ExperienceList];

        tempList.splice(indexToDelete, 1);
        _setExperienceList(tempList);
    };

    const editEmployeeData = (data: DATAEXPERIENCE) => {
        setShownPage(PageEnum.edit);
        setDataToEdit(data);
    };

    const updateData = (data: DATAEXPERIENCE) => {
        const filteredData = ExperienceList.filter((x) => x.id === data.id)[0];
        const indexOfRecord = ExperienceList.indexOf(filteredData);
        const tempData = [...ExperienceList];
        tempData[indexOfRecord] = data;
        _setExperienceList(tempData);
    };

    return (
        <>
            <section className="section-content">
                {shownPage === PageEnum.list && (
                    <div className="justify-end">
                        <input
                            type="button"
                            value="Add Experience"
                            onClick={onAddEmployeeClickHnd}
                            className="mt-5 cursor-pointer text-white bg-blak focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 font-semibold border"

                        />
                        <ListExperience
                            list={ExperienceList}
                            onDeleteClickHnd={deleteEmployee}
                            onEdit={editEmployeeData}
                        />
                    </div>
                )}

                {shownPage === PageEnum.add && (
                    <AddExperience
                        onBackBtnClickHnd={showListPage}
                        onSubmitClickHnd={addEmployee}
                    />
                )}

                {shownPage === PageEnum.edit && (
                    <EditExperience
                        data={dataToEdit}
                        onBackBtnClickHnd={showListPage}
                        onUpdateClickHnd={updateData}
                    />
                )}
            </section>
        </>
    );
};

export default Experience;
