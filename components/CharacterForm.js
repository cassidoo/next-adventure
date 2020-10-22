import styles from './CharacterForm.module.css';

export default function CharacterForm() {
  return (
    <form
      name="custom"
      action="/success"
      method="POST"
      className={styles.form}
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="custom" />
      <p>
        <label htmlFor="yourname">Character name: </label>
        <br />
        <input type="text" name="name" id="charname" />
      </p>
      <p>
        <label htmlFor="pronouns">Character pronouns: </label>
        <br />
        <input type="radio" id="masc" name="gender" value="masc" />
        <label htmlFor="masc">He/Him</label>
        <br />
        <input type="radio" id="fem" name="gender" value="fem" />
        <label htmlFor="fem">She/Her</label>
        <br />
        <input type="radio" id="nb" name="gender" value="nb" />
        <label htmlFor="nb">They/Them</label>
      </p>
      <p>
        <label htmlFor="smell">Character's favorite smell: </label>
        <br />
        <input type="text" name="smell" id="charsmell" />
      </p>
      <p>
        <label htmlFor="youremail">Your Email: </label>
        <br />
        <input type="email" name="email" id="youremail" />
      </p>
      <p className={styles.submit}>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}
