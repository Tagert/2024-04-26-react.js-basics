import styles from "./Cards.module.css";

const Cards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <img src="https://st2.depositphotos.com/20363444/45153/i/450/depositphotos_451535624-stock-photo-clueless-young-woman-curly-hair.jpg" />
      </div>

      <div className={styles.description}>
        <h2>7 Reasons You Don't Need An HR Department</h2>

        <ul>
          <li>You need to stop thinking of staff as 'resources'</li>
          <li>The inherent conflict of interest</li>
          <li>It doesn't offer value for money</li>
          <li>You can utilize tools and outsourcing</li>
          <li>Managers will understand more about their team</li>
          <li>The recruiting process has changed</li>
          <li>There are better ways to handle training</li>
        </ul>

        <a
          href="https://www.mscareergirl.com/7-reasons-you-dont-need-an-hr-department//"
          target="_blank"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export { Cards };
