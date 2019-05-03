
// The objects to interpret the html elements on the page
var firstname = {
    placeholder: '',
    object_id: 'firstname',
    object_label: 'firstname',
    input_object: null,
    initiate: Initiate
}

var lastname = {
    placeholder: '',
    object_id: 'lastname',
    object_label: 'lastname',
    input_object: null,
    initiate: Initiate
}

var jobtitle = {
    placeholder: 'Your job position',
    object_id: 'jobtitle',
    object_label: 'jobtitle',
    input_object: null,
    initiate: Initiate
}

var email = {
    placeholder: 'myemail@mywebsite.com',
    object_id: 'email',
    object_label: 'email',
    input_object: null,
    initiate: Initiate
}

var phone = {
    placeholder: '+1 123-456-7890',
    object_id: 'phone',
    object_label: 'phone',
    input_object: null,
    initiate: Initiate
}

var mobile = {
    placeholder: '+1 123-456-7890',
    object_id: 'mobile',
    object_label: 'mobile',
    input_object: null,
    initiate: Initiate
}

var companyname = {
    placeholder: 'My Company',
    object_id: 'companyname',
    object_label: 'companyname',
    input_object: null,
    initiate: Initiate
}

var website = {
    placeholder: 'https://www.mywebsite.com',
    object_id: 'website',
    object_label: 'website',
    input_object: null,
    initiate: Initiate
}

var address1 = {
    placeholder: '123 The Avenue',
    object_id: 'address1',
    object_label: 'address1',
    input_object: null,
    initiate: Initiate
}

var address2 = {
    placeholder: 'Suite 234',
    object_id: 'address2',
    object_label: 'address2',
    input_object: null,
    initiate: Initiate
}

var logo = {
    placeholder: 'https://www.mycompany.com/logo.png',
    object_id: 'logo',
    object_label: 'logo',
    input_object: null,
    initiate: Initiate
}

var googleplus = {
    placeholder: 'googleplus.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/googleplus.png',
    object_id: 'googleplus',
    object_label: 'googleplus',
    input_object: null,
    GetHtmlString: DoGetHtmlString,
    initiate: Initiate
};

var facebook = {
    placeholder: 'facebook.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/facebook.png',
    object_id: 'facebook',
    object_label: 'facebook',
    input_object: null,
    GetHtmlString: DoGetHtmlString,
    initiate: Initiate
};

var linkedin = {
    placeholder: 'linkedin.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/linkedin.png',
    object_id: 'linkedin',
    object_label: 'linkedin',
    input_object: null,
    GetHtmlString: DoGetHtmlString,
    initiate: Initiate
};

var twitter = {
    placeholder: 'twitter.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/twitter.png',
    object_id: 'twitter',
    object_label: 'twitter',
    input_object: null,
    GetHtmlString: DoGetHtmlString,
    initiate: Initiate
};

var instagram = {
    placeholder: 'instagram.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/instagram.png',
    object_id: 'instagram',
    object_label: 'instagram',
    input_object: null,
    GetHtmlString: DoGetHtmlString,
    initiate: Initiate
};

var skype = {
    placeholder: 'skype username',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/skype.png',
    object_id: 'skype',
    object_label: 'skype',
    input_object: null,
    GetHtmlString: DoGetHtmlString,
    initiate: Initiate
};

var youtube = {
    placeholder: 'youtube.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/youtube.png',
    object_id: 'youtube',
    object_label: 'youtube',
    input_object: null,
    GetHtmlString: DoGetHtmlString,
    initiate: Initiate
};

var pinterest = {
    placeholder: 'pinterest.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/pinterest.png',
    object_id: 'pinterest',
    object_label: 'pinterest',
    input_object: null,
    GetHtmlString: DoGetHtmlString,
    initiate: Initiate
};

var github = {
    placeholder: 'github.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/github.png',
    object_id: 'github',
    object_label: 'github',
    input_object: null,
    GetHtmlString: DoGetHtmlString,
    initiate: Initiate
};

var stackoverflow = {
    placeholder: 'stackoverflow.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/stackoverflow.png',
    object_id: 'stackoverflow',
    object_label: 'stackoverflow',
    input_object: null,
    GetHtmlString: DoGetHtmlString,
    initiate: Initiate
};

var bitbucket = {
    placeholder: 'bitbucket.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/bitbucket.png',
    object_id: 'bitbucket',
    object_label: 'bitbucket',
    input_object: null,
    GetHtmlString: DoGetHtmlString,
    initiate: Initiate
};

var spotify = {
    placeholder: 'spotify.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/spotify.png',
    object_id: 'spotify',
    object_label: 'spotify',
    input_object: null,
    GetHtmlString: DoGetHtmlString,
    initiate: Initiate
};

var whatsapp = {
    placeholder: 'whatsapp.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/whatsapp.png',
    object_id: 'whatsapp',
    object_label: 'whatsapp',
    input_object: null,
    GetHtmlString: DoGetHtmlString,
    initiate: Initiate
};

var colortext = {
    placeholder: '#333',
    object_id: 'colortext',
    object_label: 'colortext',
    input_object: null,
    initiate: Initiate
}

var colorverticalline = {
    placeholder: '#FF8400',
    object_id: 'colorverticalline',
    object_label: 'colorverticalline',
    input_object: null,
    initiate: Initiate
}


function PutFieldIntoPage()
{
    // Configure each element on the page

    AddSubTitle('Personal information');

    firstname.initiate();
    lastname.initiate();
    jobtitle.initiate();
    email.initiate();
    phone.initiate();
    mobile.initiate();

    AddSubTitle('Company information');

    companyname.initiate();
    website.initiate();
    address1.initiate();
    address2.initiate();
    logo.initiate();

    AddSubTitle('Social media');

    googleplus.initiate();
    facebook.initiate();
    linkedin.initiate();
    twitter.initiate();
    instagram.initiate();
    skype.initiate();
    youtube.initiate();
    pinterest.initiate();
    github.initiate();
    stackoverflow.initiate();
    bitbucket.initiate();
    spotify.initiate();
    whatsapp.initiate();

    AddSubTitle('Other configurations');

    colortext.initiate();
    colorverticalline.initiate();
}
