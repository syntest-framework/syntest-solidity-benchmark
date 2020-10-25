const MetaCoin = artifacts.require("MetaCoin");

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinObjectdwgaIkm = await MetaCoin.deployed();
		const uint16awAFjp0 = 1668
		const addresss18lrng = accounts[0]
		const bool8HTNoj4 = await MetaCoinObjectdwgaIkm.sendCoin.call(addresss18lrng, uint16awAFjp0);

		assert.equal(uint16awAFjp0, 1668)
		assert.equal(addresss18lrng, accounts[0])
		assert.equal(bool8HTNoj4, true)
	});
})