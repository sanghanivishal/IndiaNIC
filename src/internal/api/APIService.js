import request from './request'
import * as Constants from "../../utils/Constants";

function getJobDetails(data, header) {
    return request({
        url: Constants.JOB_DETAILS,
        method: 'POST',
        data
    },header);
}

function uploadJob(data, header) {
    return request({
        url: Constants.JOB_UPLOAD,
        method: 'POST',
        data
    },header);
}


const APIService = {
    getJobDetails, uploadJob
};

export default APIService;
