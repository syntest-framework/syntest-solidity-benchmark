const MetaCoin = artifacts.require("MetaCoin");

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinObjectAbrhLtp = await MetaCoin.deployed();
		const uint16dSCOkG8 = 9222
		const address2TZhRoM = accounts[0]
		const boolJNpiUzG = await MetaCoinObjectAbrhLtp.sendCoin.call(address2TZhRoM, uint16dSCOkG8);

		assert.equal(uint16dSCOkG8, 9222)
		assert.equal(address2TZhRoM, accounts[0])
		assert.equal(boolJNpiUzG, true)
	});
})