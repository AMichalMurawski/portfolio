import styled from 'styled-components';

export const BgWrapper = styled.div`
  ${props => {
    const { wall } = props.theme;
    return `
        position: absolute;
        left: 0;
        bottom: 0;
        height: 0;
        width: 100%;
        min-width: 100vw;
        height: 100%;
        min-height: 100vh;
        background-color: white;
        background:
            linear-gradient(163deg, transparent 0px, transparent 1px, ${wall.brick} 1px, ${wall.brick} 14px, transparent 14px),
            linear-gradient(161deg, transparent 0px, #181818 1px, ${wall.brick} 2px, ${wall.brick} 15px, transparent 15px),
            linear-gradient(343deg, transparent 0px, transparent 1px, ${wall.brick} 1px, ${wall.brick} 14px, transparent 14px),
            linear-gradient(343deg, transparent 0px, transparent 1px, ${wall.brick} 1px, ${wall.brick} 14px, transparent 14px);
        background-color: ${wall.bg};
        background-position: 2px 1px, 23px 16px, 48px 15px, 21px 30px;
        background-size: 48px 30px;
        transform: rotate(180deg);
        transition: background ease-out 300ms;
        z-index: -999
    `;
  }}
`;
