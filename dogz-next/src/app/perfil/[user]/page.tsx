export default async function UserPage({
  params,
}: {
  params: { user: string };
}) {
  return (
    <main>
      <h1>Perfil de {params.user}</h1>
    </main>
  );
}
