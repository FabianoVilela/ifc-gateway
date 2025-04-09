
type InvoiceDetailProps = {
  params: { id: string };
};

export default async function InvoiceDetail({ params }: InvoiceDetailProps) {
  const { id } = await params;

  return (
    <div>
      <h1>Invoice id: {id} Detail</h1>
      {/* Additional components and logic will go here */}
    </div>
  );
}