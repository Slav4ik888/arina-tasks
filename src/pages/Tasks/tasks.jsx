import React from 'react';
import s from './tasks.module.css';
import Task2Arg from '../../components/Task2Arg/task-2-arg.jsx';


// import cl from 'classnames';


// Рендер карточек
const ShowTasks = ({ plusTasks, minusTasks }) => {
    return (
        <div className={s.section}>
            <div className={s.root}>
                    {plusTasks.map( ({ a, b } , index) => (
                            <Task2Arg a={a} b={b} type={'+'} key={index}/>
                        ))}
                    {minusTasks.map( ({ a, b } , index) => (
                            <Task2Arg a={a} b={b} type={'-'}key={index}/>
                        ))}
            </div>
        </div>
    );
}

class ShowForm extends React.PureComponent {

    state = {
        qualPlusTasks: 10,  // Кол-во примеров сложения
        minPlus: 3,        // От 
        maxPlus: 13,        // До

        qualMinusTasks: 10, // Кол-во примеров сложения
        minMinus: 3,       // От 
        maxMinus: 13,       // До

        qualMultyTasks: 10, // Кол-во примеров сложения
        minMulty: 3,       // От 
        maxMulty: 8,       // До
        
    }

    // СЛОЖЕНИЕ
    changeQualPlus = event => {this.setState({ qualPlusTasks: event.target.value })}
    changeMinPlus = event => {this.setState({ minPlus: event.target.value })}
    changeMaxPlus = event => {this.setState({ maxPlus: event.target.value })}

    createSum = () => {
        const { qualPlusTasks, minPlus, maxPlus } = this.state;
        let arr = [], task = {};
        if (!qualPlusTasks) return;
        
        for(let i=0; i < qualPlusTasks; i++) {
            task.a = Math.floor(+minPlus + Math.random() * (maxPlus - minPlus + 1)  );
            task.b = Math.floor(+minPlus + Math.random() * (maxPlus - minPlus + 1)  );
            
            // Проверяем, чтобы цифры были не одинаковые
            if (task.a !== task.b) {
                arr.push(task); 
                i++;
            }
            i--;
            task = {};
        }
        return arr; // Возвращаем готовые приимеры
    }

    // ВЫЧИТАНИЕ
    changeQualMinus = event => {this.setState({ qualMinusTasks: event.target.value })}
    changeMinMinus = event => {this.setState({ minMinus: event.target.value })}
    changeMaxMinus = event => {this.setState({ maxMinus: event.target.value })}

    createMinus = () => {
        const { qualMinusTasks, minMinus, maxMinus } = this.state;
        if (!qualMinusTasks) return;

        let arr = [], task = {};

        for(let i=0; i < qualMinusTasks; i++) {
            task.a = Math.floor(+minMinus + Math.random() * (maxMinus - minMinus + 1) );
            task.b = Math.floor(+minMinus + Math.random() * (task.a - minMinus + 1) );
            
            // Проверяем, чтобы цифры были не одинаковые
            if (task.a !== task.b) {
                arr.push(task); 
                i++;
            }
            i--;
            task = {};
        }
        return arr; // Возвращаем готовые приимеры
    }

    // ЗАПУСК
    create = event => {
        event.preventDefault();
        this.props.callback( this.createSum(), this.createMinus() );
    }
    

    render() {
        return (
            <div className={s.section}>
                <div className={s.root}>
                    <form onSubmit={this.create}>
                        <div className={s.title}>Задачи по "Сложению"</div>
                        <label>Сколько создать 
                            <input type="number"  className={s.inputMaxMin}
                                value={this.state.qualPlusTasks}
                                onChange={this.changeQualPlus} />
                        </label>
                        <label>Числа от
                            <input type="number"  className={s.inputMaxMin}
                                value={this.state.minPlus}
                                onChange={this.changeMinPlus} />
                        </label>
                        <label>До
                            <input type="number" className={s.inputMaxMin}
                                value={this.state.maxPlus}
                                onChange={this.changeMaxPlus} />
                        </label>

                        <div className={s.title}>Задачи по "Вычитанию"</div>
                        <label>Сколько создать 
                            <input type="number"  className={s.inputMaxMin}
                                value={this.state.qualMinusTasks}
                                onChange={this.changeQualMinus} />
                        </label>
                        <label>Числа от
                            <input type="number"  className={s.inputMaxMin}
                                value={this.state.minMinus}
                                onChange={this.changeMinMinus} />
                        </label>
                        <label>До
                            <input type="number" className={s.inputMaxMin}
                                value={this.state.maxMinus}
                                onChange={this.changeMaxMinus} />
                        </label>

                        <div className={s.title}>Задачи в 2 действия</div>
                        <label>Сколько создать 
                            <input type="number"  className={s.inputMaxMin}
                                value={this.state.qualMinusTasks}
                                onChange={this.changeQualMulty} />
                        </label>
                        <label>Числа от
                            <input type="number"  className={s.inputMaxMin}
                                value={this.state.minMulty}
                                onChange={this.changeMinMulty} />
                        </label>
                        <label>До
                            <input type="number" className={s.inputMaxMin}
                                value={this.state.maxMulty}
                                onChange={this.changeMaxMulty} />
                        </label>

                        <input type="submit" value="Создать" className={s.input}/>
                    </form>
                </div>
            </div>
        );
    }
}


class Tasks extends React.PureComponent {

    state = {
        isDone: true, // Показ формы
        isTasks: false, // Вывод примеров
        plusTasks: [],
        minusTasks: [],
    }

    handleTasks = (plusTasks, minusTasks) => {
        console.log('TASK minusTasks: ', minusTasks);
        console.log('TASK plusTasks: ', plusTasks);

        this.setState({
            plusTasks, minusTasks,
            isDone: false,
            isTasks: true,
        })
    }


    render() {
        const { isDone, isTasks, plusTasks, minusTasks  } = this.state;
        
        return (
            <>
                { isDone && <ShowForm callback={this.handleTasks}/> }
                { isTasks && <ShowTasks plusTasks={plusTasks} minusTasks={minusTasks} /> }
                { isTasks && <input type="button" onClick={() => this.setState({isDone: true, isTasks: false,})} value="Заново" className={s.input}/> }

            </>
        )
    }
}

export default Tasks;