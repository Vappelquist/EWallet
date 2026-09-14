function CardForm({ formData, onChange, onSubmit}){
    const handleChange = (field) => (e) => {
        onChange({...formData, [field]: e.target.value});
    };

    return (
        <form onSubmit={(e) => {e.preventDefault(); onSubmit();}}>
            <label>Card number</label>
            <input value={formData.number} onChange={handleChange('number')} />
            
          <label>Cardholder name</label>
          <input value={formData.holder} onChange={handleChange('holder')} />

          <label>Valid Thru</label>
          <input value={formData.expiry} onChange={handleChange('expiry')} />

          <button type="submit">Add card</button>
        </form>
    );
}

export default CardForm;