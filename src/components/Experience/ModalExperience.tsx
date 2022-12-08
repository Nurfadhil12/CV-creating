import { DATAEXPERIENCE } from "../../types";


type Props = {
    onClose: () => void;
    data: DATAEXPERIENCE;
};

const ModalExperience = (props: Props) => {
    const { onClose, data } = props;
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h3>Employee Data</h3>
                <div>
                    <div>
                        <label>First Name : {data.position}</label>
                    </div>
                    <div>
                        <label>Last Name : {data.company}</label>
                    </div>
                    <div>
                        <label>Email Add. : {data.jobDescription}</label>
                    </div>
                    <div>
                        <label>First Name : {data.startDate}</label>
                    </div>
                    <div>
                        <label>Last Name : {data.endDate}</label>
                    </div>
                    <div>
                        <label>Email Add. : {data.images}</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalExperience;
