// Copyright (c) 2023, gehad and contributors
// For license information, please see license.txt

frappe.ui.form.on("Frappe Styler Settings", {
  after_save: function (frm) {
    frappe.ui.toolbar.clear_cache();
    window.location.reload();
  },
});
