
/**
 * Called by Change event from the social media input boxes
 * There's no input parameters but we can use "this.inputObject"
 * @return String
 */
function DoGetSocialMediaHtmlCode() {
    if (this.inputObject.value == '') {
        return '';
    }
    var STYLE_ICONS_SOCIAL_MEDIA = 'width:18px; height:auto; margin:0 4px 0 0;';
    return '<a href="' + this.inputObject.value + '" style="text-decoration:none !important;" target="_blank"><img style="' + STYLE_ICONS_SOCIAL_MEDIA + '" src="' + this.icon + '"></a>';
}


/**
 * Build the entire signature panel with the existing information
 */
function UpdateSignature() {
    // Get the values
    var _firstname = firstname.inputObject.value;
    var _lastname = lastname.inputObject.value;
    var _jobtitle = jobtitle.inputObject.value;
    var _email = email.inputObject.value;
    var _phone = phone.inputObject.value;
    var _mobile = mobile.inputObject.value;

    var _companyname = companyname.inputObject.value;
    var _website = website.inputObject.value;
    var _address1 = address1.inputObject.value;
    var _address2 = address2.inputObject.value;
    var _logo = logo.inputObject.value;

    var _colortext = colortext.inputObject.value;
    var _colorverticalline = colorverticalline.inputObject.value;

    var html_googleplus = googleplus.GetHtmlString();
    var html_facebook = facebook.GetHtmlString();
    var html_linkedin = linkedin.GetHtmlString();
    var html_twitter = twitter.GetHtmlString();
    var html_instagram = instagram.GetHtmlString();
    var html_skype = skype.GetHtmlString();
    var html_youtube = youtube.GetHtmlString();
    var html_pinterest = pinterest.GetHtmlString();
    var html_github = github.GetHtmlString();
    var html_stackoverflow = stackoverflow.GetHtmlString();
    var html_bitbucket = bitbucket.GetHtmlString();
    var html_spotify = spotify.GetHtmlString();
    var html_whatsapp = whatsapp.GetHtmlString();
    var _socialmedia = ''
        + html_googleplus
        + html_facebook
        + html_linkedin
        + html_twitter
        + html_instagram
        + html_skype
        + html_youtube
        + html_pinterest
        + html_github
        + html_stackoverflow
        + html_bitbucket
        + html_spotify
        + html_whatsapp;

    var _style_tag_a = 'color:#3B69BC !important; text-decoration:none !important;';

    // Format the HTML of the signature
    var signature = '';

    signature += '<table cellpadding="0" cellspacing="0" style="color:' + _colortext + '; font-family:sans-serif; font-size:12px;">';
    signature += '<tr>';
    if (_logo) {
        signature += '<td>';
        signature += '<a href="' + _website + '" target="_blank" style="' + _style_tag_a + '"><img src="' + _logo + '" style="max-width:120px; padding:0 12px 0 0;" /></a>';
        signature += '</td>';
    }
    signature += '<td>';

    signature += '<table cellpadding="0" cellspacing="0" style="color:' + _colortext + '; font-family:sans-serif; font-size:12px;">';
    signature += '<tr>';
    signature += '<td style="line-height:18px; height:18px; background:' + _colorverticalline + '; width:2px;"></td>';
    signature += '<td style="line-height:18px; height:18px; width:12px;"></td>';
    signature += '<td style="line-height:18px; height:18px;">';
    if (_firstname || _lastname) {
        signature += '    <Span style="font-weight:bold; margin:0 8px 0 0;">' + _firstname + (_firstname && _lastname ? ' ' : '') + _lastname + '</Span>';
    }
    signature += '</td>';
    signature += '</tr>';
    if (_jobtitle || _companyname) {
        signature += '<tr>';
        signature += '<td style="line-height:18px; height:18px; padding:0 0 6px 0; background:' + _colorverticalline + '; width:2px;"></td>';
        signature += '<td style="line-height:18px; height:18px; padding:0 0 6px 0; width:12px;"></td>';
        signature += '<td style="line-height:18px; height:18px; padding:0 0 6px 0;">';
        signature += '    <span style="font-style:italic;">' + _jobtitle + '</span>' + (_jobtitle && _companyname ? ', ' : '') + '<span>' + _companyname + '</span>';
        signature += '</td>';
        signature += '</tr>';
    }
    if (_address1) {
        signature += '<tr>';
        signature += '<td style="line-height:18px; height:18px; padding:0 0 0 0; background:' + _colorverticalline + '; width:2px;"></td>';
        signature += '<td style="line-height:18px; height:18px; padding:0 0 0 0; width:12px;"></td>';
        signature += '<td style="line-height:18px; height:18px; padding:0 0 0 0;">';
        signature += '    <span>' + _address1 + '</span>';
        signature += '</td>';
        signature += '</tr>';
    }
    if (_email || _website || _mobile || _phone) {
        signature += '<tr>';
        signature += '<td style="line-height:18px; height:18px; background:' + _colorverticalline + '; width:2px;"></td>';
        signature += '<td style="line-height:18px; height:18px; width:12px;"></td>';
        signature += '<td style="line-height:18px; height:18px;">';
        signature += '    <Span>' + _mobile + (_mobile && _phone ? ' | ' : '') + _phone + '</Span>';
        signature += '    <span style="margin:0 8px; color:' + _colorverticalline + ';">|</span>';
        if (_email) {
            signature += '    <a style="' + _style_tag_a + '" href="mailto:hangelo.ca@gmail.com">' + _email + '</a>';
        }
        if (_email && _website) {
            signature += '    <span style="margin:0 8px; color:' + _colorverticalline + ';">|</span>';
        }
        if (_website) {
            signature += '    <a style="' + _style_tag_a + '" href="https://' + _website + '">' + _website + '</a></div>';
        }
        signature += '</td>';
        signature += '</tr>';
    }
    if (_socialmedia) {
        signature += '<tr>';
        signature += '    <td style="line-height:18px; height:18px; padding:12px 0 0 0; background:' + _colorverticalline + '; width:2px;"></td>';
        signature += '    <td style="line-height:18px; height:18px; padding:12px 0 0 0; width:12px;"></td>';
        signature += '    <td style="line-height:18px; height:18px; padding:12px 0 0 0;">';
        signature += '        ' + _socialmedia + '';
        signature += '    </td>';
        signature += '</tr>';
    }
    signature += '            </table>';
    signature += '        </td>';
    signature += '    </tr>';
    signature += '</table>';

    // Put the formated html into the signature box
    document.getElementById('signature').innerHTML = signature;
}
