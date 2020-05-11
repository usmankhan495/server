const sendgrid=require('sendgrid')
const helper=sendgrid.mail
const keys=require('../config/key')

class Mailer extends helper.Mail{

    constructor({subject,recipients},content){
        super();
        this.sgApi=sendgrid(keys.sendGridKey);
        this.from_email=new helper.Email('usmankhan495@gmail.com');
        this.subject=subject;
        this.body=new helper.Content('text/html',content);
        this.recipients=this.formatAddresses(recipients);
        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();

    }

    formatAddresses=(recipients)=>{

        return recipients.map(({email})=>{
            return new helper.Email(email);
        });

    }

    addRecipients=()=>{
        const personalize=new helper.Personalization();
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
            
        });
        this.addPersonalization(personalize);
    }

    addClickTracking=()=>{

        const trackingSetting=new helper.TrackingSettings();
        const clickTracking=new helper.ClickTracking(true,true);
        trackingSetting.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSetting);

    }
    async send(){
        const request=this.sgApi.emptyRequest({
            method:'POST',
            path:'/v3/mail/send',
            body:this.toJSON()
        });

        let response= await this.sgApi.API(request);
        return response;
    }

}



module.exports=Mailer;