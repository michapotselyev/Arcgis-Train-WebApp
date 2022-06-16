import React, { useState } from 'react';

const MapsConfig = ({ onChange }) => {
    // eslint-disable-next-line
    const [addrtype, setAddrtype] = useState(["Select Layer", "Show Layer 1", "Show Layer 2"]);
    const Add = addrtype.map(Add => Add);
    const handleAddrTypeChange = (e) => onChange((addrtype[e.target.value]));
    return (
        <div>
            <select
                onChange={e => handleAddrTypeChange(e)}
                className="esri-widget esri-select selection" >
                {
                    Add.map((address, key) => <option value={key}>{address}</option>)
                }
            </select >
        </div>
    );
}

            // <form>
            //     <input type="submit" value="Add layer 1" />
            //     <input type="submit" value="Add layer 2" />
            //     <input type="submit" value="Hide layer 1" />
            //     <input type="submit" value="Hide layer 1" />
            // </form> 

export default MapsConfig;