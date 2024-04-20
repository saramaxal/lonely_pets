import { LoadData } from "./loadData.js";
import { EnableModal, SetCrossEvents } from "./modal.js"

LoadData(0, 100000)
	.then(EnableModal);