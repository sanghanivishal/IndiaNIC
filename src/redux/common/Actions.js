import React from 'react';
import {createAction} from "../../utils/AppUtils";
import ModulesAPI from "../../internal/api/APIService";
import NavigationService from '../../utils/NavigationService';

export const Modules = {
  NAVIGATE: 'NAVIGATE',
  GET_JOB_DETAILS: 'GET_JOB_DETAILS',
  UPLOAD_JOB: 'UPLOAD_JOB',
  RESET_UPLOAD_STATUS: 'RESET_UPLOAD_STATUS',
};

export default {
  navigate: createAction(Modules.NAVIGATE, (view, navigateData) => {
    NavigationService.navigate(view, navigateData)
  }),


  getJobDetails: createAction(Modules.GET_JOB_DETAILS, async (params, header) => {
    let result = await ModulesAPI.getJobDetails(params, header);
    return result
  }),


  uploadJob: createAction(Modules.UPLOAD_JOB, async (params, header) => {
    let result = await ModulesAPI.uploadJob(params, header);
    return result
  }),

  resetUploadStatus: createAction(Modules.RESET_UPLOAD_STATUS, async () => {
    return
  }),
};
