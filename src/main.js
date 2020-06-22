import { JournalEntry } from './journalObject';
import './styles.css';

$(document).ready(function() {
  $('#journalEntry').submit(function(event) {
    event.preventDefault();
    const body = $("#body").val();
    const title = $("#title").val();

    let journalEntry = new JournalEntry (title, body);

    console.log(`Title: ${journalEntry.titleEntry}`);
    console.log(`Body: ${journalEntry.bodyEntry}`);
    console.log(`Vowel Count: ${journalEntry.vowelCount()}`);
    console.log(`Consonant Count: ${journalEntry.consonantCount()}`);
    console.log(`Teaser: ${journalEntry.getTeaser()}`);

  });
});