import Table from './Components/table.js';
import HomepageContent from './Components/HomepageContent.js'
import './CSS/styling.css';
import StandardErrorBoundary from './Components/ErrorBoundary.js';

const Home = () => {
  return (
    <div>
      <h1 >React Demo - Message board posts</h1>
      <p>This is a basic demo showing the retrieval and display of data from JSONPlaceholder.</p>
        <HomepageContent/>
      <p></p>
      <StandardErrorBoundary> 
        <Table/>
      </StandardErrorBoundary>
    </div>
  );
};
export default Home;