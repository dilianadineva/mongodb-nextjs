import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Button, Loader, Confirm, Container, Header } from 'semantic-ui-react';

function Note(note) {
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    if (isDeleting) {
      deleteNote();
    }
  }, [isDeleting]);

  const openConfirmModal = () => {};

  const open = () => setConfirm(true);

  const close = () => setConfirm(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    close();
  };

  const deleteNote = async () => {
    try {
      const deleted = await fetch(`http://localhost:3000/api/notes/${id}`, {
        method: 'DELETE',
      });
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='notes-container'>
      <Container text>
        {isDeleting ? (
          <Loader active />
        ) : (
          <>
            <Header as='h2'>{note.title}</Header>
            <p>{note.description}</p>
            <Button color='red' onClick={open}>
              Delete
            </Button>
            <Confirm
              size='mini'
              open={confirm}
              onCancel={close}
              onConfirm={handleDelete}
            />
          </>
        )}
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/api/notes/${id}`);
  const { data } = await res.json();
  return {
    props: data,
  };
}

export default Note;
