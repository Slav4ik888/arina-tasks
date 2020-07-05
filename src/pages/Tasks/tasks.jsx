import React from 'react';
import s from './tasks1.module.css';
import {ShowTasks} from '../../components/ShowTasks/show-tasks.jsx';
import {Header} from '../../components/Header/header.jsx';

import {createPlusTasks} from '../../utils/create-plus-tasks.js';
import {createMinusTasks} from '../../utils/create-minus-tasks.js';
import {createMultyTasks} from '../../utils/create-multy-tasks.js';


class ShowForm extends React.PureComponent {

    state = {
        qualPlusTasks: 10,  // Кол-во примеров сложения
        minPlus: 3,        // От 
        maxPlus: 13,        // До

        qualMinusTasks: 10, // Кол-во примеров сложения
        minMinus: 3,       // От 
        maxMinus: 13,       // До

        qualMultyTasks: 12, // Кол-во примеров сложения
        minMulty: 3,       // От 
        maxMulty: 8,       // До
    }

    // СЛОЖЕНИЕ
    changeQualPlus = event => {this.setState({ qualPlusTasks: event.target.value })}
    changeMinPlus = event => {this.setState({ minPlus: event.target.value })}
    changeMaxPlus = event => {this.setState({ maxPlus: event.target.value })}


    // ВЫЧИТАНИЕ
    changeQualMinus = event => {this.setState({ qualMinusTasks: event.target.value })}
    changeMinMinus = event => {this.setState({ minMinus: event.target.value })}
    changeMaxMinus = event => {this.setState({ maxMinus: event.target.value })}


    // ПРИМЕРЫ В 2 ДЕЙСТВИЯ
    changeQualMulty = event => {this.setState({ qualMultyTasks: event.target.value })}
    changeMinMulty = event => {this.setState({ minMulty: event.target.value })}
    changeMaxMulty = event => {this.setState({ maxMulty: event.target.value })}


    // ЗАПУСК
    create = event => {
        event.preventDefault();

        const {
            qualPlusTasks, minPlus, maxPlus,
            qualMinusTasks, minMinus, maxMinus,
            qualMultyTasks, minMulty, maxMulty,
        } = this.state;

        this.props.callback([
            ...createPlusTasks(qualPlusTasks, minPlus, maxPlus), 
            ...createMinusTasks(qualMinusTasks, minMinus, maxMinus), 
            ...createMultyTasks(qualMultyTasks, minMulty, maxMulty) 
        ]);
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
                                value={this.state.qualMultyTasks}
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
                        
                        <label>
                            <br />
                            <br />
                            <br />
                            <input type="submit" value="Создать" className={s.inputBut}/>
                        </label>
                        
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
        tasks: [], // Массив примеров
    }

    setTasks = arr => {
        console.log('TASK arr: ', arr);

        this.setState({
            tasks: arr,
            isDone: false,
            isTasks: true,
        })
    }


    render() {
        const { isDone, isTasks, tasks  } = this.state;
        
        return (
            <>
                
                {/* Выводим начальную форму */}
                { isDone && <ShowForm callback={this.setTasks}/> }

                {/* Выводим Header */}
                { isTasks && <Header callback={this.setTasks}/> }

                {/* Выводим готовые примеры */}
                { isTasks && <ShowTasks tasks={tasks} /> }
                {/* Кнопка "начать заново" */}
                <br />
                { isTasks && <input type="button" onClick={() => this.setState({isDone: true, isTasks: false,})} value="Заново" className={s.input}/> }

            </>
        )
    }
}

export default Tasks;