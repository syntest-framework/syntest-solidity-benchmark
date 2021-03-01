const MetaCoin2 = artifacts.require("MetaCoin2");


contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const uint16LeOdtcc = 41723
		const addressQHiPWiq = accounts[0]
		const MetaCoin2Object32qgmAl = await MetaCoin2.deployed();
		const boolm6C02Li = await MetaCoin2Object32qgmAl.sendCoin.call(addressQHiPWiq, uint16LeOdtcc);

		assert.equal(uint16LeOdtcc, 41723)
		assert.equal(addressQHiPWiq, accounts[0])
		assert.equal(boolm6C02Li, false)
	});

})