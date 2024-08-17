import React from "react";
import "./form.css";

function form() {
     return (
          <div className="form-container">
               <div className="form-wrapper">
                    <h2>Form</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                         <ul>
                              <li className="item1">
                                   <div className="input-field-name">Name</div>
                                   <input type="text" />
                              </li>
                              <li className="item2">
                                   <div className="input-field-name">Company</div>
                                   <input type="text" />
                              </li>
                              <li className="item3">
                                   <div className="input-field-name">E-mail</div>
                                   <input type="text" />
                              </li>
                              <li className="item4">
                                   <div className="input-field-name">Select Field</div>
                                   <select name="" id="">
                                        <option value="">a</option>
                                        <option value="">b</option>
                                        <option value="">c</option>
                                   </select>
                              </li>
                              <li className="item5">
                                   <div className="input-field-name">Radio Field</div>
                                   <div className="input-field-group">
                                        <label>
                                             <input type="radio" name="radioGroup" /> Selection 1
                                        </label>
                                        <label>
                                             <input type="radio" name="radioGroup" /> Selection 2
                                        </label>
                                        <label>
                                             <input type="radio" name="radioGroup" /> Selection 3
                                        </label>
                                        <label>
                                             <input type="radio" name="radioGroup" /> Selection 4
                                        </label>
                                   </div>
                              </li>
                              <li className="item6">
                                   <div className="input-field-name">Checkbox Field</div>
                                   <div className="input-field-group">
                                        <label>
                                             <input type="checkbox" /> Selection 1
                                        </label>
                                        <label>
                                             <input type="checkbox" /> Selection 2
                                        </label>
                                        <label>
                                             <input type="checkbox" /> Selection 3
                                        </label>
                                        <label>
                                             <input type="checkbox" /> Selection 4
                                        </label>
                                   </div>
                              </li>
                         </ul>

                         <div className="btn-wrapper">
                              <button type="submit">Submit</button>
                         </div>
                    </form>
               </div>
          </div>
     );
}

export default form;
