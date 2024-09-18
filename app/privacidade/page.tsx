export default function Privacidade() {
    return (
      <section className="w-full py-12 md:py-12 lg:py-16 xl:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Política de Privacidade</h1>
            <p className="mb-6">Esta política de privacidade descreve como tratamos suas informações ao utilizar nosso aplicativo, que permite pagamentos via Google Forms. Temos o compromisso de proteger sua privacidade e garantir que seus dados sejam tratados de forma segura.</p>

            <h2 className="text-xl font-semibold mb-2">1. Informações Coletadas</h2>
            <p className="mb-6">A "Micro Loja" coleta e processa informações dos pedidos recebidos, como o nome do cliente, e-mail e detalhes da compra, a fim de viabilizar o pagamento através de provedores de pagamento. Esses dados são compartilhados com os provedores de pagamento selecionados para que a transação financeira possa ser realizada.</p>

            <h2 className="text-xl font-semibold mb-2">2. Compartilhamento de Dados com Provedores de Pagamento</h2>
            <p className="mb-6">Para processar pagamentos, os dados do cliente, incluindo nome, e-mail e informações do pedido, serão compartilhados com os provedores de pagamento disponíveis. Esses provedores utilizam os dados exclusivamente para processar o pagamento da transação. Ressaltamos que, para receber os pagamentos, é necessário criar uma conta em um dos provedores de pagamento suportados.</p>

            <h2 className="text-xl font-semibold mb-2">3. Uso de Dados</h2>
            <p className="mb-6">Os dados inseridos no Google Forms e processados pela "Micro Loja" são armazenados localmente no Google Sheets do usuário. Além disso, os dados de pagamento e informações do cliente são compartilhados com os provedores de pagamento para facilitar a conclusão da compra por cartão de crédito.</p>

            <h2 className="text-xl font-semibold mb-2">4. Compartilhamento de Dados</h2>
            <p className="mb-6">A "Micro Loja" compartilha dados com terceiros exclusivamente para a realização dos pagamentos, como mencionado anteriormente. Não vendemos, transferimos ou compartilhamos suas informações com terceiros para outros fins. O compartilhamento de dados ocorre apenas entre você e os provedores de pagamento.</p>

            <h2 className="text-xl font-semibold mb-2">5. Segurança dos Dados</h2>
            <p className="mb-6">A segurança dos dados relacionados aos pedidos é garantida tanto pelos provedores de pagamento, que seguem rigorosos padrões de segurança, quanto pela plataforma Google, que armazena os dados no Google Sheets. Recomendamos o uso de autenticação em duas etapas (2FA) para maior proteção dos dados armazenados no Google Sheets.</p>

            <h2 className="text-xl font-semibold mb-2">6. Seus Direitos</h2>
            <p className="mb-6">Você mantém o controle total sobre os dados armazenados em sua conta Google. Caso deseje excluir, modificar ou compartilhar esses dados, poderá fazê-lo diretamente no Google Sheets ou por meio das ferramentas oferecidas pelos provedores de pagamento.</p>

            <h2 className="text-xl font-semibold mb-2">7. Alterações na Política de Privacidade</h2>
            <p className="mb-6">Podemos atualizar esta Política de Privacidade periodicamente. Quaisquer alterações serão comunicadas por meio desta página. Recomendamos que você revise esta política regularmente para se manter informado sobre como protegemos suas informações.</p>

            <h2 className="text-xl font-semibold mb-2">8. Contato</h2>
            <p className="mb-6">Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o uso de seus dados, entre em contato conosco em: <a href="mailto:contato@microloja.com.br" className="text-blue-500 hover:text-blue-700 underline">contato@microloja.com.br</a>.</p>
            <p className="text-sm">Última atualização: 10/09/2024</p>

          </div>

        </div>
      </section>
    )
}

