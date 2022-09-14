---
title: Simple contact form with NextJS & EmailJS
imageUrl: https://res.cloudinary.com/dpoanqywm/image/upload/v1641339651/462254jq98ylvsj42f9e_b9vsgv.jpg
date: 1651360790
---

Contact forms are like a direct line from your users to you, and more often than not provide a ton of insight into how your users perceive and communicate with your business, especially new customers. While you may think that creating a contact form is as easy as some inputs and some server to send off whatever data you provide it, there are a little more subtle nuances to making sure that your form works as expected, especially in production. At least, that is what I found out today while working on a contact page for my new service, [XPerks](https://www.squadperks.co).

I was looking for some managed solution that leveraged my existing email service, address, and meshed well with my front end. Enter [EmailJS](https://www.emailjs.com/). EmailJS offers complete support for a few of the most popular web frameworks, or just plain vanilla JavaScript, and comes with a nice dashboard that is quick and easy to get a contact service set up, using SMTP mail servers or existing mail services, in my case, Gmail. Just a few details to configure, and you are off to the races. 

EmailJS also offers built-in support for reCAPTCHA, which in my opinion is a bulletproof way to prevent form abuse, and can be found on almost any modern website. Unless you want your email quota to be used up by some malicious bot and leave your server gasping for a break, some form of validation is necessary. I went with a simple "I am not a robot" check to verify my users were indeed carbon-based humans.😅 

All I needed was some way to use reCAPTCHA within a React application, and [react-recaptcha](https://www.npmjs.com/package/react-recaptcha)	was more than enough to get me rolling. They offer a simple reCAPTCHA component that just requires a couple of config props and 2 callback functions to help verify a user's input. We also need to add a script to our `<Head>` in our `_document.js` file to use the Google reCAPTCHA CDN.
```
<script src="https://www.google.com/recaptcha/api.js?&render=explicit" async defer></script>
```


*Recaptcha Component*
```
<Recaptcha
  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
  render="explicit"
  onloadCallback={recaptchaLoaded}
  verifyCallback={verifiedRecaptcha}
/>
```

The first is a function that, once the reCAPTCHA element is loaded, is called and, with the help of some React local state, becomes true and allows the next callback function to be called.


*onLoadCallback*
```
const [recaptchaLoad, setRecaptchaLoad] = React.useState(false)

const recaptchaLoaded = () => {
  setRecaptchaLoad(true);
}
```

The second callback is invoked once the server returns a response giving an ok that the reCAPTCHA step for the user came back successful, and again, with some local state, can be used as a check before sending off the form submission.


*isVerifiedCallback*
```
const [recaptchaLoad, setRecaptchaLoad] = React.useState(false)

const verifiedRecaptcha = (response) => {
  if (response) {
    setIsVerified(true);
  }
}
```


Now, before this can all be finished, we need some form to place it all into, and luckily EmailJS offers some boilerplate to get us started. Their boilerplate uses the `sendForm()` method, but for a simple form, the `send()` method will do. All we need now are our Service ID, an EmailJS Template ID (you'll want to create some simple email template in your EMAILJS dashboard to acquire this).
The best place for these secrets are in a `.env` file. Once you have gathered your environment variables, you need to shape the data that will be sent from the form to the email server. We can create a `templateParams` object to hold this information. We need a `from_name` for our sender, a `from_email` in case we want to reply, a `to_name` so that our user knows who they are communicating with, and the `message` body which holds the message content.
*NOTE: if you expect your response to be in an `html` format, you will want to replace `message` with `message_html`, or else your `html` structured response will end up as a string.*


```
const templateParams = {
  from_name: nameRef.current.value,
  from_email: emailRef.current.value,
  to_name: 'SquadPerks Support',
  message: messageRef.current.value,
}
```


Now, with the help of some gorgeous styling and components from [Chakra UI](https://chakra-ui.com/), we can build our form component to be rendered on our page.


```
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  Textarea,
  Box,
  Flex
} from '@chakra-ui/react'

<Flex flexDirection="column" >
    <form className="contact-form" onSubmit={sendEmail}>
      <FormLabel>Name</FormLabel>
      <Input type="text" name="user_name" className="from-name" autoComplete={false} ref={nameRef} />
      <FormLabel>Email</FormLabel>
      <Input type="email" name="user_email" className="from-email" autoComplete={false} ref={emailRef} />
      <FormLabel>Message</FormLabel>
      <Textarea name="message" autoComplete={false} ref={messageRef} />
      <Box mt="4">
        <Recaptcha
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          render="explicit"
          onloadCallback={recaptchaLoaded}
          verifyCallback={verifiedRecaptcha}
        />
      </Box>
      <Button type="submit" value="Send" className="submit" bgColor="brand.100" mt="4">Send</Button>
    </form>
  </Flex>
```

And, with that our form is complete! Make sure to add your site domains/`localhost`/`127.0.0` to your reCAPTCHA admin dashboard, or else it won't be able to communicate with your site. Our final code should look something like this:

*ContactUsForm.js*
```
import * as React from 'react';
import * as emailjs from 'emailjs-com'
import Recaptcha from 'react-recaptcha'
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  Textarea,
  Box,
  Flex
} from '@chakra-ui/react'

export default function ContactUs() {
  const [recaptchaLoad, setRecaptchaLoad] = React.useState(false)
  const [isVerified, setIsVerified] = React.useState(false)
  const nameRef = React.useRef(null)
  const emailRef = React.useRef(null)
  const messageRef = React.useRef(null)


  const recaptchaLoaded = () => {
    setRecaptchaLoad(true);
  }

  const verifiedRecaptcha = (response) => {
    if (response) {
      setIsVerified(true);
    }
  }
  function sendEmail(e) {
    e.preventDefault();
    const templateParams = {
      from_name: nameRef.current.value,
      from_email: emailRef.current.value,
      to_name: 'SquadPerks Support',
      message: messageRef.current.value,
    }
    if (recaptchaLoad && isVerified) {
      emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
        .then((result) => {
          console.log(result.text);
          nameRef.current.value = null
          emailRef.current.value = null
          messageRef.current.value = null
        }, (error) => {
          console.log(error.text);
        });
    } else {
      console.error('Please check reCaptcha and try again.')
    }
  }

  return (
    <>
      <Flex flexDirection="column" >
        <form className="contact-form" onSubmit={sendEmail}>
          <FormLabel>Name</FormLabel>
          <Input type="text" name="user_name" className="from-name" autoComplete={false} ref={nameRef} />
          <FormLabel>Email</FormLabel>
          <Input type="email" name="user_email" className="from-email" autoComplete={false} ref={emailRef} />
          <FormLabel>Message</FormLabel>
          <Textarea name="message" autoComplete={false} ref={messageRef} />
          <Box mt="4">
            <Recaptcha
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              render="explicit"
              onloadCallback={recaptchaLoaded}
              verifyCallback={verifiedRecaptcha}
            />
          </Box>
          <Button type="submit" value="Send" className="submit" bgColor="brand.100" mt="4">Send</Button>
        </form>
      </Flex>
      <style>{`

      `}</style>
    </>
  );
}
```

Thank you for taking the time to read this post, as it is actually my very first blog post here! I will be sharing many more in the near future as I build my gaming service platform [XPerks](https://www.squadperks.co). If you are into gaming and competitive eSports, be sure to check us out on our site and give us a follow on all of our social media! We have a thriving discord community as well, and there is always a place for everyone! 

Until next time!