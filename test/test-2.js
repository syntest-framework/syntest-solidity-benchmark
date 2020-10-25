const MetaCoin = artifacts.require("MetaCoin");

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinObjectn2eQRAe = await MetaCoin.deployed();
		const uint165SEhXjf = 8760
		const addressFwG8M9M = accounts[0]
		const boolmov0xgY = await MetaCoinObjectn2eQRAe.sendCoin.call(addressFwG8M9M, uint165SEhXjf);

		assert.equal(uint165SEhXjf, 8760)
		assert.equal(addressFwG8M9M, accounts[0])
		assert.equal(boolmov0xgY, true)
	});
})