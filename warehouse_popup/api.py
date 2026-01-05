import frappe

@frappe.whitelist()
def get_item_warehouses(item_code):
    if not item_code:
        return []

    return frappe.db.sql("""
        SELECT
            warehouse,
            actual_qty
        FROM `tabBin`
        WHERE item_code = %s
          AND actual_qty > 0
        ORDER BY actual_qty DESC
    """, item_code, as_dict=True)
