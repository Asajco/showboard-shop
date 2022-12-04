import React, { useState } from 'react'
import styles from '../../css/Contact.module.css'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { Button } from '../../styles/GlobalStyles'
import {
  BsFillGeoAltFill,
  BsChatDotsFill,
  BsTelephoneFill,
} from 'react-icons/bs'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Contact() {
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
    <div className={styles['contact-container']}>
      <h3>Get in touch with us</h3>
      <div className={styles['contact-boxes-container']}>
        <div className={styles['contact-wrapper']}>
          <BsChatDotsFill className={styles['contact-icon']} />
          <h3>Email</h3>
          <label>name@gmail.com</label>
        </div>
        <div className={styles['contact-wrapper']}>
          <BsFillGeoAltFill className={styles['contact-icon']} />
          <h3>Adress</h3>
          <p>Tajovského 40</p>
          <p>00000 Banská Bystrica</p>
          <p>Slovakia</p>
        </div>
        <div className={styles['contact-wrapper']}>
          <BsTelephoneFill className={styles['contact-icon']} />
          <h3>Phone</h3>
          <label>+421949171506</label>
        </div>
      </div>

      <div className={styles['contact-form-section']}>
        <LazyLoadImage src={require('../../assets/contact-image.jpeg')} className={styles["contact-image"]}/>
        <form
          onSubmit={handleSubmit(sendEmail)}
          className={styles['form-container']}
        >
          <label>Your dearest name</label>
          <input
            {...register('userName', { required: 'This field is required' })}
            placeholder="Your name..."
            name="userName"
            className={styles['form-input']}
          />
          <p className={styles['error-message']}>{errors.userName?.message}</p>
          <label>Your dearest email</label>
          <input
            {...register('userEmail', {
              required: 'This field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            placeholder="Email"
            className={styles['form-input']}
          />
          <p className={styles['error-message']}>{errors.userEmail?.message}</p>
          <label>Your message</label>
          <textarea
            {...register('message', {
              required: 'If you want to text me, write me something',
            })}
            name="message"
            placeholder="Write your message"
            className={styles['form-input']}
          ></textarea>
          <p className={styles['error-message']}>{errors.message?.message}</p>

          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  )
}

export default Contact
