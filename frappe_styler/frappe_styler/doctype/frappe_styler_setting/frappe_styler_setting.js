// Copyright (c) 2023, gehad and contributors
// For license information, please see license.txt

frappe.ui.form.on('Frappe Styler Setting', {
	after_save: function(frm) {
        window.location.reload();
	}
});
