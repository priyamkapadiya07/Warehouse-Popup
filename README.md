<div align="center">

<h1>Warehouse Popup</h1>

Quickly select the best warehouse while creating Sales Invoices and Sales Orders in ERPNext.

<br><br>

## Demo Video

![Quick Preview](https://github.com/priyamkapadiya07/Warehouse-Popup/blob/main/Readme%20images/warehouse_popup.gif)

<!-- ![image](https://github.com/priyamkapadiya07/Warehouse-Popup/blob/main/Readme%20images/image.png) -->

</div>

---

## Introduction

**Warehouse Popup** is a custom ERPNext app designed to improve the Sales Invoice and Sales Order workflow.

By default, ERPNext automatically selects a warehouse when an item is added. In real-world usage, items are often available in multiple warehouses, and users must manually check stock and change the warehouse every time.

This app solves that problem.

When an item is selected in a Sales Invoice or Sales Order, a popup appears showing all warehouses where the item is available along with their stock quantity. The warehouse with the highest stock is clearly marked as **Recommended**, and users can select the desired warehouse with a single click.

The result is a faster, cleaner, and more reliable workflow.

---

## Features

- Compatible with Frappe v15 and v16
- Automatically opens a **warehouse selection popup** when an item is selected.
- Lists **all warehouses** where the item is available.
- Shows **available quantity** for each warehouse.
- Highlights the **recommended warehouse** (highest stock).
- One-click **Use** button for each warehouse.
- Popup appears neatly at the **bottom-right** corner.
- Modern, clean UI that matches ERPNext design.
- No ERPNext core changes.
- Upgrade-safe and production-ready.

---

## How It Works

1. User selects an item in the **Sales Invoice or Sales Order Items** table.
2. ERPNext default warehouse is cleared automatically.
3. The app fetches live stock data from the Bin table.
4. A popup appears listing available warehouses and quantities.
5. The recommended warehouse is highlighted.
6. User clicks **Use** on any warehouse.
7. The warehouse field is set instantly for that item row.

---

## Installation

Make sure you already have a working Frappe site with ERPNext installed.
This app was originally built for **Frappe v15**, and it also works on **Frappe v16** with a small setup adjustment.

---

## Supported Versions

| Component | Version                      |
| --------- | ---------------------------- |
| Frappe    | v15, v16                     |
| ERPNext   | v15, v16                     |
| Node.js   | **24.x (mandatory for v16)** |
| Python    | ≥ 3.10                       |

---

### Step 1. Download the app(For Frappe v15)

1.  Download the app using the Bench CLI.

    ```bash
    bench get-app --branch [branch name] https://github.com/priyamkapadiya07/Warehouse-Popup.git
    ```

Replace `[branch name]` with the branch that you're using for Frappe Framework, ERPNext.
If it isn't specified, the `--branch` option will default to **develop**.

2.  Install the app on your site.

    ```bash
    bench --site [site name] install-app warehouse_popup
    bench build --app warehouse_popup
    ```

## Installation (For Frappe v16)

### Step 1. Use Node.js 24 (Mandatory)

```bash
nvm use 24
```

Run this before any bench command.

### Step 2. Download the app

```bash
bench get-app https://github.com/priyamkapadiya07/Warehouse-Popup.git
bench --site [site name] install-app warehouse_popup
bench build --app warehouse_popup
bench restart
```

---

## Contributions and Community

There are many ways you can contribute even if you don't code:

1. You can start by giving a star to this repository!
1. If you find any issues, even if it is a typo, you can [raise an issue](https://github.com/priyamkapadiya07/Warehouse-Popup/issues/new) to inform us.

## License

Warehouse Popup is released under the [MIT License.](https://github.com/priyamkapadiya07/Warehouse-Popup/blob/main/license.txt)
