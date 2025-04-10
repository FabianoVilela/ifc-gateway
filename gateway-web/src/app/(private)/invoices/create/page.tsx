
import { Button } from "@/components/ui/primitives/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/primitives/card";
import { Input } from "@/components/ui/primitives/input";
import { Label } from "@/components/ui/primitives/label";
import { Separator } from "@/components/ui/primitives/separator";
import { Textarea } from "@/components/ui/primitives/textarea";
import { ArrowLeft, CreditCard, Lock, } from "lucide-react";
import Link from "next/link";

export default function CreateInvoice() {
  return (
    <>
      <CardHeader className="flex justify-between">
        <div className='flex'>
          <Link href="/invoices" className='flex text-gray-500'>
            <ArrowLeft className='mr-2 h-4 w-4' />
          </Link>

          <div className='ml-4 flex flex-col'>
            <div className="flex items-center gap-8">
              <CardTitle className='font-bold text-2xl'>Criar nova fatura</CardTitle>
            </div>
            <CardDescription>Preencha os dados para processar um novo pagamento</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className='grid grid-cols-1 gap-6 py-4'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <div className='flex h-full flex-col gap-2'>
            <div className='grid w-full items-center gap-1.5'>
              <Label htmlFor="amount">Valor</Label>
              <Input type="text" id="amount" placeholder="R$ 0,00" />
            </div>
            <div className='flex w-full flex-1 flex-col'>
              <Label htmlFor="description">Descrição</Label>
              <Textarea className='h-full' id="description" placeholder="Descreva o motivo do pagamento" />
            </div>
          </div>

          <Card className="shadow-none">
            <CardHeader className="flex">
              <CardTitle className=''>Dados do cartão</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="card-number">Número cartão</Label>
                  <Input type="text" id="card-number" placeholder="0000 0000 0000 0000" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="expiration-date">Dada expiração</Label>
                    <Input type="text" id="expiration-date" placeholder="MM/AA" />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input type="text" id="excvv" placeholder="123" />
                  </div>
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="card-name">Nome no cartão</Label>
                  <div className='relative flex items-center justify-between'>
                    <Input type="text" id="card-name" placeholder="Como aparece no cartão" />
                    <CreditCard className='absolute right-0 mr-2 h-4 w-4 text-gray-400' />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-none">
          <CardContent>
            <div className="space-y-2">
              <div className='flex justify-between pb-2'>
                <span className="text-gray-400">Subtotal</span>
                <span className='font-medium text-gray-400'>
                  R$ 0,00
                </span>
              </div>

              <div className='flex justify-between pb-2'>
                <span className="text-gray-400">Taxa de processamento (2%)</span>
                <span className='font-medium text-gray-400'>
                  R$ 0,00
                </span>
              </div>

              <Separator className="my-4" />

              <div className='flex justify-between pb-2'>
                <span className='font-bold text-gray-400'>Total</span>
                <span className='font-medium text-gray-400'>
                  R$ 0,00
                </span>
              </div>

            </div>
          </CardContent>
        </Card>
      </CardContent>
      <CardFooter className="flex justify-end gap-4">
        <Button variant="secondary" >
          Cancelar
        </Button>
        <Button>
          <Lock className='mr-2 h-4 w-4' />
          Processar pagamento
        </Button>
      </CardFooter>
    </>
  );
}