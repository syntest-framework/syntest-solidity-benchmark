const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingZW8pH8B = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintRIWVLO = BigInt("1186")
		const addressaRpV29 = accounts[2]
		const uintsWVITwI = await MoshiachCoinStakingZW8pH8B.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintOMbYGKZ = await MoshiachCoinStakingZW8pH8B.withdraw.call(uintRIWVLO, {from: accounts[0]});
		const addressfUbq6br = await MoshiachCoinStakingZW8pH8B.transferOwnership.call(addressaRpV29, {from: accounts[3]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingPKuwaAk = await MoshiachCoinStaking.new({from: accounts[5]});
		const addressHsuMVq3 = accounts[4]
		const addressz5aCt0x = accounts[0]
		const addressB01MfRh = await MoshiachCoinStakingPKuwaAk.transferOwnership.call(addressHsuMVq3, {from: accounts[3]});
		const uintFhc0qhf = await MoshiachCoinStakingPKuwaAk.getStakingAndDaoAmount.call({from: accounts[0]});
		const uints8Dp89j = await MoshiachCoinStakingPKuwaAk.getPendingDivs.call(addressz5aCt0x, {from: accounts[3]});

		await expect(MoshiachCoinStakingPKuwaAk.transferOwnership.call(addressHsuMVq3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingS7aqtW = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintcEkMC3N = BigInt("1602")
		const addressUiN4s3x = accounts[3]
		const uintFBYaFM9 = BigInt("389")
		const uintGBUiqZC = BigInt("1965")
		const uintHZklk7i = await MoshiachCoinStakingS7aqtW.withdraw.call(uintcEkMC3N, {from: accounts[3]});
		await MoshiachCoinStakingS7aqtW.claimDivs.call({from: accounts[4]});
		const addressYkKQTa4 = await MoshiachCoinStakingS7aqtW.transferOwnership.call(addressUiN4s3x, {from: accounts[1]});
		const uintOK4CDVS = await MoshiachCoinStakingS7aqtW.withdraw.call(uintFBYaFM9, {from: accounts[3]});
		const uintsLC04Js = await MoshiachCoinStakingS7aqtW.deposit.call(uintGBUiqZC, {from: accounts[2]});

		await expect(MoshiachCoinStakingS7aqtW.withdraw.call(uintcEkMC3N, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingh0vTl2s = await MoshiachCoinStaking.new({from: accounts[1]});
		const addressLlXqK3n = accounts[3]
		const uintxvoCbo3 = BigInt("306")
		const uintyDZ0ngv = await MoshiachCoinStakingh0vTl2s.getNumberOfHolders.call({from: accounts[2]});
		const uintvRSmYe = await MoshiachCoinStakingh0vTl2s.getStakingAndDaoAmount.call({from: accounts[4]});
		const addressYcTGIpJ = await MoshiachCoinStakingh0vTl2s.transferOwnership.call(addressLlXqK3n, {from: accounts[1]});
		await MoshiachCoinStakingh0vTl2s.claimDivs.call({from: accounts[3]});
		const uintlCN02Ky = await MoshiachCoinStakingh0vTl2s.deposit.call(uintxvoCbo3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintvRSmYe, BigInt("60000000000000000000000000"))
		assert.equal(uintyDZ0ngv, BigInt("0"))
		await expect(MoshiachCoinStakingh0vTl2s.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingH2cxl8H = await MoshiachCoinStaking.new({from: accounts[4]});
		const uintTRRXQ6c = BigInt("1824")
		const uinttOEjBtQ = BigInt("1647")
		const uintp2qxUw = await MoshiachCoinStakingH2cxl8H.getNumberOfHolders.call({from: accounts[3]});
		await MoshiachCoinStakingH2cxl8H.onlyOwner.call({from: accounts[3]});
		const uintgyV1E7l = await MoshiachCoinStakingH2cxl8H.deposit.call(uintTRRXQ6c, {from: accounts[2]});
		const uintFC6ZvAO = await MoshiachCoinStakingH2cxl8H.withdraw.call(uinttOEjBtQ, {from: accounts[0]});

		assert.equal(uintp2qxUw, BigInt("0"))
		await expect(MoshiachCoinStakingH2cxl8H.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingh0vTl2s = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintDzCB9xf = BigInt("196")
		const addressXZiyU3z = accounts[0]
		const addresstTrw3wF = accounts[1]
		const addressyqhgblM = await MoshiachCoinStakingh0vTl2s.transferAnyERC20Tokens.call(addresstTrw3wF, addressXZiyU3z, uintDzCB9xf, {from: accounts[1]});
		await MoshiachCoinStakingh0vTl2s.claimDivs.call({from: accounts[3]});

		await expect(MoshiachCoinStakingh0vTl2s.transferAnyERC20Tokens.call(addresstTrw3wF, addressXZiyU3z, uintDzCB9xf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})