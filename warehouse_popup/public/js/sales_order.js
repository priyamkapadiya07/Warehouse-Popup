frappe.ui.form.on("Sales Order Item", {
    item_code(frm, cdt, cdn) {
        const row = locals[cdt][cdn];
        if (!row.item_code) return;

        // Clear default warehouse set by ERPNext
        frappe.model.set_value(cdt, cdn, "warehouse", "");

        // Delay to allow ERPNext internal logic to complete
        setTimeout(() => {
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
        }, 300);
    }
});

function show_warehouse_dialog(row, data) {
    const dialog = new frappe.ui.Dialog({
        title: "Select Warehouse",
        fields: [{ fieldname: "html", fieldtype: "HTML" }]
    });

    // Find highest stock
    const maxQty = Math.max(...data.map(d => d.actual_qty));

    let html = `
        <div class="warehouse-popup">
            ${data.map(d => `
                <div class="warehouse-row ${d.actual_qty === maxQty ? "best-stock" : ""}">
                    <div class="wh-info">
                        <div class="wh-name">
                            ${d.warehouse}
                            ${d.actual_qty === maxQty ? `<span class="recommended-badge">Recommended</span>` : ``}
                        </div>
                        <div class="wh-qty">Qty: ${d.actual_qty}</div>
                    </div>
                    <button class="use-wh" data-warehouse="${d.warehouse}">
                        Use
                    </button>
                </div>
            `).join("")}
        </div>
    `;

    dialog.fields_dict.html.$wrapper.html(html);

    dialog.$wrapper.on("click", ".use-wh", function () {
        const warehouse = $(this).data("warehouse");

        frappe.model.set_value(
            row.doctype,
            row.name,
            "warehouse",
            warehouse
        );

        dialog.hide();
    });

    dialog.show();
    move_dialog_to_bottom_right(dialog);
}

function move_dialog_to_bottom_right(dialog) {
    dialog.$wrapper.addClass("warehouse-bottom-right");

    if (!document.getElementById("warehouse-popup-style")) {
        const style = document.createElement("style");
        style.id = "warehouse-popup-style";
        style.innerHTML = `
            /* Position bottom-right */
            .warehouse-bottom-right .modal-dialog {
                position: fixed;
                right: 20px;
                bottom: 20px;
                margin: 0;
                width: 380px;
            }

            .warehouse-bottom-right .modal-content {
                border-radius: 12px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.15);
                border: none;
            }

            /* Container */
            .warehouse-popup {
                display: flex;
                flex-direction: column;
                gap: 12px;
                padding: 6px;
            }

            /* Row card */
            .warehouse-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 14px;
                border-radius: 8px;
                background: linear-gradient(135deg, #f8fafc, #eef2f7);
                border: 1px solid #e5e7eb;
                transition: background 0.2s ease, box-shadow 0.2s ease;
            }

            .warehouse-row:hover {
                background: #eef6ff;
                box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            }

            /* Best stock highlight */
            .best-stock {
                border-left: 5px solid #22c55e;
                background: linear-gradient(135deg, #ecfdf5, #f0fdf4);
            }

            /* Info */
            .wh-info {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }

            .wh-name {
                font-weight: 600;
                color: #111827;
                font-size: 14px;
                display: flex;
                align-items: center;
                gap: 6px;
            }

            .wh-qty {
                font-size: 12px;
                color: #047857;
            }

            /* Recommended badge */
            .recommended-badge {
                background: #22c55e;
                color: #fff;
                font-size: 10px;
                padding: 2px 6px;
                border-radius: 4px;
                font-weight: 500;
            }

            /* Use button */
            .use-wh {
                background: #2563eb;
                border: none;
                color: #fff;
                padding: 6px 14px;
                border-radius: 6px;
                font-size: 12px;
                cursor: pointer;
                transition: background 0.2s ease, transform 0.1s ease;
            }

            .use-wh:hover {
                background: #1d4ed8;
                transform: translateY(-1px);
            }

            @media (max-width: 480px) {
                .warehouse-bottom-right .modal-dialog {
                    position: fixed;
                    left: 10px;
                    right: 10px;
                    bottom: 10px;
                    width: auto !important;
                    margin: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}
