function CardForm({ formData, onChange, onSubmit}){
    const handleChange = (field) => (e) => {
        onChange({...formData, [field]: e.target.value.toUpperCase()});
    };

    return (
        <form onSubmit={(e) => {e.preventDefault(); onSubmit();}}>
            <select name="vendor" onChange={handleChange('vendor')}>
                <option value="bitcoin">BitCoin</option>
                <option value="blockchain">BlockChain</option>
                <option value="evil">EvilBank</option>
                <option value="ninja">NinjaBank</option>
            </select>

            <label>Card number</label>
            <input value={formData.number} onChange={handleChange('number')} />
            
          <label>Cardholder name</label>
          <input value={formData.holder.toUpperCase()} onChange={handleChange('holder')} />

          <label>Valid Thru</label>
          <input value={formData.expiry} onChange={handleChange('expiry')} />

          <label>CCV</label>
          <input value={formData.ccv} onChange={handleChange('ccv')} />

          <button type="submit">Add card</button>
        </form>
    );
}

export default CardForm;