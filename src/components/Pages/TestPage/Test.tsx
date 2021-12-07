import React from 'react'
import SuperInputText from "../../superComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../superComponents/c3-SuperCheckbox/SuperCheckbox";
import SuperSelect from "../../superComponents/c5-SuperSelect/SuperSelect";
import SuperRadio from "../../superComponents/c6-SuperRadio/SuperRadio";
import SuperRange from "../../superComponents/c7-SuperRange/SuperRange";

export const Test = () => {
	return (
		<div>
			<div style={{marginBottom:'20px'}}>TestPage</div>
			<div>
				<div>
					<SuperInputText/>
				</div>
				<div>
					<SuperButton>
						Send
					</SuperButton>
				</div>
				<div>
					<SuperCheckbox/>
				</div>
				<div>
					<SuperSelect/>
				</div>
				<div>
					<SuperRadio/>
				</div>
				<div>
					<SuperRange/>
				</div>
			</div>
		</div>
	)
}
