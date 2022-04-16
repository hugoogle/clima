class Tradutor {
    tradutor(palavra: string): string {
        switch (palavra) {
            case 'Snow':
                return 'Neve';
            case 'Sleet':
                return 'Granizo';
            case 'Hail':
                return 'Saudação';
            case 'Thunderstorm':
                return 'Trovoada';
            case 'Heavy Rain':
                return 'Chuva pesada';
            case 'Light Rain':
                return 'Chuva leve';
            case 'Showers':
                return 'Chuveiros';
            case 'Heavy Cloud':
                return 'Nuvem Pesada';
            case 'Light Cloud':
                return 'Nuvem clara	';
            case 'Clear':
                return 'Claro';
            default:
                return 'LightRain';
        }
    }

}

export const Traduzir = Tradutor;
