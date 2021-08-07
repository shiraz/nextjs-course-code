import { useRouter } from 'next/router';

const ClientsProjectsPage = () => {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

    const loadProjectHandler = () => {
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: { id: 'max', clientprojectid: 'projecta' }
        });
    };

    return (
        <div>
            <h1>The Projects of a Given Client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
}

export default ClientsProjectsPage;