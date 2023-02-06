var icao_codes = [
    // Rotas Domésticas
    ['AJU',"Aracajú"],
    ['BEL',"Belém"],['BPS',"Porto Seguro"],['BSB',"Brasília"],['BVB',"Boa Vista"],
    ['CGB',"Cuibá"],['CGH',"Congonhas"],['CGR',"Campo Grande"],['CNF',"Confins"],['CWB',"Curitiba"],['CAC',"Cascavel"],['CXJ',"Caxias de Sul"],
    ['FLN',"Florianopólis"],['FOR',"Fortaleza"],
    ['GIG',"Galeão"],['GRU',"Guarulhos"],['GYN',"Goiânia"],
    ['IGU',"Foz do Iguaçu"],['IMP',"Imperatriz"],['IOS',"Ilhéus"],['IZA',"Zona Da Mata"],
    ['JJG',"Jaguarana"],['JOI',"Joinville"],['JPA',"João Pessoa"],['JJD',"Jericoacora"],['JDO',"Juazeiro do Norte"],
    ['LDB',"Londrina"],
    ['MAB',"Marabá"],['MAO',"Manaus"],['MCP',"Macapá"],['MCZ',"Maceió"],['MGF',"Maringá"],['MOC',"Monte Claros"],
    ['NAT',"Natal"],
    ['PMW',"Palmas"],['POA',"Porto Alegre"],['PVH',"Porto Velho"],['PNZ',"Petrolina"],['PPB',"Presidente Prudente"],
    ['RAO',"Ribeirão"],['RBR',"Rio Branco"],['REC',"Recife"],
    ['SDU',"Santos Dumont"],['SJP',"São Jose do Rio Preto"],['SLZ',"São Luiz"],['SSA',"Salvador"],['STM',"Santarém"],
    ['THE',"Terezina"],
    ['UDI',"Uberlândia"],
    ['VIX',"Vitória"],['VDC',"Vitória Da Consquista"],
    ['XAP',"Chapecó"],  
    // Rotas Internacionais | Europa
    ['BCN',"Barcelona"],
    ['FRA',"Frankfurt"],['FCO',"Roma"],
    ['LHR',"Londres"],['LIS',"Lisboa"],
    ['MAD',"Madri"],
    ['MXP',"Milão"],
    ['CDG',"Paris"],
    // Rotas Internacionais | América do Sul
    ['EZE',"Ezeiza"],
    ['AEP',"Aeropark"],['ASU',"Assunção"],
    ['SCL',"Santiago"],
    ['BOG',"Bogotá"],
    ['LIM',"Lima"],
    ['MVD',"Montividil"],
    // Rotas Internacionais | América Central e USA
    ['LAX',"Los Angeles"],
    ['MIA',"Miami"],
    ['JFK',"New York"],
    ['MCO',"Orlando"],
    ['BOS',"Boston"],
    ['LAS',"Las Vegas"],
    ['MEX',"México"],
    ['PUJ',"Punta Cana"],
    ['CUN',"Cancún"],
    // Rotas Internacionais | Oceania
    ['AKL',"Auckland"],
    ['SYD',"Sydney"],
    ['MEL',"Melbourne"],
    ['TLV',"Tel Aviv"],
    // Rotas Internacionais | Africa
    ['JNB',"Joanesburgo"],
]

const getRandomInt = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min));
const retornarIndice = i => (i + 1 === 1) ? 1 : 0;

const perguntaID = document.getElementById('perguntaGerada')
const inputID = document.getElementById('respostaUser')
const timeID = document.getElementById('reactionTime')

// Variavel da Resposta
localStorage['userResposta'] = ''
localStorage['SECONDS'] = 0

function atualizar(){
    // Selecionar item aleatório
    let randomNumber = getRandomInt(0,icao_codes.length)
    let randomItemNumber = getRandomInt(0,2)
    let tabelaItemSelecionado = icao_codes[randomNumber]

    // Atualizar Elemento HTML da pergunta
    let perguntaSelecionada = tabelaItemSelecionado[randomItemNumber]
    perguntaID.innerText = perguntaSelecionada

    // Armazenar Resposta Certa
    localStorage['userResposta'] = tabelaItemSelecionado[retornarIndice(tabelaItemSelecionado.indexOf(perguntaSelecionada))]
}

inputID.addEventListener('input', atualizarInput);

var timer;

function startTimer() {
  timer = setInterval(function() {
    localStorage['SECONDS']++;
    timeID.innerHTML = localStorage['SECONDS'] + "s";
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

// Resetar Tempo e Input
function reset(e){
    localStorage['SECONDS'] = 0
    console.log(localStorage['userResposta'])
    e.target.value = ''
    atualizar()
}

function atualizarInput(e) {
    if (e.target.value == localStorage['userResposta']){

        let ripple = document.createElement('span')
        ripple.style.left = '50px'
        ripple.style.top = '150px'
        ripple.style.width = '400px'
        ripple.style.height = '400px'
        ripple.style.display = 'block'
        document.getElementById('respostaUser').appendChild(ripple)

        reset(e)
    }
}
// Iniciar Quiz
atualizar()
startTimer()