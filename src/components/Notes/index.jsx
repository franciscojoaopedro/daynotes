import React from "react";
import { AiTwotoneDelete,AiOutlineExclamationCircle } from "react-icons/ai";

import "./style.css";
import "./style.priority.css";

const Notes=({data})=>{

    return( 
        <li className={data.pryority?"notepad-infos-priority":"notepad-infos "}>
            <div>
              <strong>{data.title}</strong>
              <div>
                <AiTwotoneDelete
                size={20}
                />
              </div>
            </div>
              <textarea defaultValue={data.notes}></textarea>
              <span>
                <AiOutlineExclamationCircle
                size={20}
                />
              </span>
          </li>
    )
}

export default Notes;