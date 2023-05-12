
function PaginationGners({hasError,load, Number, NewNumber,title}) {
    
   



    const pages = [title];
    
    const counted = [];
    
    pages.map((i)=> counted.push(<button  onClick={() => NextPage('number', i)} type='button'>{i}</button>))



    
    const   NextPage = (type, number) => {
        switch (type) {
            case 'next':
                if (Number < pages) NewNumber(PageNumber =>PageNumber + 1);
                break;
            case 'before':
                if (Number > 1) NewNumber(PageNumber => PageNumber - 1);
                break;
            default:
                NewNumber(number);
                break;
        }
    }
    
   
    if(load){
        return
    }
    if(hasError){
        return
    }

    return (

        <div className="parent_page_number">

            
            <button id='button' disabled={Number===1}   onClick={() => NextPage('before')}>before</button>
            <h5>page:{Number}</h5>
            <button id='button' disabled={Number==pages}  onClick={() =>NextPage('next')}>next</button>
     
         
        </div >

    )
}

export default PaginationGners