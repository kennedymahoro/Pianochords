
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TheoryPage() {
  return (
    <div className="p-8 grid gap-8">
      <Card>
        <CardHeader>
          <CardTitle>What is a chord?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>A chord is a group of notes that can be played together and function as the harmony in music. There are lots of different chords that can be organized in different groups and categories. One thing that differ among chords is the number of notes they include. There are triads (three notes), four-note (sometimes called tetrachords) and five-note chords. In addition, chords with six or seven notes also exist. See in-depth summary of chord types.</p>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Building chords</CardTitle>
          </CardHeader>
          <CardContent>
            <p>A good way to learn chords on the piano is to be familiar with how they are constructed. The Cmaj7 chord adds one note to C, the seventh in the C major scale. The Cm7 adds one note to Cm, the seventh in the C minor scale. Looking at the extended chord (e.g. C7, C9, C11), they are adding notes using intervals from the root of the chords with seventh, ninth and eleventh degrees. See a list of chords built by steps.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>... And how to play piano chords?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>When you know which notes that belong to a chord, you can play it in several ways. A chord can be played by pressing down all the relevant keys simultaneously or each at a time. As you make progress, you will find more ways of altering the outcome. It is also important to use the right fingers and this is called fingerings.</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Hands and Fingerings</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Hands</h3>
            <p>Which hand should you use to play chords on the piano? The answer is that it depends.</p>
            <p>For musical accompaniment (i.e. you play in a band or with a singer) you can choose to play only with one hand or with both, depending on how advanced things you are playing – when playing chords including many notes, using two hands can be advantageous (see Two-hands chords). Other piano techniques include playing chords in two parts (e.g. the root note first and when the rest of the notes or the root followed by the whole chord on a higher octave, so-called stride chords).</p>
            <p>If you play solo, you are mostly playing the chords with your left hand and the melody with your right. This is far more natural than the opposite because the harmony and melody sound better combined this way.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Fingerings</h3>
            <p>The fingers to use when playing piano chords varies. Here is some advice to lead you to right practice:</p>
            <ul className="list-disc list-inside">
              <li>In general, avoid using the thumb for the black keys.</li>
              <li>But for the most time (i.e. when the first note is not a black key) you should involve the thumb.</li>
              <li>Always strive for the most natural position for the hand.</li>
              <li>The most common fingerings for triads using left-hand are, in order: little finger (5), middle finger (3) and thumb (1).</li>
              <li>The most common fingerings for triads using right-hand are, in order: thumb (1), middle finger (3) and little finger (5).</li>
            </ul>
            <p>The numbers are used to simplify and represent the five fingers from thumb (1) to little finger (5), regardless if the left or right hand is concerned. On this site you can find fingerings for the chords, these are suggestions that strives to follow the standard way, but must not be optimal in all situations or for all hands.</p>
            <p>Exercises could be done for developing independence among the fingers. Normally, the ring fingers are the weakest and need the most strength training. See fingerings illustrated with pictures.</p>
          </div>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Combining them</CardTitle>
          </CardHeader>
          <CardContent>
            <p>After you learned some chords, the next step is to combine them into progressions.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>How to read the diagrams?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>On the image below you can see one example of how a piano chord is presented on this site including a diagram:</p>
            <p className="italic">Piano chord picture and information</p>
            <p>A red color means that the key is part of the chord that is in focus. To play the actual chord on a piano, press down all keys marked in red (if needed, see a diagram compared to a realistic picture). Since the pattern of keys repeat itself on the keyboard, you can place your hand in many positions. You will notice that there is more bass on the left part of the keyboard and more treble as you go to the right. Therefore, you should strive for placing your hand somewhere in the middle.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Notation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>When looking at piano chord symbols, we often see # (pronounced sharp) or b (pronounced flat), for example C# or Db.</p>
            <p>Then the chord is written with a sole letter, as in C, it is a major chord. A chord written as Cm means C minor.</p>
            <p>Sus, Dim and Aug are abbreviations for suspended, diminished and augmented.</p>
            <p>For inverted chords a slash is used between the original chord name and the alternative bass note (i.e. C/E).</p>
            <p>A parenthesis can sometimes be seen in the chord name, for example C(#5), meaning that the chord has an alteration or extension.</p>
            <p>Less common is the use of no in a chord. In these cases a note is omitted and Cno3 means that the triad is played without the third.</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Exercises</CardTitle>
          </CardHeader>
          <CardContent>
            <p>A collection of exercises with musical notation that can be open as pdf-files plus drills in interactive mode.</p>
            <a href="#" className="underline text-blue-500">Go to exercises page</a>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ebooks</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Free ebooks and ebooks to a small cost if you want to support the site.</p>
            <a href="#" className="underline text-blue-500">Go to ebooks page</a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
