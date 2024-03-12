export default function Addwarehouse({err,handleWare,sendWare}) {
  return(
    <section id="register">
      <div className="container">
        <div className="blog">
            <div className="form-group">
              <p className='h-title'>Ombor yoki do'kon qo'shish!</p>
              <input type="text" placeholder="Ombor nomini qo'shing....." onChange={handleWare}/>
              <p className='err'>{err}</p>
              <input type="button" className='btn' value="Qo'shish" onClick={sendWare}/>
            </div>
        </div>
      </div>
    </section>
  )
}
