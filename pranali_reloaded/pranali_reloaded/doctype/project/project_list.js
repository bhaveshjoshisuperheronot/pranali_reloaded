frappe.listview_settings['Project'] = {
    add_fields: ["project_status"],

    get_indicator: function(doc) {
        if (doc.project_status == "Late") {
            return [__("Late"), "orange", "status,=,Late"];
        } else if (doc.project_status == "On Time") {
            return [__("On Time"), "green", "status,=,On Time"];
        } else if (doc.project_status == "Early") {
            return [__("Early"), "blue", "status,=,Early"];
        }
    }
};