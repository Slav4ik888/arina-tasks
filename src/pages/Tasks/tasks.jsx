import React from 'react';
import s from './tasks.module.css';
import Task23Arg from '../../components/Task23Arg/task-2-3-arg.jsx';


// import cl from 'classnames';


// Рендер карточек
const ShowTasks = ({ plusTasks, minusTasks, multyTasks }) => {
    return (
        <div className={s.section}>
            {plusTasks.map( ({ a, b } , index) => (
                    <Task23Arg a={a} type1={'+'} b={b} key={index}/>
                ))}
            <br />

            {minusTasks.map( ({ a, b } , index) => (
                    <Task23Arg a={a} type1={'-'} b={b} key={index}/>
                ))}
            <br />

            {multyTasks.map( ({ a, type1, b, type2, c } , index) => (
                <Task23Arg a={a} type1={type1} b={b} type2={type2} c={c} key={index}/>
            ))}
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

    createPlus = (minPlus, maxPlus) => {
        let  task = {};

        while (true) {
            task.a = Math.floor(+minPlus + Math.random() * (maxPlus - minPlus + 1)  );
            task.b = Math.floor(+minPlus + Math.random() * (maxPlus - minPlus + 1)  );
            
            // Проверяем, чтобы цифры были не одинаковые
            if (task.a !== task.b || +minPlus === +maxPlus) {
                return task; // Возвращаем готовый приимер
            } 
        }
    }

    createPlusTasks = () => {
        const { qualPlusTasks, minPlus, maxPlus } = this.state;
        let arr = [], task = {};
        if (!qualPlusTasks) return;
        
        for(let i=0; i < qualPlusTasks; i++) {
            task = this.createPlus(minPlus, maxPlus);
            
            // Проверки на корректность
            if (true) {
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

    
    // Создаёт пример вычитания из 2х значения в виде объекта из 2х значение
    createMinus = (minMinus, maxMinus) => {
        let task = {};
        if (minMinus > maxMinus) { console.log(`Ошибка minMinus > maxMinus`); return }

        while (true) {
            task.a = Math.floor(+minMinus + Math.random() * (maxMinus - minMinus + 1) );
            task.b = Math.floor(+minMinus + Math.random() * (task.a - minMinus + 1) );
            
            // Проверяем, чтобы цифры были не одинаковые
            if (task.a !== task.b || +minMinus === +maxMinus) {
                return task; // Возвращаем готовый приимер
            } 
        }
    }


    // Создаём заданное кол-во примеров вычитания
    createMinusTasks = () => {
        const { qualMinusTasks, minMinus, maxMinus } = this.state;
        if (!qualMinusTasks) return;

        let arr = [], task = {};

        for(let i=0; i < qualMinusTasks; i++) {
            task = this.createMinus(minMinus, maxMinus);
            // Проверки на корректность
            if (true) {
                arr.push(task); 
                i++;
            }
            i--;
            task = {};
        }
        return arr; // Возвращаем готовые приимеры
    }


    // ПРИМЕРЫ В 2 ДЕЙСТВИЯ
    changeQualMulty = event => {this.setState({ qualMultyTasks: event.target.value })}
    changeMinMulty = event => {this.setState({ minMulty: event.target.value })}
    changeMaxMulty = event => {this.setState({ maxMulty: event.target.value })}



    // Создаём заданное кол-во примеров вычитания
    createMultyTasks = () => {
        const { qualMultyTasks, minMulty, maxMulty } = this.state;
        if (!qualMultyTasks) return;

        let arr = [], task = {}, task1 = {}, task2 = {};

        for(let i=0; i < qualMultyTasks; i++) {
            // Определяем тип первого действия и создаём его
            if (Math.round(Math.random()) === 0) {
                task1 = this.createPlus(minMulty, maxMulty);
                task1.type = '+';
                console.log('task1: ', task1);
                
            } else {
                task1 = this.createMinus(minMulty, maxMulty);
                task1.type = '-';
                console.log('task1: ', task1);

            };

            // Определяем тип второго действия
            if (Math.round(Math.random()) === 0) {
                task2 = this.createPlus(minMulty, maxMulty);
                task2.type = '+';
                console.log('task2: ', task2);

            } else {
                let remains;
                // Если А <= minMulty то прибавляем
                if (task1.type === '-') {
                    remains = task1.a - task1.b;
                    if (remains <= minMulty) {
                        task2 = this.createPlus(minMulty, maxMulty);
                        task2.type = '+';
                        console.log('remains <<<< task2: ', task2);

                    } else {
                        task2 = this.createMinus(minMulty, remains);
                        task2.type = '-';
                        console.log('remains task2 "-": ', task2);
                    }
                } else {

                        task2 = this.createMinus(minMulty, maxMulty);
                        task2.type = '-';
                        console.log('task2 "-": ', task2);
                }
            };
            

            // Проверки на корректность
            if (true) {
                task.a = task1.a;
                task.b = task1.b;
                task.type1 = task1.type;
                task.c = task2.b;
                task.type2 = task2.type;

                arr.push(task); 
                i++;
            }
            i--;
            task = {}; task1 = {}; task2 = {};
        }
        return arr; // Возвращаем готовые приимеры
    }



    // ЗАПУСК
    create = event => {
        event.preventDefault();
        this.props.callback( this.createPlusTasks(), this.createMinusTasks(), this.createMultyTasks() );
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
        multyTasks: [],

    }

    handleTasks = (plusTasks, minusTasks, multyTasks) => {
        console.log('TASK minusTasks: ', minusTasks);
        console.log('TASK plusTasks: ', plusTasks);
        console.log('TASK multyTasks: ', multyTasks);


        this.setState({
            plusTasks, minusTasks, multyTasks,
            isDone: false,
            isTasks: true,
        })
    }


    render() {
        const { isDone, isTasks, plusTasks, minusTasks, multyTasks  } = this.state;
        
        return (
            <>
                {/* Выводим начальную форму */}
                { isDone && <ShowForm callback={this.handleTasks}/> }
                {/* Выводим готовые примеры */}
                { isTasks && <ShowTasks plusTasks={plusTasks} minusTasks={minusTasks} multyTasks={multyTasks}/> }
                {/* Кнопка "начать заново" */}
                <br />
                { isTasks && <input type="button" onClick={() => this.setState({isDone: true, isTasks: false,})} value="Заново" className={s.input}/> }

            </>
        )
    }
}

export default Tasks;