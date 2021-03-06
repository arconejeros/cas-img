/* eslint-disable */
import React, { useEffect, useState } from 'react';

import gsap, { Back } from 'gsap';
import Link from 'next/link'

import { withExam } from '../../context/exam-context';
import Alert from '../Alert';
import Button from '../Button';
import Location from '../Location';
import styles from './index.module.scss';
import { useRouter } from 'next/router'

const Details = ({ exam, procedures }) => {
  exam.setExams(procedures);
  let infoRef;
  const router = useRouter()
  const examen = router.query;
  const { title, action, whatItIs, location, howToPrepare, alert } = exam.selected;
  const [activeTab, setActiveTab] = useState(0);
  const goBack = () => {
    window.location.href="/"
    // router.back();
    // exam.setInitialState();
  };

  useEffect(() => {
    exam.setSelected(exam.exams.find((e) => e.title === examen.title[0]));
    gsap.from(infoRef, 0.3, {
      autoAlpha: 0,
      ease: Back.easeInOut,
    });
  }, []);

  const tabSetter = (index) => {
    const tl = gsap.timeline();
    tl.to(infoRef, 0.2, {
      autoAlpha: 0,
      ease: Back.easeInOut,
      onComplete: () => {
        setActiveTab(index);
      },
    });
    tl.to(infoRef, 0.2, {
      autoAlpha: 1,
      ease: Back.easeInOut,
    });
  };
  console.log('selected', exam.selected);
  const actionButton = () => {
    if (action.type === 'call') {
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      return (
        <Button
          className={`${styles.btn} ${styles.force} m-bottom-2`}
          onClick={() => window.open(`tel:${action.url}`)}
        >
          {action.type === 'call' ? action.url : 'Solicitar'}
        </Button>
      );
    }
    return (
      <Link href={`/form/${title}`}>
        <Button className={`${styles.btn} m-bottom-2`}>
          {action.type === 'call' ? action.url : 'Solicitar'}
        </Button>
      </Link>
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.innerHeader}>
          <div className={styles.breadcrumbs}>
            <button type="button" className={styles.goBack} onClick={goBack}>
              imagenologia/
            </button>
            <h3>{title}</h3>
            <div className={styles.tabs}>
              <button
                type="button"
                onClick={() => tabSetter(0)}
                className={`${styles.tab} ${activeTab === 0 && styles.active}`}
              >
                Qu?? es
              </button>
              <button
                type="button"
                onClick={() => tabSetter(1)}
                className={`${styles.tab} ${activeTab === 1 && styles.active}`}
              >
                C??mo prepararse
              </button>
              <button
                type="button"
                onClick={() => tabSetter(2)}
                className={`${styles.tab} hideOnDesktop ${activeTab === 2 && styles.active}`}
              >
                D??nde se realiza
              </button>
            </div>
          </div>
          <div className={styles.actions}>{actionButton()}</div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.innerBody}>
          <div
            className={styles.info}
            ref={(el) => {
              infoRef = el;
            }}
          >
            {activeTab === 0 && <p>{whatItIs}</p>}
            {activeTab === 1 && (
              <>
                {alert && <Alert text={alert} />}
                <p>{howToPrepare}</p>
              </>
            )}
            {activeTab === 2 && (
              <>
                {location.map((l, i) => (
                  <Location
                    location={l}
                    key={i.toString()}
                    isLastItem={location.length === i + 1}
                  />
                ))}
              </>
            )}
          </div>

          <div className={styles.locations}>
            <h5>Donde se realiza:</h5>
            {location.map((l, i) => (
              <Location
                location={l}
                key={i.toString()}
                isLastItem={location.length === i + 1}
              />
            ))}
          </div>
          <div className={`${styles.actions} hideOnDesktop`}>{actionButton()}</div>
        </div>
      </div>
    </div>
  );
};

export default withExam(Details);
