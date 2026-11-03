
var fields = [
    {
        id: 'firstName',
        label: 'First Name'
    },
    {
        id: 'lastName',
        label: 'Last Name'
    },
];

fields.forEach(element => {
    element.initiateObject = InitiateObject;
    element.inputObject = null;
    element.placeHolder = '';
});


// The objects to interpret the html elements on the page
var firstname = {
    placeholder: '',
    object_id: 'firstname',
    object_label: 'firstname',
    inputObject: null,
    initiateObject: InitiateObject
}

var lastname = {
    placeholder: '',
    object_id: 'lastname',
    object_label: 'lastname',
    inputObject: null,
    initiateObject: InitiateObject
}

var jobtitle = {
    placeholder: 'Your job position',
    object_id: 'jobtitle',
    object_label: 'jobtitle',
    inputObject: null,
    initiateObject: InitiateObject
}

var email = {
    placeholder: 'myemail@mywebsite.com',
    object_id: 'email',
    object_label: 'email',
    inputObject: null,
    initiateObject: InitiateObject
}

var phone = {
    placeholder: '+1 123-456-7890',
    object_id: 'phone',
    object_label: 'phone',
    inputObject: null,
    initiateObject: InitiateObject
}

var mobile = {
    placeholder: '+1 123-456-7890',
    object_id: 'mobile',
    object_label: 'mobile',
    inputObject: null,
    initiateObject: InitiateObject
}

var companyname = {
    placeholder: 'My Company',
    object_id: 'companyname',
    object_label: 'companyname',
    inputObject: null,
    initiateObject: InitiateObject
}

var department = {
    placeholder: 'Company\'s department',
    object_id: 'department',
    object_label: 'department',
    inputObject: null,
    initiateObject: InitiateObject
}

var website = {
    placeholder: 'https://www.mywebsite.com',
    object_id: 'website',
    object_label: 'website',
    inputObject: null,
    initiateObject: InitiateObject
}

var address1 = {
    placeholder: '123 The Avenue',
    object_id: 'address1',
    object_label: 'address1',
    inputObject: null,
    initiateObject: InitiateObject
}

var address2 = {
    placeholder: 'Suite 234',
    object_id: 'address2',
    object_label: 'address2',
    inputObject: null,
    initiateObject: InitiateObject
}

var logo = {
    placeholder: 'https://www.mycompany.com/logo.png',
    object_id: 'logo',
    object_label: 'logo',
    inputObject: null,
    initiateObject: InitiateObject
}

var googleplus = {
    placeholder: 'googleplus.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/googleplus.png',
    object_id: 'googleplus',
    object_label: 'googleplus',
    inputObject: null,
    GetHtmlString: DoGetSocialMediaHtmlCode,
    initiateObject: InitiateObject
};

var facebook = {
    placeholder: 'facebook.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/facebook.png',
    object_id: 'facebook',
    object_label: 'facebook',
    inputObject: null,
    GetHtmlString: DoGetSocialMediaHtmlCode,
    initiateObject: InitiateObject
};

var linkedin = {
    placeholder: 'linkedin.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/linkedin.png',
    object_id: 'linkedin',
    object_label: 'linkedin',
    inputObject: null,
    GetHtmlString: DoGetSocialMediaHtmlCode,
    initiateObject: InitiateObject
};

var twitter = {
    placeholder: 'twitter.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/twitter.png',
    object_id: 'twitter',
    object_label: 'twitter',
    inputObject: null,
    GetHtmlString: DoGetSocialMediaHtmlCode,
    initiateObject: InitiateObject
};

var instagram = {
    placeholder: 'instagram.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/instagram.png',
    object_id: 'instagram',
    object_label: 'instagram',
    inputObject: null,
    GetHtmlString: DoGetSocialMediaHtmlCode,
    initiateObject: InitiateObject
};

var skype = {
    placeholder: 'skype username',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/skype.png',
    object_id: 'skype',
    object_label: 'skype',
    inputObject: null,
    GetHtmlString: DoGetSocialMediaHtmlCode,
    initiateObject: InitiateObject
};

var youtube = {
    placeholder: 'youtube.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/youtube.png',
    object_id: 'youtube',
    object_label: 'youtube',
    inputObject: null,
    GetHtmlString: DoGetSocialMediaHtmlCode,
    initiateObject: InitiateObject
};

var pinterest = {
    placeholder: 'pinterest.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/pinterest.png',
    object_id: 'pinterest',
    object_label: 'pinterest',
    inputObject: null,
    GetHtmlString: DoGetSocialMediaHtmlCode,
    initiateObject: InitiateObject
};

var github = {
    placeholder: 'github.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/github.png',
    object_id: 'github',
    object_label: 'github',
    inputObject: null,
    GetHtmlString: DoGetSocialMediaHtmlCode,
    initiateObject: InitiateObject
};

var stackoverflow = {
    placeholder: 'stackoverflow.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/stackoverflow.png',
    object_id: 'stackoverflow',
    object_label: 'stackoverflow',
    inputObject: null,
    GetHtmlString: DoGetSocialMediaHtmlCode,
    initiateObject: InitiateObject
};

var bitbucket = {
    placeholder: 'bitbucket.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/bitbucket.png',
    object_id: 'bitbucket',
    object_label: 'bitbucket',
    inputObject: null,
    GetHtmlString: DoGetSocialMediaHtmlCode,
    initiateObject: InitiateObject
};

var spotify = {
    placeholder: 'spotify.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/spotify.png',
    object_id: 'spotify',
    object_label: 'spotify',
    inputObject: null,
    GetHtmlString: DoGetSocialMediaHtmlCode,
    initiateObject: InitiateObject
};

var whatsapp = {
    placeholder: 'whatsapp.com/yourprofile',
    icon: 'https://s3.ca-central-1.amazonaws.com/img.henriqueangelo.com/email-signature/social-media/whatsapp.png',
    object_id: 'whatsapp',
    object_label: 'whatsapp',
    inputObject: null,
    GetHtmlString: DoGetSocialMediaHtmlCode,
    initiateObject: InitiateObject
};

var colortext = {
    placeholder: '#333',
    object_id: 'colortext',
    object_label: 'colortext',
    inputObject: null,
    initiateObject: InitiateObject
}

var colorverticalline = {
    placeholder: '#FF8400',
    object_id: 'colorverticalline',
    object_label: 'colorverticalline',
    inputObject: null,
    initiateObject: InitiateObject
}


function PutFieldIntoPage()
{
    // Configure each element on the page

    AddSubTitle('Personal information');

    firstname.initiateObject();
    lastname.initiateObject();
    jobtitle.initiateObject();
    email.initiateObject();
    phone.initiateObject();
    mobile.initiateObject();

    AddSubTitle('Company information');

    companyname.initiateObject();
    website.initiateObject();
    address1.initiateObject();
    address2.initiateObject();
    logo.initiateObject();

    AddSubTitle('Social media');

    googleplus.initiateObject();
    facebook.initiateObject();
    linkedin.initiateObject();
    twitter.initiateObject();
    instagram.initiateObject();
    skype.initiateObject();
    youtube.initiateObject();
    pinterest.initiateObject();
    github.initiateObject();
    stackoverflow.initiateObject();
    bitbucket.initiateObject();
    spotify.initiateObject();
    whatsapp.initiateObject();

    AddSubTitle('Other configurations');

    colortext.initiateObject();
    colorverticalline.initiateObject();
}
