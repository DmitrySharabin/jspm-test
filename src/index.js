import jquery3 from "jquery3";
import jquery4 from "jquery4";

const $legacy = jquery3.noConflict(true);
const $ = jquery4.noConflict(true);

$("#count").text($legacy("#list > li").length);
