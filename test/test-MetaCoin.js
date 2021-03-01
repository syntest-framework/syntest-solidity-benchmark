const MetaCoin = artifacts.require("MetaCoin");


contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const uint16ae67Aw7 = 25512
		const address7SVQcGs = accounts[0]
		const MetaCoinObjectqmnveDj = await MetaCoin.deployed();
		const boolxIfT5Gm = await MetaCoinObjectqmnveDj.sendCoin.call(address7SVQcGs, uint16ae67Aw7);

		assert.equal(uint16ae67Aw7, 25512)
		assert.equal(address7SVQcGs, accounts[0])
		assert.equal(boolxIfT5Gm, false)
	});
	it('test for MetaCoin', async () => {
		const uint16Khefpxy = 9374
		const addressEVLiIMr = accounts[0]
		const MetaCoinObjectJ3zNjeV = await MetaCoin.deployed();
		const boolRZ2nzxO = await MetaCoinObjectJ3zNjeV.sendCoin.call(addressEVLiIMr, uint16Khefpxy);

		assert.equal(uint16Khefpxy, 9374)
		assert.equal(addressEVLiIMr, accounts[0])
		assert.equal(boolRZ2nzxO, true)
	});
	it('test for MetaCoin', async () => {
		const uint16BrpKXd7 = 4758
		const addressgSxkoGc = accounts[0]
		const MetaCoinObjectvUDUeG9 = await MetaCoin.deployed();
		const boollx0inWn = await MetaCoinObjectvUDUeG9.sendCoin.call(addressgSxkoGc, uint16BrpKXd7);

		assert.equal(uint16BrpKXd7, 4758)
		assert.equal(addressgSxkoGc, accounts[0])
		assert.equal(boollx0inWn, true)
	});

})