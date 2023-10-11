     
     $(function() {
    console.log("hi");

    var styleTag = document.createElement('style');
    styleTag.innerHTML = 'body .btn-primary:not(:disabled):not(.disabled):active { background-color: black; }';
    document.head.appendChild(styleTag);


    // a select element for font selection
    var fontSelect = $('<select>', {
        id: 'font-select',
        name: 'font-select'
    });

    // array of font options
    var fontOptions = [
        'Helvetica',
        'Calibri'
    ];

    // Populate the select element with font options
    $.each(fontOptions, function(index, font) {
        fontSelect.append($('<option>', {
            value: font,
            text: font
        }));
    });

    // Append the font select element to the body
    fontSelect.appendTo('body');

    // a select element for text size selection
    var textSizeSelect = $('<select>', {
        id: 'text-size-select',
        name: 'text-size-select'
    });

    var textSizeOptions = [
        'Small',
        'Medium',
        'Large'
    ];

    // Populate the select element with text size options
    $.each(textSizeOptions, function(index, textSize) {
        textSizeSelect.append($('<option>', {
            value: textSize,
            text: textSize
        }));
    });

    // Append the text size select element to the body
    textSizeSelect.appendTo('body');

    // a select element for form control font size selection
    var formControlFontSizeSelect = $('<select>', {
        id: 'form-control-font-size',
        name: 'form-control-font-size'
    });

    var formControlFontSizeOptions = [
        'Small',
        'Medium',
        'Large'
    ];

    // Populate the select element with form control font size options
    $.each(formControlFontSizeOptions, function(index, fontSize) {
        formControlFontSizeSelect.append($('<option>', {
            value: fontSize,
            text: fontSize
        }));
    });

    // Append the form control font size select element to the body
    formControlFontSizeSelect.appendTo('body');

    // A select element for border radius selection
    var borderSelect = $('<select>', {
        id: 'border-radius',
        name: 'border-radius'
    })

    var borderOptions = ['0px','4px', '6px','10px', '15px',];

    // Populate the select element
    $.each(borderOptions, function(index, border) {
        borderSelect.append($('<option>', {
            value: border,
            text: border
        }));
    });

    // Append the border radius select element to the body
    borderSelect.appendTo('body');

  // Listen for changes in border radius selection
borderSelect.on('change', function() {
    var selectedBorder = $(this).val();
    $('body').css('--border-radius', selectedBorder);

});

    // Listen for changes in font selection
    fontSelect.on('change', function() {
        var selectedFont = $(this).val();
        $('body').css('--font-stack', selectedFont);
    });

    // Listen for changes in text size selection
    textSizeSelect.on('change', function() {
        var selectedTextSize = $(this).val();
        // Apply the selected text size to the body or any specific element
        if (selectedTextSize === 'Small') {
            $('body').css('--text-sm', '12px');
        } else if (selectedTextSize === 'Medium') {
            $('body').css('--text-sm', '16px');
        } else if (selectedTextSize === 'Large') {
            $('body').css('--text-sm', '20px');
        }
    });

    // Listen for changes in form control font size selection
    formControlFontSizeSelect.on('change', function() {
        var selectedFontSize = $(this).val();
        // Apply the selected form control font size to the body or any specific element
        $('body').css('--text-md', selectedFontSize);
    });    


    // Fetch the document
    frappe.call({
        method: 'frappe.client.get',
        args: {
            doctype: 'Frappe Styler Setting',
            name: 'Frappe Styler Setting'
        },
        callback: function(response) {
            if (response.message) {
                var doc = response.message;

                // Apply styles based on user settings and theme
                updateStyles(
                    doc.primary_color,
                    doc.text_color,
                    doc.block_background_color,
                    doc.background_color,
                    doc.icon_fill_color,
                    doc.icon_stroke_color,
                    doc.avatar_frame_bg_color,
                    doc.scrollbar_thumb_color,
                    doc.scrollbar_track_color,
                    doc.primary_color_s, 
                    doc.text_color_s,
                    doc.block_background_color_s,
                    doc.background_color_s,
                    doc.icon_fill_color_s,
                    doc.icon_stroke_color_s,
                    doc.avatar_frame_bg_color_s,
                    doc.scrollbar_thumb_color_s,
                    doc.scrollbar_track_color_s,
                    doc.avatar_bg,
                    doc.avatar_bgs,
                    doc.navbar_background,
                    doc.navbar_backgrounds,
                );

                // Set the initial font value from the user's settings
                if (doc.border_radius) {
                    borderSelect.val(doc.border_radius);
                    $('body').css('--border-radius', doc.border_radius);
                }

                // Set the initial font value from the user's settings
                if (doc.font_stack_type) {
                    fontSelect.val(doc.font_stack_type);
                    $('body').css('--font-stack', doc.font_stack_type);
                }

                // Set the initial text size value from the user's settings
                if (doc.control_label_text_size) {
                    textSizeSelect.val(doc.control_label_text_size);
                    // Apply the selected text size
                    if (doc.control_label_text_size === 'Small') {
                        $('body').css('--text-sm', '12px');
                    } else if (doc.control_label_text_size === 'Medium') {
                        $('body').css('--text-sm', '16px');
                    } else if (doc.control_label_text_size === 'Large') {
                        $('body').css('--text-sm', '20px');
                    }
                }

                // Set the initial form control font size value from the user's settings
                if (doc.form_control_font_size) {
                    formControlFontSizeSelect.val(doc.form_control_font_size);
                    // Apply the selected form control font size
                    if (doc.form_control_font_size === 'Small') {
                        $('body').css('--text-md', '12px');
                    } else if (doc.form_control_font_size === 'Medium') {
                        $('body').css('--text-md', '16px');
                    } else if (doc.form_control_font_size === 'Large') {
                        $('body').css('--text-md', '20px');
                    }
                }
            }
        }
    });

    
    function updateStyles(
        primaryColor,
        textColor,
        blockBackgroundColor,
        backgroundColor,
        iconFillColor,
        iconStrokeColor,
        avatarframebgcolor,
        scrollbarthumbcolor,
        scrollbartrackcolor,
        primaryColors,
        textColors,
        blockBackgroundColors,
        backgroundColors,
        iconFillColors,
        iconStrokeColors,
        avatarframebgcolors,
        scrollbarthumbcolors,
        scrollbartrackcolors,
        avatarbg,
        avatarbgs,
        navbarbackground,
        navbarbackgrounds,
    ) {
        // Check the current theme using data-theme attribute
        var currentTheme = $('html').attr('data-theme');
    
        // Set the primary color based on the theme
        if (currentTheme === 'dark') {
            $('body').css('--primary', primaryColor);
        } else if (currentTheme === 'light') {
            $('body').css('--primary', primaryColors);
        }

        if (currentTheme === 'dark') {
            $('body').css('--text-color', textColor);
        } else if (currentTheme === 'light') {
            $('body').css('--text-color', textColors);
        }
    

        if (currentTheme === 'dark') {
            $('body').css('--control-bg', blockBackgroundColor);
        } else if (currentTheme === 'light') {
            $('body').css('--control-bg', blockBackgroundColors);
        }
    
        if (currentTheme === 'dark') {
            $('body').css('--bg-color', backgroundColor);
        } else if (currentTheme === 'light') {
            $('body').css('--bg-color', backgroundColors);
        }
    
        if (currentTheme === 'dark') {
            $('body').css('--icon-fill', iconFillColor);
        } else if (currentTheme === 'light') {
            $('body').css('--icon-fill', iconFillColors);
        }
        if (currentTheme === 'dark') {
            $('body').css('--icon-stroke', iconStrokeColor);
        } else if (currentTheme === 'light') {
            $('body').css('--icon-stroke', iconStrokeColors);
        }
        if (currentTheme === 'dark') {
            $('body').css('--avatar-frame-bg', avatarframebgcolor);
        } else if (currentTheme === 'light') {
            $('body').css('--avatar-frame-bg', avatarframebgcolors);
        }

        if (currentTheme === 'dark') {
            $('body').css('--scrollbar-thumb-color', scrollbarthumbcolor);
        } else if (currentTheme === 'light') {
            $('body').css('--scrollbar-thumb-color', scrollbarthumbcolors);
        }

        if (currentTheme === 'dark') {
            $('body').css('--scrollbar-track-color', scrollbartrackcolor);
        } else if (currentTheme === 'light') {
            $('body').css('--scrollbar-track-color', scrollbartrackcolors);
        }
        if (currentTheme === 'dark') {
            $('body').css('--dark-green-avatar-bg',avatarbg);
        } else if (currentTheme === 'light') {
            $('body').css('--dark-green-avatar-bg', avatarbgs);
        }
      
        if (currentTheme === 'dark') {
            $('body').css('--navbar-bg',navbarbackground);
        } else if (currentTheme === 'light') {
            $('body').css('--navbar-bg', navbarbackgrounds);
        }
        
    }});