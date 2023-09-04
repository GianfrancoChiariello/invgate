//Src
const baseSrc = '../src/assets/'

const logo = baseSrc + '1_invgate-logo.png'
const logoShort =  baseSrc + '1_invgate-logoshort.png'
const hero =  baseSrc + '2_hero.webm'

const diccionaryDate = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec'
};

const tagsData = [
        {
        "title" : "Design",
        "backgroundColor": "#F0F9FF",
        "textColor" : "#026AA2"
        },
        {
        "title" : "Research",
        "backgroundColor": "#EEF4FF",
        "textColor" : "#3538CD"
        },
        {
        "title" : "Presentation",
        "backgroundColor": "#FDF2FA",
        "textColor" : "#C11574"
        },
        {
            "title": "Leadership",
            "backgroundColor": "#F5F9FC",
            "textColor": "#256BA5"
        },
        {
            "title": "Management",
            "backgroundColor": "#F8F9FC",
            "textColor": "#363F72"
        },
        {
            "title": "Product",
            "backgroundColor": "#F5F9FC",
            "textColor": "#256BA5"
        },
        {
            "title": "Frameworks",
            "backgroundColor": "#FFF6ED",
            "textColor": "#C4320A"
        }
]

const dataFormat = (data) => {

    const newData = data.map(item => {
        const dateSplit = item.date.split('-')
        return {
            ...item,
            formatDate: `${dateSplit[2]} ${diccionaryDate[dateSplit[1]]} ${dateSplit[0]}`
        }
    })
    return newData
}

export {
    logo,
    logoShort,
    hero,
    diccionaryDate,
    dataFormat,
    tagsData
}