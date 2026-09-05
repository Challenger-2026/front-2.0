export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="w-full bg-stone-900 text-amber-50 text-center py-6 mt-auto">
      <p className="text-sm">
        &copy; {anoAtual} Lobo-guará Tech. Todos os direitos reservados.
      </p>
    </footer>
  );
}