import React, { useContext } from 'react';
import { SettingsContext } from './setting-context';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const ContentSetting = (props) => {
    const context = useContext(SettingsContext)

    const itemsPerPage = e => {
        e.preventDefault();
        context.setItemPerPage(parseInt(e.target.value))
    }
    const sortByHandler = e => {
        context.setSortBy(e.target.value.toString())
    }
    return (
        <React.Fragment>
            {/* <form> */}
            <form className="settingDiv">
                <h4>Settings</h4>
                <Form.Label name="Sort By" className="formLabel"> <p>Sort tasks by:</p> 
                    <select name="Sort By" title="Sort By" onChange={sortByHandler}>
                        <option value="assignee" >assignee</option>
                        <option value="difficulty" >difficulty</option>
                        <option value="text" >text</option>
                    </select>
                    {/* <input type="switch" name="complete" />
                    <input type="switch" name="pending" />
                    <input type="switch" name="difficultySort" />  */}
                    <label name="itemPerPage"> <p className="perPage"> Tasks per page: </p>  </label>
                    <input type="number" id="itemPerPage" placeholder="4" name="itemPerPage" onChange={itemsPerPage} /><br />

                    {/* <button type="submit"></button> */}
                </Form.Label>
                <Button className="toggleBtnn" variant="light" onClick={context.toggle} >{context.finished ? 'show all Tasks' : 'hide Completed Tasks'}</Button >
            </form>
            {/* </form> */}
        </React.Fragment>
    )
}

export default ContentSetting;