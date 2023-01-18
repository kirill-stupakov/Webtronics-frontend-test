import QuestionMark from '@assets/icons/question-mark.svg?component';
import Accordion from '@components/Accordion';
import styles from './FAQ.module.scss';

type FAQItem = {
  question: string;
  answer: string;
};

const items: FAQItem[] = [
  {
    question: 'What is the price?',
    answer:
      'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
  },
  {
    question: 'What is the price?',
    answer:
      'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
  },
  {
    question: 'What is the price?',
    answer:
      'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
  },
  {
    question: 'What is the price?',
    answer:
      'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
  },
  {
    question: 'What is the price?',
    answer:
      'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
  },
];

const FAQ = () => {
  return (
    <section className={styles.faq}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.content}>
        <div className={styles.left}>
          <p>
            Do you have any kind of questions? <span>We are here to help.</span>
          </p>
          <div className={styles.iconContainer}>
            <QuestionMark />
          </div>
        </div>
        <div className={styles.right}>
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
