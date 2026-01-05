frappe.ui.form.on("Sales Invoice Item", {
    item_code(frm, cdt, cdn) {
        const row = locals[cdt][cdn];
        if (!row.item_code) return;

        frappe.call({
            method: "warehouse_popup.api.get_item_warehouses",
            args: {
                item_code: row.item_code
            },
            callback(r) {
                if (!r.message || r.message.length === 0) {
                    frappe.msgprint("Item not available in any warehouse");
                    return;
                }
                show_warehouse_dialog(row, r.message);
            }
        });
    }
});

function show_warehouse_dialog(row, data) {
    const dialog = new frappe.ui.Dialog({
        title: "Select Warehouse",
        fields: [{
            fieldname: "warehouses",
            fieldtype: "Table",
            cannot_add_rows: true,
            in_place_edit: false,
            fields: [
                {
                    fieldname: "warehouse",
                    fieldtype: "Data",
                    label: "Warehouse",
                    in_list_view: 1,
                    read_only: 1
                },
                {
                    fieldname: "actual_qty",
                    fieldtype: "Float",
                    label: "Available Qty",
                    in_list_view: 1,
                    read_only: 1
                }
            ],
            data: data
        }],
        primary_action_label: "Use",
        primary_action() {
            const selected =
                dialog.fields_dict.warehouses.grid.get_selected_children();

            if (!selected.length) {
                frappe.msgprint("Please select one warehouse");
                return;
            }

            frappe.model.set_value(
                row.doctype,
                row.name,
                "warehouse",
                selected[0].warehouse
            );

            dialog.hide();
        }
    });

    dialog.show();
}
