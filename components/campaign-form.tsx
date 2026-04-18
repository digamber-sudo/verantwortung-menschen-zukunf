"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Vorname muss mindestens 2 Zeichen lang sein." }),
  lastName: z.string().optional(),
  email: z
    .string()
    .email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }),
  message: z.string().optional(),
  participationOptions: z.array(z.string()).optional(),
  donationAmount: z.string().optional(),
  gdpr: z.literal(true, {
    errorMap: () => ({
      message: "Sie müssen der Datenschutzerklärung zustimmen.",
    }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface CampaignFormProps {
  readonly type: "spenden" | "volunteer" | "kontakt" | "event";
  readonly onSuccess?: () => void;
}

export function CampaignForm({ type, onSuccess }: CampaignFormProps) {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [selectedAmount, setSelectedAmount] = React.useState<string>("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      participationOptions: [],
      donationAmount: "",
      gdpr: undefined as any,
    },
  });

  const handleAmountClick = (amount: string) => {
    setSelectedAmount(amount);
    form.setValue("donationAmount", amount);
  };

  const participationChoices = [
    { id: "info", label: "Informationen erhalten" },
    { id: "help", label: "Mithelfen" },
    { id: "ideas", label: "Ideen einbringen" },
  ];

  async function onSubmit(values: FormValues) {
    const isStatic = process.env.NEXT_PUBLIC_IS_STATIC === "true";
    const endpoint = isStatic ? "/api/send-email.php" : "/api/send-email";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type, ...values }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        form.reset();
        if (onSuccess) {
          setTimeout(onSuccess, 3000);
        }
      } else {
        console.error("Email sending failed:", result.error);
        alert("Entschuldigung, beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Es gab ein Problem mit der Serververbindung. Bitte prüfen Sie Ihre Internetverbindung.");
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-300">
        <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-primary mb-2">Vielen Dank!</h3>
        <p className="text-gray-600 max-w-sm mx-auto">
          {type === "spenden" 
            ? "Nach Ihrer Anfrage erhalten Sie eine E-Mail mit allen Informationen zur Spende."
            : type === "event"
            ? "Ihre Anmeldung wurde erfolgreich entgegengenommen. Sie erhalten in Kürze eine Bestätigung."
            : "Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden."}
        </p>
        <Button
          variant="outline"
          className="mt-6 border-accent text-accent hover:bg-red-50"
          onClick={() => setIsSubmitted(false)}
        >
          {type === "event" ? "Weitere Anmeldung" : "Weitere Nachricht"}
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Spenden Amount Selector */}
          {type === "spenden" && (
            <div className="space-y-4 mb-6 pt-2">
              <FormLabel className="text-base font-bold text-primary">Wählen Sie Ihren Beitrag:</FormLabel>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {["10 €", "25 €", "50 €", "100 €"].map((amount) => (
                  <Button
                    key={amount}
                    type="button"
                    variant={selectedAmount === amount ? "default" : "outline"}
                    className={cn(
                      "h-12 text-lg font-bold transition-all",
                      selectedAmount === amount ? "bg-accent text-white border-accent" : "border-gray-200 hover:border-accent hover:text-white"
                    )}
                    onClick={() => handleAmountClick(amount)}
                  >
                    {amount}
                  </Button>
                ))}
              </div>
              <FormField
                control={form.control}
                name="donationAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Oder eigener Betrag:</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input 
                            placeholder="Eigenen Betrag eingeben" 
                            {...field} 
                            onChange={(e) => {
                                field.onChange(e);
                                if (e.target.value) setSelectedAmount("");
                            }}
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">€</span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vorname*</FormLabel>
                  <FormControl>
                    <Input placeholder="Vorname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nachname (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Nachname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-Mail-Adresse*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="E-Mail"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Participation Options (Volunteer only) */}
          {type === "volunteer" && (
            <div className="space-y-3 py-2">
                <FormLabel className="text-base font-bold text-primary">Ich möchte:</FormLabel>
                <div className="space-y-2">
                    {participationChoices.map((choice) => (
                        <FormField
                            key={choice.id}
                            control={form.control}
                            name="participationOptions"
                            render={({ field }) => {
                                return (
                                    <FormItem
                                        key={choice.id}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value?.includes(choice.id)}
                                                onCheckedChange={(checked: boolean | "indeterminate") => {
                                                    return checked
                                                        ? field.onChange([...(field.value || []), choice.id])
                                                        : field.onChange(
                                                              field.value?.filter(
                                                                  (value: string) => value !== choice.id
                                                              )
                                                          );
                                                }}
                                            />
                                        </FormControl>
                                        <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            {choice.label}
                                        </FormLabel>
                                    </FormItem>
                                );
                            }}
                        />
                    ))}
                </div>
            </div>
          )}

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nachricht (optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Ihre Nachricht an uns..."
                    className="min-h-[80px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* GDPR Consent */}
          <FormField
            control={form.control}
            name="gdpr"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-lg border p-4 bg-card/50">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-2 leading-none">
                  <FormLabel className="text-xs text-gray-600 leading-normal">
                    {type === "spenden" 
                        ? "Ich willige ein, dass meine Daten zur Bearbeitung meiner Spendenanfrage und zur einmaligen Kontaktaufnahme im Zusammenhang mit meiner Spende verarbeitet werden. Ich habe die Datenschutzerklärung zur Kenntnis genommen."
                        : "Ich willige ein, dass meine Daten zur Kontaktaufnahme und Information über die Kampagne verarbeitet werden. Ich habe die Datenschutzerklärung gelesen."
                    }
                  </FormLabel>
                  <div className="flex flex-col gap-1">
                    <a
                      href="/datenschutz"
                      className="text-accent hover:underline text-xs font-bold"
                      target="_blank"
                    >
                      [ Datenschutzerklärung ]
                    </a>
                    <p className="text-[10px] text-gray-500 italic">
                        Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                    </p>
                  </div>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/* Footer message for spin */}
          {type === "spenden" && (
            <p className="text-sm text-gray-500 text-center italic py-2">
                Nach Ihrer Anfrage erhalten Sie eine E-Mail mit allen Informationen zur Spende.
            </p>
          )}

          <Button
            type="submit"
            className="w-full bg-accent hover:bg-red-700 text-white font-black h-14 text-xl uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-red-200"
          >
            {type === "spenden" ? "Spendenanfrage senden" : "Jetzt mitmachen"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
