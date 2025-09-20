'use client';

import { Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FormEvent } from "react";
import { sendContactEmail } from "@/app/actions";


export default function ContactPage() {
    const { toast } = useToast();
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        // Temporarily disable form submission and show a toast
        toast({
            title: "Función no disponible",
            description: "El envío de formularios está temporalmente desactivado.",
            variant: "destructive",
        });

        // Uncomment the following lines to enable form submission
        // const formData = new FormData(event.currentTarget);
        // const result = await sendContactEmail(formData);
        // if (result.success) {
        //     toast({
        //         title: "Mensaje Enviado",
        //         description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
        //     });
        //     (event.target as HTMLFormElement).reset();
        // } else {
        //      toast({
        //         title: "Error",
        //         description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
        //         variant: "destructive"
        //     });
        // }
    }

  return (
    <div className="bg-secondary/30">
        <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">Ponte en Contacto</h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o sugerencia? Nos encantaría escucharte.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
                <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                        <div className="bg-blue-100 p-4 rounded-full">
                        <Mail className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold font-headline text-gray-800">Email</h3>
                        <p className="mt-2 text-lg text-muted-foreground">
                        La mejor forma de contactarnos es a través de nuestro email.
                        </p>
                         <p className="mt-2 text-lg font-semibold text-primary">contacto@petscore.es</p>
                    </div>
                </div>

                <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                        <div className="bg-blue-100 p-4 rounded-full">
                        <Phone className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold font-headline text-gray-800">Teléfono y WhatsApp</h3>
                        <p className="mt-2 text-lg text-muted-foreground">
                        Para consultas urgentes, puedes llamarnos o escribirnos.
                        </p>
                        <p className="mt-2 text-lg font-semibold text-primary">608944197</p>
                    </div>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Formulario de Contacto</CardTitle>
                    <CardDescription>Rellena el formulario y nos pondremos en contacto contigo.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nombre</Label>
                            <Input id="name" name="name" placeholder="Tu nombre" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Mensaje</Label>
                            <Textarea id="message" name="message" placeholder="Escribe tu mensaje aquí..." rows={5} required />
                        </div>
                        <Button type="submit" className="w-full">Enviar Mensaje</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
        </div>
    </div>
  );
}
