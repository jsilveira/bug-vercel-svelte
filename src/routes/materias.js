// import {getDatasets} from "$lib/api.js";

export const get = async ({params: {subject, submodule}, locals}) => {
	return {body: {subjects: ["subject 1", "subject 2"]}};
};
