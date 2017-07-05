# quipshake
Q4 Project


# Available APIs
Folger Digital Texts API
http://www.folgerdigitaltexts.org/api
(full texts of Shakespeare's plays)

Netflix API
https://www.programmableweb.com/api/netflix
(10,000+ movies on file)

JSTOR
https://labs.jstor.org/developers/
(JSTOR is a digital library of academic journals, books, and primary sources)

Highcharts
https://www.highcharts.com/docs
(this is free for non-commercial uses - would allow visual representation of word-frequency and that kind of thing)

# Possible Quiz Types
1. Word frequency
  - within a given play, pick which of two words occurs more often (example: "Which word appears more often in Much Ado About Nothing: 'this' or 'this other word?'")
  - Given a list of 3 words from a given play, place them in order of frequency
2. Character weight
  - Within a given play, which of two characters has more lines?
  - Given a list of 3 characters from a given play, rank them by most lines spoken
3. Quote recognition
  - Given a quote of some fixed number of lines, guess the play from which it comes
    - possibly have the ability to ask for additional lines for help (but would reduce score)
  - True or false: does a given quote come from a given play?
4. Play chronology
  - Given a list of 3 plays, place them in chronological order
  - True or False: play x was written before play y
5. Character placement
  - Name the play from whence a given character comes (could possibly ask for additional characters to be listed in order to help with guessing)
  - True or False: a given character appears in a given play
6. Silly Bonus questions
  - using Watson to parse-through a character's words, analyze that "person" for things like "likelihood to take safety into account when purchasing a car" and then have the user guess (i.e. "Who would be more likely to show brand loyalty when purchasing sneakers: Hamlet or Lady Macbeth?") I have to see if Watson can handle old-English, though. It might not be able to.

  For at least some of the questions, once the user has made their guess, the answer could be shown with an accompanying graph using Highcharts (example: in Romeo & Juliet, Romeo has 43% more lines than Mercutio - something like that).





# Other relevant sites
https://www.shakespearehelp.com/public-domain-shakespeare-images/


# options for expanding down the road
- could include audio recordings of the lines, so people could guess that way instead of via reading the text

Movie adaptations
  - could augment with questions about movie adaptations of Shakespeare's plays using a film-related API
