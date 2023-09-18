const css = {
clipPath: 'polygon(0% 0%, 100% 0%, 100% 40%, 0% 100%'
}

const phone = {
boxSizing: 'border-box',
width: '264px',
height: '533px',
padding: '8px',
borderRadius: '36px',
background: '#f6f9fc',
boxShadow: '0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%)',
userSelect: 'none'
}

const phoneFront = {
boxSizing: 'border-box',
position: 'relative',
height: '100%',
borderRadius: '33px',
background: '#FFF',
userSelect: 'none'
}

const phoneContent = {
boxSizing: 'border-box',
height: '100%',
padding: '6px 0px',
borderRadius: '28px',
background: '#FFF',
fontSize: '11px',
fontWeight: 300,
letterSpacing: '.2px',
userSelect: 'none'
}

const dashboard = {
boxSizing: 'border-box',
height: '537px',
display: 'grid',
grid: 'auto/152px 1fr',
gap: '24px',
width: '929px',
padding: '24px',
borderRadius: '8px',
background: 'linear-gradient(hsla(0,0%,100%,.4),hsla(0,0%,100%,.3) 25%,rgba(246,249,252,.3) 50%,#f6f9fc 60%)',
boxShadow: 'inset 0 1px 1px 0 hsl(0deg 0% 100% / 10%), 0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%)',
fontSize: '11px',
fontWeight: '300',
letterSpacing: '.2px',
lineHeight: '14px',
color: '#425466',
'--gutter': '24px',
userSelect: 'none'
}

const dashboardContentL = {
boxSizing: 'border-box',
display: 'grid',
grid: 'max-content/auto-flow max-content',
gap: '8px',
alignItems: 'center',
fontWeight: '600',
color: '#FFF',
letterSpacing: '.8px',
textTransform: 'uppercase',
userSelect: 'none'
}

const dashboardContentR = {
boxSizing: 'border-box',
display: 'block',
'--gutter': '24px',
fontSize: '11px',
fontWeight: '300',
letterSpacing: '.2px',
lineHeight: '14px',
color: '#425466',
userSelect: 'none'
}

const dashboardSearch = {
boxSizing: 'border-box',
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
userSelect: 'none'
}

const dashboardSearchContent = {
display: 'flex',
boxSizing: 'border-box',
alignItems: 'center',
width: '50%',
height: '20px',
margin: 0,
color: '#62788d',
fontWeight: '500',
borderRadius: '4px',
background: '#FFF',
boxShadow: '0 2px 4px -1px rgb(6 24 44 / 20%)',
userSelect: 'none'
}

const dashboardGraph = {
boxSizing: 'border-box',
marginTop: '24px',
borderRadius: '8px',
background: '#FFF',
boxShadow: '0 2px 4px -1px rgb(6 24 44 / 20%)',
height: '450px'
}

export {
    css, 
    phone, 
    phoneFront, 
    phoneContent, 
    dashboard, 
    dashboardContentL, 
    dashboardContentR, 
    dashboardSearch, 
    dashboardSearchContent, 
    dashboardGraph
}