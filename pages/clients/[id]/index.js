import { useRouter } from 'next/router';

const ClientsProjectsPage = () => {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

    return (
        <div>
            <h1>The Projects of a Given Client</h1>
        </div>
    );
}

export default ClientsProjectsPage;