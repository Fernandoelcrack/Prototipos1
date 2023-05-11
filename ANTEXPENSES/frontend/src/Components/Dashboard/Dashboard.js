import React, { useEffect } from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../Chart/Chart';
import { dollar } from '../../utils/Icons';
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
function Dashboard() {
    const {totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses} = useGlobalContext()

    useEffect(() =>{
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h2>Mi tablero</h2><br></br>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart/>
                        <div className="amount-con">
                            <div className="income">
                            <center><h2>Total de Ingresos</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p></center>
                            </div>
                            <div className="expense">
                                <center><h2>Total de Gastos</h2>
                                <p>
                                    {dollar} {totalExpenses()}
                                </p></center>
                            </div>
                            <div className="balance">
                                <h2>Balance total</h2>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="history-con">
                        <History/>
                        <br></br>
                        <h2 className='salary-title'>Min<span>Ingresos</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                {Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                {Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>

                        <h2 className='salary-title'>Min<span>Gastos</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                {Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                {Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>  
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 400px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 1rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                    background: #FFFFFF;
                    border: 2px solid #EAECEE;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: .5rem;
                    
                    p{
                        font-size: 3rem;
                        font-weight: 700;
                    }
                }
                .balance{
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                }
            }
        }
        .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                background: #FFFFFF;
                border: 2px solid #EAECEE;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 700;
                    font-size: 1.6rem;
                }
            }
        }
    }
`;

export default Dashboard