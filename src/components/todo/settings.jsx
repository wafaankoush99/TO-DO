import React, { useContext } from 'react';
import { SettingsContext } from './setting-context';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const ContentSetting = (props) => {
    const context = useContext(SettingsContext)

    const itemPerPageHandler = e => {
        context.setItemPerPage(parseInt(e.target.value))
    }
    const sortByHandler = e => {
        context.setSortBy(e.target.value.toString())
    }
    return (
        <React.Fragment>
            <h2>Settings</h2>
            <form>
                <Button variant="info" style={{ 'width': '50%', 'text-align': 'center', }} onClick={context.toggle} >{context.finished ? 'show all Tasks' : 'hide Completed Tasks'}</Button >
                <Form.Label name="Sort By"> Sort Tasks By :
                    <select name="Sort By" title="Sort By" onChange={sortByHandler}>
                        <option value="assignee" >assignee</option>
                        <option value="difficulty" >difficulty</option>
                        <option value="text" >text</option>
                    </select>
                    {/* <input type="switch" name="complete" /> 
            <input type="switch" name="pending" /> 

            <input type="switch" name="difficultySort" />  */}
                    <label name="itemPerPage"> Items per page </label>
                    <input type="number" id="itemPerPage" name="itemPerPage" onChange={itemPerPageHandler} /><br />

                    {/* <button type="submit"></button> */}
                </Form.Label>
            </form>
        </React.Fragment>
    )
}

export default ContentSetting;