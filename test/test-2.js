const MetaCoin = artifacts.require("MetaCoin");

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinObjectrpKXd7E = await MetaCoin.deployed();
		const uint16JSw7tlN = 0
		const addresscbXFUUf = accounts[0]
		const boolBvUDUeG = await MetaCoinObjectrpKXd7E.sendCoin.call(addresscbXFUUf, uint16JSw7tlN);

		assert.equal(uint16JSw7tlN, 0)
		assert.equal(addresscbXFUUf, accounts[0])
		assert.equal(boolBvUDUeG, true)
	});
})