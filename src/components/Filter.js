import {FormFilter,
        InputFilter,
        TitleFilter} from './Filter.styled';


export const FilterConctacts = ({name, onNameFilter})=>{
return(
    
        <FormFilter>
            <TitleFilter> 
                Find contacts by name
                <InputFilter value={name} onChange={event=>onNameFilter(event.target.value)}/>
            </TitleFilter>
        </FormFilter>
)

}