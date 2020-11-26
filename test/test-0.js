const MetaCoin = artifacts.require("MetaCoin");

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinObjectrKhefpx = await MetaCoin.deployed();
		const uint16PtEVLiI = 13443
		const addressiEdibtB = accounts[0]
		const boolyI3J3zN = await MetaCoinObjectrKhefpx.sendCoin.call(addressiEdibtB, uint16PtEVLiI);

		assert.equal(uint16PtEVLiI, 13443)
		assert.equal(addressiEdibtB, accounts[0])
		assert.equal(boolyI3J3zN, false)
	});
})