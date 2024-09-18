export default function Termos() {
    return (
      <section className="w-full py-12 md:py-12 lg:py-16 xl:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Termos e Condições de Uso</h1>

            <p className="mb-6">Bem-vindo ao "Micro Loja"! Estes Termos e Condições regulam o uso do nosso aplicativo, que permite a realização de pagamentos via Google Forms e o armazenamento dos dados em Google Sheets. Ao utilizar o aplicativo, você concorda com os termos a seguir.</p>

            <h2 className="text-xl font-semibold mb-2">1. Aceitação dos Termos</h2>
            <p className="mb-6">Ao acessar ou usar o "Micro Loja", você concorda em cumprir estes Termos e Condições. Caso não concorde com algum termo, pedimos que não utilize o aplicativo.</p>

            <h2 className="text-xl font-semibold mb-2">2. Funcionamento do Serviço</h2>
            <p className="mb-6">O "Micro Loja" permite que usuários integrem formulários do Google Forms com provedores de pagamento para facilitar a realização de compras e pagamentos por cartão de crédito. Todos os dados inseridos e gerados pelo aplicativo são armazenados no Google Sheets do usuário e podem ser compartilhados com provedores de pagamento para processar as transações.</p>

            <h2 className="text-xl font-semibold mb-2">3. Responsabilidades do Usuário</h2>

            <h3 className="text-lg font-medium mb-1">3.1. Contas em Provedores de Pagamento</h3>
            <p className="mb-4">Para receber os pagamentos, é necessário que o usuário crie uma conta em um dos provedores de pagamento suportados. O uso desses provedores está sujeito aos termos e políticas de privacidade de cada provedor.</p>

            <h3 className="text-lg font-medium mb-1">3.2. Precisão das Informações</h3>
            <p className="mb-4">O usuário se compromete a fornecer informações precisas e verdadeiras nos formulários, incluindo dados pessoais e financeiros. A "Micro Loja" não se responsabiliza por erros decorrentes de informações incorretas fornecidas pelo usuário.</p>

            <h3 className="text-lg font-medium mb-1">3.3. Segurança da Conta</h3>
            <p className="mb-6">O usuário é responsável por manter a segurança de sua conta Google e garantir que suas credenciais de acesso sejam protegidas. O uso não autorizado de sua conta deve ser notificado imediatamente.</p>

            <h2 className="text-xl font-semibold mb-2">4. Compartilhamento de Dados</h2>
            <p className="mb-6">Os dados coletados pelos formulários do Google Forms, incluindo nome do cliente, e-mail e informações sobre o pedido, serão compartilhados com provedores de pagamento para facilitar o processamento de pagamentos. O usuário concorda com este compartilhamento para viabilizar a transação.</p>

            <h2 className="text-xl font-semibold mb-2">5. Limitação de Responsabilidade</h2>
            <p className="mb-6">A "Micro Loja" não é responsável por quaisquer perdas ou danos diretos ou indiretos resultantes do uso do aplicativo, incluindo falhas nos serviços de provedores de pagamento, erros de transação ou acessos não autorizados à sua conta Google.</p>

            <h2 className="text-xl font-semibold mb-2">6. Alterações no Serviço</h2>
            <p className="mb-6">Podemos modificar, suspender ou descontinuar o serviço ou partes do serviço a qualquer momento, sem aviso prévio. Também podemos atualizar estes Termos e Condições, e recomendamos que você os revise periodicamente.</p>

            <h2 className="text-xl font-semibold mb-2">7. Suspensão ou Encerramento de Acesso</h2>
            <p className="mb-6">A "Micro Loja" se reserva o direito de suspender ou encerrar o acesso ao aplicativo caso o usuário viole os presentes Termos e Condições ou se envolver em atividades fraudulentas ou ilícitas.</p>

            <h2 className="text-xl font-semibold mb-2">8. Direitos de Propriedade Intelectual</h2>
            <p className="mb-6">Todos os direitos de propriedade intelectual relacionados ao aplicativo "Micro Loja" são de propriedade exclusiva de seus desenvolvedores. O usuário não tem o direito de copiar, modificar, distribuir ou comercializar o aplicativo sem autorização prévia.</p>

            <h2 className="text-xl font-semibold mb-2">9. Lei Aplicável</h2>
            <p className="mb-6">Estes Termos e Condições são regidos pelas leis da República Federativa do Brasil. Qualquer disputa decorrente do uso do aplicativo será resolvida nos tribunais competentes no Brasil.</p>

            <h2 className="text-xl font-semibold mb-2">10. Contato</h2>
            <p className="mb-6">Para dúvidas ou suporte relacionado ao uso do "Micro Loja", entre em contato conosco através do e-mail: <a href="mailto:contato@microloja.com.br" className="text-blue-500 hover:text-blue-700 underline">contato@microloja.com.br</a>.</p>
            <div className="shadow-md p-6">
              <p className="text-center">Ao utilizar o "Micro Loja", você confirma que leu, entendeu e concorda com os presentes Termos e Condições.</p>
            </div>
            <p className="text-sm mb-2 mt-6">Última atualização: 10/09/2024</p>
          </div>
        </div>
      </section>
    )
}