import frappe


def set_default_website_setting():
    website_settings = frappe.get_doc("Website Settings")
    website_settings.home_page = "login"
    website_settings.title_prefix = "idara"
    website_settings.website_theme = "Standard"
    website_settings.banner_image = "https://i.postimg.cc/7PFhBj3Y/app-logo-en-copy.png"
    website_settings.splash_image = "https://i.postimg.cc/7PFhBj3Y/app-logo-en-copy.png"
    website_settings.brand_html = "<img src='https://i.postimg.cc/Jn8KcppT/favicon.png>"
    website_settings.favicon = "https://i.postimg.cc/Jn8KcppT/favicon.png"
    website_settings.footer_logo = "https://i.postimg.cc/7PFhBj3Y/app-logo-en-copy.png"
    website_settings.copyright = "idara"
    website_settings.footer_powered = "idara"
    website_settings.app_name = "idara"
    website_settings.app_logo = "https://i.postimg.cc/7PFhBj3Y/app-logo-en-copy.png"
    website_settings.save()


def set_default_frappe_styler_setting():
    frappe_styler_setting = frappe.get_doc("Frappe Styler Settings")
    frappe_styler_setting.primary_color = "#005ed0"
    frappe_styler_setting.background_color = "#161a1f"
    frappe_styler_setting.navbar_background = "#1e293b"
    frappe_styler_setting.text_color_s = "#1e293b"
    frappe_styler_setting.primary_color_s = "#005ed0"
    frappe_styler_setting.block_background_color_s = "#f1f5f9"
    frappe_styler_setting.navbar_backgrounds = "#1e293b"
    frappe_styler_setting.font_stack_type = "Almarai"
    frappe_styler_setting.control_label_text_size = "Small"
    frappe_styler_setting.form_control_font_size = "Small"
    frappe_styler_setting.border_radius = "4px"
    frappe_styler_setting.link_name = "Documentation"
    frappe_styler_setting.link_url = "#"
    frappe_styler_setting.link_name2 = "Forums"
    frappe_styler_setting.link_url2 = "#"
    frappe_styler_setting.link_name3 = "Report a bug"
    frappe_styler_setting.link_url3 = "#"
    frappe_styler_setting.save()
