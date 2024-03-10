import house from '../../../public/house.png';

export default function Addwarehouse({err,handleWare,sendWare}) {
  return(
    <section id="register">
      <div className="container">
        <div className="blog">
            <div className="form-group">
              <img src={house}/>
              <h3>Ombor yoki do'kon qo'shish!</h3>
              <input type="text" placeholder="Ombor nomini qo'shing....." onChange={handleWare}/>
              <p className='err'>{err}</p>
              <input type="button" className='btn' value="Qo'shish" onClick={sendWare}/>
            </div>
        </div>
      </div>
    </section>
  )
}
