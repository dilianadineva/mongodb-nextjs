import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';

const Index = ({ notes }) => {
  return (
    <div className='notes-container'>
      <h1>Notes</h1>
      <div className='grid wrapper'>
        {notes.map((note) => {
          return (
            <div className='note' key={note._id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`/${note._id}`}>
                      <a>{note.title}</a>
                    </Link>
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Link href={`/${note._id}`}>
                    <Button primary>View</Button>
                  </Link>
                  <Link href={`/${note._id}/edit?id=${note._id}`}>
                    <Button primary>Edit</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  let hostname = context.req.headers.host;
  const res = await fetch(`http://${hostname}/api/notes`);
  const { data } = await res.json();
  return {
    props: {
      notes: JSON.parse(JSON.stringify(data)), //issue#11993: https://github.com/vercel/next.js/issues/11993
    },
  };
}

export default Index;
