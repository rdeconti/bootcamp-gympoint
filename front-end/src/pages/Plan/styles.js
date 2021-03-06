import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    height: 64px;
    max-width: 900px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* align-items: center; */
`;

export const Title = styled.div`
    h1 {
        color: #444444;
        align-content: center;

        /* display: block; */
        font-size: 24px;
        line-height: 37px;
        font-weight: bold;
        width: 223px;
        height: 38px;
        /* margin-right: 590px; */
        top: 144px;
        /* margin: 0px 200px 0px 0px; */
    }
`;

export const Button = styled.button`
    background: transparent;
    border: 0;
    display: flex;

    button {
        height: 36px;
        width: 142px;
        background: #f94d6a;
        font-weight: bold;
        color: #ffffff;
        border: 0;
        border-radius: 4px;
        box-shadow: 0 0 12px;
        transition: background 0.3s;
        &:hover {
            background: ${darken(0.03, '#f94d6a')};
        }
        > strong {
            margin: 2px 0px 0px 15px;
        }
    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 20px auto;

    background: #ffff;
    padding: 0 30px;
    box-shadow: 0px 0 20px rgba(0, 0, 0, 0.2);
    border: 0;
    border-radius: 4px;

    thead th {
        color: #000;
        text-align: left;
        font-size: 16px;
        line-height: 20px;
        font-weight: bold;
        padding: 12px;
        padding-top: 30px;
        padding-right: 150px;
    }

    tbody td {
        padding: 12px;
        border-bottom: 1px solid #eee;
    }

    span {
        display: block;
        margin-top: 5px;
        font-size: 16px;
        line-height: 20px;
    }
    button {
        background: none;
        border: 0;
        padding: 4px;

        a {
            color: #4d85ee;
        }
    }
    button.delete {
        border: 0;
        padding: 4px;
        align-items: center;
        background: none;
        border: 0;
        color: #de3b3b;
    }
`;
