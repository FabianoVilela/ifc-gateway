import { Badge } from "@/components/ui/primitives/badge";
import { Button } from "@/components/ui/primitives/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/primitives/card";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

type InvoiceDetailProps = {
  params: { id: string };
};

export default async function InvoiceDetail({ params }: InvoiceDetailProps) {
  const { id } = await params;

  return (
    <>
      <CardHeader className="flex justify-between">
        <div className='flex'>
          <Link href="/invoices" className='flex text-gray-500'>
            <ArrowLeft className='mr-2 h-4 w-4' />
          </Link>

          <div className='ml-4 flex flex-col'>
            <div className="flex items-center gap-8">
              <CardTitle className='font-bold text-2xl'>Fatura #NV-001</CardTitle>
              <Badge variant={"success"} className='text-sm'>Aprovado</Badge>
            </div>
            <CardDescription>Criada em 09/04/2025 às 20:40</CardDescription>
          </div>
        </div>
        <Button className="w-fit">
          <Download className='mr-2 h-4 w-4' />
          Download PDF
        </Button>
      </CardHeader>
      <CardContent className='grid grid-cols-1 gap-6 py-4 md:grid-cols-2'>
        {/* Invoice information */}
        <Card className="shadow-none">
          <CardHeader className="flex justify-between">
            <CardTitle className='font-bold'>Informação da fatura</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className='flex justify-between pb-2'>
                <span className="text-gray-400">ID da Fatura</span>
                <span className='font-medium text-gray-400'>#NV-001</span>
              </div>

              <div className='flex justify-between pb-2'>
                <span className="text-gray-400">Valor</span>
                <span className='font-medium text-gray-400'>
                  R$ 1.000,00
                </span>
              </div>

              <div className='flex justify-between pb-2'>
                <span className="text-gray-400">Data de Criação</span>
                <span className='font-medium text-gray-400'>
                  09/04/2025 às 20:40
                </span>
              </div>

              <div className="flex justify-between pb-2">
                <span className="text-gray-400">Descrição</span>
                <span className='font-medium text-gray-400'>
                  Compra online #123
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Transaction status */}
        <Card className="shadow-none">
          <CardHeader className="flex justify-between">
            <CardTitle className='font-bold'>Status da transação</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className='flex justify-between pb-2'>
                <span className="text-gray-400">Fatura criada</span>
                <span className='font-medium text-gray-400'>09/04/2025 às 20:40</span>
              </div>

              <div className='flex justify-between pb-2'>
                <span className="text-gray-400">Pagamento processado</span>
                <span className='font-medium text-gray-400'>
                  09/04/2025 às 20:40
                </span>
              </div>

              <div className='flex justify-between pb-2'>
                <span className="text-gray-400">Transação aprovada</span>
                <span className='font-medium text-gray-400'>
                  09/04/2025 às 20:40
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Payment methods */}
        <Card className="shadow-none">
          <CardHeader className="flex justify-between">
            <CardTitle className='font-bold'>Método de Pagamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className='flex justify-between pb-2'>
                <span className="text-gray-400">Tipo</span>
                <span className='font-medium text-white'>
                  {'credit_card' === "credit_card"
                    ? "Cartão de crédito"
                    : "Boleto"}
                </span>
              </div>

              <div className='flex justify-between pb-2'>
                <span className="text-gray-400">Últimos Dígitos</span>
                <span className='font-medium text-white'>
                  1234
                </span>
              </div>

              <div className='flex justify-between pb-2'>
                <span className="text-gray-400">Títular</span>
                <span className='font-medium text-white'>
                  João Silva
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Additional data */}
        <Card className="shadow-none">
          <CardHeader className="flex justify-between">
            <CardTitle className='font-bold'>Dados adicionais</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className='flex justify-between pb-2'>
                <span className="text-gray-400">ID conta</span>
                <span className='font-medium text-gray-400'>ACC-1234</span>
              </div>
              <div className='flex justify-between pb-2'>
                <span className="text-gray-400">IP cliente</span>
                <span className='font-medium text-gray-400'>
                  192.168.0.1
                </span>
              </div>
              <div className='flex justify-between pb-2'>
                <span className="text-gray-400">Dispositivo</span>
                <span className='font-medium text-gray-400'>
                  Desktop - Chrome
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </>
  );
}