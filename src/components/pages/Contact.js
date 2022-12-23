import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { Button, Container, Box } from '../../styles/GlobalStyles'
import Placeholder from '../../assets/placeholder.jpeg'
import ContactImage from '../../assets/contact-image.jpeg'
import {
  BsFillGeoAltFill,
  BsChatDotsFill,
  BsTelephoneFill,
} from 'react-icons/bs'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styled from 'styled-components'

function Contact() {
  const BoxWrapper = styled(Container)`
    flex-direction: row;
    margin: 3rem 0rem;
  `
  const ContactBox = styled(Box)`
    width: 12rem;
    height: 10rem;
    text-align: justify;
    h3 {
      margin: 0.5rem 0rem;
    }
  `
  const ContianerFormWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 5rem 0rem;
  `
  const Form = styled.form`
    width: 45%;
    height: 18rem;
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
    justify-content: space-between;
    textarea {
      resize: none;
      height: 4rem;
      font-size: 0.8rem;
      padding: 0.5rem;
      outline: none;
      border-radius: 0.2rem;
    }
    input {
      width: 80%;
      height: 1.5rem;
      font-size: 0.8rem;
      transition: 0.5s;
      border-radius: 0.2rem;
      padding-left: 0.5rem;
      font-family: 'Roboto', sans-serif;
      &:focus {
        outline: none;
        width: 85%;
        font-size: 0.9rem;
      }
    }
  `
  const Image = styled(LazyLoadImage)`
    filter: grayscale(1);
    margin: 0rem 0rem 2rem 2rem;
  `
  const [showPopup, setShowPopup] = useState(false)
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: '',
      userEmail: '',
    },
  })
  function handlePopup() {
    setShowPopup(true)
    scrollUp()
    setTimeout(() => {
      setShowPopup(false)
    }, 4000)
  }

  const sendEmail = (formData) => {
    emailjs
      .send(
        'service_8ifqz9h',
        'template_5ew2zl9',
        formData,
        'PplcVTx2tcLqBXnuv',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
    reset()
  }

  return (
    <Container>
      <h3>Get in touch with us</h3>
      <BoxWrapper>
        <ContactBox>
          <BsChatDotsFill size={30} />
          <h3>Email</h3>
          <label>name@gmail.com</label>
        </ContactBox>
        <ContactBox>
          <BsFillGeoAltFill size={30} />
          <h3>Adress</h3>
          <p>Tajovského 40</p>
          <p>00000 Banská Bystrica</p>
          <p>Slovakia</p>
        </ContactBox>
        <ContactBox>
          <BsTelephoneFill size={30} />
          <h3>Phone</h3>
          <label>+421949171506</label>
        </ContactBox>
      </BoxWrapper>

      <ContianerFormWrapper>
        <Image
          src={ContactImage}
          placeholderSrc={Placeholder}
        />
        <Form
          onSubmit={handleSubmit(sendEmail)}
       
        >
          <label>Name</label>
          <input
            {...register('userName', { required: 'This field is required' })}
            placeholder="etc. Joe Doe"
            name="userName"
           
          />
          <p>{errors.userName?.message}</p>
          <label>Email</label>
          <input
            {...register('userEmail', {
              required: 'This field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            placeholder="etc. joe@gmail.com"
            
          />
          <p>{errors.userEmail?.message}</p>
          <label>Your message</label>
          <textarea
            {...register('message', {
              required: 'If you want to text me, write me something',
            })}
            name="message"
            placeholder="etc. This is best shop ever"
           
          ></textarea>
          <p>{errors.message?.message}</p>

          <Button type="submit">Send</Button>
        </Form>
      </ContianerFormWrapper>
    </Container>
  )
}

export default Contact
