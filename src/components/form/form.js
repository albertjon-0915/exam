import React from "react";
import "./form.css";

function form() {
     return (
          <div className="form-container">
               <div className="form-wrapper">
                    <h2>Form</h2>
                    <form action="">
                         <table>
                              <tbody>
                                   <tr className="table-row">
                                        <td>Name</td>
                                        <td>
                                             <input type="text" />
                                        </td>
                                   </tr>
                                   <tr className="table-row">
                                        <td>Company</td>
                                        <td>
                                             <input type="text" />
                                        </td>
                                   </tr>
                                   <tr className="table-row">
                                        <td>E-mail</td>
                                        <td>
                                             <input type="text" />
                                        </td>
                                   </tr>
                                   <tr className="table-row">
                                        <td>Select Field</td>
                                        <td>
                                             <select name="" id="">
                                                  <option value="">a</option>
                                                  <option value="">b</option>
                                                  <option value="">c</option>
                                             </select>
                                        </td>
                                   </tr>
                                   <tr className="table-row">
                                        <td>Radio Field</td>
                                        <td>
                                             <input type="radio" />
                                             <input type="radio" />
                                             <input type="radio" />
                                             <input type="radio" />
                                        </td>
                                   </tr>
                                   <tr className="table-row">
                                        <td>Checkbox Field</td>
                                        <td>
                                             <input type="checkbox" />
                                             <input type="checkbox" />
                                             <input type="checkbox" />
                                             <input type="checkbox" />
                                        </td>
                                   </tr>
                              </tbody>
                         </table>
                         <button type="submit">Submit</button>
                    </form>
               </div>
          </div>
     );
}

export default form;
