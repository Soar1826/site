import Head from 'next/head'
import styles from '../styles/Register.module.css'
import Icon from '@hackclub/icons'
import Modal from '../components/Modal'
import Text from '../components/Inputs/Text.js';
import Title from '../components/Inputs/Title.js';
import Select from '../components/Inputs/Select.js';
import { questions, sections } from '../lib/questions.js';
import { useEffect, useState } from 'react';

const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const timelapseId = "9x00RCb1N7WTpAl6cIN0000Kult00vyzslROW6A1RblWwxM"

// const timelapseId = "402YMZJfp6kW02302E3r1RMe013Ub9AqlPwzr4VjD00HO7ME"

export default function Register() {

  const [modal, setModal] = useState(false);

  const [key, setKey] = useState('');
  const [showForm, setShowForm] = useState(process.env.NODE_ENV !== "production" || key == process.env.VERCEL_GIT_COMMIT_SHA)
  const handleFormEnter = () => { 
    if (regex.test(email)) {
      fetch('https://ip.yodacode.xyz').then(res => res.json()).then(({ geo }) => {
        fetch('/api/v2', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            city: geo.city
          })
        }).then(() => {
          window.location.href = '/start?email=' + email;
          setSubmitted(true);
        });
      })
    }
  };
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    if (params?.email) setEmail(params?.email);    
    if (params?.key) setKey(params?.key);
  }, []);
  if (!showForm) return (
    <>
        <div style={{
            width: '100vw',
            height: '100vh',
            background: 'var(--orange)'
        }}>
        <Head>
            <title>Hack OC</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Modal visible={true} setVisible={() => ''} hideCloseButton={true}>
            <div style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '8px',
                border: '2px solid var(--orange)',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '40px',
                textAlign: 'center'
            }}>
                <h1 style={{ marginBottom: '0px' }}>Registrations will open soon!</h1>
                <p>In the meantime, check out our <a href="/" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>homepage</a>.</p>
            </div>
        </Modal>
        </div>
    </>
  );
  return (
    <>
    <Head>
        <title>Hack OC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.container} style={{
      position: 'relative',
      zIndex: '10',
      overflow: 'hidden'
    }}>

      <main className={styles.main}>
        <h1 className={styles.title} style={{ color: 'black' }}> 
              Hack <span className="color-orange" style={{
                marginLeft: '-4px',
                position: 'relative',
                marginTop: '4rem',
                marginBottom: '6rem'
              }}>
                OC
                <img src="/orange.svg" style={{
                  position: 'absolute',
                  bottom: '50%',
                  left: '-2px',
                  height: 'calc(100% - 10px)',
                  transform: 'translate(10%, 44.5%)'
                }} className="noselect" />
              </span>
                <span style={{ marginLeft: '-6px'}}>{' '}Registration</span>
            </h1>
            {sections.map((section, i) => {
                return (
                  <div style={{
                    padding: '1rem',
                    position: 'relative'
                  }}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      filter: 'opacity(0.6)',
                      top: '0px',
                      left: '0px',
                      zIndex: '10',
                      background: i % 4 === 1 ? 'url("https://cloud-2zvigj1zd-hack-club-bot.vercel.app/0water.jpeg")' : undefined,
                      backgroundSize: 'cover',
  
                    }}></div>
                    <div style={{
                      position: 'relative',
                      zIndex: '20',
                    }}>


<center>
                    <div style={{
                        width: '500px',
                        maxWidth: 'calc(100vw - 60px)',
                        textAlign: 'left',
                        marginLeft: '20px',
                        marginTop: i == 0 ? '6rem' : '2rem'
                    }}>
                    <h2>{section.title}</h2>
                    <p>{section.description}</p>
            </div>
            </center>
            <center>
            <div style={{
              width: '500px',
              maxWidth: 'calc(100vw - 60px)',
              textAlign: 'left',
              marginLeft: '20px',
              marginTop: i == 0 ? '6rem' : '2rem'
            }}>
                    {
                        section.questions.map((question, i) => {
                            return (
                              <>
                              <div style={{
                                marginBottom: '3rem',
                                marginTop: '3rem',
                              }}>
                                {(question.special == 'multiSelect' || question.special == 'select') ?
                                  <Select {...{
                                    options: question.options,
                                    multi: question.special == 'multiSelect',
                                    name: question.name,
                                    description: question.description,
                                    help: question.help,
                                    width: 'min(calc(100% - 20px), 400px)',
                                    type: question.type,
                                    placeholder: question.placeholder,
                                    validate: question.verify,
                                    required: question.required,
                                    dontDisplayAll: question.dontDisplayAll
                                  }} />
                                : question.special == 'text' ? <Title {...{
                                  name: question.name,
                                  description: question.description,
                                  help: question.help,
                                  width: 'min(calc(100% - 20px), 400px)',
                                }} /> :
                                  <Text {...{
                                    name: question.name,
                                    description: question.description,
                                    help: question.help,
                                    width: 'min(calc(100% - 20px), 400px)',
                                    type: question.type,
                                    placeholder: question.placeholder,
                                    validate: question.verify,
                                    required: question.required
                                  }} />
                                }
                              </div>
                                </>
                                
                            )
                            
                        })
                      
                    }
                    
                    </div>
                    </center>
                    </div>
                    </div>
                );
            })}
      </main>
    </div>
    </>
  )
}