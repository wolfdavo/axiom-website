import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="App-body">
        <blockquote className="blockQuote bodyText"><em>Axiom is a close-knit network of exceptional individuals dedicated to alchemizing the world around them.</em></blockquote>
        <h3>Axiom is composed of:</h3>
        <ul>
          <li>Entrepreneurs</li>
          <li>Creators</li>
          <li>Leaders</li>
          <li>Researchers</li>
          <li>Innovators</li>
        </ul>
        <p>Members of Axiom have a burning desire to write their own script and carve their own path. They do not settle, and they are never satisfied. They are catalysts of change and creation.</p>
        <p>When you are accepted into Axiom, you are being welcomed into an ever-expanding and carefully selected network of exceptional people. You have a direct line to everyone in the global syndicate. We do everything we can to support each other, creating a powerful interdependent synergy among members.</p>
        <p>Members frequently host events where you can network and connect in person. Lunch and coffee meetings, brainstorming sessions, group workouts, and celebrations/parties are all common.</p>
        <p>All members of Axiom are seen as equal. There is no hierarchy at all. When you are accepted, it means we have absolute trust in your character, values, and principles by which you live your life and that they align with those of the syndicate. Once accepted, you are free to invite and interview new members, host events, and network with anyone you want.</p>
        <p>There is no monetary cost associated with membership.</p>

        <h3>Member responsibilities</h3>
        <p>As a member of Axiom, you are expected to:</p>
        <ul>
          <li>Actively support the other members to the best of your ability. (Making connections, giving advice, etc.)</li>
          <li>Host and attend events</li>
          <li>Uphold the syndicate's values</li>
          <li>Be proactive</li>
        </ul>

        <h3>Application process</h3>
        <p><b>Step One - Written Application</b></p>
        <p>The first step of getting into Axiom is to fill out a written application. The application consists of deep questions regarding character, morals, motivations, achievements, self-discipline, struggles, goals, dreams, and is an overall deep dive into who you are and what you stand for. It is not short, and will likely take a number of days to complete. A referral by an Axiom member is a huge plus, but not required.</p>

        <p><b>Step Two - Remote interview with a member</b></p>
        <p>Once we have read your written application and established a good fit for the syndicate, we will reach out and schedule a call with you. This is either a chat over the phone or a video call. It is casual, so don't stress. You can think of it as a networking opportunity, and the first taste of what is is like to be in Axiom. Your interviewer could be anyone in the syndicate.</p>

        <p><b>Step Three - Attend an event</b></p>
        <p>After the call, you will be invited to attend an in-person event. If the nearest event is a long way away, you will be required to travel. This is the final step.</p>
      </div>
    </div>
  );
}

export default App;
