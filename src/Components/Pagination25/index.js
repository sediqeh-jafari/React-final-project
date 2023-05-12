
import './style.css'
function Main({hasError,load, Number, NewNumber }) {
    
   



    const pages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    
    const counted = [];
    
    pages.map((i)=> counted.push(<button  onClick={() => NextPage('number', i)} type='button'>{i}</button>))



    
    const   NextPage = (type, number) => {
        switch (type) {
            case 'next':
                if (Number < 25) NewNumber(PageNumber =>PageNumber + 1);
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
            <button id='button' disabled={Number===25}  onClick={() =>NextPage('next')}>next</button>
     
         
        </div >

    )
}

export default Main