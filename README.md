<div align="center">

<h1>Warehouse Popup</h1>

Quickly select the best warehouse while creating Sales Invoices in ERPNext.

<br><br>

## Demo Video

![Quick Preview](/home/priyam/frappe-bench/apps/warehouse_popup/Readme images/warehouse_popup.gif)



![image](https://github.com/priyamkapadiya07/Warehouse-Popup/blob/main/Readme%20images/image.png)


</div>

---

## Introduction

**Warehouse Popup** is a custom ERPNext app designed to improve the Sales Invoice workflow.

By default, ERPNext automatically selects a warehouse when an item is added. In real-world usage, items are often available in multiple warehouses, and users must manually check stock and change the warehouse every time.

This app solves that problem.

When an item is selected in a Sales Invoice, a popup appears showing all warehouses where the item is available along with their stock quantity. The warehouse with the highest stock is clearly marked as **Recommended**, and users can select the desired warehouse with a single click.

The result is a faster, cleaner, and more reliable workflow.

---

## Features

-   Automatically opens a **warehouse selection popup** when an item is selected.
-   Lists **all warehouses** where the item is available.
-   Shows **available quantity** for each warehouse.
-   Highlights the **recommended warehouse** (highest stock).
-   One-click **Use** button for each warehouse.
-   Popup appears neatly at the **bottom-right** corner.
-   Modern, clean UI that matches ERPNext design.
-   No ERPNext core changes.
-   Upgrade-safe and production-ready.

---

## How It Works

1. User selects an item in the **Sales Invoice Items** table.
2. ERPNext default warehouse is cleared automatically.
3. The app fetches live stock data from the Bin table.
4. A popup appears listing available warehouses and quantities.
5. The recommended warehouse is highlighted.
6. User clicks **Use** on any warehouse.
7. The warehouse field is set instantly for that item row.

---

## Installation

Make sure you already have a working Frappe site with ERPNext installed.

### Step 1. Download the app

1.  Download the app using the Bench CLI.

    ```bash
    bench get-app --branch [branch name] https://github.com/priyamkapadiya07/Warehouse-Popup.git
    ```

Replace `[branch name]` with the branch that you're using for Frappe Framework, ERPNext.
If it isn't specified, the `--branch` option will default to **develop**.

2.  Install the app on your site.

    ```bash
    bench --site [site name] install-app warehouse_popup
    ```

## Contributions and Community

There are many ways you can contribute even if you don't code:

1. You can start by giving a star to this repository!
1. If you find any issues, even if it is a typo, you can [raise an issue](https://github.com/priyamkapadiya07/Warehouse-Popup/issues/new) to inform us.


## License

Warehouse Popup is released under the [MIT License.](https://github.com/priyamkapadiya07/Warehouse-Popup/blob/main/license.txt)